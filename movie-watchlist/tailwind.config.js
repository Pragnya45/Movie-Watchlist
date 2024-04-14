/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "color-dark": "#1F1F1F",
        "color-light": "#fff",
        "color-sidebar-dark": "#000000",
        "color-sidebar-light": "#fff",
        "color-secondary-dark": "#D9D9D94D",
        "color-banner-dark": "#D9D9D91A",
        "color-red-dark": "#F33F3F",
      },
      borderColor: {
        "color-dark": "#A41B1B",
        "color-input-dark": "#D9D9D94D",
      },
      textColor: {
        "color-dark": "#E1E1E1",
        "color-light": "#000",
        "color-subtitle-dark": "#9A9A9A",
        "color-subtitle-light": "#475467",
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
      pattern: /text-color-subtitle-(dark)/,
    },
    {
      pattern: /text-color-subtitle-(light)/,
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
      pattern: /bg-color-banner-(dark)/,
    },
    {
      pattern: /bg-color-sidebar-(dark)/,
    },
    {
      pattern: /bg-color-sidebar-(light)/,
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
