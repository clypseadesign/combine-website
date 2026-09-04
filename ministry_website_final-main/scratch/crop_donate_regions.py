from PIL import Image
import os

im = Image.open(r"C:\phase 1 (1)\scratch\donate_compare\figma_page_1.png")
out = r"C:\phase 1 (1)\scratch\donate_compare"
s = 1.5

regions = [
    ("hero_intro", 0, 450, 1440, 750),
    ("family_list", 0, 700, 1440, 900),
    ("mid_heading", 0, 1380, 1440, 1520),
    ("quote", 0, 1860, 1440, 2100),
    ("mission", 0, 2050, 1440, 2530),
    ("scan", 0, 2550, 1440, 3450),
    ("foreign", 0, 3480, 1440, 4080),
    ("support_family", 0, 4080, 1440, 4750),
    ("bank", 0, 4680, 1440, 5320),
]
for name, x0, y0, x1, y1 in regions:
    im.crop((int(x0*s), int(y0*s), int(x1*s), int(y1*s))).save(os.path.join(out, f"r_{name}.png"))
    print("saved", name)
print("size", im.size)
