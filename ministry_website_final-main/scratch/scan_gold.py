import os, glob, collections
from PIL import Image

def near(c, target, tol=18):
    return all(abs(a-b) <= tol for a, b in zip(c, target))

def scan(path, label):
    img = Image.open(path).convert('RGB')
    w, h = img.size
    px = img.load()
    cnt = collections.Counter()
    gold = (214, 181, 108)
    found_gold = 0
    step = max(1, w // 500)
    for y in range(0, h, step):
        for x in range(0, w, step):
            c = px[x, y]
            cnt[c] += 1
            if near(c, gold, 22):
                found_gold += 1
    top = [('#%02X%02X%02X' % c, n) for c, n in cnt.most_common(10)]
    return top, found_gold

roots = [
    r'C:\phase 1 (1)\scratch\figma_pages',
    r'C:\phase 1 (1)\figma design of phase 1 assets',
    r'C:\phase 1 (1)\figma design of phase 1',
]
seen = set()
for root in roots:
    for f in sorted(glob.glob(root + '/*.png')):
        if f in seen: continue
        seen.add(f)
        name = os.path.basename(f)
        try:
            top, g = scan(f, name)
        except Exception as e:
            print(name, 'ERR', e); continue
        print('==', name, '| gold-ish px:', g)
        for c, n in top:
            print('   ', c, n)
