/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          from: { width: "0ch" },
          to: { width: "22ch" }, // or however many characters your line has
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "#000" },
        },
      },
      animation: {
        typing: "typing 3s steps(22) forwards",
        blink: "blink 0.8s step-end infinite",
      },
    },
  },
  plugins: [],
};
