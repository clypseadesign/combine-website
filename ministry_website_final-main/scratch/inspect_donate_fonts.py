import sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
from collections import Counter
import pymupdf as fitz

pdf = r"C:\phase 1 (1)\figma design of phase 1\donate us.pdf"
doc = fitz.open(pdf)
page = doc[0]

fonts = Counter()
print("===== span font + sample =====")
for b in page.get_text("dict")["blocks"]:
    if b.get("type") != 0:
        continue
    for line in b.get("lines", []):
        y = None
        chunks = []
        for span in line.get("spans", []):
            t = span.get("text", "")
            if not t.strip():
                continue
            bbox = span.get("bbox", [0, 0, 0, 0])
            if bbox[1] < 580 or bbox[1] > 2000:
                continue
            y = bbox[1]
            font = span.get("font")
            fonts[font] += 1
            color = hex(span.get("color", 0))
            chunks.append(f"[{font}|c={color}|sz={round(span.get('size',0),1)}]{t}")
        if chunks:
            print(f"y={y:7.1f} " + " ".join(chunks)[:400])

print("\nfont counts", fonts)

# Also dump fonts used in support family section 4126-4700
print("\n===== support family 4100-4700 =====")
for b in page.get_text("dict")["blocks"]:
    if b.get("type") != 0:
        continue
    for line in b.get("lines", []):
        y = None
        chunks = []
        for span in line.get("spans", []):
            t = span.get("text", "")
            if not t:
                continue
            bbox = span.get("bbox", [0, 0, 0, 0])
            if bbox[1] < 4100 or bbox[1] > 4700:
                continue
            y = bbox[1]
            font = span.get("font")
            chunks.append(f"[{font}]{t}")
        if chunks:
            print(f"y={y:7.1f} " + "".join(chunks)[:500])

# fonts objects
print("\n===== page fonts =====")
for f in page.get_fonts(full=True):
    print(f)

doc.close()
