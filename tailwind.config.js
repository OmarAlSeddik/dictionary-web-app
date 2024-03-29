/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)"],
      serif: ["var(--font-lora)"],
      mono: ["var(--font-inconsolata)"],
    },
    fontSize: {
      sm: ["0.875rem", "1.0625rem"],
      base: ["1.125rem", "1.5rem"],
      lg: ["1.25rem", "1.5rem"],
      xl: ["1.5rem", "1.8125rem"],
      "2xl": ["4rem", "4.8125rem"],
    },
    extend: {
      colors: {
        c1: "#050505",
        c2: "#1F1F1F",
        c3: "#2D2D2D",
        c4: "#3A3A3A",
        c5: "#757575",
        c6: "#E9E9E9",
        c7: "#F4F4F4",
        c8: "#FFFFFF",
        cPrimary: "#A445ED",
        cError: "#FF5252",
      },
      boxShadow: {
        light: "0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
        dark: "0px 5px 30px 0px #A445ED",
      },
      screens: {
        mouseHover: { raw: "(hover: hover)" },
      },
    },
  },
  plugins: [],
};
