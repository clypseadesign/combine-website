from PIL import Image

im = Image.open(r"C:\phase 1 (1)\scratch\donate_compare\figma_page_1.png")
s = 1.5

def sample(x, y, label):
    px = im.getpixel((int(x * s), int(y * s)))
    print(label, px, "at pdf", x, y)

# form area roughly y 2770-3360, center column
# page width 1440
print("size", im.size)

# Scan gold text
sample(720, 2675, "gold tax text")
# form field around 2830
for y in range(2820, 2980, 20):
    sample(720, y, f"form y{y}")

# select amount label
sample(620, 3005, "select amount")
sample(700, 3045, "amount btn")
sample(620, 3100, "upload label")
sample(700, 3140, "upload field")

# family names
sample(180, 740, "founding family hdr")
sample(180, 765, "name line")

# discrimination para
sample(200, 1720, "discrim para")
# serving humanity
sample(200, 1935, "serving line")

# initiatives line
sample(280, 1128, "initiatives")
sample(520, 1128, "holy sabbath?")
