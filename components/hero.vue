<template>
  <section class="hero">
    <div class="hero-bg"></div>

    <div class="hero-content">
      <h1 class="hero-title" ref="titleRef">Villa Cielo</h1>
      <p class="hero-sub" ref="subRef">Refúgio arquitetônico entre o mar e o silêncio</p>

      <!-- BOTÃO DE SCROLL -->
      <button class="scroll-down" @click="scrollToSobre">
        ↓ Ver mais
      </button>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const titleRef = ref(null)
const subRef = ref(null)

const scrollToSobre = () => {
  gsap.to(window, {
    scrollTo: '#sobre',
    duration: 1.4,
    ease: 'power2.out'
  })
}

onMounted(() => {
  gsap.from('.hero-bg', {
    scale: 1.1,
    opacity: 0,
    duration: 1.8,
    ease: 'power2.out'
  })

  gsap.to(titleRef.value, {
    scrollTrigger: {
      trigger: titleRef.value,
      start: 'top top',
      scrub: true
    },
    y: -40,
    opacity: 0.6
  })

  gsap.to(subRef.value, {
    scrollTrigger: {
      trigger: subRef.value,
      start: 'top top',
      scrub: true
    },
    y: -30,
    opacity: 0.4
  })
})
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('/bg.jpg') center center / cover no-repeat;
  top: 0;
  left: 0;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
}

.hero-title {
  color: #fff;
  font-size: 4rem;
  font-weight: 600;
  margin: 0;
}

.hero-sub {
  color: #eee;
  font-size: 1.5rem;
  margin-top: 0.5rem;
  max-width: 600px;
}

.scroll-down {
  margin-top: 3rem;
  background: none;
  border: 2px solid #fff;
  padding: 0.75rem 1.5rem;
  color: #fff;
  font-size: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.scroll-down:hover {
  background: #fff;
  color: #151515;
}
</style>
