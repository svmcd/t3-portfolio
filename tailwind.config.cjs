/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark': '#0c0a09',
      },
    },
  },
  plugins: [],
};

module.exports = config;
