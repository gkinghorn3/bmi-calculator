/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bodyClr: 'var(--body-clr)', 
        mainBlue: 'var(--main-blue)',
        gunmetal: 'var(--gunmetal)',  
      }
    },
  },
  plugins: [],
}

