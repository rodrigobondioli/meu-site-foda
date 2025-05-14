<script setup>
import { ref, onMounted } from 'vue'
import ScrollTrigger from 'gsap/ScrollTrigger'

const linhas = [
  'Um refúgio arquitetônico entre o mar e o silêncio.',
  '850m² pensados pra desacelerar o tempo.',
  '5 suítes, vista 180º e o som do vento como trilha.',
  'Bem-vindo à Villa Cielo.'
]

const refs = []

onMounted(() => {
  const { $gsap } = useNuxtApp() // ISSO FICA AQUI DENTRO
  $gsap.registerPlugin(ScrollTrigger)

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