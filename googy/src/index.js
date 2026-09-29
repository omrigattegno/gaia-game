// Googy — the English-conversation friend in Yoovy & Googy.
// This Cloudflare Worker sits between the game and the Claude API: the API key stays
// here, only signed-in players of the game can talk, and every request is size- and
// rate-limited. Nothing the child writes is stored or logged.
//
// POST /chat  { topic, level, messages: [{role, content}], final }
//          →  { reply, hebrew, suggestions, feedback }

import Anthropic from "@anthropic-ai/sdk";
import { betaZodOutputFormat } from "@anthropic-ai/sdk/helpers/beta/zod";
import { verifyFirebaseToken } from "./auth.js";
import { PERSONA, TOPICS, LEVELS, GoogyTurn, FINAL_TURN, SAFE_TURN } from "./googy.js";

const MODEL = "claude-opus-5-5";
const MAX_BODY_CHARS = 32 * 1024;
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
        headers: { "Content-Type": "application/json; charset=utf-8", ...(origin ? corsHeaders(origin) : {}) },
    });
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

        const raw = await request.text();
        if (raw.length > MAX_BODY_CHARS) return json({ error: "too_large" }, 413, corsOrigin);
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
                max_tokens: 4096,
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
