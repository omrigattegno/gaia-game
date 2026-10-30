"""Original soundtrack + SFX for the DataMap promo (73.75 s, 96 BPM, D major / B minor).
Everything is synthesised here, so there are no licensing issues."""
import json, sys
import numpy as np
from scipy import signal

SR = 48000
DUR = 73.75
N = int(SR * DUR)
BPM = 96
BEAT = 60 / BPM
BAR = 4 * BEAT
S16 = BEAT / 4
# v3: a 2-beat break is inserted after bar 8 (22.5 s) so the registration chapter can run 6.25 s
INS_AT, INS = 22.5, 2 * BEAT


def T(t):
    return t + INS if t >= INS_AT - 1e-9 else t

rng = np.random.default_rng(1988)

BUSES = {k: np.zeros((2, N)) for k in ['pad', 'bass', 'keys', 'arp', 'lead', 'drums', 'fx', 'hits']}


def m2f(m):
    return 440.0 * 2 ** ((m - 69) / 12)


def pan2(x, pan=0.0):
    a = (pan + 1) * np.pi / 4
    return np.stack([x * np.cos(a), x * np.sin(a)]) * np.sqrt(2)


def add(bus, x, t0, gain=1.0, pan=0.0):
    if x.ndim == 1:
        x = pan2(x, pan)
    i0 = int(round(t0 * SR))
    n = x.shape[1]
    a, b = max(0, i0), min(N, i0 + n)
    if a >= b:
        return
    BUSES[bus][:, a:b] += gain * x[:, a - i0:b - i0]


def sos(kind, fc, order=2):
    return signal.butter(order, fc, kind, fs=SR, output='sos')


def lp(x, fc, order=2):
    return signal.sosfilt(sos('low', fc, order), x)


def hp(x, fc, order=2):
    return signal.sosfilt(sos('high', fc, order), x)


def bp(x, lo, hi, order=2):
    return signal.sosfilt(signal.butter(order, [lo, hi], 'band', fs=SR, output='sos'), x)


def saw(freq, n, phase=0.0):
    dt = freq / SR
    ph = (phase + dt * np.arange(n)) % 1.0
    y = 2 * ph - 1
    m = ph < dt
    x = ph[m] / dt
    y[m] -= x + x - x * x - 1
    m = ph > 1 - dt
    x = (ph[m] - 1) / dt
    y[m] -= x * x + x + x + 1
    return y


def tvar_lp(x, fcs):
    """one-pole low-pass with a time-varying cutoff (per-sample array)"""
    a = np.exp(-2 * np.pi * np.asarray(fcs) / SR)
    y = np.empty_like(x)
    s = 0.0
    for i in range(len(x)):
        s = (1 - a[i]) * x[i] + a[i] * s
        y[i] = s
    return y


# ------------------------------------------------------------------ harmony
# 4-bar cycle: Bm7 - Gmaj7 - D/A - A(sus)   (vi - IV - I - V in D major)
CHORDS = [[59, 62, 66, 69], [55, 59, 62, 66], [57, 62, 66, 69], [57, 61, 64, 69]]
ROOTS = [35, 31, 38, 33]
FINAL = [50, 57, 62, 66, 69, 76]      # D add9 voicing
FINAL_ROOT = 26                        # D1


def chord_at(bar):
    return CHORDS[bar % 4], ROOTS[bar % 4]


# ---------------------------------------------------------------- instruments
def pad_note(freq, dur, rel=1.1, cut=1500, att=0.45):
    n = int((dur + rel) * SR)
    t = np.arange(n) / SR
    out = np.zeros((2, n))
    for c, dets in enumerate([(-9, 2, 6), (-4, 5, 11)]):
        v = sum(saw(freq * 2 ** (d / 1200), n, rng.random()) for d in dets) / 3
        out[c] = lp(v, cut, 2)
    env = np.clip(t / att, 0, 1) * np.clip(1 - (t - dur) / rel, 0, 1)
    return out * env


