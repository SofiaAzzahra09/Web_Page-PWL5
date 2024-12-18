/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../src/**/*.{html,js}',
    './page/**/*.html',
    './node_modules/preline/dist/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
    require('daisyui'),
  ],
}

