/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        playerColor: "#00FFB2",
        playerColorHover: "#66ffd1",
      },
    },
  },
  plugins: [],
};
