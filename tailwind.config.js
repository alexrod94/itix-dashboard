// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    backdropFilter: {
      none: "none",
      blur: "blur(20px)",
    },
  },
  variants: {
    extend: {},
  },
  important: true,
  plugins: [require("flowbite/plugin")],
};
