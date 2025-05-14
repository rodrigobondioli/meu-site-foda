<template>
  <section
    id="sobre"
    class="py-24 px-8 max-w-4xl mx-auto text-3xl leading-relaxed text-[#151515]"
  >
    <p class="scroll-fade">
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
    { threshold: 0.2 }
  )
  document.querySelectorAll(".scroll-fade").forEach(el => observer.observe(el))
})
</script>

<style scoped>
.scroll-fade {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}
.scroll-fade.active {
  opacity: 1;
  transform: translateY(0);
}
</style>