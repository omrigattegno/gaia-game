# Googy — the English-conversation server

A small Cloudflare Worker that lets the game talk to Claude. It keeps the Anthropic API
key out of the public page and only answers signed-in players of the game (Firebase
anonymous sign-in), at most 10 chat turns a minute per player. Chats are not stored or logged.

- `src/index.js`: the `/chat` endpoint (checks, limits, the Claude call)
- `src/googy.js`: Googy's persona, topics and reply format
- `src/auth.js`: checks the Firebase sign-in token

## One-time setup

1. **Anthropic**: at console.anthropic.com, add credit and set a monthly spend limit,
   then create an API key.
2. **Cloudflare** (free plan): Workers & Pages → Create → Import a repository → this repo.
   Set the project name to `googy` and the root directory to `googy`, then deploy.
3. In the worker's **Settings → Variables and Secrets**, add a **Secret** named
   `ANTHROPIC_API_KEY` with the key.
4. Put the worker's address with `/chat` at the end into `GOOGY_API_URL` in
   `index.html`, for example `https://googy.<account>.workers.dev/chat`.

After that, Cloudflare redeploys the worker on every push to `main`.

## Settings (`wrangler.toml`)

- `ALLOWED_ORIGINS`: the site allowed to call the worker, `https://omrigattegno.github.io`
- `FIREBASE_PROJECT_ID`: `gaia-game-a32c0`
- `PER_PLAYER`: the rate limit
