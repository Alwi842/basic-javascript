/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "9%": { transform: "translateX(0)" },
          "10%": { transform: "translateX(-20%)" },
          "18%": { transform: "translateX(-20%)" },
          "19%": { transform: "translateX(-40%)" },
          "27%": { transform: "translateX(-40%)" },
          "28%": { transform: "translateX(-60%)" },
          "36%": { transform: "translateX(-60%)" },
          "37%": { transform: "translateX(-80%)" },
          "45%": { transform: "translateX(-80%)" },
          "46%": { transform: "translateX(-100%)" },
          "54%": { transform: "translateX(-100%)" },
          "55%": { transform: "translateX(-120%)" },
          "63%": { transform: "translateX(-120%)" },
          "64%": { transform: "translateX(-140%)" },
          "72%": { transform: "translateX(-140%)" },
          "73%": { transform: "translateX(-160%)" },
          "81%": { transform: "translateX(-160%)" },
          "82%": { transform: "translateX(-180%)" },
          "90%": { transform: "translateX(-180%)" },
          "91%": { transform: "translateX(-200%)" },
          "99%": { transform: "translateX(-200%)" },
          "100%": { transform: "translateX(0)" },
        },
        track: {
          "0%": { backgroundColor: "black" },
          "9%": { backgroundColor: "black" },
          "10%": { backgroundColor: "gray" },
          "100%": { backgroundColor: "gray" },
        },
      },
      animation: {
        slide: "slide 30s infinite",
        track: "track 30s infinite",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animate-delay": (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme("transitionDelay") }
      );
    }),
  ],
};
