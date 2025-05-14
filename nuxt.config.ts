export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/css/global.css'],
  plugins: ['~/plugins/gsap.client.ts'], // 👈 ESSE AQUI
  ssr: true
})