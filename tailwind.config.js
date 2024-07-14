/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Ramaraja: ["Ramaraja", "serif"],
      },
      fontFamily:{
        Poppins: [ "Poppins", "sans-serif"],
      },
      colors:{
        CommonColor: "#141718",
      }
    },
  },
  plugins: [],
}