/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "cupcake", "coffee", "lemonade", "aqua"],
  },
  plugins: [
    require('daisyui'),
  ],
}

