<template>
  <section
    id="sobre-2"
    class="min-h-screen flex items-center justify-center px-6 pt-40 pb-40 bg-white"
  >
    <p
      class="scroll-fade max-w-4xl text-4xl md:text-6xl text-[#151515] leading-[1.6] md:leading-[1.4] text-center font-light"
    >
      Um lugar onde a arquitetura encontra o silêncio. Ambientes amplos, integração com a natureza e uma vista que redefine o conceito de horizonte. Mais do que uma casa: um manifesto de sofisticação e paz.
    </p>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      }
    },
    { threshold: 0.1 }
  )
  document.querySelectorAll('.scroll-fade').forEach(el => observer.observe(el))
})
</script>

<style scoped>
.scroll-fade {
  opacity: 0;
  transform: translateY(60px);
  transition: all 0.8s ease-out;
}
.scroll-fade.active {
  opacity: 1;
  transform: translateY(0);
}
</style>