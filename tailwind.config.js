/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        black: '#1B1826',
        primary: '#E8BA6E',
        secondary: '#383A4A',
        danger: '#C7455C',
        dark: '#2A263A',
        "dark-primary": '#D98700',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

