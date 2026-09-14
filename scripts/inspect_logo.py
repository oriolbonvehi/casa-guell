from PIL import Image
import numpy as np

im = Image.open("/app/frontend/public/brand/logo_official.png").convert("RGB")
arr = np.array(im)
h, w, _ = arr.shape
print("size", w, h)
# corners and center samples
pts = {
  "top-left": (10,10),
  "top-right": (w-10,10),
  "bottom-left": (10,h-10),
  "center": (w//2, h//2),
  "far-left-mid": (10, h//2),
}
for name,(x,y) in pts.items():
    print(name, arr[y,x])
# histogram of brightness
gray = arr.mean(axis=2)
print("min/mean/max brightness", gray.min(), round(gray.mean(),1), gray.max())
# fraction very bright
print("frac >235:", round((gray>235).mean(),3))
print("frac <60:", round((gray<60).mean(),3))
# sample a horizontal line through the black word (approx y where Guell is)
