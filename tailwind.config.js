/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['"Cairo"', "sans-serif"],
        french: ['"Inter"', "sans-serif"],
      },
      backgroundImage: {
        "tiktok-gradient": "linear-gradient(45deg, #00f2ea, #ff0050)",
        "instagram-gradient":
          "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
      },
    },
  },
  plugins: [],
};
