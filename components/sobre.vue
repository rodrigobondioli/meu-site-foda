<template>
  <section
    id="sobre"
    class="min-h-screen px-6 pt-32 pb-32 flex items-center justify-center bg-white"
  >
    <p
      class="scroll-fade max-w-5xl text-[#151515] text-[clamp(2.5rem,5vw,4.5rem)] leading-tight text-center font-light"
    >
      AAAAAUm projeto arquitetônico único, com 5 suítes, 850m² e vista 180º para o mar.
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
    { threshold: 0.2 }
  )
  document.querySelectorAll(".scroll-fade").forEach(el => observer.observe(el))
})
</script>

<style scoped>
.scroll-fade {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease-out;
}
.scroll-fade.active {
  opacity: 1;
  transform: translateY(0);
}
</style>