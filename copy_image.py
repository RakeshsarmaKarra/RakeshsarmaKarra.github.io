import shutil
import os

# Source path (Artifacts)
src = r"C:\Users\berke\.gemini\antigravity\brain\5e0c0187-bf75-4b53-99cd-9fe8946d0cdd\uploaded_image_1768931013146.jpg"

# Destination path (Relative to CWD)
dst_dir = "images"
dst = os.path.join(dst_dir, "profile.jpg")

print(f"Current Directory: {os.getcwd()}")
print(f"Source: {src}")
print(f"Destination: {dst}")

if not os.path.exists(dst_dir):
    print("Creating images directory...")
    os.makedirs(dst_dir)

try:
    if not os.path.exists(src):
        print("CRITICAL: Source file does not exist!")
    else:
        shutil.copy2(src, dst)
        print("Copy successful.")
except Exception as e:
    print(f"Error copying file: {e}")

# Verification
if os.path.exists(dst):
    print(f"VERIFIED: File exists at {dst}, Size: {os.path.getsize(dst)} bytes")
else:
    print("VERIFIED: File NOT found at destination.")
