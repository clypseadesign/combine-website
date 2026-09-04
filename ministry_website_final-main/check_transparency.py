import fitz
import os

pdf_dir = r"C:\Users\Vishaldo\Downloads\phase 1 (2)"
files = os.listdir(pdf_dir)
pdf_path = None
for f in files:
    if 'transparency' in f.lower() or 'legal' in f.lower():
        pdf_path = os.path.join(pdf_dir, f)
        print(f"Found: {repr(f)}")
        break

if pdf_path:
    doc = fitz.open(pdf_path)
    print(f"Pages: {len(doc)}")
    for i in range(len(doc)):
        page = doc.load_page(i)
        print(f"\n--- Page {i+1} ---")
        text = page.get_text()
        print(text)
        
        # Check for images
        images = page.get_images()
        print(f"Images on page: {len(images)}")
    doc.close()
else:
    print("Transparency PDF not found")
