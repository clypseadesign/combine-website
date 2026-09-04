import json
import re
import os

def extract_text_from_jsx(file_path):
    """Extract text content from JSX file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract text between JSX tags and strings
    texts = []
    
    # Pattern for text content in JSX
    patterns = [
        r'>\s*([^<>{}\n]+?)\s*<',  # Text between tags
        r'>\s*\n\s*([^<>{}\n]+?)\s*\n\s*<',  # Multi-line text
        r'alt=["\']([^"\']+)["\']',  # Alt text
        r'title=["\']([^"\']+)["\']',  # Title text
        r'placeholder=["\']([^"\']+)["\']',  # Placeholder text
    ]
    
    for pattern in patterns:
        matches = re.findall(pattern, content, re.MULTILINE)
        for match in matches:
            text = match.strip()
            # Filter out empty, code-like, or style content
            if text and len(text) > 2 and not text.startswith('{') and not text.startswith('$') and 'style' not in text.lower()[:10]:
                # Clean up
                text = re.sub(r'\s+', ' ', text)
                if text and text not in texts:
                    texts.append(text)
    
    return texts

def extract_structured_content():
    """Extract structured content from all page files"""
    pages_dir = 'src/pages'
    content_data = {
        "website": {
            "name": "God Cares Ministries",
            "tagline": "A Ministry Rooted in Love",
            "description": "Church ministry website for faith-based audio/visual album project"
        },
        "navigation": [
            {"label": "THE PRODUCER'S 1ST ALBUM", "path": "/"},
            {"label": "THE PRESENT CONDITION OF THE WORLD", "path": "/present-condition"},
            {"label": "HIGHLIGHTS OF ALBUM", "path": "/highlights"},
            {"label": "WHY THE ALBUM IS NEEDED?", "path": "/why-needed"},
            {"label": "WHO CAN PARTICIPATE?", "path": "/who-participate"},
            {"label": "PARTICIPANT REGISTRATION", "path": "/participant-registration"},
            {"label": "BECOME A SPONSOR", "path": "/become-sponsor"},
            {"label": "YOUR SUPPORT MATTERS", "path": "/support-matters"},
            {"label": "CREDITS & SINCERE THANKS", "path": "/credits"},
            {"label": "LISTENER TESTIMONIES", "path": "/testimonies"}
        ],
        "pages": {}
    }
    
    # Process each page file
    for filename in os.listdir(pages_dir):
        if filename.endswith('.jsx') and filename != 'ProducerAlbum.jsx':  # Skip non-responsive version
            page_name = filename.replace('.jsx', '').replace('_responsive', '')
            file_path = os.path.join(pages_dir, filename)
            
            print(f"Processing {filename}...")
            texts = extract_text_from_jsx(file_path)
            
            content_data['pages'][page_name] = {
                "filename": filename,
                "extracted_texts": texts[:50]  # Limit to first 50 meaningful texts per page
            }
    
    return content_data

# Run extraction
if __name__ == "__main__":
    print("Extracting website content...")
    data = extract_structured_content()
    
    # Save to JSON
    with open('website_content.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print(f"\\nContent extracted successfully!")
    print(f"Total pages processed: {len(data['pages'])}")
    print(f"Output saved to: website_content.json")
