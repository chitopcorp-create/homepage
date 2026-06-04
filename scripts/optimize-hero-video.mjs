/**
 * hero.mp4 → faststart H.264 (고화질) + hero-poster.webp
 * 실행: npm run optimize:hero-video
 */
import { execFileSync } from 'node:child_process';
import { copyFileSync, existsSync, renameSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import ffmpegPath from 'ffmpeg-static';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const input = join(root, 'public/videos/hero.mp4');
const output = join(root, 'public/videos/hero.optimized.mp4');
const backup = join(root, 'public/videos/hero.original.mp4');
const posterJpg = join(root, 'public/images/hero-poster.jpg');
const posterWebp = join(root, 'public/images/hero-poster.webp');

if (!ffmpegPath || !existsSync(ffmpegPath)) {
  console.error('ffmpeg-static not found. Run: npm install');
  process.exit(1);
}

if (!existsSync(input)) {
  console.error('Missing:', input);
  process.exit(1);
}

const run = (args) => execFileSync(ffmpegPath, args, { stdio: 'inherit' });

console.log('Encoding hero.mp4 (H.264 high, CRF 18, faststart)...');
run([
  '-y',
  '-i',
  input,
  '-c:v',
  'libx264',
  '-profile:v',
  'high',
  '-level',
  '4.1',
  '-pix_fmt',
  'yuv420p',
  '-crf',
  '18',
  '-preset',
  'slow',
  '-movflags',
  '+faststart',
  '-an',
  output,
]);

console.log('Poster frame...');
run(['-y', '-ss', '0.5', '-i', input, '-frames:v', '1', '-update', '1', '-q:v', '2', posterJpg]);

await sharp(posterJpg).webp({ quality: 88 }).toFile(posterWebp);
console.log('Poster:', posterWebp);

if (!existsSync(backup)) {
  copyFileSync(input, backup);
  console.log('Backup:', backup);
}

renameSync(output, input);
console.log('Replaced:', input);
