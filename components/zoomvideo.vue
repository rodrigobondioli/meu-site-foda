<template>
  <section class="zoom-video-wrap" ref="wrapRef">
    <div class="video-container" ref="videoRef">
      <video
        src="https://videos.pexels.com/video-files/32050339/13662233_2560_1440_60fps.mp4"
        autoplay
        muted
        loop
        playsinline
      ></video>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const wrapRef = ref(null)
const videoRef = ref(null)

onMounted(() => {
  gsap.fromTo(
    videoRef.value,
    {
      width: '60vw',
      height: '33.75vw', // 16:9 proporcional (60 * 0.5625)
    },
    {
      width: '100vw',
      height: '56.25vw', // 100vw * 0.5625
      ease: 'power2.out',
      scrollTrigger: {
        trigger: wrapRef.value,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: true,
        anticipatePin: 1,
      }
    }
  )
})
</script>

<style scoped>
.zoom-video-wrap {
  height: 100vh;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.video-container {
  overflow: hidden;
  transform-origin: center center;
}

.video-container video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>