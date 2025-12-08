// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// استيراد الإضافات باستخدام 'import' لتجنب التحذيرات في بيئة ES Modules
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// 💡 مهم: قم بتغيير هذا المتغير إلى اسم المستودع (Repository) الخاص بك على GitHub.
// إذا كان رابط مشروعك هو: https://mohamdy.github.io/MuslimParadise/
// فإن اسم المستودع هو: MuslimParadise
const repoName = "Boldo";

export default defineConfig({
  // هذا السطر يخبر Vite بوضع اسم المستودع في المسار الأساسي لجميع الأصول (Assets)
  // مثل ملفات CSS و JS، مما يحل مشكلة 404 على GitHub Pages.
  base: `/${repoName}/`,

  plugins: [react()],

  // لضمان عمل Tailwind CSS بشكل صحيح في عملية البناء (Build)
  css: {
    postcss: {
      plugins: [
        // 💡 تم التعديل: استخدام المتغيرات المستوردة بدلاً من require()
        tailwindcss,
        autoprefixer,
      ],
    },
  },
});
