import os, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import pymupdf as fitz
from PIL import Image

pdf = r"C:\phase 1 (1)\figma design of phase 1\media & resource.pdf"
out_dir = r"C:\phase 1 (1)\scratch\media_compare"
os.makedirs(out_dir, exist_ok=True)
img_dir = os.path.join(out_dir, "pdf_images")
os.makedirs(img_dir, exist_ok=True)

doc = fitz.open(pdf)
page = doc[0]
print("size", page.rect)

print("\n--- text spans (skip nav y<100) ---")
for b in page.get_text("dict")["blocks"]:
    if b.get("type") != 0:
        continue
    for line in b.get("lines", []):
        for span in line.get("spans", []):
            t = span.get("text", "").strip()
            if not t:
                continue
            bbox = [round(x, 1) for x in span.get("bbox", [])]
            if bbox[1] < 100:
                continue
            print(repr(t)[:90], "size", round(span.get("size", 0), 1), "bbox", bbox)

print("\n--- image info ---")
for i, info in enumerate(page.get_image_info(xrefs=True)):
    print(i, [round(x,1) for x in info.get("bbox")], info.get("width"), info.get("height"), "xref", info.get("xref"))

print("\n--- drawings fill rects ---")
for i, d in enumerate(page.get_drawings()):
    r = d.get("rect")
    fill = d.get("fill")
    if not r or r.width < 40:
        continue
    print(i, "xywh", round(r.x0,1), round(r.y0,1), round(r.width,1), round(r.height,1), "fill", fill)

imgs = page.get_images(full=True)
print("\nembedded", len(imgs))
for i, info in enumerate(imgs):
    xref = info[0]
    pix = fitz.Pixmap(doc, xref)
    if pix.n > 4:
        pix = fitz.Pixmap(fitz.csRGB, pix)
    dest = os.path.join(img_dir, f"img_{i}_{pix.width}x{pix.height}.png")
    pix.save(dest)
    print(i, dest, pix.width, pix.height)

doc.close()

im = Image.open(os.path.join(out_dir, "figma_page_1.png"))
w, h = im.size
print("figma", w, h)
n = 8
band = h // n
for i in range(n):
    top = i * band
    bot = h if i == n - 1 else (i + 1) * band
    im.crop((0, top, w, bot)).save(os.path.join(out_dir, f"slice_{i+1}.png"))

im.crop((0, int(h * 0.12), w, int(h * 0.28))).save(os.path.join(out_dir, "region_hero.png"))
im.crop((0, int(h * 0.25), w, int(h * 0.42))).save(os.path.join(out_dir, "region_intro.png"))
im.crop((0, int(h * 0.38), w, int(h * 0.58))).save(os.path.join(out_dir, "region_cards1.png"))
im.crop((0, int(h * 0.54), w, int(h * 0.74))).save(os.path.join(out_dir, "region_cards2.png"))
im.crop((0, int(h * 0.68), w, int(h * 0.88))).save(os.path.join(out_dir, "region_cards3.png"))

# sample card bg color
for name, xy in [
    ("page bg", (w//2, int(h*0.32))),
    ("card bg", (int(w*0.25), int(h*0.52))),
    ("icon circle", (int(w*0.12), int(h*0.48))),
    ("heading", (w//2, int(h*0.35))),
]:
    print(name, xy, im.getpixel(xy))
print("done")
