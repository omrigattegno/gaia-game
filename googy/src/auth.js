// Verifies the Firebase Auth ID token the game sends (every player is signed in
// anonymously), using Google's published signing keys — so only players of this
// Firebase project can talk to Googy.

const GOOGLE_JWKS_URL =
    "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com";

let cached = null; // { url, keys: Map<kid, CryptoKey>, expiresAt }

function base64UrlToBytes(part) {
    const base64 = part.replace(/-/g, "+").replace(/_/g, "/");
    const binary = atob(base64 + "=".repeat((4 - (base64.length % 4)) % 4));
    return Uint8Array.from(binary, (c) => c.charCodeAt(0));
}

function decodeJson(part) {
    return JSON.parse(new TextDecoder().decode(base64UrlToBytes(part)));
}

async function signingKeys(url, forceRefresh) {
    if (!forceRefresh && cached && cached.url === url && cached.expiresAt > Date.now()) return cached.keys;
    const res = await fetch(url);
    if (!res.ok) throw new Error("signing keys HTTP " + res.status);
    const { keys } = await res.json();
    const map = new Map();
    for (const jwk of keys || []) {
        if (jwk.kty !== "RSA" || !jwk.kid) continue;
        map.set(jwk.kid, await crypto.subtle.importKey(
            "jwk", jwk, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]));
    }
    const maxAge = Number((res.headers.get("cache-control") || "").match(/max-age=(\d+)/)?.[1] || 3600);
    cached = { url, keys: map, expiresAt: Date.now() + Math.min(maxAge, 6 * 3600) * 1000 };
    return map;
}

// Returns the player's uid when the token is valid for this project, otherwise null.
export async function verifyFirebaseToken(token, projectId, jwksUrl = GOOGLE_JWKS_URL) {
    const parts = String(token || "").split(".");
    if (parts.length !== 3 || !projectId) return null;

    let header, payload;
    try {
        header = decodeJson(parts[0]);
        payload = decodeJson(parts[1]);
    } catch {
        return null;
    }
    const now = Math.floor(Date.now() / 1000);
    const skew = 300;
    if (header.alg !== "RS256" || !header.kid) return null;
    if (payload.aud !== projectId || payload.iss !== "https://securetoken.google.com/" + projectId) return null;
    if (typeof payload.sub !== "string" || !payload.sub || payload.sub.length > 128) return null;
    if (!(payload.exp > now) || !(payload.iat <= now + skew)) return null;
    if (payload.auth_time !== undefined && !(payload.auth_time <= now + skew)) return null;

    let key = (await signingKeys(jwksUrl, false)).get(header.kid);
    if (!key) key = (await signingKeys(jwksUrl, true)).get(header.kid); // keys rotated
    if (!key) return null;

    const signed = new TextEncoder().encode(parts[0] + "." + parts[1]);
    const valid = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", key, base64UrlToBytes(parts[2]), signed);
    return valid ? payload.sub : null;
}
