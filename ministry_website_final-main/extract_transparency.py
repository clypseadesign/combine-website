import fitz
import os

pdf_dir = r"C:\Users\Vishaldo\Downloads\phase 1 (2)"
output_file = r"c:\Users\Vishaldo\Downloads\phase 1 (1)\scratch\transparency_text.txt"

# List all files to find the exact name
files = os.listdir(pdf_dir)
for f in files:
    if 'transparency' in f.lower() or 'legal' in f.lower():
        print(f"Found: {repr(f)}")

# Try with the exact name from list_files
pdf_path = os.path.join(pdf_dir, "Transparency & Legal \u00a0.pdf")
if os.path.exists(pdf_path):
    doc = fitz.open(pdf_path)
    with open(output_file, 'w', encoding='utf-8') as out:
        for i in range(len(doc)):
            page = doc.load_page(i)
            text = page.get_text()
            out.write(f"\n--- Page {i+1} ---\n")
            out.write(text)
    doc.close()
    print(f"Saved to {output_file}")
else:
    print(f"File not found: {pdf_path}")
    # Try all files
    for f in files:
        pdf_path = os.path.join(pdf_dir, f)
        if f.endswith('.pdf'):
            doc = fitz.open(pdf_path)
            with open(output_file, 'a', encoding='utf-8') as out:
                out.write(f"\n\n=== {f} ===\n")
                for i in range(len(doc)):
                    page = doc.load_page(i)
                    text = page.get_text()
                    out.write(f"\n--- Page {i+1} ---\n")
                    out.write(text)
            doc.close()
    print("Extracted all remaining PDFs")
