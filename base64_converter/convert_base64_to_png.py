import base64
import os
import json

def convert_base64_to_png(base64_list, output_dir="output"):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        print(f"Created directory: {output_dir}")

    for idx, b64_string in enumerate(base64_list):
        try:
            # Handle standard data URL format (data:image/png;base64,...)
            if "," in b64_string:
                header, b64_string = b64_string.split(",", 1)
            
            # Pad the base64 string if necessary
            missing_padding = len(b64_string) % 4
            if missing_padding:
                b64_string += '=' * (4 - missing_padding)

            image_data = base64.b64decode(b64_string)
            file_name = f"image_{idx + 1}.png"
            file_path = os.path.join(output_dir, file_name)
            
            with open(file_path, "wb") as f:
                f.write(image_data)
            print(f"Saved: {file_path}")
        except Exception as e:
            print(f"Error processing image {idx + 1}: {e}")

if __name__ == "__main__":
    # Example usage:
    # python convert_base64_to_png.py
    # This script expects a file named 'input_base64.json' containing a list of strings.
    # [ "base64_str_1", "base64_str_2", ... ]

    input_file = "input_base64.json"
    if os.path.exists(input_file):
        with open(input_file, "r") as f:
            data = json.load(f)
            if isinstance(data, list):
                convert_base64_to_png(data)
            else:
                print("Error: JSON must contain a list of base64 strings.")
    else:
        print(f"No {input_file} found. Create it with a list of base64 strings to convert.")
        print("Example JSON format: [\"data:image/png;base64,iVBORw...\", ...]")
