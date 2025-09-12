import os
import sys
import zipfile

def extract_zips(path):
    # Create output directory
    output_dir = os.path.join(os.path.dirname(path), "extracted_files")
    os.makedirs(output_dir, exist_ok=True)

    # If path is a single zip file
    if path.lower().endswith(".zip"):
        with zipfile.ZipFile(path, 'r') as zip_ref:
            zip_ref.extractall(output_dir)
            print(f"Extracted: {path} → {output_dir}")
        return

    # If path is a directory, process all zip files inside
    if os.path.isdir(path):
        for file in os.listdir(path):
            if file.lower().endswith(".zip"):
                file_path = os.path.join(path, file)
                with zipfile.ZipFile(file_path, 'r') as zip_ref:
                    extract_dir = os.path.join(output_dir, os.path.splitext(file)[0])
                    os.makedirs(extract_dir, exist_ok=True)
                    zip_ref.extractall(extract_dir)
                    print(f"Extracted: {file_path} → {extract_dir}")
    else:
        print("Invalid path. Provide a zip file or directory containing zip files.")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python extract_zips.py <file-or-folder-path>")
    else:
        extract_zips(sys.argv[1])
