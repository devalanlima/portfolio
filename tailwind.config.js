/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': 'rgb(var(--primary-color))',
      'secondary': 'rgb(var(--secondary-color))',
      'white': 'rgb(var(--white))',
      'black': 'rgb(var(--black))',
      'typescript': 'rgb(var(--typescript))',
      'javascript': 'rgb(var(--javascript))',
      'vue-1': 'rgb(var(--vue-1))',
      'vue-2': 'rgb(var(--vue-2))',
      'react': 'rgb(var(--react))',
      'tailwindcss': 'rgb(var(--tailwindcss))',
      'html': 'rgb(var(--html))',
      'css': 'rgb(var(--css))',
      'git-1': 'rgb(var(--git-1))',
      'git-2': 'rgb(var(--git-2))',
      'photoshop-1': 'rgb(var(--photoshop-1))',
      'photoshop-2': 'rgb(var(--photoshop-2))',
    },
    extend: {
      fontFamily: {
        AbrilFatface: ["Abril Fatface", "serif"],
        CourierPrime: ["Courier Prime", "monospace"],
        DelaGothicOne: ["Dela Gothic One", "sans-serif"],
      },
    },
  },
  plugins: [],
}