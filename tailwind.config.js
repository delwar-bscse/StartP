/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'lst': '0 0 7px -1px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'bgTexture': "url('/bgFooter.png')"
      }
    },
  },
  plugins: [],
}