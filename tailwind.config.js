/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.html", "./**/*.{js,jsx,ts,tsx,vue}"],

  theme: {
    extend: {
      spacing: {
        35: "35px",
      },
      colors: {
        gray33: "#333333",
        orangefa: "#FFA400",
      },
    },
  },
  plugins: [],
};
