const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#203253",
        secondary: "#B1DDFF",
        textPrimary: '#335D93',
        lightBlue: '#F4FAFF',
        darkBlue: '#72B3EA',
      },
      screens: {
        xm: "320px",
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1500px",
      },
    },
  },
  plugins: [],
});
