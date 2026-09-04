import os
import pymupdf as fitz
from PIL import Image

pdf = r"C:\phase 1 (1)\figma design of phase 1\our work.pdf"
out = r"C:\phase 1 (1)\scratch\our_work_compare\pdf_images"
os.makedirs(out, exist_ok=True)

doc = fitz.open(pdf)
page = doc[0]
imgs = page.get_images(full=True)
print("embedded images", len(imgs))
for i, info in enumerate(imgs):
    xref = info[0]
    pix = fitz.Pixmap(doc, xref)
    if pix.n > 4:
        pix = fitz.Pixmap(fitz.csRGB, pix)
    dest = os.path.join(out, f"img_{i:03d}_{pix.width}x{pix.height}.png")
    pix.save(dest)
    print(i, dest, pix.width, pix.height)
    pix = None

# Crop the 6 card images from the 2x render using design coords.
# Design is 1440 x 3361. 2x render 2880 x 6722.
# Visual inspection of slices: cards start after intro.
# Let's dump drawing rects for images.
print("\n--- image blocks ---")
blocks = page.get_text("dict")["blocks"]
img_blocks = [b for b in blocks if b.get("type") == 1]
print("image blocks", len(img_blocks))
for i, b in enumerate(img_blocks):
    print(i, b.get("bbox"), b.get("width"), b.get("height"))

print("\n--- drawings sample ---")
# also list image bboxes via get_image_info
for i, info in enumerate(page.get_image_info(xrefs=True)[:30]):
    print(i, info.get("bbox"), info.get("width"), info.get("height"), "xref", info.get("xref"))
doc.close()
