import fitz
import os

pdf_path = r"c:\Users\karth\Downloads\ministry_website-main\figma design of phase 1\PERSONAL GRATITUDE & SINCERE THANKS.pdf"
output_dir = r"c:\Users\karth\Downloads\ministry_website-main\scratch\personal_gratitude"
os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)
print(f"Number of pages: {len(doc)}")

for i in range(len(doc)):
    page = doc.load_page(i)
    rect = page.rect
    print(f"Page {i+1} dimensions: {rect.width} x {rect.height}")
    pix = page.get_pixmap(dpi=150)
    img_path = os.path.join(output_dir, f"personal_gratitude_page_{i+1}.png")
    pix.save(img_path)
    print(f"Saved: {img_path}")

text_path = os.path.join(output_dir, "personal_gratitude_text.txt")
with open(text_path, 'w', encoding='utf-8') as f:
    for i in range(len(doc)):
        page = doc.load_page(i)
        f.write(f"=== PAGE {i+1} ===\n")
        f.write(page.get_text())
        f.write("\n\n")

print(f"Saved text: {text_path}")
doc.close()