def ep_note(freq, dur=0.7, bright=1.0):
    n = int(dur * SR)
    t = np.arange(n) / SR
    idx = 1.5 * bright * np.exp(-t * 10)
    y = np.sin(2 * np.pi * freq * t + idx * np.sin(2 * np.pi * freq * t))
    y += 0.22 * np.sin(2 * np.pi * 2 * freq * t) * np.exp(-t * 16)
    amp = np.exp(-t * 6.0) * (1 - np.exp(-t * 500))
    return y * amp


def glass_note(freq, dur=0.35):
    n = int(dur * SR)
    t = np.arange(n) / SR
    y = np.sin(2 * np.pi * freq * t) + 0.35 * np.sin(2 * np.pi * 3 * freq * t) * np.exp(-t * 25)
    return y * np.exp(-t * 11) * (1 - np.exp(-t * 800))


def bass_note(freq, dur):
    n = int((dur + 0.05) * SR)
    t = np.arange(n) / SR
    y = 0.75 * np.sin(2 * np.pi * freq * t) + 0.5 * lp(saw(freq, n), 420, 2)
    env = (1 - np.exp(-t * 300)) * np.exp(-t * 2.2) * np.clip((dur + 0.05 - t) / 0.05, 0, 1)
    return np.tanh(1.6 * y * env)


def lead_note(freq, dur):
    n = int((dur + 0.4) * SR)
    t = np.arange(n) / SR
    vib = 1 + 0.004 * np.sin(2 * np.pi * 5.2 * t) * np.clip((t - 0.25) / 0.3, 0, 1)
    ph = 2 * np.pi * np.cumsum(freq * vib) / SR
    tri = 2 / np.pi * np.arcsin(np.sin(ph))
    y = 0.7 * tri + 0.3 * lp(saw(freq, n), 2600, 2)
    env = np.clip(t / 0.03, 0, 1) * np.exp(-t * 0.9) * np.clip(1 - (t - dur) / 0.4, 0, 1)
    return y * env


def kick():
    n = int(0.5 * SR)
    t = np.arange(n) / SR
    f = 44 + 120 * np.exp(-t * 30)
    y = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 7.0)
    click = hp(rng.standard_normal(n), 2500) * np.exp(-t * 350) * 0.35
    return np.tanh(1.8 * (y + click)) * 0.95


def clap():
    n = int(0.45 * SR)
    t = np.arange(n) / SR
    nz = bp(rng.standard_normal(n), 900, 3200)
    env = np.zeros(n)
    for k, d in enumerate([0, 0.011, 0.022]):
        env += np.where(t >= d, np.exp(-(t - d) * (160 if k < 2 else 16)), 0)
    return nz * env * 0.8


def hat(open_=False):
    n = int((0.32 if open_ else 0.08) * SR)
    t = np.arange(n) / SR
    y = hp(rng.standard_normal(n), 7500, 4)
    return y * np.exp(-t * (11 if open_ else 70))


def snare():
    n = int(0.3 * SR)
    t = np.arange(n) / SR
    y = 0.55 * bp(rng.standard_normal(n), 1500, 7000) * np.exp(-t * 20) + 0.45 * np.sin(2 * np.pi * 190 * t) * np.exp(-t * 28)
    return y


def riser(dur, f0=250, f1=9000):
    n = int(dur * SR)
    t = np.arange(n) / SR
    x = rng.standard_normal(n)
    fc = f0 * (f1 / f0) ** (t / dur)
    y = tvar_lp(x, fc) - tvar_lp(x, fc * 0.3)
    tone = np.sin(2 * np.pi * np.cumsum(180 * 2 ** (2 * t / dur)) / SR) * 0.25
    return (y * 2.2 + tone) * (t / dur) ** 2.2


def reverse_crash(dur=1.6):
    n = int(dur * SR)
    t = np.arange(n) / SR
    y = hp(rng.standard_normal(n), 3000) * np.exp(-(dur - t) * 3.2)
    return y * np.clip((dur - t) / 0.02, 0, 1)


