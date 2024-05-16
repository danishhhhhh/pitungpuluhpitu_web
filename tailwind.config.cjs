/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      lightyellow: '#FEFBEC',
      yellow: '#F8D902',
      black: '#1919 19',
      white: '#FFFFFF',
      navy: '#141429',
      grey: '#D4D4D4',
      darkgrey: '#575F6E',
      lightgrey: '#E2E4E5',
      red: '#CE484B',
      green: '#5EC269',
      lightnavy: '#242639',
      bluegrey: '#283342',
      lightgreen: '#E0FAE3',
      lightred: '#FFD1D2',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],

    },
  },
  plugins: [],
}
