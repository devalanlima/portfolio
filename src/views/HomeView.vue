<script setup>
import { onMounted } from 'vue';
import NavBar from '../components/NavBar.vue';
import SectionOne from '../components/sections/SectionOne.vue';
import SectionTwo from '../components/sections/SectionTwo.vue';
import SectionThree from '../components/sections/SectionThree.vue';
import MainFooter from '../components/MainFooter.vue';

onMounted(() => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light'
  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark'
  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme')
})


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
    <SectionOne class="my-14 mt-20 px-5 xl:mb-28" />
    <SectionTwo class="my-14" />
    <SectionThree class="-mb-1 mt-0 px-5" />
  </main>
  <footer class="z-10 relative">
    <MainFooter />
  </footer>
</template>
