/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgOne: "#BB6CFB",
        bgTwo: "#00F1EB",
      },
      fontFamily: {
        montserrat: ["Montserrat Alternates, sans-serif"],
        Montserrat: ["Montserrat, sans-serif"],
      },
    },
  },
  plugins: [],
};
