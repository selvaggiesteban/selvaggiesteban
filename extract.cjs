const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');
const AdmZip = require('adm-zip');

async function extractDocx(filePath) {
    try {
        const result = await mammoth.extractRawText({path: filePath});
        return result.value;
    } catch (e) {
        return `Error DOCX: ${e.message}`;
    }
}

async function extractPptx(filePath) {
    try {
        const zip = new AdmZip(filePath);
        const entries = zip.getEntries();
        let text = [];
        for (const entry of entries) {
            if (entry.entryName.startsWith('ppt/slides/slide') && entry.entryName.endsWith('.xml')) {
                const xml = entry.getData().toString('utf8');
                // Basic regex to extract text inside <a:t> tags
                const matches = xml.match(/<a:t[^>]*>(.*?)<\/a:t>/g);
                if (matches) {
                    const slideText = matches.map(m => m.replace(/<[^>]+>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')).join(' ');
                    text.push(slideText);
                }
            }
        }
        return text.join('\n\n');
    } catch (e) {
        return `Error PPTX: ${e.message}`;
    }
}

async function main() {
    const docsDir = 'Documentos varios';
    const filesToRead = [
        '0. Presentación de servicio Diseño Blog.pptx',
        '0. Presentación de servicio Diseño Landing page.pptx',
        '0. Presentación de servicio Diseño Tienda Online.pptx',
        '0. Presentación de servicio Diseño web.pptx',
        '0. Presentación de servicio Redacción de artículos SEO.pptx',
        '0. Presentación de servicio SEO.pptx',
        '0.1. Pasos para cumplimentar el servicio de redacción de artículos SEO.docx',
        '0.1. Pasos para cumplimentar el servicio SEO.docx',
        'SEO On Page.docx',
        'SEO Off Page.docx',
        'Textos SEO para _Agencia de marketing digital_.docx'
    ];

    for (const file of filesToRead) {
        const fullPath = path.join(docsDir, file);
        if (!fs.existsSync(fullPath)) {
            console.log(`[NOT FOUND] ${file}`);
            continue;
        }

        let extractedText = '';
        if (file.endsWith('.docx')) {
            extractedText = await extractDocx(fullPath);
        } else if (file.endsWith('.pptx')) {
            extractedText = await extractPptx(fullPath);
        }

        const outPath = path.join(docsDir, file + '.txt');
        fs.writeFileSync(outPath, extractedText, 'utf8');
        console.log(`[EXTRACTED] ${file}`);
    }
}

main().catch(console.error);