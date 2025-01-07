/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // theme: {
  //   colors: {
  //     seaweed: {
  //       DEFAULT: "#008C95",
  //       900: "#002A2D",
  //       800: "#00464B",
  //       700: "#005459",
  //       600: "#007077",
  //       500: "#008C95",
  //       400: "#33A3AA",
  //       300: "#66BABF",
  //       200: "#99D1D5",
  //       100: "#CCE8EA",
  //       50: "#F2F9FA",
  //     },
  //     lightSeaweed: {
  //       DEFAULT: "#84C4C0",
  //     },
  //   },
  //   fontFamily: {
  //     display: "Archivo, medium",
  //     body: "Helvetica, sans-serif",
  //   },
  //   extend: {},
  // },
  theme: {
    colors: {
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
    },
    extend: {},
  },
  plugins: [],
};
