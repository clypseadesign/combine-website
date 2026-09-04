import pymupdf as fitz, os, glob, collections

pdf_dir = r'C:\phase 1 (1)\figma design of phase 1'

def hexc(c):
    if isinstance(c, int):
        r = (c >> 16) & 0xFF; g = (c >> 8) & 0xFF; b = c & 0xFF
        return f'#{r:02X}{g:02X}{b:02X}'
    return None

files = ['homepage.pdf','about us.pdf','our work.pdf','donate us.pdf','contact us.pdf',
         'GET INVOLVED.pdf','media & resource.pdf','PERSONAL GRATITUDE and SINCERE THANKS.pdf',
         'UNIT and INITIATIVES.pdf']
files += glob.glob(os.path.join(pdf_dir, 'Transparency*'))

for n in files:
    p = os.path.join(pdf_dir, n)
    if not os.path.exists(p):
        continue
    doc = fitz.open(p)
    fills = collections.Counter()
    strokes = collections.Counter()
    for pg in doc:
        for d in pg.get_drawings():
            if d.get('fill') is not None:
                h = hexc(d['fill'])
                if h:
                    fills[h] += 1
            if d.get('stroke') is not None:
                h = hexc(d['stroke'])
                if h:
                    strokes[h] += 1
    print('==', n)
    print('  FILLS:')
    for c, ct in fills.most_common(12):
        print('     ', c, ct)
    print('  STROKES:')
    for c, ct in strokes.most_common(8):
        print('     ', c, ct)
    doc.close()
