// frontmatter 의 tags 를 프로젝트 컨벤션으로 정규화한다.
// - 소문자, 여러 단어는 kebab-case, 동의어는 표준형으로 병합
// - 너무 일반적/모호한 태그 제거, 중복 제거, 최대 8개
// - tags 선언을 inline 배열 형태로 통일 (블록형도 처리)
// 멱등하므로 반복 실행해도 안전하다.
//
// 사용:
//   node scripts/normalize-tags.mjs                 # 전체 콘텐츠 스캔
//   node scripts/normalize-tags.mjs path/to/post.md # 특정 파일만
//
// 새 글 추가 시: 본문이 실제로 다루는 구체적 주제 태그 4~8개를 달고
// 이 스크립트를 돌려 표기를 통일한다. (자세한 컨벤션은 CLAUDE.md 참고)

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOTS = ['src/content/weekly', 'src/content/blog', 'src/content/archive'];

const MAX_TAGS = 8;

// 동의어 → 표준형
const CANON = {
  nodejs: 'node', 'node.js': 'node', js: 'javascript', ecmascript: 'javascript',
  ts: 'typescript', reactjs: 'react', vuejs: 'vue', sveltejs: 'svelte',
  webassembly: 'wasm', a11y: 'accessibility', db: 'database', devtool: 'devtools',
  'web-component': 'web-components', 'view-transition': 'view-transitions',
  'source-maps': 'source-map', githubactions: 'github-actions', 'ci/cd': 'ci',
  grid: 'css-grid', fingerprinting: 'fingerprint', 'core-web-vitals': 'core-web-vital',
};

// 너무 일반적이거나 모호해 탐색에 도움이 안 되는 태그
const DROP = new Set([
  // 일반 명사/카테고리
  'web', 'etc', 'stuff', 'tutorial', 'tutorials', 'tools', 'tool', 'code', 'dev',
  'programming', 'misc', 'news', 'release', 'general', 'article', 'blog', 'guide',
  // 모호/약한 태그
  'set', 'layout', 'transform', 'https', 'viewport', 'module', 'async', 'asynchronous',
]);

function normalizeOne(raw) {
  let s = String(raw).trim().toLowerCase();
  s = s.replace(/\s+/g, '-').replace(/_/g, '-');
  return CANON[s] || s;
}

function normalizeTags(tags) {
  const seen = new Set();
  const out = [];
  for (const raw of tags) {
    const t = normalizeOne(raw);
    if (!t || DROP.has(t) || seen.has(t)) continue;
    seen.add(t);
    out.push(t);
    if (out.length >= MAX_TAGS) break;
  }
  return out;
}

// frontmatter 에서 기존 tags(inline 또는 block)를 읽어온다.
function readTags(fmLines) {
  const i = fmLines.findIndex((l) => /^tags\s*:/.test(l));
  if (i === -1) return { index: -1, end: -1, tags: [] };
  const line = fmLines[i];
  const inlineMatch = line.match(/^tags\s*:\s*\[(.*)\]\s*$/);
  if (inlineMatch) {
    const tags = inlineMatch[1]
      .split(',')
      .map((s) => s.trim().replace(/^["']|["']$/g, ''))
      .filter(Boolean);
    return { index: i, end: i, tags };
  }
  // block 형: tags:\n  - a\n  - b
  let j = i + 1;
  const tags = [];
  while (j < fmLines.length && /^\s*-\s+/.test(fmLines[j])) {
    tags.push(fmLines[j].replace(/^\s*-\s+/, '').trim().replace(/^["']|["']$/g, ''));
    j++;
  }
  return { index: i, end: j - 1, tags };
}

function processFile(fp) {
  const before = readFileSync(fp, 'utf8');
  const m = before.match(/^(---\r?\n)([\s\S]*?)(\r?\n---\r?\n?)/);
  if (!m) return 'no-frontmatter';
  const [, open, fm, close] = m;
  const body = before.slice(m[0].length);

  const lines = fm.split('\n');
  const { index, end, tags } = readTags(lines);
  if (index === -1) return 'no-tags';

  const norm = normalizeTags(tags);
  if (norm.length === 0) return 'empty-after-normalize';

  const newLine = `tags: [${norm.map((t) => `"${t}"`).join(', ')}]`;
  lines.splice(index, end - index + 1, newLine);
  const after = open + lines.join('\n') + close + body;

  if (after !== before) {
    writeFileSync(fp, after);
    return 'updated';
  }
  return 'unchanged';
}

function collectFiles(args) {
  if (args.length) return args;
  const files = [];
  for (const root of ROOTS) {
    let entries;
    try {
      entries = readdirSync(root);
    } catch (e) {
      if (e.code === 'ENOENT') continue;
      throw e;
    }
    for (const name of entries) {
      if (/\.mdx?$/.test(name)) files.push(join(root, name));
    }
  }
  return files;
}

const files = collectFiles(process.argv.slice(2));
const stat = { updated: 0, unchanged: 0, 'no-tags': 0, 'no-frontmatter': 0, 'empty-after-normalize': 0 };
for (const fp of files) stat[processFile(fp)]++;

console.log(
  `scanned: ${files.length}, updated: ${stat.updated}, unchanged: ${stat.unchanged}, ` +
    `no-tags: ${stat['no-tags']}, no-frontmatter: ${stat['no-frontmatter']}, empty: ${stat['empty-after-normalize']}`
);
