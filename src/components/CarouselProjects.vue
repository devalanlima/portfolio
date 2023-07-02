<template>
    <div>
        <div class="scroll_hidden w-full max-w-[400px] border-2 border-preto dark:border-branco overflow-x-scroll mx-auto snap-x snap-mandatory scroll-smooth"
            ref="el" @wheel="teste">
            <div class="flex w-[300%] transition-transform duration-500" ref="carouselContainer">
                <div class="w-full snap-center">
                    <img class="object-cover w-full" src="/projects/Nice-min.png" alt="">
                </div>
                <div class="w-full snap-center">
                    <img class="object-cover w-full" src="/projects/Equator-min.png" alt="">
                </div>
                <div class="w-full snap-center">
                    <img class="object-cover w-full" src="/projects/PokexChange-min.png" alt="">
                </div>
            </div>
        </div>
        <div class="hidden items-center justify-center gap-6 mt-3">
            <button @click="prev"><svg
                    class="rotate-180 transition-colors ease-in-out duration-[2000ms] -ml-[5px] fill-branco dark:fill-preto stroke-preto dark:stroke-branco"
                    width="28" height="29" viewBox="0 -1 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0208 1H2L13.9792 13.5L2 26H15.0208L27 13.5L15.0208 1Z" />
                </svg>
            </button>
            <button @click="next"><svg
                    class="transition-colors ease-in-out duration-[2000ms] -ml-[5px] fill-branco dark:fill-preto stroke-preto dark:stroke-branco"
                    width="28" height="30" viewBox="0 -1 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0208 1H2L13.9792 13.5L2 26H15.0208L27 13.5L15.0208 1Z" />
                </svg>
            </button>
        </div>
        <div class="flex gap-2 mt-2 w-full flex-wrap justify-center">
            <template v-for="tag in atualTags" :key="tag">
                <KnowledgeTags :value="tag" />
            </template>
        </div>
    </div>
</template>

<script setup>
import KnowledgeTags from './KnowledgeTags.vue';
import { computed, onMounted, ref } from 'vue'
const carouselContainer = ref(null)
const carouselSize = 3

const carouselItemWidth = ref('')
onMounted(() => {
    carouselItemWidth.value = carouselContainer.value.clientWidth / carouselSize
})

const prev = () => {
    carouselItemWidth.value = carouselContainer.value.clientWidth / carouselSize
    if (x.value === 0) {
        x.value = carouselContainer.value.clientWidth - carouselItemWidth.value
    } else {
        x.value -= carouselItemWidth.value
    }
}
const next = () => {
    carouselItemWidth.value = carouselContainer.value.clientWidth / carouselSize
    if (x.value === carouselContainer.value.clientWidth - carouselItemWidth.value) {
        x.value = 0
    } else {
        x.value += carouselItemWidth.value
    }
}

import { useScroll } from '@vueuse/core'

const el = ref(null)
const { x } = useScroll(el)

const teste = (e) => {
    e.preventDefault()
    const carouselItemWidth = carouselContainer.value.clientWidth / carouselSize
    if (e.deltaY <= 0) {
        x.value -= carouselItemWidth
    } else {
        x.value += carouselItemWidth
    }

}

const atualProject = computed(() => {
    if (x.value >= 0 && x.value < carouselItemWidth.value) {
        return 'Nice'
    } else if (x.value >= carouselItemWidth.value && x.value < carouselItemWidth.value * 2) {
        return 'Equator'
    } else if (x.value >= carouselItemWidth.value * 2) {
        return 'PokexChange'
    } else {
        return 'error'
    }
})

const atualTags = computed(() => {
    switch (atualProject.value) {
        case 'Nice':
            return ['VueJS', 'JavaScript', 'TailwindCSS', 'HTML', 'CSS']
        case 'Equator':
            return ['VueJS', 'JavaScript', 'TailwindCSS', 'HTML', 'CSS']
        case 'PokexChange':
            return ['VueJS', 'JavaScript', 'HTML', 'CSS']
        default:
            return 'error'
    }
})
</script>

<style scoped>
.scroll_hidden::-webkit-scrollbar {
    display: none;
    width: 0px;
    height: 0px;
}

.scroll_hidden {
    scrollbar-width: none;
}
</style>