/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0f1f3d',
          light: '#1a3058',
          dark: '#0a1529',
        },
        gold: {
          DEFAULT: '#c9a227',
          light: '#e0bc4a',
        },
        'nav-sky': {
          DEFAULT: '#38bdf8',
          dark: '#0ea5e9',
        },
        surface: {
          muted: '#e5e8ec',
          header: '#eef1f5',
          'muted-border': '#d1d5db',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'Noto Sans KR', 'system-ui', 'sans-serif'],
        bmhanna: ['BMHANNAProOTF', 'Pretendard', 'Noto Sans KR', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
