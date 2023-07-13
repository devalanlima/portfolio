/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        branco:'var(--color1)',
        preto:'var(--color2)',
      },
      fontFamily:{
        stretch: ['Stretch', 'sans-serif'],
        roboto: ['Roboto Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}

