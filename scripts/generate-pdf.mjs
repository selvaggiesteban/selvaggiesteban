import puppeteer from 'puppeteer';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const url = process.argv[2] || 'https://selvaggiesteban.dev/presupuestos/05072026-gsr-abogados';
const output = resolve('presupuesto-gsr-abogados.pdf');

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

await page.evaluate(() => {
  const nav = document.querySelector('nav');
  if (nav) nav.style.display = 'none';

  const footer = document.querySelector('footer');
  if (footer) footer.style.display = 'none';

  const sections = document.querySelectorAll('.text-center.pt-8.border-t');
  sections.forEach(s => s.style.display = 'none');

  const main = document.querySelector('main');
  if (main) {
    main.style.paddingTop = '0';
    main.style.paddingBottom = '0';
  }

  document.body.style.background = 'white';
});

await page.pdf({
  path: output,
  format: 'A4',
  printBackground: true,
  margin: { top: '0', bottom: '0', left: '0', right: '0' },
  preferCSSPageSize: false,
});

await browser.close();
console.log(`PDF generado: ${output}`);
