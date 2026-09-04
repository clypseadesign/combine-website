from PIL import Image
import os

src = r"C:\phase 1 (1)\scratch\our_work_compare\figma_page_1.png"
out = r"C:\phase 1 (1)\scratch\our_work_compare"
im = Image.open(src)
w, h = im.size
print("figma", w, h)

# slice full page into ~8 horizontal bands
n = 8
band = h // n
for i in range(n):
    top = i * band
    bot = h if i == n - 1 else (i + 1) * band
    im.crop((0, top, w, bot)).save(os.path.join(out, f"slice_{i+1}.png"))
    print("slice", i+1, top, bot)

# also save a slightly overlapping mid-page crop for cards area (after hero)
# hero is roughly top 18% then intro then cards
im.crop((0, int(h*0.12), w, int(h*0.32))).save(os.path.join(out, "region_intro.png"))
im.crop((0, int(h*0.28), w, int(h*0.52))).save(os.path.join(out, "region_cards1.png"))
im.crop((0, int(h*0.48), w, int(h*0.72))).save(os.path.join(out, "region_cards2.png"))
im.crop((0, int(h*0.68), w, int(h*0.88))).save(os.path.join(out, "region_impact.png"))
im.crop((0, int(h*0.85), w, h)).save(os.path.join(out, "region_footer.png"))
print("regions saved")

cards_dir = r"C:\phase 1 (1)\public\our-work"
for name in sorted(os.listdir(cards_dir)):
    p = os.path.join(cards_dir, name)
    if os.path.isfile(p):
        c = Image.open(p)
        print(name, c.size, c.mode)
