from PIL import Image
import os

im = Image.open(r"C:\phase 1 (1)\scratch\donate_compare\figma_page_1.png")
out = r"C:\phase 1 (1)\scratch\donate_compare"
s = 1.5

crops = [
    ("p_intro", 90, 640, 1350, 730),
    ("p_family_names", 90, 720, 800, 870),
    ("p_initiatives", 90, 1110, 1350, 1200),
    ("p_quote", 90, 1905, 1350, 1960),
    ("p_support1", 90, 4188, 1350, 4300),
    ("p_support2", 90, 4370, 1350, 4460),
    ("p_bank", 90, 4718, 850, 5200),
    ("p_fcra", 500, 3688, 1100, 4000),
]
for name, x0, y0, x1, y1 in crops:
    im.crop((int(x0*s), int(y0*s), int(x1*s), int(y1*s))).save(os.path.join(out, f"{name}.png"))
print("ok")
