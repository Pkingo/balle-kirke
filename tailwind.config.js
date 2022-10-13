module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    screens: {
      lg: "1200px",
    },
    extend: {
      colors: {
        green: {
          main: "#3F612D",
        },
      },
      width: {
        main: "1024px",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
};
