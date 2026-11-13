// Yoovy & Googy: the game opens without a network too.
//
// The page itself is asked from the network first, so a new version shows at once; the kept
// copy is used only when the network does not answer (or takes too long). Everything else the
// site owns (the fonts, the flags, the icons, the 3D bundle) is handed over from the cache at
// once and refreshed behind the scenes for the next visit. The Firebase scripts are kept as
// well, so the page starts offline; the leaderboards then show this device's results.
// Nothing else is touched: the shared boards, the sign-in and the analytics go straight out.
const CACHE = 'gaia-v1';
const PAGE = './';
const SHELL = [
    PAGE, 'manifest.webmanifest', 'icons/icon-192.png',
    'fonts/varela-round-hebrew.woff2', 'fonts/varela-round-latin.woff2',
    'fonts/fredoka-latin.woff2', 'fonts/fredoka-hebrew.woff2'
];
// The flags of the flag games (flags/<code>.svg, or .webp for the six in PICTURES): fetched
// after the install, a few at a time, so the flag games work offline as well. One that fails
// is simply fetched when it is first shown. (The codes are geographyData's in index.html.)
const FLAGS = 'il us gb fr de it ru jp cn br au es ca mx kr in tr pl se no nl be ch at gr pt eg za ar ua dk fi ie hu ro bg hr rs sk cz cl co pe bo ec sa jo lb iq ae ma tn ng ke id my th vn nz sg'.split(' ');
const PICTURES = ['rs', 'bo', 'mx', 'es', 'hr', 'ec'];
const FIREBASE_SDK = 'https://www.gstatic.com/firebasejs/';
const PAGE_PATIENCE = 4000;   // ms to wait for the network before the kept page is shown

self.addEventListener('install', event => {
    event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
            .then(() => self.clients.claim())
    );
});

// Runs once in this worker's life, on the back of the first request it serves (so it never
// holds the worker's start, and the worker stays awake until it is done).
let flagsAsked = false;
async function keepFlags() {
    if (flagsAsked) return;
    flagsAsked = true;
    const cache = await caches.open(CACHE);
    const files = FLAGS.map(code => 'flags/' + code + (PICTURES.includes(code) ? '.webp' : '.svg'));
    for (let i = 0; i < files.length; i += 6) {
        await Promise.all(files.slice(i, i + 6).map(async file => {
            try { if (!(await cache.match(file))) await cache.add(file); } catch (e) { /* fetched when it is shown */ }
        }));
    }
}

self.addEventListener('fetch', event => {
    const request = event.request;
    if (request.method !== 'GET') return;
    const url = new URL(request.url);
    if (request.mode === 'navigate') {
        // only the game's own page; any other address under the site is left to the network
        const home = new URL(self.registration.scope).pathname;
        if (url.origin === self.location.origin && (url.pathname === home || url.pathname === home + 'index.html')) {
            event.respondWith(pageFromNetworkFirst(request, event));
        }
        return;
    }
    if (url.origin === self.location.origin || request.url.startsWith(FIREBASE_SDK)) {
        event.respondWith(keptThenRefreshed(request, url, event));
        event.waitUntil(keepFlags());
    }
});

// The page: the network's answer if it comes in time, else the kept copy.
async function pageFromNetworkFirst(request, event) {
    const cache = await caches.open(CACHE);
    const fresh = fetch(request).then(response => {
        if (response && response.ok) cache.put(PAGE, response.clone());
        return response;
    });
    const kept = await cache.match(PAGE);
    if (!kept) return fresh;
    event.waitUntil(fresh.catch(() => {}));   // a late answer still renews the kept copy
    const late = new Promise(resolve => setTimeout(resolve, PAGE_PATIENCE, null));
    const answer = await Promise.race([fresh.catch(() => null), late]);
    return answer && answer.ok ? answer : kept;
}

// A file of the site: the kept copy at once (refreshed for next time), or the network the first time.
async function keptThenRefreshed(request, url, event) {
    const cache = await caches.open(CACHE);
    const kept = await cache.match(request);
    const fresh = fetch(request).then(response => {
        if (response && (response.ok || response.type === 'opaque')) {
            cache.put(request, response.clone());
            if (url.search) forgetOtherVersions(cache, url);
        }
        return response;
    });
    if (!kept) return fresh;
    event.waitUntil(fresh.catch(() => {}));
    return kept;
}

// kingdom3d.js?v=... : only the version the page asks for is kept
async function forgetOtherVersions(cache, url) {
    const keys = await cache.keys();
    await Promise.all(keys.map(key => {
        const other = new URL(key.url);
        return other.origin === url.origin && other.pathname === url.pathname && other.search !== url.search ? cache.delete(key) : null;
    }));
}
