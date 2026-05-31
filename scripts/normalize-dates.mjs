// frontmatter의 date 값이 KST 의도로 적혀 있으나 "Z" (UTC) 표기로 저장돼 있어
// 표시 시 하루 밀려 보이는 문제를 보정한다.
// 예: "2026-05-16T21:31:00.000Z" -> "2026-05-16T21:31:00+09:00"
// 멱등하므로 반복 실행해도 안전하다.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOTS = [
  'src/content/weekly',
  'src/content/blog',
  'src/content/archive',
];

const RE = /^(date:\s*")(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})(?:\.\d+)?Z(")\s*$/m;

let scanned = 0;
let updated = 0;
const skipped = [];

for (const root of ROOTS) {
  let entries;
  try {
    entries = readdirSync(root);
  } catch (e) {
    if (e.code === 'ENOENT') continue;
    throw e;
  }
  for (const name of entries) {
    if (!/\.mdx?$/.test(name)) continue;
    scanned++;
    const fp = join(root, name);
    const before = readFileSync(fp, 'utf8');
    if (!RE.test(before)) {
      skipped.push(fp);
      continue;
    }
    const after = before.replace(RE, '$1$2+09:00$3');
    if (after !== before) {
      writeFileSync(fp, after);
      updated++;
    }
  }
}

console.log(`scanned: ${scanned}, updated: ${updated}, skipped: ${skipped.length}`);
if (skipped.length > 0) {
  console.log('files without a matching `date: "...Z"` frontmatter:');
  for (const fp of skipped) console.log(`  ${fp}`);
}
