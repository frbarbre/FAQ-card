/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "hsl(240, 73%, 65%)",
        voilet: "hsl(273, 75%, 66%)",
        "dark-gray": "hsl(237, 12%, 33%)",
        gray: "hsl(240, 6%, 50%)",
        "light-gray": "hsl(240, 5%, 91%)",
      },
    },
    screens: {
      md: "1000px"
    }
  },
  plugins: [],
};
