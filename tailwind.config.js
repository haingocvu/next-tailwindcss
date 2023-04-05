/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './shared/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: '0.5rem',
      },
      lineHeight: {
        xxs: '0.75rem',
      },
      fontFamily: {
        sans: 'Inter var, sans-serif',
      },
      height: {
        4.5: '32rem',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
