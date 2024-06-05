/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
 
    
  ],
  theme: {
    extend: {
      colors: {
        lightyellow: "#FEFBEC",
        yellow: "#F8D902",
        black: "#191919",
        white: "#FFFFFF",
        navy: "#141429",
        grey: "#D4D4D4",
        darkgrey: "#575F6E",
        lightgrey: "#E2E4E5",
        red: "#CE484B",
        green: "#5EC269",
        lightnavy: "#242639",
        bluegrey: "#283342",
        lightgreen: "#E0FAE3",
        lightred: "#FFD1D2",
        border: "#B0BEC5",
        bordericon: "#78909C",
      },
    },


    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
   
  
  ],
});
