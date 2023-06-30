/** @type {import('tailwindcss').Config} */
module.exports = {
  darkTheme: 'class',
  content: [
    "./public/index.html",
    "./src/**/*.{vue, js, jsx, ts, tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

