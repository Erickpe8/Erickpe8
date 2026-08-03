/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./main.js", "./components/**/*.js"],
  safelist: [
    { pattern: /^delay-(100|200|300|400|500|600)$/ },
    "font-[Inter]",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
