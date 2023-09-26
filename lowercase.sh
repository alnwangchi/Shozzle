#!/bin/bash

# Specify the directory path where you want to convert filenames to lowercase
directory_path="src/pages/posts"

# Change to the specified directory
cd "$directory_path" || exit

# Use the find command to locate all files and directories in the current directory
# -type f: Only select regular files (not directories)
find . -type f | while read -r file; do
  # Convert the filename to lowercase
  newname=$(basename "$file" | tr '[:upper:]' '[:lower:]')
  
  # Check if the new name is different from the old name
  if [ "$newname" != "$(basename "$file")" ]; then
    # Rename the file to lowercase
    mv "$file" "$(dirname "$file")/$newname"
    echo "Renamed: $file -> $(dirname "$file")/$newname"
  fi
done

echo "All files renamed to lowercase in $directory_path"