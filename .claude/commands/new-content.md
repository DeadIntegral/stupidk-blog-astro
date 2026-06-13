---
description: 새 콘텐츠(blog/weekly/archive)에 발행 전 작업 수행 — 태깅 + 메타 description
argument-hint: "[파일 경로 …] (생략하면 새로 추가된 콘텐츠 자동 탐지)"
---

새로 추가된 콘텐츠 글에 대해 **발행 전 작업**을 수행한다: ① 태깅, ② 메타 description 작성.

철칙: **본문(article body)은 절대 수정하지 않는다.** frontmatter 의 `tags:` 와 `description:` 만 건드린다.
커밋/푸시는 사용자가 명시적으로 요청할 때만 한다.

## 1) 대상 파일 결정

- `$ARGUMENTS` 에 경로가 주어졌으면 그 파일들을 대상으로 한다.
- 없으면 git 으로 새로 추가된 콘텐츠를 찾는다:
  ```sh
  git diff --name-only --diff-filter=AM HEAD~1 HEAD -- 'src/content/**/*.md' 'src/content/**/*.mdx'
  git status --porcelain -- src/content   # 워킹트리의 미추적/수정 파일도 확인
  ```
- 후보가 0개거나 여러 개라 모호하면, 어떤 파일을 처리할지 사용자에게 먼저 확인한다.

## 2) 태깅 (CLAUDE.md 태그 컨벤션 준수)

각 대상 파일마다:

1. 본문을 읽고 **실제로 다루는** 구체 주제/기술 태그 **4~8개**를 고른다.
   - **본문에 없는 주제를 태그로 달지 말 것** (환각 금지 — 예: 언급 없는 `cloudflare`/`astro` 같은 태그 ❌).
   - 한 줄짜리 릴리스 나열보다 상세히 다룬 글의 주제를 우선한다.
2. 표기 규칙: 모두 소문자, 여러 단어는 kebab-case, 단수형, 과도하게 일반적/모호한 태그 금지
   (`web`/`etc`/`tutorial`/`tools`/`async`/`module` 등 — 전체 목록은 `scripts/normalize-tags.mjs` 의 `DROP`).
3. **기존 어휘 재사용 우선**: 새 태그를 만들기 전에 현재 쓰이는 태그를 빈도순으로 확인해 같은 개념이면 같은 표기를 쓴다.
   ```sh
   grep -rh '^tags:' src/content/*/*.md | sed 's/tags: *\[//;s/\]//;s/"//g;s/,/\n/g' \
     | sed 's/^ *//;s/ *$//' | grep -v '^$' | sort | uniq -c | sort -rn | head -60
   ```
   (동의어는 표준형으로: `nodejs`→`node`, `fonts`→`font` 처럼 기존에 쓰던 형태를 따른다.)
4. frontmatter `tags:` 에 적용한 뒤 정규화 스크립트로 표기를 통일한다(멱등):
   ```sh
   node scripts/normalize-tags.mjs <파일>
   ```

## 3) 메타 description 작성 (SEO)

각 대상 파일마다:

1. 현재 `description:` 이 제목과 동일한 플레이스홀더(예: `"dev-weekly 2026-06-13"`)이거나 비어 있으면 교체한다.
   - 이미 사람이 쓴 의미 있는 설명이면 그대로 두고, 어색하면 다듬는 선에서만 손댄다.
2. 본문 전체를 요약해 **검색결과에 노출될 자연스러운 한국어 한 문장**으로 작성한다.
   - 길이: 약 50~120자 (메타 설명 권장 범위).
   - 그 글이 다룬 핵심 주제 몇 개를 **읽히는 문장**에 자연스럽게 담는다 (키워드 나열 ❌).
   - 제목을 그대로 반복하지 않는다.
3. frontmatter `description:` 갱신.

## 4) 마무리

- 처리한 파일별로 **적용한 태그**와 **새 description** 을 표로 요약 보고한다.
- frontmatter 외에는 아무것도 바꾸지 않았음을 확인한다.
