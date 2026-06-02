# 승민종합건설(주) 홈페이지

건설회사 공식 홍보 사이트 (Astro + Tailwind)

## 페이지

| 경로 | 메뉴 |
|------|------|
| `/` | 메인 (영상 히어로 + 핵심 실적) |
| `/about` | 회사소개 |
| `/projects` | 사업실적 |
| `/media` | 홍보센터 |

## 시작하기

**Node.js LTS** 설치 후:

```powershell
npm install
npm run dev
```

## 콘텐츠 편집

`src/data/` 폴더의 JSON 파일을 수정하세요. 자세한 내용은 [CLAUDE.md](./CLAUDE.md), 배포는 [DEPLOY.md](./DEPLOY.md)를 참고하세요.

## 메인 영상

제작 완료 후 `public/videos/hero.mp4`에 넣으세요.

## 외부 공유용 HTML 초안

```powershell
npm.cmd run build:draft
```

생성 위치:

- 폴더: `draft-html/` → `index.html` 더블클릭으로 열기
- 압축: `draft-html.zip` → 통째로 전달

`draft-html/README-초안공유.txt` 참고.
