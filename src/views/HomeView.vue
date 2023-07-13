<script setup>
import { onMounted } from 'vue';
import NavBar from '../components/NavBar.vue';
import SectionOne from '../components/sections/SectionOne.vue';
import SectionTwo from '../components/sections/SectionTwo.vue';
import SectionThree from '../components/sections/SectionThree.vue';
import MainFooter from '../components/MainFooter.vue';

import { ref } from 'vue'
const isMobile = ref(false)
onMounted(() => {
  function isMobileDevice() {
    return /Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  if (isMobileDevice()) {
    isMobile.value = true
  } else {
    isMobile.value = false
  }
})
</script>

<template>
  <header class="fixed top-0 w-full z-50">
    <NavBar class="w-full" />
  </header>
  <main :class="['w-screen overflow-hidden', {'pr-3' : !isMobile}]">
    <SectionOne class="mt-14 px-4" />
    <SectionTwo id="Projetos" class="mb-7 pt-10 md:pt-20 md:mb-14" />
    <SectionThree id="Contatos" class=" md:pt-14 " />
  </main>
  <footer class="z-10 relative">
    <MainFooter />
  </footer>
</template>
