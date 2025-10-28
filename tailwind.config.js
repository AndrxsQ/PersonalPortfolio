// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Habilita el dark mode mediante una CLASE
  darkMode: 'class', 
  
  // 2. Especifica dónde buscar las clases de Tailwind (importante para React)
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}