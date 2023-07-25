/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    // screens:{
    //   'xs': '375px',
    //   'sm': '640px',
    //   'md': '768px',
    //   'lg': '1024px',
    //   'xl': '1280px',
    // },
    extend: {
      colors: {
        green: "hsla(60, 100%, 10%, 1)",
        black: "hsla(0, 0%, 0%, 1)",
        grey: "hsla(hsla(0, 0%, 22%, 1)",
        yellow: "hsla(46, 96%, 65%, 1)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
