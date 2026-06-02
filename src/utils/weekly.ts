const LINK_RE = /\[([^\]]+)\]\([^)]*\)/g;
const HEADING_RE = /^###\s+(.+?)\s*$/;

/**
 * weekly 마크다운 본문에서 각 글의 제목(### 헤딩)을 뽑아낸다.
 * `### [제목](링크)` 형태의 링크 마크다운은 제목 텍스트만 남긴다.
 */
export function extractArticlePreview(body: string, limit = 2) {
  const titles: string[] = [];

  for (const line of body.split('\n')) {
    const match = line.match(HEADING_RE);
    if (!match) continue;

    const text = match[1]
      .replace(LINK_RE, '$1')
      .replace(/[*_`]/g, '')
      .trim();
    if (text) titles.push(text);
  }

  return {
    titles: titles.slice(0, limit),
    total: titles.length,
  };
}
