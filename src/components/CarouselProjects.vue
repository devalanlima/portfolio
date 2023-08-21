<template>
    <div class="max-w-[1311px] mx-auto flex flex-col gap-4">
        <div class="flex min-w-[375px] relative md:border-2 border-preto dark:border-branco border-2">
            <button @click="prev"
                class="bg-neutral-400 dark:bg-neutral-100 dark:bg-opacity-5 bg-opacity-5 hover:bg-opacity-20 md:bg-opacity-20 md:hover:bg-opacity-30 px-5 absolute md:grow min-h-full z-30 md:relative cursor-pointer"><svg
                    class="rotate-180 -ml-[5px] fill-preto dark:fill-branco stroke-branco dark:stroke-preto h-[30px] md:h-[50px]"
                    viewBox="0 -1 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0208 1H2L13.9792 13.5L2 26H15.0208L27 13.5L15.0208 1Z" />
                </svg>
            </button>
            <div class="scroll_hidden w-full border-2 md:border-t-0 md:border-b-0 border-preto dark:border-branco overflow-x-scroll mx-auto snap-x snap-mandatory scroll-smooth"
                ref="el">
                <div class="flex w-[300%] h-[70vh] transition-transform duration-500" ref="carouselContainer">
                    <template v-for="(projectLink, index) in projectsLinks" :key="projectLink">
                        <div class="w-full snap-center" :id="`CarouselProjects${index}`">
                            <iframe class="w-full h-full select-none" :src="projectLink">
                            </iframe>
                        </div>
                        <button class="fill-branco opacity-30 hover:opacity-100 absolute right-1/2 translate-x-1/2 md:right-32 bottom-2 md:bottom-6 md:translate-x-0"
                            title="Acessar o site" @click="goToLink">
                            <GoLinkIcon class="bg-preto rounded-full p-1 box-content" />
                        </button>
                    </template>
                </div>
            </div>
            <button @click="next"
                class="bg-neutral-400 dark:bg-neutral-100 dark:bg-opacity-5 bg-opacity-5 hover:bg-opacity-20 md:bg-opacity-20 md:hover:bg-opacity-30 px-5 absolute right-0 z-30 md:relative md:grow min-h-full cursor-pointer"><svg
                    class="-ml-[5px] fill-preto dark:fill-branco stroke-branco dark:stroke-preto h-[30px] md:h-[50px]"
                    viewBox="0 -1 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
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
import GoLinkIcon from './ui/GoLinkIncon.vue'
import { onMounted, ref, computed } from 'vue'
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

const atualTags = ref(['VueJS', 'JavaScript', 'TailwindCSS', 'HTML', 'CSS'])

const projectsLinks = ref([
    'https://pokeplace.netlify.app/',
    'https://nicewebsite.netlify.app/',
    'https://equatortravelwebsite.netlify.app/'
])


const atualProject = computed(() => {
    if (x.value >= 0 && x.value < carouselItemWidth.value) {
        return projectsLinks.value[0]
    } else if (x.value >= carouselItemWidth.value && x.value < carouselItemWidth.value * 2) {
        return projectsLinks.value[1]
    } else if (x.value >= carouselItemWidth.value * 2) {
        return projectsLinks.value[2]
    }
})

const goToLink = ()=>{
    window.open(atualProject.value, "_blank")
}
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