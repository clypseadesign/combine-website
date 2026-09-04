import fitz
import os

pdf_dir = r"C:\Users\Vishaldo\Downloads\phase 1 (2)"
output_dir = r"public\pdf-pages"

# Find the transparency PDF
files = os.listdir(pdf_dir)
pdf_path = None
for f in files:
    if 'transparency' in f.lower() or 'legal' in f.lower():
        pdf_path = os.path.join(pdf_dir, f)
        print(f"Found: {repr(f)}")
        break

if pdf_path:
    doc = fitz.open(pdf_path)
    print(f"PDF has {len(doc)} pages")
    for i in range(len(doc)):
        page = doc.load_page(i)
        pix = page.get_pixmap(dpi=150)
        output_path = os.path.join(output_dir, "Transparency_and_Legal_page_1.png")
        pix.save(output_path)
        print(f"Saved: {output_path}")
    doc.close()
else:
    print("Transparency PDF not found")
