<script setup>
import { onMounted } from 'vue';
import NavBar from '../components/NavBar.vue';
import SectionOne from '../components/sections/SectionOne.vue';
import SectionTwo from '../components/sections/SectionTwo.vue';
import SectionThree from '../components/sections/SectionThree.vue';
import MainFooter from '../components/MainFooter.vue';
import MainModal from '../components/common/MainModal.vue';

/* onMounted(() => {
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
}) */
import { ref } from 'vue'
</script>

<template>
  <header class="fixed top-0 w-full z-50">
    <NavBar/>
  </header>
  <main class="px-5 ">
    <SectionOne class="my-7 mt-14"/>
    <hr class="border-t-2 border-preto dark:border-branco">
    <SectionTwo class="my-7"/>
    <hr class="border-t-2 border-preto dark:border-branco">
    <SectionThree class="my-7"/>
  </main>
  <footer class="z-10 relative">
    <MainFooter class="-mt-[1.9rem]"/>
  </footer>
</template>
