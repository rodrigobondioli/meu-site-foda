<template>
  <section
    id="sobre"
    class="min-h-screen flex items-center justify-center px-6 pt-32 pb-32 bg-white"
  >
    <p
      class="scroll-fade max-w-4xl text-4xl md:text-6xl text-[#151515] leading-tight text-center font-light"
    >
      Um projeto arquitetônico único, com 5 suítes, 850m² e vista 180º para o mar.
      Localizada no litoral de SP, a Villa Cielo oferece acesso exclusivo à praia,
      design autoral e uma experiência de luxo incomparável.
    </p>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active")
      }
    },
    { threshold: 0.1 }
  )
  document.querySelectorAll(".scroll-fade").forEach(el => observer.observe(el))
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