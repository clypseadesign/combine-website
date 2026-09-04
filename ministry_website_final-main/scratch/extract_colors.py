import pymupdf as fitz, os, glob, collections

pdf_dir = r'C:\phase 1 (1)\figma design of phase 1'

def hexc(c):
    if isinstance(c, int):
        r = (c >> 16) & 0xFF; g = (c >> 8) & 0xFF; b = c & 0xFF
        return f'#{r:02X}{g:02X}{b:02X}'
    return None

def walk(o, colors):
    if isinstance(o, dict):
        if 'color' in o and isinstance(o['color'], int):
            h = hexc(o['color'])
            if h:
                colors[h] += 1
        for v in o.values():
            walk(v, colors)
    elif isinstance(o, list):
        for v in o:
            walk(v, colors)

files = ['homepage.pdf','about us.pdf','our work.pdf','donate us.pdf','contact us.pdf',
         'GET INVOLVED.pdf','media & resource.pdf','PERSONAL GRATITUDE and SINCERE THANKS.pdf',
         'UNIT and INITIATIVES.pdf']
files += glob.glob(os.path.join(pdf_dir, 'Transparency*'))

for n in files:
    p = os.path.join(pdf_dir, n)
    if not os.path.exists(p):
        continue
    doc = fitz.open(p)
    colors = collections.Counter()
    for pg in doc:
        walk(pg.get_text('dict'), colors)
    print('==', n)
    for c, ct in colors.most_common(15):
        print('   ', c, ct)
    doc.close()
