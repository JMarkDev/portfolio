/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      height: {
        "screen-minus-navbar": "calc(100vh - 3.5rem)", // 3.5rem = 56px
      },
    },
  },
  plugins: [],
};
