/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
      colors: {
        "custom-red": "#D00B27",
      },
    },
  },
  plugins: [],
};
