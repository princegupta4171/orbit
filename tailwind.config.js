/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          500: '#00b300',
          600: '#009900',
        }
      }
    },
  },
  plugins: [],
}
