/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          "color-text": "#080d02",
          "color-text-60": "rgba(8,13,2,.6)",
          background: "#fbfef6",
          primary: "#bcf877",
          secondary: "#85ef90",
          accent: "#4fe885",
        },
        dark: {
          "color-text": "#eceeef",
          "color-text-60": "rgba(236, 238, 239,60)",
          background: "#021b22",
          primary: "#66e3ff",
          secondary: "#236679",
          accent: "#43bee0",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
