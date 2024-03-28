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
        DEFAULT: "#020105",
        "2": "#27282A",
        "3": "#353437"
      },
      "orange": {
        DEFAULT: "#FF6418",
        "2": "#FF7E00"
      },
      "grey": {
        light: "#F4F5F5",
        text: "#727474",
        "1": "#EBEBEB",
        "2": "#F8F8F8",
        "3": "#F2F2FA",
        "4": "#F9F9F9",
        "5": "#9A999B",
        "6": "#5D5D5F",
      },
      "green": {
        "2": "#D0F4E4"
      },
      "red": "#E90A0A",
      "yellow": "#F6C65C",
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      ttfirs: ['TT Firs Neue Trl', 'sans-serif']
    }
  },
  plugins: [],
}

