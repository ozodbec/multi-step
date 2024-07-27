/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        skyBlue: '#BEE2FD',
        denim:'#022959',
        lightBlue:'#ABBCFF',
        purple:'#483EFF'
      },
    },
  },
  plugins: [require('daisyui'),],
}

