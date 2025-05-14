<template>
  <section class="sobre" id="sobre" ref="sectionRef">
    <div class="container">
      <h2 class="sobre-title">Sobre a Villa Cielo</h2>
      <p class="sobre-text">
        Um projeto arquitetônico único, com 5 suítes, 850m² e vista 180º para o mar. Localizada no litoral de SP, a Villa Cielo oferece acesso exclusivo à praia, design autoral e uma experiência de luxo incomparável.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ScrollTrigger from 'gsap/ScrollTrigger'

const { $gsap } = useNuxtApp()
$gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)

onMounted(() => {
  $gsap.from(sectionRef.value, {
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 80%',
    },
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: 'power4.out'
  })
})
</script>

<style scoped>
.sobre {
  min-height: 100vh;
  padding: 6rem 2rem;
  background-color: #151515;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.sobre-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.sobre-text {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  color: #ddd;
}
</style>