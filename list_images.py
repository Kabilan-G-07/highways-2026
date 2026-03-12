import os

path = r"d:\highways website\version 5\highways\public\assets\glimpses"
files = os.listdir(path)
images = [f for f in files if f.lower().endswith(('.webp', '.jpg', '.jpeg', '.png', '.gif'))]
print(images)
