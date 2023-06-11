/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi','sans-serif'],
        inter: ['Inter','sans-serif'],
        supreme: ['Supreme','sans-serif'],
        outfit: ['Outfit','sans-serif'],
      }
    },
  },
  plugins: [],
}