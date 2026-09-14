from PIL import Image
import numpy as np

src = "/app/frontend/public/brand/logo_official.png"
im = Image.open(src).convert("RGBA")
arr = np.array(im).astype(np.int16)
r, g, b, a = arr[..., 0], arr[..., 1], arr[..., 2], arr[..., 3]

opaque = a > 30
is_blue = opaque & ((b - r) > 30) & (b > 90)
is_dark = opaque & ~is_blue

# --- Clean transparent version, original colours (already transparent source, just autocrop) ---
clean = arr.copy().astype(np.uint8)
Image.fromarray(clean, "RGBA").save("/app/frontend/public/brand/logo_transparent.png")

# --- Hero version: Casa -> cobalt blue, Güell -> cream white, keep original alpha (anti-alias) ---
hero = arr.copy()
hero[is_blue, 0], hero[is_blue, 1], hero[is_blue, 2] = 37, 99, 235
hero[is_dark, 0], hero[is_dark, 1], hero[is_dark, 2] = 250, 248, 245
hero[..., 3] = a  # preserve alpha
Image.fromarray(hero.astype(np.uint8), "RGBA").save("/app/frontend/public/brand/logo_hero.png")

# --- All-white monochrome version (fallback, fully readable on any dark) ---
mono = arr.copy()
mono[opaque, 0], mono[opaque, 1], mono[opaque, 2] = 250, 248, 245
mono[..., 3] = a
Image.fromarray(mono.astype(np.uint8), "RGBA").save("/app/frontend/public/brand/logo_white.png")

# Autocrop all three to alpha bbox with small padding
for name in ["logo_transparent.png", "logo_hero.png", "logo_white.png"]:
    p = f"/app/frontend/public/brand/{name}"
    img = Image.open(p)
    bbox = img.split()[3].getbbox()
    if bbox:
        pad = 12
        l, t, rr, bb = bbox
        l = max(0, l - pad); t = max(0, t - pad)
        rr = min(img.width, rr + pad); bb = min(img.height, bb + pad)
        img.crop((l, t, rr, bb)).save(p)
        print(name, "->", (rr - l, bb - t))
