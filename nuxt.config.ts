export default defineNuxtConfig({
  css: [
    '@/assets/css/tailwind.css', // ✅ importa o Tailwind primeiro
    '@/assets/css/global.css',   // ✅ seu CSS personalizado depois
  ],
  modules: ['@nuxtjs/tailwindcss'],
  plugins: ['~/plugins/gsap.client.ts'],
  ssr: true,
  devtools: { enabled: true },
})