import os, glob, collections
from PIL import Image

def sample(path):
    img = Image.open(path).convert('RGB')
    w, h = img.size
    px = img.load()
    gold = collections.Counter(); sky = collections.Counter(); navy = collections.Counter(); base = collections.Counter()
    step = max(1, w // 600)
    for y in range(0, h, step):
        for x in range(0, w, step):
            r, g, b = px[x, y]
            if 180 <= r <= 255 and 140 <= g <= 225 and 40 <= b <= 150:
                gold[(r//8*8, g//8*8, b//8*8)] += 1
            if 0 <= r <= 90 and 110 <= g <= 200 and 200 <= b <= 255:
                sky[(r//8*8, g//8*8, b//8*8)] += 1
            if r <= 70 and g <= 90 and b <= 120 and (r+g+b) > 20:
                navy[(r//8*8, g//8*8, b//8*8)] += 1
            if r <= 20 and g in range(70,100) and b in range(130,170):
                base[(r//8*8, g//8*8, b//8*8)] += 1
    return gold.most_common(3), sky.most_common(3), navy.most_common(3), base.most_common(3)

pages = sorted(glob.glob(r'C:\phase 1 (1)\scratch\figma_pages/*.png'))
for f in pages:
    name = os.path.basename(f)
    g, s, n, b = sample(f)
    def fmt(c):
        return '#%02X%02X%02X' % c if c else None
    print('==', name)
    print('  gold :', [fmt(c) for c,_ in g])
    print('  sky  :', [fmt(c) for c,_ in s])
    print('  navy :', [fmt(c) for c,_ in n])
    print('  base :', [fmt(c) for c,_ in b])
