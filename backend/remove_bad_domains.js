import fs from 'fs';

const path = './controllers/randomController.js';

let fileContent = fs.readFileSync(path, 'utf8');

const match = fileContent.match(/const uselessWebsites = \[([\s\S]*?)\];/);
if (!match) {
  console.log('Array not found');
  process.exit(1);
}

const lines = match[1].split('\n');
const urls = [];
const aliveUrls = [];

for (const line of lines) {
  const urlMatch = line.match(/"([^"]+)"/);
  if (urlMatch) {
    const url = urlMatch[1];
    // theuselessweb.site and anotheruseless.website are dead domains returning parking pages
    if (url.includes('theuselessweb.site') || url.includes('anotheruseless.website')) {
        console.log(`Removed dead website: ${url}`);
    } else {
        aliveUrls.push(`    "${url}"`);
    }
  }
}

const newArrayString = `const uselessWebsites = [\n${aliveUrls.join(',\n')}\n];`;

const newFileContent = fileContent.replace(/const uselessWebsites = \[([\s\S]*?)\];/, newArrayString);
fs.writeFileSync(path, newFileContent);
console.log('Cleaned up dead websites. Remaining URLs:', aliveUrls.length);
