/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      
      margin: ['responsive', 'hover', 'focus', 'active'],
    },
  },
  plugins: [],
}

