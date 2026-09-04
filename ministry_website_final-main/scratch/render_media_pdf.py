import os
import pymupdf as fitz
from PIL import Image

pdf = r"C:\phase 1 (1)\figma design of phase 1\media & resource.pdf"
out_dir = r"C:\phase 1 (1)\scratch\media_compare"
os.makedirs(out_dir, exist_ok=True)
img_dir = os.path.join(out_dir, "pdf_images")
os.makedirs(img_dir, exist_ok=True)

doc = fitz.open(pdf)
print("pages", doc.page_count)
for i, page in enumerate(doc):
    print("size", page.rect)
    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
    dest = os.path.join(out_dir, f"figma_page_{i+1}.png")
    pix.save(dest)
    print("saved", dest, pix.width, pix.height)

page = doc[0]
print("\n--- text spans ---")
for b in page.get_text("dict")["blocks"]:
    if b.get("type") != 0:
        continue
    for line in b.get("lines", []):
        for span in line.get("spans", []):
            t = span.get("text", "").strip()
            if not t:
                continue
            print(repr(t)[:80], "size", round(span.get("size", 0), 1), "font", span.get("font"), "color", hex(span.get("color", 0)), "bbox", [round(x, 1) for x in span.get("bbox", [])])

print("\n--- image info ---")
for i, info in enumerate(page.get_image_info(xrefs=True)):
    print(i, info.get("bbox"), info.get("width"), info.get("height"), "xref", info.get("xref"))

print("\n--- drawings ---")
for i, d in enumerate(page.get_drawings()[:80]):
    r = d.get("rect")
    fill = d.get("fill")
    print(i, "rect", r, "fill", fill, "type", d.get("type"))

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

# likely card region after hero ~18-75%
im.crop((0, int(h * 0.12), w, int(h * 0.28))).save(os.path.join(out_dir, "region_hero.png"))
im.crop((0, int(h * 0.25), w, int(h * 0.42))).save(os.path.join(out_dir, "region_intro.png"))
im.crop((0, int(h * 0.38), w, int(h * 0.58))).save(os.path.join(out_dir, "region_cards1.png"))
im.crop((0, int(h * 0.54), w, int(h * 0.74))).save(os.path.join(out_dir, "region_cards2.png"))
im.crop((0, int(h * 0.68), w, int(h * 0.88))).save(os.path.join(out_dir, "region_cards3.png"))
print("slices saved")
