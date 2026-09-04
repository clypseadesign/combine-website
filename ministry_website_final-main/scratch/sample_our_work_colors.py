from PIL import Image

im = Image.open(r"C:\phase 1 (1)\scratch\our_work_compare\figma_page_1.png")
# sample heading TRANSFORMING and OUR GLOBAL IMPACT and a stat number
w, h = im.size
# heading around y after hero ~ 0.18
pixels = [
    ("intro heading", (w//2, int(h*0.19))),
    ("body text", (w//2, int(h*0.22))),
    ("card title", (int(w*0.25), int(h*0.48))),
    ("impact heading", (w//2, int(h*0.78))),
    ("stat num", (int(w*0.22), int(h*0.82))),
    ("stat label", (int(w*0.22), int(h*0.845))),
    ("nav bar", (w//2, 140)),
]
for name, (x,y) in pixels:
    print(name, x, y, im.getpixel((x,y)))
