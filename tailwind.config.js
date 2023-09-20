/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgOne: "#BB6CFB",
        bgTwo: "#00F1EB",
        admText: "#808080",
        adminBg: "#F2F2F2",
      },
      fontFamily: {
        montserrat: ["Montserrat Alternates, sans-serif"],
        Montserrat: ["Montserrat, sans-serif"],
      },
    },
  },
  plugins: [],
};
