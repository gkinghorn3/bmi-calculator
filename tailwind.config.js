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
        
      },
      borderRadius: {
        custom1: '1rem',
        custom2: '998.88px'
      }
    },
  },
  plugins: [],
}

