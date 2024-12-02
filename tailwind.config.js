/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'portfolio-dark': '#1F2937',
        'portfolio-purple': '#4F46E5',
      }
    },
  },
  plugins: [],
}