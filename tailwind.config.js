/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
              green: "hsla(60, 100%, 10%, 1)",
              black: "hsla(0, 0%, 0%, 1)",
              grey: "hsla(hsla(0, 0%, 22%, 1)",
              yellow: "hsla(46, 96%, 65%, 1)",
              hero: "hsla(0, 0%, 100%, 0.5)",
            },
            fontFamily: {
              sans: ["Poppins", "sans-serif"],
            },
          },
    },
    plugins: [],
};
