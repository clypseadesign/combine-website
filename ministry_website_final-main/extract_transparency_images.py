import fitz
import os

pdf_dir = r"C:\Users\Vishaldo\Downloads\phase 1 (2)"
output_dir = r"public\pdf-pages"

files = os.listdir(pdf_dir)
pdf_path = None
for f in files:
    if 'transparency' in f.lower() or 'legal' in f.lower():
        pdf_path = os.path.join(pdf_dir, f)
        print(f"Found: {repr(f)}")
        break

if pdf_path:
    doc = fitz.open(pdf_path)
    page = doc.load_page(0)
    images = page.get_images()
    print(f"Total images: {len(images)}")
    for img_index, img in enumerate(images, start=1):
        xref = img[0]
        pix = fitz.Pixmap(doc, xref)
        if pix.n > 4:
            pix = fitz.Pixmap(fitz.csRGB, pix)
        output_path = os.path.join(output_dir, f"transparency_img_{img_index}.png")
        pix.save(output_path)
        print(f"Saved: {output_path} (size: {pix.width}x{pix.height})")
    doc.close()
else:
    print("Transparency PDF not found")
