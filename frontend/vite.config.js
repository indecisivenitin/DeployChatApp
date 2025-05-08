// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// import daisyui from 'daisyui';

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//     react(),
    
//   ],

// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

// @ts-ignore
import daisyui from 'daisyui';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    daisyui, // Add DaisyUI here
    tailwindcss(),
  ],
});