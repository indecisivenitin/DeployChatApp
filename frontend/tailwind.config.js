// filepath: c:\Users\fflov\OneDrive\Desktop\chating\frontend\tailwind.config.js

import daisyui from "daisyui";

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")], // Add DaisyUI plugin
    daisyui: {
      themes: [
       "light",
       "dark",
      ],
    },
  };