def impact():
    n = int(4.0 * SR)
    t = np.arange(n) / SR
    f = 30 + 70 * np.exp(-t * 7)
    boom = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 1.6)
    thump = lp(rng.standard_normal(n), 180) * np.exp(-t * 7) * 2.5
    crash = hp(rng.standard_normal(n), 4500) * np.exp(-t * 1.3) * 0.28
    return np.tanh(1.3 * (boom + thump)) + crash


def whoosh(dur=0.9):
    n = int(dur * SR)
    t = np.arange(n) / SR
    x = rng.standard_normal(n)
    shape = np.sin(np.pi * t / dur) ** 2
    fc = 400 + 5200 * shape
    y = tvar_lp(x, fc) - tvar_lp(x, fc * 0.25)
    y = y * shape
    pan = np.linspace(0.8, -0.8, n)            # right -> left (RTL)
    a = (pan + 1) * np.pi / 4
    return np.stack([y * np.cos(a), y * np.sin(a)]) * np.sqrt(2)


def shutter():
    n = int(0.09 * SR)
    t = np.arange(n) / SR
    c1 = hp(rng.standard_normal(n), 3000) * np.exp(-t * 400)
    c2 = np.where(t > 0.035, hp(rng.standard_normal(n), 2500) * np.exp(-(t - 0.035) * 300), 0) * 0.7
    return c1 + c2


def blip(freq, dur=0.04):
    n = int(dur * SR)
    t = np.arange(n) / SR
    return np.sin(2 * np.pi * freq * t) * np.exp(-t * 90) * (1 - np.exp(-t * 3000))


def chime(freq, dur=2.5):
    n = int(dur * SR)
    t = np.arange(n) / SR
    y = np.sin(2 * np.pi * freq * t + 1.2 * np.exp(-t * 3) * np.sin(2 * np.pi * freq * 3.5 * t))
    return y * np.exp(-t * 2.2) * (1 - np.exp(-t * 800))


def lidar_texture(dur):
    n = int(dur * SR)
    t = np.arange(n) / SR
    trem = 0.5 + 0.5 * np.sin(2 * np.pi * 26 * t)
    y = bp(rng.standard_normal(n), 5500, 9500) * trem * 0.6
    y += np.sin(2 * np.pi * 2637 * t) * (0.5 + 0.5 * np.sin(2 * np.pi * 13 * t)) * 0.12
    env = np.clip(t / 0.4, 0, 1) * np.clip((dur - t) / 0.4, 0, 1)
    pan = np.linspace(0.75, -0.75, n)
    a = (pan + 1) * np.pi / 4
    return np.stack([y * env * np.cos(a), y * env * np.sin(a)]) * np.sqrt(2)



# ------------------------------------------------------------------ extra sfx
def stamp_sfx():
    n = int(0.7 * SR)
    t = np.arange(n) / SR
    thump = np.sin(2 * np.pi * np.cumsum(70 + 90 * np.exp(-t * 45)) / SR) * np.exp(-t * 16)
    slap = bp(rng.standard_normal(n), 250, 2600) * np.exp(-t * 55) * 0.9
    return np.tanh(1.6 * (thump + slap))


def scanner_texture(dur):
    n = int(dur * SR)
    t = np.arange(n) / SR
    whir = bp(rng.standard_normal(n), 800, 1700) * (0.55 + 0.45 * np.sin(2 * np.pi * 15 * t)) * 0.35
    hum = np.sin(2 * np.pi * 110 * t) * 0.14 + np.sin(2 * np.pi * 220 * t) * 0.05
    ticks = np.zeros(n)
    for k in np.arange(0.12, dur, 0.25):
        i0 = int(k * SR); m = min(n - i0, int(0.03 * SR))
        ticks[i0:i0 + m] += np.sin(2 * np.pi * 3300 * np.arange(m) / SR) * np.exp(-np.arange(m) / SR * 160)
    env = np.clip(t / 0.3, 0, 1) * np.clip((dur - t) / 0.3, 0, 1)
    return (whir + hum + 0.25 * ticks) * env


