/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
  extend: {
    fontFamily: {
      title: ['Syne', 'sans-serif'],   // remplace 29LT Bukra (non disponible Google Fonts)
      body: ['Archivo', 'sans-serif'], // remplace Formula
    },
  },
},
  plugins: [],
}
