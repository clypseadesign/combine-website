import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const out = 'C:/phase 1 (1)/scratch/our_work_compare';
fs.mkdirSync(out, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:3000/our-work', { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(1000);
await page.screenshot({ path: path.join(out, 'live_full.png'), fullPage: true });
const h = await page.evaluate(() => document.body.scrollHeight);
const titles = await page.evaluate(() =>
  [...document.querySelectorAll('h3')].map((el) => el.textContent.trim())
);
console.log('height', h);
console.log('card titles', titles);
await browser.close();
