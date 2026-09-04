import fitz, glob, os, json, sys
try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

folder = r"C:\phase 1 (1)\figma design of phase 1"
src = glob.glob(folder + "/Transparency*")[0]
doc = fitz.open(src)
page = doc[0]

print("=== TEXT BLOCKS (y range : text) ===")
for b in page.get_text("blocks"):
    x0, y0, x1, y1, txt = b[0], b[1], b[2], b[3], b[4]
    t = txt.strip().replace("\n", " ")
    if t:
        print("  y=%6.0f-%6.0f x=%6.0f-%6.0f: %s" % (y0, y1, x0, x1, t[:60]))

print()
print("=== IMAGES (xref, rect, size) ===")
imgs = []
for img in page.get_images(full=True):
    xref = img[0]
    rects = page.get_image_rects(xref)
    d = doc.extract_image(xref)
    for r in rects:
        info = dict(xref=xref, x0=r.x0, y0=r.y0, x1=r.x1, y1=r.y1,
                    w=d["width"], h=d["height"], ext=d["ext"])
        imgs.append(info)
        print("  xref=%s rect=(%.0f,%.0f,%.0f,%.0f) %dx%d %s" %
              (xref, r.x0, r.y0, r.x1, r.y1, d["width"], d["height"], d["ext"]))

# Save images with positional names for later use
out = r"C:\phase 1 (1)\public\transparency-legal-assets"
imgs_sorted = sorted(imgs, key=lambda i: (round(i["y0"]), round(i["x0"])))
for i, info in enumerate(imgs_sorted, 1):
    d = doc.extract_image(info["xref"])
    fn = "pdf_logo_%d.png" % i
    with open(os.path.join(out, fn), "wb") as f:
        f.write(d["image"])
    print("saved", fn, "at y=%.0f size=%dx%d" % (info["y0"], info["w"], info["h"]))
