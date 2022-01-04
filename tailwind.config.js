module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        zima: {
          100: "#EAF2F4",
          200: "#4BBEE3"
        },
      },
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      mono: ["Space Mono", "monospace"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
