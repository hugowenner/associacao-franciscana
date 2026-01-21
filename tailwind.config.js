/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        franciscan: {
          brown: "#6B4F3F",
          beige: "#F5F1EB",
          green: "#6E8B6E",
          gray: "#4B5563",
          light: "#FAFAF9",
        },
      },
    },
  },
  plugins: [],
};
