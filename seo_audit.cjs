const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist/client');

if (!fs.existsSync(distDir)) {
  console.log("No dist folder found. Please build the project first.");
  process.exit(1);
}

const audit = {
  internalLinks: [],
  externalLinks: [],
  images: [],
  schemas: []
};

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      scanDir(fullPath);
    } else if (fullPath.endsWith('.html')) {
      analyzeFile(fullPath);
    }
  }
}

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = filePath.replace(distDir, '').replace(/\\/g, '/');

  // Regex to find links
  const linkRegex = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1[^>]*>(.*?)<\/a>/gi;
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    const url = match[2];
    const anchor = match[3].replace(/<[^>]+>/g, '').trim();
    if (url.startsWith('http')) {
      audit.externalLinks.push({ source: relativePath, url, anchor });
    } else if (url.startsWith('/')) {
      audit.internalLinks.push({ source: relativePath, url, anchor });
    }
  }

  // Regex to find images
  const imgRegex = /<img\s+(?:[^>]*?\s+)?src=(["'])(.*?)\1(?:[^>]*?\s+)?alt=(["'])(.*?)\3[^>]*>/gi;
  let imgMatch;
  while ((imgMatch = imgRegex.exec(content)) !== null) {
    audit.images.push({ source: relativePath, src: imgMatch[2], alt: imgMatch[4] });
  }

  // Regex to find Schema JSON-LD
  const schemaRegex = /<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let schemaMatch;
  while ((schemaMatch = schemaRegex.exec(content)) !== null) {
    try {
      const parsed = JSON.parse(schemaMatch[1]);
      audit.schemas.push({ source: relativePath, type: parsed['@type'] || 'Unknown' });
    } catch (e) {
      // JSON parse error, ignore
    }
  }
}

scanDir(distDir);

// Generate CSVs
function toCsv(data, columns) {
  if (data.length === 0) return columns.join(',') + '\n';
  const rows = data.map(row => columns.map(c => `"${(row[c] || '').toString().replace(/"/g, '""')}"`).join(','));
  return columns.join(',') + '\n' + rows.join('\n');
}

fs.writeFileSync('seo_enlazado.csv', toCsv([...audit.internalLinks, ...audit.externalLinks], ['source', 'url', 'anchor']));
fs.writeFileSync('seo_imagenes.csv', toCsv(audit.images, ['source', 'src', 'alt']));
fs.writeFileSync('seo_schemas.csv', toCsv(audit.schemas, ['source', 'type']));
fs.writeFileSync('seo_audit.json', JSON.stringify(audit, null, 2));

console.log("\n=============================================");
console.log("       REPORTE DE AUDITORÍA SEO GENERADO     ");
console.log("=============================================\n");
console.log(`- Total Enlaces Internos encontrados: ${audit.internalLinks.length}`);
console.log(`- Total Enlaces Externos encontrados: ${audit.externalLinks.length}`);
console.log(`- Total Imágenes analizadas (con alt): ${audit.images.length}`);
console.log(`- Total Esquemas JSON-LD detectados: ${audit.schemas.length}\n`);
console.log("Los archivos seo_enlazado.csv, seo_imagenes.csv, seo_schemas.csv y seo_audit.json han sido creados en la raíz del proyecto para tu revisión detallada.");
