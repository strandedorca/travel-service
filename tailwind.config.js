/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      logo: ["Pacifico", "ui-serif", "Georgia"],
      title: ["Alice", "ui-serif", "Georgia"],
      sans: [
        "Lato",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      serif: [
        "Lora",
        "ui-serif",
        "Georgia",
        "Cambria",
        "Times New Roman",
        "Times",
        "serif",
      ],
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      midnight: "#241c15",
      butter: "#fbeeca",
      amber: "#e7b760",
      sage: "#43584d",
      grey: "#f0f2f4",
    },

    keyframes: {
      "bounce-horizontally": {
        from: {
          transform: "translate(0)",
        },
        to: {
          transform: "translateX(5px)",
        },
      },
      "turn-white": {
        from: {
          "background-color": "transparent",
        },
        to: {
          "background-color": "white",
        },
      },
      "turn-transparent": {
        from: {
          "background-color": "white",
        },
        to: {
          "background-color": "transparent",
        },
      },
      "bounce-in": {
        "50%": {
          "box-shadow": "black 0px 7px 0px 0px",
          transform: "translateY(-7px)",
        },
        "100%": {
          "box-shadow": "black 0px 5px 0px 0px",
          transform: "translateY(-5px)",
        },
      },
      "bounce-out": {
        "0%": {
          "box-shadow": "black 0px 5px 0px 0px",
          transform: "translateY(-5px)",
        },
        "50%": {
          "border-bottom": "2px solid black",
          transform: "translateY(2px)",
        },
        "100%": {
          transform: "translateY(0px)",
        },
      },
    },
  },
  plugins: [],
};
