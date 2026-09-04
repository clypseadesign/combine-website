import { chromium } from 'playwright';
import fs from 'fs';

const out = 'C:/phase 1 (1)/scratch/units_compare';
fs.mkdirSync(out, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:3001/units-initiatives', { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(800);
await page.screenshot({ path: `${out}/live_full.png`, fullPage: true });
const h = await page.evaluate(() => document.body.scrollHeight);
const titles = await page.evaluate(() =>
  [...document.querySelectorAll('h2,h3')].map((el) => el.textContent.trim())
);
console.log('height', h);
console.log('headings', titles);
await browser.close();
