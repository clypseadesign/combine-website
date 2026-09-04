import os, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import pymupdf as fitz
from PIL import Image

pdf = r"C:\phase 1 (1)\figma design of phase 1\donate us.pdf"
out_dir = r"C:\phase 1 (1)\scratch\donate_compare"
os.makedirs(out_dir, exist_ok=True)
img_dir = os.path.join(out_dir, "pdf_images")
os.makedirs(img_dir, exist_ok=True)

doc = fitz.open(pdf)
print("pages", doc.page_count)
for i, page in enumerate(doc):
    print("page", i, page.rect)
    pix = page.get_pixmap(matrix=fitz.Matrix(1.5, 1.5), alpha=False)
    dest = os.path.join(out_dir, f"figma_page_{i+1}.png")
    pix.save(dest)
    print("saved", dest, pix.width, pix.height)

page = doc[0]
print("\n--- text spans y>=100 ---")
for b in page.get_text("dict")["blocks"]:
    if b.get("type") != 0:
        continue
    for line in b.get("lines", []):
        texts = []
        bbox = None
        size = None
        for span in line.get("spans", []):
            t = span.get("text", "").strip()
            if not t:
                continue
            texts.append(t)
            size = round(span.get("size", 0), 1)
            bbox = [round(x, 1) for x in span.get("bbox", [])]
        if texts and bbox and bbox[1] >= 100:
            joined = " ".join(texts)
            if len(joined) > 110:
                joined = joined[:110] + "..."
            print(f"y={bbox[1]:7.1f} x={bbox[0]:7.1f} size={size:5.1f} {joined}")

print("\n--- image info ---")
for i, info in enumerate(page.get_image_info(xrefs=True)):
    print(i, [round(x,1) for x in info.get("bbox")], info.get("width"), info.get("height"))

print("\n--- large drawings ---")
for i, d in enumerate(page.get_drawings()):
    r = d.get("rect")
    fill = d.get("fill")
    if not r or r.width < 80 or r.height < 20:
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
n = 12
band = h // n
for i in range(n):
    top = i * band
    bot = h if i == n - 1 else (i + 1) * band
    im.crop((0, top, w, bot)).save(os.path.join(out_dir, f"slice_{i+1}.png"))
print("slices saved")
