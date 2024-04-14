/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "color-dark": "#1F1F1F",
        "color-light": "#fff",
        "color-sidebar-dark": "#000000",
        "color-secondary-dark": "#D9D9D94D",
        "color-red-dark": "#F33F3F",
      },
      borderColor: {
        "color-dark": "#A41B1B",
        "color-input-dark": "#D9D9D94D",
      },
      textColor: {
        "color-dark": "#E1E1E1",
        "color-light": "#000",
      },
    },
  },
  safelist: [
    {
      pattern: /text-color-(dark)/,
    },
    {
      pattern: /text-color-(light)/,
    },
    {
      pattern: /bg-color-(dark)/,
    },
    {
      pattern: /bg-color-(light)/,
    },
    {
      pattern: /bg-color-secondary-(dark)/,
    },
    {
      pattern: /bg-color-red-(dark)/,
    },
    {
      pattern: /bg-color-sidebar-(dark)/,
    },
    {
      pattern: /border-color-(dark)/,
    },
    {
      pattern: /border-color-input-(dark)/,
    },
  ],
  plugins: [],
};
