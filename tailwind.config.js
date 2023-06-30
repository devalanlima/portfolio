/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
  theme: {
    extend: {
      colors:{
        preto:'#0d0d0d',
        branco:'#F8F8F8',
      },
      fontFamily:{
        stretch: ['Stretch', 'sans-serif'],
        roboto: ['Roboto Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}

