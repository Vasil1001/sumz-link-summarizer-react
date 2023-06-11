/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        supreme: ['Supreme','sans-serif'],

        satoshi: ['Satoshi','sans-serif'],
        outfit: ['Outfit, sans-serif'],
        generalsans: ['General Sans','sans-serif'],
        chillax: ['Chillax','sans-serif'],
        inter: ['Inter','sans-serif'],
        noto: ['Noto Sans','sans-serif'],
        outfit: ['Outfit','sans-serif'],
      }
    },
  },
  plugins: [],
}