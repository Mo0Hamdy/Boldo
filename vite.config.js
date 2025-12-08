import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

const repoName = "Boldo";

export default defineConfig({
  base: `/${repoName}/`,

  plugins: [react()],

  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
