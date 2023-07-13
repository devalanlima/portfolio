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
    <SectionOne class="my-14 mt-20 px-5" />
    <SectionTwo class="mt-14 mb-10" />
    <SectionThree class="-mb-1 px-5" />
  </main>
  <footer class="z-10 relative">
    <MainFooter />
  </footer>
</template>
