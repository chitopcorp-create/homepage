# 배포 가이드

## 사전 요구사항

1. [Node.js LTS](https://nodejs.org/) 설치 (npm 포함)
2. 터미널 재시작 후 확인:

```powershell
node -v
npm -v
```

## 로컬 실행

```powershell
cd "D:\OneDrive\기타\홈페이지"
npm install
npm run dev
```

브라우저: http://localhost:4321

## 프로덕션 빌드

```powershell
npm run build
npm run preview
```

## Vercel 배포

1. [vercel.com](https://vercel.com) 가입
2. GitHub에 저장소 push (권장)
3. Vercel → New Project → 저장소 import
4. Framework: **Astro** (자동 감지)
5. Environment: 없음
6. Deploy

### 도메인 연결

Vercel 프로젝트 → Settings → Domains → `www.회사도메인.co.kr` 추가

### 배포 전 설정

`astro.config.mjs`의 `site`를 실제 도메인으로 변경:

```js
site: 'https://www.회사도메인.co.kr',
```

`public/robots.txt`의 Sitemap URL도 동일하게 수정.

## 콘텐츠 업데이트 후

```powershell
git add .
git commit -m "콘텐츠 업데이트"
git push
```

Vercel이 자동으로 재배포합니다.

## 메인 영상

`public/videos/hero.mp4` 추가 후 재배포.
