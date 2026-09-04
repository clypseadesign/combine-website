import fitz, os, glob

folder = r"C:\phase 1 (1)\figma design of phase 1"
src = glob.glob(os.path.join(folder, "Transparency*"))[0]
print("source:", src)
out = r"C:\phase 1 (1)\scratch\transparency_pdf_render"
os.makedirs(out, exist_ok=True)

doc = fitz.open(src)
print("pages:", doc.page_count)
for i, page in enumerate(doc):
    txt = page.get_text()
    with open(os.path.join(out, f"page_{i+1}.txt"), "w", encoding="utf-8") as f:
        f.write(txt)
    pix = page.get_pixmap(matrix=fitz.Matrix(2.2, 2.2))
    pix.save(os.path.join(out, f"page_{i+1}.png"))
print("done")
