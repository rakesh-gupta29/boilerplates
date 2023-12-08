/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontSize: {
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        title: "1.5rem",
        "2xl": "2rem",
        "3xl": "2.5rem",
        "4xl": "3rem",
        "5xl": "3.5rem",
        "6xl": "4rem",
      },
      fontFamily:{
        "cs-light":["CircularStd-Light","sans-serif"],
        "cs-book":["CircularStd-Book","sans-serif"],
        "cs-bold":["CircularStd-Bold","sans-serif"],
        "cs-black":["CircularStd-Black","sans-serif"],
        "cs-medium":["CircularStd-Medium","sans-serif"],
      },
      colors:{
        dark:"#272c39",
        "light-gray":"#eeeef1",
        "dark-gray":"#b5b5b8",
        "green-light":"#d8f2db",
        "green":"#032714",
        "green-dark":"#112b25",
      },
      transitionTimingFunction:{
        "appear":""
      }

    },
   
  },
  plugins: [],
}

