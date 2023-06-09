/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      font: {
        robot: "Roboto, sans-serif",
      },

      colores: {
        primario: "#ff6257",
        darkSlate: "#242742",
        grisCarbon: "#36384e",
        grisNormal: "#9294a0",
        purpura: "#9378b0",
      },
    },
  },
  plugins: [],
};
