/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        green1: {
          light: "#5EA384",
          dark: "#0E6E44", // added missing #
        },
        purple1: {
          light: "#8E68A5",
          dark: "#623B7A", // added missing #
        },
        blue: "#1A3641",
        lavender: "#FFF0F5", // added missing #
        rose : "#FFE4E1",
        navyblue : "#4A0E4E",
      },
    },
  },
  plugins: [],
};
