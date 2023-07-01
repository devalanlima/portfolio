<script setup>
import { onMounted } from 'vue';
import NavBar from './components/NavBar.vue';
import SectionOne from './components/SectionOne.vue';

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
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main class="px-5">
    <SectionOne class="mt-6"/>
  </main>
</template>
