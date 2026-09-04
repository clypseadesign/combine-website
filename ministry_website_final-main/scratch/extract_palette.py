import os, glob, collections
from PIL import Image

pages_dir = r'C:\phase 1 (1)\scratch\figma_pages'

def top_colors(path, n=15):
    img = Image.open(path).convert('RGB')
    # downscale for speed
    w, h = img.size
    small = img.resize((min(w, 400), int(h * 400 / w))) if w > 400 else img
    cnt = collections.Counter(small.getdata())
    return cnt.most_common(n)

for f in sorted(glob.glob(pages_dir + '/*.png')):
    name = os.path.basename(f)
    print('==', name)
    for (r, g, b), c in top_colors(f):
        print(f'   #{r:02X}{g:02X}{b:02X}  count={c}')
