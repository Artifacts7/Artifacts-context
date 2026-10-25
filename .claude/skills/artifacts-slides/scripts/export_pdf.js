// Export an Artifacts HTML deck to a 16:9 PDF, one slide per page.
// Usage: node export_pdf.js <deck.html> [out.pdf]
// Needs puppeteer (npm i puppeteer if require fails). Fonts load over the network;
// if offline they fall back, so prefer the user's own browser Print-to-PDF then.
const path = require('path');
const puppeteer = require('puppeteer');

(async () => {
  const src = process.argv[2];
  if (!src) { console.error('usage: node export_pdf.js <deck.html> [out.pdf]'); process.exit(1); }
  const out = process.argv[3] || src.replace(/\.html?$/i, '') + '.pdf';
  try {
    const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto('file://' + path.resolve(src), { waitUntil: 'networkidle0', timeout: 60000 });
    await page.evaluate(async () => { if (document.fonts && document.fonts.ready) await document.fonts.ready; });
    await new Promise(r => setTimeout(r, 1500)); // let web fonts settle
    await page.pdf({ path: out, printBackground: true, preferCSSPageSize: true });
    await browser.close();
    console.log('wrote ' + out);
  } catch (e) {
    console.error('PDF_FAIL: ' + e.message);
    process.exit(1);
  }
})();
