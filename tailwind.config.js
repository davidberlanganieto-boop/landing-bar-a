/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'barca-blue': '#004D98',
        'barca-grana': '#A50044',
        'barca-gold': '#EDBB00',
        'barca-dark': '#181733',
        'barca-purple': '#4B0082',
      },
      fontFamily: {
        'barca': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right bottom, rgba(0, 77, 152, 0.9), rgba(165, 0, 68, 0.8)), url('/camp-nou4k.jpeg')",
      }
    },
  },
  plugins: [],
}