/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enables class-based dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',  // optional CSS var usage
        success: 'var(--color-success)',
      },
    },
  },
  plugins: [],
};
