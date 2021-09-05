module.exports = {
  purge: ["./src/**/*.ejs"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      "2lg": "1280px",
      xl: "1440px",
    },
    colors: {
      white: {
        DEFAULT: "#FFFFFF",
      },
      grey: {
        2: "F5F5F5",
        3: "EEEEEE",
        4: "E0E0E0",
        8: "#616161",
        10: "#000000",
      },
      pink: {
        DEFAULT: "#e43e76",
      },
      primary: {
        DEFAULT: "#3b3b3b",
      },
    },
    fontFamily: {
      title: ["Roboto Condensed", "sans-serif"],
      body: ["Roboto", "sans-serif"],
    },
    extend: {
      height: {
        100: "28rem",
      },
      width: {
        100: "28rem",
        108: "30rem",
        128: "32rem",
      },
      maxWidth: {
        108: "28rem",
        128: "32rem",
        152: "36rem",
        "8xl": "96rem",
      },
      maxHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      insert: {
        "-108": "-32rem",
        108: "32rem",
        128: "48rem",
        "-128": "-48rem",
      },
      animation: {
        "nav-open":
          " open 450ms forwards ease-in-out, fade 300ms forwards ease-in 450ms",
      },
      keyframes: {
        open: {
          "0%, 100%": { height: "0" },
          "50%": { height: "25rem" },
        },
        fade: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
