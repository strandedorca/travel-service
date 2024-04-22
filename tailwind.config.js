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
    },

    keyframes: {
      "bounce-in": {
        "50%": {
          "border-bottom": "10px solid black",
          transform: "translateY(-10px)",
        },
        "100%": {
          "border-bottom": "7px solid black",
          transform: "translateY(-7px)",
        },
      },
      "bounce-out": {
        "0%": {
          "border-bottom": "7px solid black",
          transform: "translateY(-7px)",
        },
        "50%": {
          "border-bottom": "2px solid black",
          transform: "translateY(4px)",
        },
        "100%": {
          "border-bottom": "2px solid black",
          transform: "translateY(0px)",
        },
      },
    },
  },
  plugins: [],
};
