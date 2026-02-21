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

for (const line of lines) {
  const urlMatch = line.match(/"([^"]+)"/);
  if (urlMatch) {
    urls.push({ original: line, url: urlMatch[1] });
  }
}

async function checkUrl(urlObj) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);
    const res = await fetch(urlObj.url, {
      method: 'GET',
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (res.ok) {
        const text = await res.text();
        const lowerText = text.toLowerCase();
        if (
             lowerText.includes('does not appear to support html5') ||
             lowerText.includes('<frameset') ||
             lowerText.includes('domain has expired') || 
             text.length < 50
        ) {
             console.log(`[DEAD (No content / frameset)] ${urlObj.url}`);
             return false;
        }
        if (text.toLowerCase().includes('domain has expired') || text.length < 50) {
             console.log(`[DEAD (Short/Expired)] ${urlObj.url}`);
             return false;
        }
        console.log(`[ALIVE] ${urlObj.url}`);
        return true;
    } else {
        console.log(`[DEAD (${res.status})] ${urlObj.url}`);
        return false;
    }
  } catch (err) {
    console.log(`[DEAD (Error)] ${urlObj.url} - ${err.message}`);
    return false;
  }
}

async function main() {
  const aliveUrls = [];

  const BATCH_SIZE = 10;
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batch = urls.slice(i, i + BATCH_SIZE);
    const results = await Promise.all(batch.map(checkUrl));
    for (let j = 0; j < results.length; j++) {
      if (results[j]) {
        aliveUrls.push(`    "${batch[j].url}"`);
      }
    }
  }

  const newArrayString = `const uselessWebsites = [\n${aliveUrls.join(',\n')}\n];`;
  
  const newFileContent = fileContent.replace(/const uselessWebsites = \[([\s\S]*?)\];/, newArrayString);
  fs.writeFileSync(path, newFileContent);
  console.log('Update complete. URLs kept:', aliveUrls.length);
}

main();
