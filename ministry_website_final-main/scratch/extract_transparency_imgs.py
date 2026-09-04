import fitz, glob, os

folder = r"C:\phase 1 (1)\figma design of phase 1"
src = glob.glob(folder + "/Transparency*")[0]
doc = fitz.open(src)
page = doc[0]
out = r"C:\phase 1 (1)\public\transparency-legal-assets"

# Map xref -> semantic filename (and correct extension from PDF)
names = {
    1704: "pdf_hero.jpg",
    1680: "pdf_logo.png",
    1692: "pdf_title.png",
    1688: "pdf_button.jpg",
    1684: "pdf_legal_right.jpg",
    1696: "pdf_legal_right2.jpg",
    1676: "pdf_registration.jpg",
}
for xref, fn in names.items():
    d = doc.extract_image(xref)
    ext = d["ext"]
    if ext == "jpeg":
        ext = "jpg"
    base, _ = os.path.splitext(fn)
    fn2 = base + "." + ext
    if fn2 != fn:
        fn = fn2
    with open(os.path.join(out, fn), "wb") as f:
        f.write(d["image"])
    print("saved", fn, "%dx%d" % (d["width"], d["height"]))

# List ALL unique image xrefs + their rects to detect any in the 4-card region (y~700-870)
print("\nALL IMAGE XREFS + RECTS:")
seen = set()
for img in page.get_images(full=True):
    xref = img[0]
    if xref in seen:
        continue
    seen.add(xref)
    rects = page.get_image_rects(xref)
    for r in rects:
        print("  xref=%s rect=(%.0f,%.0f,%.0f,%.0f)" % (xref, r.x0, r.y0, r.x1, r.y1))
