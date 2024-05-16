/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        background: "background-color",
        color: "color",
        shadow: "box-shadow",
      },
      transitionDuration: {
        default: "0.25s", // Default transition duration
      },
      transitionTimingFunction: {
        default: "ease-in-out", // Default transition timing function
      },
    },
  },
  plugins: [],
};
