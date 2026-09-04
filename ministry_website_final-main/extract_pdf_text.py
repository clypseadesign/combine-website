import fitz
import os

pdf_dir = r"C:\Users\Vishaldo\Downloads\phase 1 (2)"
output_dir = r"c:\Users\Vishaldo\Downloads\phase 1 (1)\scratch\pdf_text"
os.makedirs(output_dir, exist_ok=True)

pdfs = [
    "homepage.pdf",
    "about us.pdf",
    "our work.pdf",
    "donate us.pdf",
    "contact us.pdf",
    "GET INVOLVED.pdf",
    "media & resource.pdf",
    "Transparency & Legal .pdf",
    "PERSONAL GRATITUDE & SINCERE THANKS.pdf",
    "UNIT & INITIATIVES.pdf",
]

for pdf_name in pdfs:
    pdf_path = os.path.join(pdf_dir, pdf_name)
    if not os.path.exists(pdf_path):
        print(f"Missing: {pdf_path}")
        continue
    
    doc = fitz.open(pdf_path)
    base_name = os.path.splitext(pdf_name)[0].replace(" ", "_").replace("&", "and")
    
    for i in range(len(doc)):
        page = doc.load_page(i)
        text = page.get_text()
        txt_path = os.path.join(output_dir, f"{base_name}_page_{i+1}.txt")
        with open(txt_path, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f"Saved: {txt_path}")
    
    doc.close()

print("Done extracting all PDF text.")
