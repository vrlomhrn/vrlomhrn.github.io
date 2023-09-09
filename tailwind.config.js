/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-image': "url('/src/assets/images/gradient.jpg')",
      }
    },
  },
  plugins: [],
};
