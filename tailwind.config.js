/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './shared/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: 'Inter var, sans-serif',
    },
    fontSize: {
      xxs: '0.5rem',
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
};
