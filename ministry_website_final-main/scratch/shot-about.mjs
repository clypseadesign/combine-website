import { chromium } from 'playwright';
import fs from 'fs';

const out = 'C:/phase 1 (1)/scratch/about_us_compare';
fs.mkdirSync(out, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:3001/about-us', { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(800);
await page.screenshot({ path: `${out}/live_full.png`, fullPage: true });
console.log('full saved height', await page.evaluate(() => document.body.scrollHeight));
await browser.close();
