 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: { 
    fontFamily: {
      'sans111' : ["'Exo 2', sans-serif"], 
      'cursive' : ["'Style Script', cursive"],
      'cursive_head' : ["snellroundhandw01-scrip,cursive"],
      'sans_serif' : ["'Raleway', sans-serif"]
    },
    extend: {
      colors: {
        sans: "#EDC85D",
        darkgray: "#ADADAD",
        grayC: "#C3C3C3",
        light: "#FCFCFC",
        blue: "#327EEF",
        dark: "#282828",
        brown: "#9D6200",
        pink: "rgb(253,211,221)",
      },
      boxShadow: {
        'custom-shadow': '5.66px 5.66px 0px 0px rgba(219,186,59,1), 0 1px 4px rgba(0,0,0,.6)',
      },
      backgroundImage: {
        'term-pattern': "url('https://static.wixstatic.com/media/f6a3d0_135ae38e13f04ffab0f9d4004b1d4c4f~mv2.jpg/v1/fill/w_420,h_1024,al_c,q_85,enc_auto/f6a3d0_135ae38e13f04ffab0f9d4004b1d4c4f~mv2.jpg')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}