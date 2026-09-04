from PIL import Image

src_path = r"C:\Users\karth\Downloads\ministry_website-main\public\pdf-pages\PERSONAL_GRATITUDE_and_SINCERE_THANKS_page_1.png"
output_path = r"C:\Users\karth\Downloads\ministry_website-main\public\pdf-pages\PERSONAL_GRATITUDE_and_SINCERE_THANKS_page_1.png"

img = Image.open(src_path)
w, h = img.size
print(f"Original size: {w} x {h}")

# Crop out the top banner section
# The banner is roughly the top 1200-1400 pixels based on the screenshot
crop_top = 1300

cropped = img.crop((0, crop_top, w, h))
cropped.save(output_path)
print(f"Cropped image saved. New size: {cropped.size}")
