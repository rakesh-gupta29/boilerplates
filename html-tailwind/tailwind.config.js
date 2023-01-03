module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  purge: {
    enabled: true,
    content: ["./**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        light: ["light", "sans-serif"],
        regular: ["regular", "sans-serif"],
      },
      colors: {
        dark: "#3d3d3d",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