def laser_beep():
    n = int(0.24 * SR)
    t = np.arange(n) / SR
    f = 1700 + 1100 * t / 0.24
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 8) * (1 - np.exp(-t * 900))


def road_sweep(dur):
    n = int(dur * SR)
    t = np.arange(n) / SR
    x = rng.standard_normal(n)
    fc = 300 * (4200 / 300) ** (t / dur)
    y = tvar_lp(x, fc) - tvar_lp(x, fc * 0.35)
    return y * np.sin(np.pi * t / dur) ** 1.5 * 1.6


# ------------------------------------------------------------------ arrange (96 BPM, 29 bars)
NBARS = 29
MEL = [[(0, 78, 3), (3, 76, 1), (4, 74, 4)], [(0, 74, 2), (2, 71, 2), (4, 74, 4)],
       [(0, 69, 2), (2, 66, 2), (4, 69, 4)], [(0, 76, 3), (3, 73, 1), (4, 76, 4)]]
kick_times = []
for b in range(NBARS):
    t0 = T(b * BAR)
    chord, root = chord_at(b)
    brk = 15 <= b < 19
    full = (3 <= b < 15) or (19 <= b < 25)
    if b <= 24:
        cut = 900 + 700 * min(1, b / 3) + (500 if 19 <= b < 25 else 0)
        g = 0.085 if b < 3 else (0.10 if brk else 0.06)
        for m in chord:
            add('pad', pad_note(m2f(m), BAR + (INS if b == 8 else 0), cut=cut), t0, g)
    notes = chord + [c + 12 for c in chord]
    if b < 3:
        pat = [0, 2, 1, 3, 4, 3, 5, 2]
        for k, idx in enumerate(pat):
            add('keys', ep_note(m2f(notes[idx]), 0.9, 0.8), t0 + k * 2 * S16, 0.12 * (0.55 + 0.45 * b / 2), pan=0.25 * (1 if k % 2 else -1))
        add('bass', pad_note(m2f(root + 12), BAR, rel=0.6, cut=300, att=0.6)[0], t0, 0.22)
    elif b <= 24:
        pat = [0, 2, 4, 3, 5, 4, 6, 5, 7, 5, 6, 4, 5, 3, 4, 2]
        bd = 1.5 if brk else 1.0
        for k, idx in enumerate(pat):
            acc = 1.0 if k % 4 == 0 else 0.72
            add('keys', ep_note(m2f(notes[idx]), 0.6, 0.9), t0 + k * S16, 0.072 * acc * bd, pan=0.3 * np.sin(k * 0.8))
    if 9 <= b < 15 or 19 <= b < 25:
        hi = [c + 24 for c in chord]
        for k in range(16):
            if k % 3 == 2:
                continue
            add('arp', glass_note(m2f(hi[(k * 3) % 4])), t0 + k * S16, 0.05 if b < 15 else 0.035, pan=(0.6 if k % 2 else -0.6))
    if full:
        for k in range(8):
            add('bass', bass_note(m2f(root), BEAT / 2 * 0.9), t0 + k * BEAT / 2, 0.30 if k % 2 == 0 else 0.22)
        for k in range(4):
            add('drums', kick(), t0 + k * BEAT, 0.62)
            kick_times.append(t0 + k * BEAT)
        for k in (1, 3):
            add('drums', clap(), t0 + k * BEAT, 0.24)
        step = 2 if b < 9 else 1
        for k in range(0, 16, step):
            if b < 9 and k % 4 == 0:
                continue
            add('drums', hat(), t0 + k * S16, (0.07 if k % 4 == 2 else 0.045), pan=0.35)
        if b >= 9:
            for k in (2, 6, 10, 14):
                add('drums', hat(True), t0 + k * S16, 0.035, pan=-0.3)
    elif brk:
        add('bass', bass_note(m2f(root), BAR * 0.95), t0, 0.26)
        for k in range(0, 16, 2):
            add('drums', hat(), t0 + k * S16, 0.035, pan=0.35)
        if b == 18:
            for k in range(4):
                add('drums', kick(), t0 + k * BEAT, 0.28 + 0.1 * k)
    if 19 <= b < 25:
        for (st, m, ln) in MEL[b % 4]:
            add('lead', lead_note(m2f(m), ln * BEAT / 2 * 0.95), t0 + st * BEAT / 2, 0.075, pan=-0.1)

