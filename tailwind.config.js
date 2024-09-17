/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f2ebeb',
        'dark-green': '#306e04',
        'medium-red': '#a83242'
      }
    },
  },
  plugins: [],
}

