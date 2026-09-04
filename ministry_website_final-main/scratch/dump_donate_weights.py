import sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import pymupdf as fitz

pdf = r"C:\phase 1 (1)\figma design of phase 1\donate us.pdf"
doc = fitz.open(pdf)
page = doc[0]

# F1 3525 regular body, F2 3051 + F6 1005 appear heavier
BOLD = {3051, 1005}

print("===== reconstructed body with **bold** by font xref =====")
for b in page.get_text("dict")["blocks"]:
    if b.get("type") != 0:
        continue
    for line in b.get("lines", []):
        y = None
        parts = []
        for span in line.get("spans", []):
            t = span.get("text", "")
            if not t:
                continue
            bbox = span.get("bbox", [0, 0, 0, 0])
            y = bbox[1]
            font = span.get("font", "")
            xref = None
            if "(" in font:
                try:
                    xref = int(font.split("(")[1].split()[0])
                except Exception:
                    xref = None
            is_bold = xref in BOLD
            parts.append((t, is_bold, xref, round(span.get("size", 0), 1)))
        if not parts or y is None or y < 480 or y > 5300:
            continue
        out = []
        for t, is_bold, xref, sz in parts:
            if is_bold:
                out.append(f"**{t}**")
            else:
                out.append(t)
        print(f"y={y:7.1f} sz={parts[0][3]:5.1f} xref={parts[0][2]} | {''.join(out)}")

doc.close()
