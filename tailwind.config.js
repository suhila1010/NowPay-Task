/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Secondary: "#5454D4",
        Secondary2: "#FF7143",
        HeaderColor: "#1D293F",
        textColor:"#696871"
      },
      screens: {
        'sm': { 'min': '320px', 'max': '425px' }, // Small screens (default)
        'md': '768px', // Medium screens
        'lg': '1024px', // Large screens
        'xl': '1280px', // Extra large screens
        '2xl': '1536px', // 2x Extra large screens
        // Custom breakpoints
        '3xl': '1600px', // New custom screen
        '4xl': '1800px', // Another custom screen
      },
    },
  },
  plugins: [],
};
