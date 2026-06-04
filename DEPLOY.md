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

### 도메인 연결 (www.smilesm.co.kr)

Vercel → 프로젝트 → **Settings → Domains**에서 도메인 추가 시 **도메인만** 입력합니다.

- 올바름: `www.smilesm.co.kr`, `smilesm.co.kr`
- 잘못됨: `http://www.smilesm.co.kr/` (프로토콜·슬래시 포함)

**Invalid Configuration** 은 거의 항상 **DNS가 Vercel을 가리키지 않을 때** 뜹니다.  
코드/배포가 정상이어도, 도메인 관리 화면(가비아·카페24·후이즈 등)의 레코드를 바꿔야 합니다.

#### 현재 흔한 잘못된 설정 (예시)

| 이름 | 타입 | 값 | 문제 |
|------|------|-----|------|
| www | CNAME | smilesm.co.kr | 루트로 묶여 있어 Vercel이 아닌 기존 IP로 감 |
| @ | A | 211.181.136.106 등 | 예전 호스팅 IP (Vercel 아님) |

#### Vercel에 맞게 바꿀 설정

Domains 화면에서 **Configure** 를 누르면 프로젝트별 정확한 값이 나옵니다. 일반적으로:

| 이름 | 타입 | 값 |
|------|------|-----|
| www | CNAME | `cname.vercel-dns.com` |
| @ (루트) | A | `76.76.21.21` |

- **www** 에 기존 A 레코드·다른 CNAME이 있으면 **삭제** 후 위 CNAME만 둡니다.
- **@** 에 예전 호스팅 IP A 레코드는 **삭제** 후 Vercel A만 둡니다.
- 값 끝에 `/` 를 붙이지 않습니다.
- Cloudflare 사용 시: 처음엔 **DNS only**(회색 구름)로 두고 연결 확인 후 프록시 검토.

#### 적용 후 확인

1. Vercel Domains에서 `Invalid Configuration` 이 **Valid** 로 바뀌는지 (수분~최대 48시간)
2. 브라우저에서 `https://www.smilesm.co.kr` 접속
3. PowerShell: `nslookup www.smilesm.co.kr 8.8.8.8` → `cname.vercel-dns.com` 쪽으로 보이면 정상

#### Vercel 미리보기 URL

`*.vercel.app` 주소는 배포가 되어 있어도 **도메인 DNS와 별개**입니다.  
팀 보호(로그인 필요)가 켜져 있으면 401이 나올 수 있습니다. **Production** 배포 + 커스텀 도메인 DNS가 맞아야 `www.smilesm.co.kr` 이 열립니다.

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
