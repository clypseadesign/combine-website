import os

base = r"C:\phase 1 (1)"
assets = os.path.join(base, "public", "transparency-legal-assets")

# Rename the extracted registration-section image to a proper .jpg
src_img = os.path.join(assets, "pdf_logo_8.png")
dst_img = os.path.join(assets, "registration_boxes.jpg")
if os.path.exists(src_img) and not os.path.exists(dst_img):
    os.rename(src_img, dst_img)
    print("renamed image ->", dst_img)
else:
    print("image already present or missing:", os.path.exists(src_img), os.path.exists(dst_img))

path = os.path.join(base, "src", "pages", "TransparencyLegal.jsx")
s = open(path, encoding="utf-8").read()

marker = "display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'"
i = s.index(marker)
div_open_start = s.rfind("<div", 0, i)
donors = s.index("{/* Donors Info Sections */}")
outer_close = s.rfind("</div>", 0, donors)
grid_close = s.rfind("</div>", 0, outer_close)

new = (
    "\n                <img\n"
    "                  src={asset('/transparency-legal-assets/registration_boxes.jpg')}\n"
    "                  alt=\"Government of India \u2013 Registrations & Approvals\"\n"
    "                  style={{ width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}\n"
    "                />\n"
)

s2 = s[:div_open_start] + new + s[grid_close + len("</div>"):]
open(path, "w", encoding="utf-8").write(s2)
print("edited JSX: replaced grid block (chars %d..%d)" % (div_open_start, grid_close))
