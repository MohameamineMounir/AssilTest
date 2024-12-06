/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['"Cairo"', "sans-serif"],
        french: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
