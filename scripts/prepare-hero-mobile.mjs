/**
 * 모바일 히어로 이미지 생성
 * 1) public/images/hero-mobile-source.png 를 넣거나
 * 2) node scripts/prepare-hero-mobile.mjs <원본경로>
 */
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const defaultSrc = join(root, 'public/images/hero-mobile-source.png');
const outWebp = join(root, 'public/images/hero-mobile.webp');
const outJpg = join(root, 'public/images/hero-mobile.jpg');

const src = process.argv[2] ? join(process.cwd(), process.argv[2]) : defaultSrc;

if (!existsSync(src)) {
  console.error('원본 없음:', src);
  console.error('채팅에 첨부한 PNG를 public/images/hero-mobile-source.png 로 저장 후 다시 실행하세요.');
  process.exit(1);
}

const targetW = 1200;
const targetH = 1600; // 3:4

const meta = await sharp(src).metadata();
let pipeline = sharp(src);

// 하단 워터마크 여백 제거(약 4%)
const cropH = Math.floor((meta.height ?? targetH) * 0.96);
pipeline = pipeline.extract({
  left: 0,
  top: 0,
  width: meta.width ?? targetW,
  height: cropH,
});

const resized = await pipeline
  .resize(targetW, targetH, { fit: 'cover', position: 'centre' })
  .toBuffer();

await sharp(resized).webp({ quality: 88 }).toFile(outWebp);
await sharp(resized).jpeg({ quality: 88, mozjpeg: true }).toFile(outJpg);

console.log('Saved:', outWebp, outJpg);
