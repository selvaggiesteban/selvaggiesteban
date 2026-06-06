import os
import zipfile
import xml.etree.ElementTree as ET

def extract_text_from_docx(docx_path):
    try:
        with zipfile.ZipFile(docx_path) as docx:
            xml_content = docx.read('word/document.xml')
            tree = ET.XML(xml_content)
            # Namespace for Word XML
            WORD_NAMESPACE = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
            paragraphs = []
            for paragraph in tree.iter(WORD_NAMESPACE + 'p'):
                texts = [node.text for node in paragraph.iter(WORD_NAMESPACE + 't') if node.text]
                if texts:
                    paragraphs.append(''.join(texts))
            return '\n'.join(paragraphs)
    except Exception as e:
        return f"Error extracting {docx_path}: {e}"

def extract_text_from_pptx(pptx_path):
    try:
        with zipfile.ZipFile(pptx_path) as pptx:
            slide_files = [f for f in pptx.namelist() if f.startswith('ppt/slides/slide') and f.endswith('.xml')]
            text = []
            for slide_file in slide_files:
                xml_content = pptx.read(slide_file)
                tree = ET.XML(xml_content)
                # Namespace for PowerPoint XML
                DRAWING_NAMESPACE = '{http://schemas.openxmlformats.org/drawingml/2006/main}'
                slide_text = []
                for node in tree.iter(DRAWING_NAMESPACE + 't'):
                    if node.text:
                        slide_text.append(node.text)
                if slide_text:
                    text.append(' '.join(slide_text))
            return '\n\n'.join(text)
    except Exception as e:
        return f"Error extracting {pptx_path}: {e}"

docs_dir = "../Documentos varios"
if not os.path.exists(docs_dir):
    docs_dir = "../../Documentos varios"
if not os.path.exists(docs_dir):
    docs_dir = "../../../../Documentos varios"

if not os.path.exists(docs_dir):
    print("Could not find 'Documentos varios' folder.")
else:
    print(f"Reading from: {docs_dir}")
    for filename in os.listdir(docs_dir):
        filepath = os.path.join(docs_dir, filename)
        if filename.endswith(".docx"):
            text = extract_text_from_docx(filepath)
            with open(filename + ".txt", "w", encoding="utf-8") as f:
                f.write(text)
            print(f"Extracted: {filename}")
        elif filename.endswith(".pptx"):
            text = extract_text_from_pptx(filepath)
            with open(filename + ".txt", "w", encoding="utf-8") as f:
                f.write(text)
            print(f"Extracted: {filename}")