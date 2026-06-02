# 승민종합건설(주) 홈페이지 — Claude Code 가이드

## 프로젝트

- **스택**: Astro 5 + Tailwind CSS
- **폴더**: `D:\OneDrive\기타\홈페이지`
- **참고 UX**: hwenc.co.kr (레이아웃만, 브랜드/문구 복제 금지)

## 메뉴

1. 회사소개 → `/about`
2. 사업실적 → `/projects`
3. 홍보센터 → `/media`

## 콘텐츠 수정

| 파일 | 용도 |
|------|------|
| `src/data/company.json` | 회사명, 인사말, 연혁, 연락처 |
| `src/data/projects.json` | 사업실적 목록·카테고리 |
| `src/data/news.json` | 보도자료, 갤러리, SNS, 자료실 |
| `src/data/site.json` | SEO, 공지 팝업 |

## 메인 영상

`public/videos/hero.mp4` — 파일명 고정, 제작 완료 시 교체만

## 명령어

```powershell
cd "D:\OneDrive\기타\홈페이지"
npm install
npm run dev
npm run build
```

**주의**: Node.js LTS(공식 설치) 필요. Cursor 내장 node만으로는 npm 불가.

## 오시는 길 지도

- 네이버 `v5/embed` iframe은 더 이상 주소 검색이 되지 않음 → 사용하지 않음
- `src/components/NaverMap.astro`: 좌표(`company.json`의 `mapLat`/`mapLng`) + 선택적 `PUBLIC_NAVER_MAP_CLIENT_ID`
- 네이버 지도 API: `.env.example` 참고, NCP에서 Web Dynamic Map 등록 후 `.env`에 Client ID

## Cursor와 협업

- Cursor Agent가 레이아웃·페이지 구현 완료
- 이어서: 실제 사진/PDF 교체, `company.json` 실제 정보 반영, `astro.config.mjs`의 `site` URL 변경
