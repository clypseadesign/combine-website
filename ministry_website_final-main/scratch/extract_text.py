import os, glob, pymupdf as fitz

pdf_dir = r'C:\phase 1 (1)\figma design of phase 1'
out = r'C:\phase 1 (1)\scratch\figma_text'
os.makedirs(out, exist_ok=True)

files = ['homepage.pdf','about us.pdf','our work.pdf','donate us.pdf','contact us.pdf',
         'GET INVOLVED.pdf','media & resource.pdf','PERSONAL GRATITUDE and SINCERE THANKS.pdf',
         'UNIT and INITIATIVES.pdf']
files += glob.glob(os.path.join(pdf_dir, 'Transparency*'))
files += glob.glob(os.path.join(pdf_dir, 'Group*'))

for n in files:
    p = os.path.join(pdf_dir, n)
    if not os.path.exists(p):
        continue
    doc = fitz.open(p)
    txt = []
    for pg in doc:
        txt.append(pg.get_text('text'))
    doc.close()
    base = os.path.basename(n).replace(' ', '_').replace('&','and').replace('.pdf','')
    with open(os.path.join(out, base + '.txt'), 'w', encoding='utf-8') as f:
        f.write('\n'.join(txt))
    print('wrote', base, 'chars', sum(len(t) for t in txt))
