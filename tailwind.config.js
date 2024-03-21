/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
    screens: {
      "2xl": "1440px",
      xl: { max: "1200px" },
      lg: { max: "992px" },
      md: { max: "728px" },
      sm: { max: "576px" },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "white": "#ffffff",
      "black": {
        default: "#020105",
        "2": "#27282A"
      },
      "orange": "#FF6418",
      "grey": {
        light: "#F4F5F5",
        text: "#727474",
        "1": "#EBEBEB",
        "2": "#F8F8F8",
        "3": "#F2F2FA",
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      ttfirs: ['tt-firs-neue-trl', 'sans-serif']
    }
  },
  plugins: [],
}

