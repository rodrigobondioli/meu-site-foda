<template>
  <section class="sobre" id="sobre">
    <div class="manifesto">
      <p v-for="(linha, i) in linhas" :key="i" class="linha" :ref="el => refs[i] = el">
        {{ linha }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ScrollTrigger from 'gsap/ScrollTrigger'

const { $gsap } = useNuxtApp()
$gsap.registerPlugin(ScrollTrigger)

const linhas = [
  'Um refúgio arquitetônico entre o mar e o silêncio.',
  '850m² pensados pra desacelerar o tempo.',
  '5 suítes, vista 180º e o som do vento como trilha.',
  'Bem-vindo à Villa Cielo.'
]

const refs = []

onMounted(() => {
  refs.forEach((el, i) => {
    $gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: i * 0.05
      }
    )
  })
})
</script>

<style scoped>
.sobre {
  background: #111;
  color: #fff;
  padding: 10rem 2rem;
  overflow: hidden;
  width: 100%;
}

.manifesto {
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.linha {
  font-size: 2.6rem;
  font-weight: 300;
  line-height: 1.4;
  margin: 1.5rem 0;
  opacity: 0;
}
</style>