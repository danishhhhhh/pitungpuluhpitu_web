/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      lightyellow: '#ffFEFBEC',
      yellow:'#ffF8D902',
      black: '#ff19191',
      white: '#ffFFFFFF',
      navy: '#ff141429',
      grey: '#ffD4D4D4',
      darkgrey: '#ff575F6E',
      lightgrey: '#ffE2E4E5',
      red: '#ffCE484B',
      green: '#ff5EC269',
      lightnavy: '#ff242639',
      bluegrey: '#ff283342',
      lightgreen: '#ffE0FAE3',
      lightred: '#ffFFD1D2',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'], 
      
    }, 
  },
  plugins: [],
}
