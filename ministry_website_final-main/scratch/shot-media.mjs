import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const out = 'C:/phase 1 (1)/scratch/media_compare';
fs.mkdirSync(out, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:3001/media-resources', { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(800);
await page.screenshot({ path: path.join(out, 'live_full.png'), fullPage: true });

const cards = await page.evaluate(() => {
  const section = document.querySelector('.card-grid-last-center');
  if (!section) return { error: 'no grid' };
  const items = [...section.children].map((el) => {
    const r = el.getBoundingClientRect();
    return {
      title: el.querySelector('h3')?.textContent?.trim(),
      x: Math.round(r.x),
      y: Math.round(r.y),
      w: Math.round(r.width),
      h: Math.round(r.height)
    };
  });
  const grid = section.getBoundingClientRect();
  return { gridW: Math.round(grid.width), items };
});
console.log(JSON.stringify(cards, null, 2));
await browser.close();
