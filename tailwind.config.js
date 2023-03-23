/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: `"DIN Regular", "Noto Sans JP", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
    },
    extend: {
      fontFamily: {
        japanese: "'Noto Sans JP', sans-serif",
      },
      boxShadow: {
        window: "0.5rem 0.5rem #000",
      },
      backgroundImage: {
        noise: "url('/noise.webp')",
      },
    },
  },
  plugins: [],
}
