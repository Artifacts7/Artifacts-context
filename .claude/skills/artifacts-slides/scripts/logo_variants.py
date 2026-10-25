#!/usr/bin/env python3
"""Make the two transparent logo variants used by the Artifacts deck.

Usage: python3 logo_variants.py <logo.png> [--width 340]

Takes a wordmark on a cream background and produces:
  - a transparent variant with the dark text kept dark   -> for cream slides (.mark)
  - a transparent variant with the dark text recoloured cream -> for purple slides (.plum .mark)
Coloured accent lines are preserved in both. Prints two `data:image/png;base64,...`
URIs to paste into the deck's `.mark` and `.plum .mark` background-image rules, and
writes them to logo-cream.txt / logo-plum.txt next to the input.
Needs Pillow (pip install Pillow).
"""
import sys, io, base64, os
from PIL import Image

CREAM_RGB = (250, 246, 234)  # recolour dark text to this for the purple-slide variant

def is_cream(r, g, b): return r > 232 and g > 226 and b > 210
def is_dark(r, g, b):  return max(r, g, b) < 95

def main():
    if len(sys.argv) < 2:
        print("usage: python3 logo_variants.py <logo.png> [--width 340]"); sys.exit(1)
    src = sys.argv[1]
    width = 340
    if "--width" in sys.argv:
        width = int(sys.argv[sys.argv.index("--width") + 1])
    im = Image.open(src).convert("RGBA")
    W, H = im.size
    px = im.load()
    minx, miny, maxx, maxy = W, H, 0, 0
    for y in range(H):
        for x in range(W):
            r, g, b, _ = px[x, y]
            if not is_cream(r, g, b):
                minx = min(minx, x); maxx = max(maxx, x)
                miny = min(miny, y); maxy = max(maxy, y)
    pad = 14
    crop = im.crop((max(0, minx - pad), max(0, miny - pad),
                    min(W, maxx + pad), min(H, maxy + pad)))
    cw, ch = crop.size

    def variant(dark_to):
        img = crop.copy(); p = img.load()
        for y in range(img.size[1]):
            for x in range(img.size[0]):
                r, g, b, a = p[x, y]
                if is_cream(r, g, b):
                    p[x, y] = (r, g, b, 0)           # cream -> transparent
                elif dark_to and is_dark(r, g, b):
                    p[x, y] = (*dark_to, 255)         # dark text -> given colour
                # coloured lines kept as-is
        th = round(img.size[1] * width / img.size[0])
        img = img.resize((width, th), Image.LANCZOS)
        buf = io.BytesIO(); img.save(buf, "PNG", optimize=True)
        return "data:image/png;base64," + base64.b64encode(buf.getvalue()).decode()

    cream_uri = variant(None)            # dark text kept -> cream slides
    plum_uri  = variant(CREAM_RGB)       # text recoloured cream -> purple slides
    d = os.path.dirname(os.path.abspath(src))
    open(os.path.join(d, "logo-cream.txt"), "w").write(cream_uri)
    open(os.path.join(d, "logo-plum.txt"), "w").write(plum_uri)
    print(f"aspect-ratio for .mark CSS: {cw/ch:.2f}")
    print("\n--- .mark (cream slides) background-image ---\n" + cream_uri[:80] + "...")
    print("\n--- .plum .mark (purple slides) background-image ---\n" + plum_uri[:80] + "...")
    print("\nFull URIs written to logo-cream.txt and logo-plum.txt")

if __name__ == "__main__":
    main()
