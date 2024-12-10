/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins to your theme
      },
      animation: {
        'spin-slow':'spin 10s linear infinite',
    },
  },
  plugins: [],
}

}