import sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import pymupdf as fitz

pdf = r"C:\phase 1 (1)\figma design of phase 1\donate us.pdf"
doc = fitz.open(pdf)
page = doc[0]

print("flags: bit 0 superscript, 1 italic, 2 serifed, 3 monospaced, 4 bold")
print()

for b in page.get_text("dict")["blocks"]:
    if b.get("type") != 0:
        continue
    for line in b.get("lines", []):
        for span in line.get("spans", []):
            t = span.get("text", "")
            if not t.strip():
                continue
            bbox = span.get("bbox", [0, 0, 0, 0])
            if bbox[1] < 480 or bbox[1] > 5300:
                continue
            flags = span.get("flags", 0)
            bold = bool(flags & 16)
            font = span.get("font", "")
            size = round(span.get("size", 0), 1)
            # print all body-ish or anything marked bold
            if bold or "bold" in font.lower() or flags:
                print(f"y={bbox[1]:7.1f} size={size:5.1f} flags={flags:3d} bold={bold} font={font} | {t!r}")

print("\n\n===== ALL SPANS WITH flags&16 or size>=18 body region =====")
for b in page.get_text("dict")["blocks"]:
    if b.get("type") != 0:
        continue
    for line in b.get("lines", []):
        parts = []
        y = None
        for span in line.get("spans", []):
            t = span.get("text", "")
            if not t:
                continue
            bbox = span.get("bbox", [0, 0, 0, 0])
            if bbox[1] < 480 or bbox[1] > 5300:
                continue
            flags = span.get("flags", 0)
            bold = bool(flags & 16)
            y = bbox[1]
            mark = "**" if bold else ""
            parts.append(f"{mark}{t}{mark}")
        if parts and y:
            print(f"y={y:7.1f} {''.join(parts)}")

doc.close()
