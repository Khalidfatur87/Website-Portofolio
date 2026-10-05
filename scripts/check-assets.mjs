import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join, resolve, relative, sep } from 'node:path';

const pages = ['index.html', 'HTML/main.html'];
const root = process.cwd();

function existsExact(absPath) {
  if (!existsSync(absPath)) return false;
  const parts = relative(root, absPath).split(sep);
  let dir = root;
  for (const part of parts) {
    if (!readdirSync(dir).includes(part)) return false;
    dir = join(dir, part);
  }
  return true;
}

function refsIn(html) {
  const refs = new Set();
  for (const m of html.matchAll(/\b(?:src|href)\s*=\s*["']([^"']+)["']/gi)) refs.add(m[1]);
  for (const m of html.matchAll(/openModal\(\s*['"]([^'"]+)['"]\s*\)/g)) refs.add(m[1]);
  return [...refs];
}

const isLocal = (r) => !/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(r);

let errors = 0;
for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  for (const ref of refsIn(html).filter(isLocal)) {
    const clean = decodeURI(ref.split('#')[0].split('?')[0]);
    if (!clean) continue;
    const target = resolve(root, dirname(page), clean);
    if (!existsExact(target)) {
      console.error(`✗ ${page}: missing or wrong-case file -> ${ref}`);
      errors++;
    }
  }
}

if (errors) {
  console.error(`\n${errors} broken reference(s).`);
  process.exit(1);
}
console.log('✓ All local asset references exist.');
