// Googy — the English-conversation friend in Yoovy & Googy.
// This Cloudflare Worker sits between the game and the Claude API: the API key stays
// here, only signed-in players of the game can talk, and every request is size- and
// rate-limited (per network address, per player, and all players together: signing in is
// free, so the limit on everyone is what bounds the bill; the spend limit set in the
// Anthropic console is the last line). Nothing the child writes is stored or logged.
//
// POST /chat  { topic, level, messages: [{role, content}], final }
//          →  { reply, hebrew, suggestions, feedback }

import Anthropic from "@anthropic-ai/sdk";
import { betaZodOutputFormat } from "@anthropic-ai/sdk/helpers/beta/zod";
import { verifyFirebaseToken } from "./auth.js";
import { PERSONA, TOPICS, LEVELS, GoogyTurn, FINAL_TURN, SAFE_TURN } from "./googy.js";

const MODEL = "claude-opus-5-5";
const MAX_BODY_BYTES = 32 * 1024;
const MAX_REPLY_TOKENS = 1500;    // a turn is a few short lines; this bounds a reply that was talked into being long
const MAX_MESSAGES = 31;          // a whole chat: the child's 16 lines and Googy's 15 replies
const MAX_CHILD_CHARS = 300;
const MAX_GOOGY_CHARS = 600;

function corsHeaders(origin) {
    return {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Max-Age": "86400",
        "Vary": "Origin",
    };
}

function json(body, status, origin) {
    return new Response(JSON.stringify(body), {
        status,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "no-store",
            "X-Content-Type-Options": "nosniff",
            ...(origin ? corsHeaders(origin) : {}),
        },
    });
}

// The request's text, or null when it is larger than the limit (by its declared length, or
// while reading it: the reading stops there, so a huge body is never held in memory).
async function readBody(request, maxBytes) {
    if (Number(request.headers.get("Content-Length")) > maxBytes) return null;
    if (!request.body) return "";
    const reader = request.body.getReader();
    const chunks = [];
    let size = 0;
    for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        size += value.byteLength;
        if (size > maxBytes) {
            await reader.cancel();
            return null;
        }
        chunks.push(value);
    }
    const bytes = new Uint8Array(size);
    let at = 0;
    for (const chunk of chunks) {
        bytes.set(chunk, at);
        at += chunk.byteLength;
    }
    return new TextDecoder().decode(bytes);
}

// The conversation the game sent: known topic and level, alternating turns that start
// and end with the child, each within its length limit. Anything else is rejected.
function readConversation(body) {
    if (!body || typeof body !== "object") return null;
    const { topic, level, messages, final } = body;
    if (!Object.hasOwn(TOPICS, topic) || !Object.hasOwn(LEVELS, level)) return null;
    if (!Array.isArray(messages) || messages.length === 0 || messages.length > MAX_MESSAGES) return null;
    const turns = [];
    for (const [i, m] of messages.entries()) {
        const role = i % 2 === 0 ? "user" : "assistant";
        if (!m || m.role !== role || typeof m.content !== "string") return null;
        const text = m.content.trim();
        if (!text || text.length > (role === "user" ? MAX_CHILD_CHARS : MAX_GOOGY_CHARS)) return null;
        turns.push({ role, content: text });
    }
    if (turns[turns.length - 1].role !== "user") return null;
    return { topic, level, messages: turns, final: final === true };
}

function cleanTurn(turn) {
    const text = (value, max) => String(value || "").replace(/\s+/g, " ").trim().slice(0, max);
    return {
        reply: text(turn.reply, 400) || SAFE_TURN.reply,
        hebrew: text(turn.hebrew, 500),
        suggestions: (Array.isArray(turn.suggestions) ? turn.suggestions : [])
            .map((s) => text(s, 80)).filter(Boolean).slice(0, 3),
        feedback: text(turn.feedback, 200),
    };
}

