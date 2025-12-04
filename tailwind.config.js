// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// export default {
//   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        dropdown: "dropdown 0.3s ease-out forwards",
      },
      keyframes: {
        dropdown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-100px)",
            // backgroundColor: "rgba(0,0,0,0)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            // backgroundColor: "rgba(10,38,64,5)",
          },
        },
      },
    },
  },
  plugins: [],
};
