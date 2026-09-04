import os
import pymupdf as fitz

pdf = r"C:\phase 1 (1)\figma design of phase 1\our work.pdf"
out_dir = r"C:\phase 1 (1)\scratch\our_work_compare"
os.makedirs(out_dir, exist_ok=True)

doc = fitz.open(pdf)
print("pages", doc.page_count)
for i, page in enumerate(doc):
    print("size", page.rect)
    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
    dest = os.path.join(out_dir, f"figma_page_{i+1}.png")
    pix.save(dest)
    print("saved", dest, pix.width, pix.height)
doc.close()