# transitions between chapter groups
add('fx', riser(2.5), 5.0, 0.10)
add('fx', reverse_crash(1.6), 7.5 - 1.6, 0.09)
for k in range(8):
    add('drums', snare(), INS_AT + k * S16, 0.05 + 0.017 * k)
add('bass', bass_note(m2f(35), INS * 0.95), INS_AT, 0.24)
add('fx', reverse_crash(1.2), T(22.5) - 1.2, 0.06)
add('fx', reverse_crash(1.4), T(37.5) - 1.4, 0.05)
add('fx', riser(2.5, 200, 7000), T(45.0), 0.07)
add('fx', reverse_crash(1.6), T(47.5) - 1.6, 0.08)
add('fx', riser(5.0, 180, 11000), T(57.5), 0.11)
t = 60.0
while t < 62.5 - 1e-6:
    frac = (t - 60.0) / 2.5
    add('drums', snare(), T(t), 0.03 + 0.09 * frac)
    t += S16 if frac < 0.5 else S16 / 2
add('fx', reverse_crash(2.0), T(62.5) - 2.0, 0.10)

# finale
E0 = T(62.5)
add('hits', impact(), E0, 0.85)
for m in FINAL:
    add('pad', pad_note(m2f(m), 7.6, rel=2.2, cut=1700, att=0.05), E0, 0.075)
for m in [38, 45, 50]:
    add('pad', pad_note(m2f(m), 7.4, rel=2.2, cut=700, att=1.5), E0 + 0.4, 0.07)
add('bass', bass_note(m2f(FINAL_ROOT + 12), 5.5), E0, 0.32)
fin_arp = [62, 66, 69, 74, 76, 74, 69, 66, 62, 69, 74, 78, 76, 74, 69, 66]
tt = E0 + 0.5
for k, m in enumerate(fin_arp):
    add('keys', ep_note(m2f(m), 1.4, 0.7), tt, 0.075 * (1 - k / 20))
    tt += S16 * 2 * (1 + k * 0.07)

# ------------------------------------------------------------------ SFX
ev = json.load(open('out/sfx.json'))
for e in ev:
    t, ty = e['t'], e['type']
    if ty == 'whoosh':
        add('fx', whoosh(0.9), t - 0.25, 0.10)
    elif ty == 'shutter':
        add('fx', shutter(), t, 0.05, pan=-0.2)
        add('fx', blip(2600, 0.05), t + 0.01, 0.02, pan=-0.2)
    elif ty == 'stamp':
        add('fx', stamp_sfx(), t + 0.2, 0.55)
    elif ty == 'scanner':
        add('fx', scanner_texture(e['dur']), t, 0.09)
    elif ty == 'lidar':
        add('fx', lidar_texture(e['dur']), t, 0.06)
    elif ty == 'data':
        r = np.random.default_rng(int(t * 10))
        for k in range(int(e['dur'] * 11)):
            add('fx', blip(r.choice([1760, 2217, 2637, 2960, 3520])), t + k / 11 + r.random() * 0.03, 0.022, pan=r.uniform(-0.7, 0.7))
    elif ty == 'fill':
        add('fx', riser(e['dur'], 120, 2500), t, 0.05)
    elif ty == 'tick':
        add('fx', blip(1900, 0.03), t, 0.05)
    elif ty == 'draw':
        r = np.random.default_rng(int(t * 10))
        for k in range(14):
            add('fx', blip(r.choice([1320, 1480, 1760]), 0.025), t + k * e['dur'] / 14, 0.025, pan=r.uniform(-0.5, 0.2))
    elif ty == 'laser':
        add('fx', laser_beep(), t, 0.05, pan=-0.3)
    elif ty == 'pop':
        add('fx', blip(880, 0.12), t, 0.06)
        add('fx', blip(1320, 0.1), t + 0.06, 0.05)
    elif ty == 'slide':
        add('fx', whoosh(0.6), t - 0.1, 0.06)
    elif ty == 'road':
        add('fx', road_sweep(e['dur']), t, 0.05)
    elif ty == 'soft':
        add('fx', chime(m2f([74, 78, 81][e['k']])), t, 0.035)


