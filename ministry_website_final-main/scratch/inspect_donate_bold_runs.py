import sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import pymupdf as fitz

pdf = r"C:\phase 1 (1)\figma design of phase 1\donate us.pdf"
doc = fitz.open(pdf)
page = doc[0]

# Reconstruct runs by font across body
BOLD_FONTS = {"Type3 (1005 0 R)", "Type3 (3051 0 R)"}
# We'll print 1005 runs specifically, and long 3051 runs

def collect(y0, y1, only=None):
    runs = []
    for b in page.get_text("dict")["blocks"]:
        if b.get("type") != 0:
            continue
        for line in b.get("lines", []):
            buf_font = None
            buf = ""
            ly = None
            for span in line.get("spans", []):
                t = span.get("text", "")
                if not t:
                    continue
                bbox = span.get("bbox", [0, 0, 0, 0])
                if bbox[1] < y0 or bbox[1] > y1:
                    continue
                font = span.get("font")
                ly = bbox[1]
                if buf_font is None:
                    buf_font = font
                    buf = t
                elif font == buf_font:
                    buf += t
                else:
                    runs.append((ly, buf_font, buf))
                    buf_font = font
                    buf = t
            if buf:
                runs.append((ly, buf_font, buf))
    return runs

print("===== FONT 1005 (likely true bold) =====")
for y, font, t in collect(480, 5300):
    if "1005" in font and t.strip():
        print(f"y={y:7.1f} {t!r}")

print("\n===== FONT 3051 runs longer than 2 chars =====")
for y, font, t in collect(480, 5300):
    if "3051" in font and len(t.strip()) > 2:
        print(f"y={y:7.1f} {t!r}")

print("\n===== Mixed reconstruction support family =====")
# print with ** around 1005
for y, font, t in collect(4188, 4700):
    if not t.strip():
        continue
    tag = "BOLD" if "1005" in font else ("SEMI" if "3051" in font else "reg")
    print(f"y={y:7.1f} [{tag}] {t!r}")

doc.close()
