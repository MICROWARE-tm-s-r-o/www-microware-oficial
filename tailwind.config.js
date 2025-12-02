/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        mw: {
          blue: '#0056b3', // Deep corporate blue
          dark: '#1e293b', // Slate dark
          gray: '#f3f4f6', // Light gray background
          red: '#dc2626', // From logo
          orange: '#f97316', // Active/CTA elements
          orangeHover: '#ea580c',
        }
      }
    },
  },
  plugins: [],
}