// An opaque per-player id for Anthropic's abuse detection (never the raw uid).
async function hashedId(uid) {
    const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("googy:" + uid));
    return [...new Uint8Array(digest)].slice(0, 16).map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default {
    async fetch(request, env) {
        const origin = request.headers.get("Origin") || "";
        const allowedOrigins = String(env.ALLOWED_ORIGINS || "").split(",").map((s) => s.trim()).filter(Boolean);
        const corsOrigin = allowedOrigins.includes(origin) ? origin : null;

        if (request.method === "OPTIONS") {
            return new Response(null, { status: corsOrigin ? 204 : 403, headers: corsOrigin ? corsHeaders(corsOrigin) : {} });
        }
        if (request.method !== "POST" || new URL(request.url).pathname !== "/chat") {
            return json({ error: "not_found" }, 404, corsOrigin);
        }
        if (!corsOrigin) return json({ error: "forbidden_origin" }, 403, null);
        if (!env.ANTHROPIC_API_KEY) return json({ error: "not_configured" }, 503, corsOrigin);

        // Before anything costly (checking a token, reading the body): one address cannot flood.
        if (env.PER_IP) {
            const { success } = await env.PER_IP.limit({ key: request.headers.get("CF-Connecting-IP") || "unknown" });
            if (!success) return json({ error: "rate_limited" }, 429, corsOrigin);
        }

        let uid = null;
        try {
            const token = (request.headers.get("Authorization") || "").replace(/^Bearer\s+/i, "");
            uid = await verifyFirebaseToken(token, env.FIREBASE_PROJECT_ID, env.FIREBASE_JWKS_URL || undefined);
        } catch (error) {
            console.error("token check failed:", error.message);
        }
        if (!uid) return json({ error: "unauthorized" }, 401, corsOrigin);

        if (env.PER_PLAYER) {
            const { success } = await env.PER_PLAYER.limit({ key: uid });
            if (!success) return json({ error: "rate_limited" }, 429, corsOrigin);
        }
        // All players together. Counted only for signed-in players within their own limit, so
        // requests without a valid sign-in cannot use it up.
        if (env.EVERYONE) {
            const { success } = await env.EVERYONE.limit({ key: "all" });
            if (!success) return json({ error: "busy" }, 503, corsOrigin);
        }

        const raw = await readBody(request, MAX_BODY_BYTES);
        if (raw === null) return json({ error: "too_large" }, 413, corsOrigin);
        let conversation = null;
        try { conversation = readConversation(JSON.parse(raw)); } catch { /* invalid JSON */ }
        if (!conversation) return json({ error: "bad_request" }, 400, corsOrigin);

        const client = new Anthropic({
            apiKey: env.ANTHROPIC_API_KEY,
            baseURL: env.ANTHROPIC_BASE_URL || undefined,   // only set in local tests
            maxRetries: 1,
            timeout: 45_000,
        });

        const messages = conversation.messages;
        if (conversation.final) messages.push({ role: "system", content: FINAL_TURN });

        try {
            const response = await client.beta.messages.parse({
                model: MODEL,
                max_tokens: MAX_REPLY_TOKENS,
                betas: ["server-side-fallback-2026-07-01"],
                fallbacks: "default",
                cache_control: { type: "ephemeral" },
                system: [
                    { type: "text", text: PERSONA, cache_control: { type: "ephemeral" } },
                    { type: "text", text: `Today's topic: ${TOPICS[conversation.topic]}.\nEnglish level: ${LEVELS[conversation.level]}` },
                ],
                messages,
                output_config: { effort: "low", format: betaZodOutputFormat(GoogyTurn) },
                metadata: { user_id: await hashedId(uid) },
            });

            if (response.stop_reason === "refusal") return json(SAFE_TURN, 200, corsOrigin);
            if (!response.parsed_output) {
                console.error("no structured reply, stop_reason:", response.stop_reason);
                return json({ error: "bad_reply" }, 502, corsOrigin);
            }
            return json(cleanTurn(response.parsed_output), 200, corsOrigin);
        } catch (error) {
            if (error instanceof Anthropic.AuthenticationError) {
                console.error("Anthropic API key was rejected");
                return json({ error: "not_configured" }, 503, corsOrigin);
            }
            if (error instanceof Anthropic.RateLimitError) return json({ error: "busy" }, 503, corsOrigin);
            if (error instanceof Anthropic.APIError) {
                console.error("Claude API error", error.status);
                return json({ error: "upstream" }, 502, corsOrigin);
            }
            console.error("unexpected error:", error && error.name);
            return json({ error: "upstream" }, 502, corsOrigin);
        }
    },
};
