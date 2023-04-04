/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx", "./public/index.html"],
  theme: {
    extend: {},
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }
      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }
      desktop: "1220px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
