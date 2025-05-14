import { defineNuxtPlugin } from '#app'
const { $gsap } = useNuxtApp()
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default defineNuxtPlugin(() => {
  return {
    provide: {
      gsap
    }
  }
})