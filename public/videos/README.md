# 메인 영상

`public/videos/hero.mp4` (1920×1080 권장)

## 웹 최적화 (고화질)

원본을 넣은 뒤 프로젝트 루트에서:

```bash
npm run optimize:hero-video
```

- H.264 High, CRF 18, `faststart`(스트리밍 선명 재생)
- `public/images/hero-poster.webp` 포스터 자동 생성
- 원본 백업: `hero.original.mp4` (최초 1회)

파일명 `hero.mp4`는 변경하지 마세요.

## 모바일 메인 히어로 (사진)

- **768px 미만:** `public/images/hero-mobile.webp` (3:4 세로)
- **768px 이상:** `hero.mp4` 영상

교체 방법:

1. 원본 PNG를 `public/images/hero-mobile-source.png` 로 저장
2. `npm run prepare:hero-mobile` 실행
