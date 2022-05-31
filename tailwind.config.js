module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0e7490",
          secondary: "#0891b2",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "cupcake", "dark", "cmyk"
    ],
  },
  plugins: [require("daisyui")],
}
