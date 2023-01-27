/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF',
        secondary: '#C8C8C8',
        tertiary: '#4D4C59',
        quarter: '#9C9AB6'
      }
    },
  },
  plugins: [],
}
