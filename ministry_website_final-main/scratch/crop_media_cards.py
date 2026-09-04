from PIL import Image
import os

im = Image.open(r"C:\phase 1 (1)\scratch\media_compare\figma_page_1.png")
out = r"C:\phase 1 (1)\scratch\media_compare"
s = 2

# cards at 1x: (98,781), (758,781), (98,1115), (758,1115), (428,1449) size 584x234
cards = [
    ("c1", 98, 781),
    ("c2", 758, 781),
    ("c3", 98, 1115),
    ("c4", 758, 1115),
    ("c5", 428, 1449),
]
for name, x, y in cards:
    im.crop((x*s, y*s, (x+584)*s, (y+234)*s)).save(os.path.join(out, f"{name}.png"))
    # icon 57x57 at +35,+30
    ix, iy = x+35, y+30
    im.crop((ix*s, iy*s, (ix+57)*s, (iy+57)*s)).save(os.path.join(out, f"{name}_icon.png"))

# intro heading region
im.crop((300, 960, 2580, 1340)).save(os.path.join(out, "intro.png"))
print("card crops saved")
