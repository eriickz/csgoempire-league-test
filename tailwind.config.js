/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        header: "#025FEB",
        table: "#E4EDF2",
        graybg: "#F6F7F7",
        tabletext: "#4B5C68",
        heading: "#182C62"
      }
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif']
    }
  },
  plugins: [],
}

