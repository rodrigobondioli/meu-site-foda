<template>
  <section class="galeria-wrap" ref="wrapRef">
    <div class="galeria-container" ref="containerRef">
      <div class="galeria-item" v-for="n in 6" :key="n">
        <img :src="`/gal${n}.webp`" :alt="`Imagem ${n}`" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ScrollTrigger from 'gsap/ScrollTrigger'

const { $gsap } = useNuxtApp()
$gsap.registerPlugin(ScrollTrigger)

const wrapRef = ref(null)
const containerRef = ref(null)

onMounted(() => {
  const container = containerRef.value
  const wrap = wrapRef.value
  const scrollLength = container.scrollWidth - wrap.offsetWidth

  $gsap.to(container, {
    x: () => -scrollLength,
    ease: 'none',
    scrollTrigger: {
      trigger: wrap,
      start: 'top top',
      end: () => `+=${scrollLength}`,
      scrub: true,
      pin: true,
      anticipatePin: 1
    }
  })
})
</script>

<style scoped>
.galeria-wrap {
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.galeria-container {
  display: flex;
  height: 100%;
  width: max-content;
}

.galeria-item {
  flex: 0 0 auto;
  width: 100vw;
  height: 100%;
  position: relative;
}

.galeria-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.75rem;
  display: block;
}
</style>