# ------------------------------------------------------------------ mixdown
def make_ir(sec, bright=6500, predelay=0.018):
    n = int(sec * SR)
    t = np.arange(n) / SR
    ir = np.zeros((2, n))
    for c in range(2):
        x = rng.standard_normal(n) * np.exp(-t * 6.9 / sec)
        ir[c] = lp(x, bright, 1)
    ir[:, :int(predelay * SR)] = 0
    ir /= np.sqrt((ir ** 2).sum(axis=1, keepdims=True))
    return ir


def reverb(x, ir):
    y = np.zeros_like(x)
    for c in range(2):
        y[c] = signal.fftconvolve(x[c], ir[c])[:N]
    return y


def pingpong(x, delay, fb=0.45, n_taps=6):
    y = np.zeros_like(x)
    d = int(delay * SR)
    for k in range(1, n_taps + 1):
        g = fb ** k
        src = x[0] + x[1]
        ch = k % 2
        y[ch, d * k:] += g * src[:N - d * k] * 0.5
    return y


# sidechain envelope from the kicks
duck = np.ones(N)
for kt in kick_times:
    i0 = int(kt * SR)
    n = int(0.3 * SR)
    t = np.arange(n) / SR
    shape = 1 - 0.38 * np.exp(-t * 14)
    j = min(N, i0 + n)
    duck[i0:j] = np.minimum(duck[i0:j], shape[:j - i0])

ir_long = make_ir(2.6)
ir_short = make_ir(1.2, 8000)
B = BUSES
B['arp'] = B['arp'] + pingpong(B['arp'], 3 * S16, 0.42)
dry = (B['pad'] * duck + B['bass'] * duck + B['keys'] * (0.6 + 0.4 * duck) + B['arp'] + B['lead'] + B['drums'] + B['fx'] + B['hits'])
wet = reverb(B['pad'] * 0.5 + B['keys'] * 0.55 + B['arp'] * 0.6 + B['lead'] * 0.45 + B['fx'] * 0.35 + B['hits'] * 0.25, ir_long) * 0.55
wet += reverb(B['drums'] * 0.12, ir_short) * 0.5
mix = dry + wet
mix = hp(mix, 28, 2)

# glue compression (RMS detector)
level = np.sqrt(signal.sosfilt(sos('low', 8), (mix ** 2).mean(axis=0)) + 1e-12)
thr = 0.16
gain = np.where(level > thr, (thr / level) ** 0.4, 1.0)
gain = signal.sosfilt(sos('low', 25), gain)
mix = mix * gain

# final fade and loudness
t = np.arange(N) / SR
fade = np.clip(t / 0.03, 0, 1) * np.clip((DUR - 0.3 - t) / 2.4, 0, 1)
mix *= fade
try:
    import pyloudnorm as pyln
    meter = pyln.Meter(SR)
    lufs = meter.integrated_loudness(mix.T)
    mix *= 10 ** ((-15.0 - lufs) / 20)
    print('loudness before', round(lufs, 2), 'LUFS -> -15')
except Exception as e:
    rms = np.sqrt((mix ** 2).mean())
    mix *= 10 ** (-17 / 20) / rms
    print('rms-normalised', e)
mix = np.tanh(mix * 1.05) / np.tanh(1.05) if np.abs(mix).max() > 0.9 else mix
peak = np.abs(mix).max()
if peak > 0.89:
    mix *= 0.89 / peak
print('peak dBFS', round(20 * np.log10(np.abs(mix).max()), 2))
out = (np.clip(mix, -1, 1).T * 32767).astype(np.int16)
from scipy.io import wavfile
wavfile.write('out/soundtrack.wav', SR, out)
print('wrote out/soundtrack.wav', out.shape)

