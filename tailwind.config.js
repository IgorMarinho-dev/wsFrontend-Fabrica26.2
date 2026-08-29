/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ow-dominant": "#1A1A2E",
        "ow-secondary": "#2E3238",
        "ow-accent": "#F99E1A",
      },
    },
  },
  plugins: [],
}