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
                ref="el" @wheel="teste">
                <div class="flex w-[300%] h-[70vh] transition-transform duration-500" ref="carouselContainer">
                    <template v-if="isFullScreen">
                        <teleport to="body">
                            <button title="Voltar ao portfólio" class="fixed top-10 left-10 z-[52]" @click="FullScreenProject">
                                <svg class="mysvg h-20 aspect-video fill-branco stroke-preto opacity-50 hover:opacity-100"
                                version="1.0" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1304.000000 825.000000"
                                    preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,825.000000) scale(0.100000,-0.100000)"
                                    stroke-width="400">
                                        <path d="M2455 6081 c-1270 -1074 -2308 -1955 -2306 -1959 2 -4 1041 -884
                                        2310 -1956 l2306 -1949 3 1141 c1 628 5 1142 10 1142 4 -1 432 -361 952 -800
                                        l945 -800 3 885 2 885 3110 0 3110 0 0 1460 0 1460 -3107 2 -3108 3 -5 877 -5
                                        878 -945 -800 c-520 -439 -948 -799 -952 -800 -5 0 -9 514 -10 1142 l-3 1141
                                        -2310 -1952z" />
                                    </g>
                                </svg>
                            </button>
                        </teleport>
                    </template>
                    <template v-else="!isFullScreen">
                        <button class="absolute right-28 bottom-5 z-10 hidden lg:block" @click="FullScreenProject" title="Tela Cheia">
                            <svg class="mysvg h-10 w-10 fill-branco stroke-preto opacity-50 hover:opacity-100" version="1.0"
                                xmlns="http://www.w3.org/2000/svg" width="1000.000000pt" height="1000.000000pt"
                                viewBox="0 0 1000.000000 1000.000000" stroke-width="400"
                                preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)">
                                    <path d="M185 9763 c3 -32 71 -836 150 -1787 80 -951 146 -1730 148 -1732 1
                                        -2 234 228 517 511 l515 515 672 -672 673 -673 612 613 613 612 -673 673 -672
                                        672 510 510 c280 280 508 511 506 512 -2 2 -781 68 -1732 148 -951 79 -1755
                                        147 -1787 150 l-58 6 6 -58z" />
                                    <path d="M8025 9670 c-962 -81 -1758 -149 -1768 -151 -12 -3 126 -148 498
                                        -519 l515 -515 -672 -672 -673 -673 613 -612 612 -613 673 673 672 672 510
                                        -510 c280 -280 511 -508 512 -506 2 2 68 781 148 1732 79 951 147 1755 150
                                        1787 6 55 5 57 -17 56 -13 -1 -810 -68 -1773 -149z" />
                                    <path d="M2175 3410 l-670 -670 -512 512 -511 511 -7 -64 c-13 -136 -294
                                        -3513 -292 -3516 4 -3 3569 296 3573 300 2 1 -228 234 -511 517 l-515 515 672
                                        672 673 673 -610 610 c-335 335 -612 610 -615 610 -3 0 -307 -301 -675 -670z" />
                                    <path d="M6525 3460 l-610 -610 673 -673 672 -672 -510 -510 c-280 -280 -508
                                        -511 -506 -512 4 -4 3569 -303 3573 -300 1 2 -65 806 -147 1787 -83 982 -150
                                        1787 -150 1790 0 3 -233 -228 -518 -513 l-517 -517 -670 670 c-368 369 -672
                                        670 -675 670 -3 0 -280 -275 -615 -610z" />
                                </g>
                            </svg>

                        </button>
                    </template>
                    <div class="w-full snap-center">
                        <iframe id="pokexchange" class="w-full h-full select-none"
                            src="https://pokexchange.netlify.app/"></iframe>
                    </div>
                    <div class="w-full snap-center">
                        <iframe id="nice" class="w-full h-full select-none" src="https://nicewebsite.netlify.app/"></iframe>
                    </div>
                    <div class="w-full snap-center">
                        <iframe id="equator" class="w-full h-full select-none"
                            src="https://equatortravelwebsite.netlify.app/"></iframe>
                    </div>
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
        return 'PokexChange'
    } else if (x.value >= carouselItemWidth.value && x.value < carouselItemWidth.value * 2) {
        return 'Nice'
    } else if (x.value >= carouselItemWidth.value * 2) {
        return 'Equator'
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

const isFullScreen = ref(false)
const FullScreenProject = () => {
    let $atualProject = ''
    switch (atualProject.value) {
        case 'PokexChange':
            $atualProject = document.getElementById('pokexchange')
            break;
        case 'Nice':
            $atualProject = document.getElementById('nice')
            break;
        case 'Equator':
            $atualProject = document.getElementById('equator')
            break;
        default:
            break;
    }
    if (isFullScreen.value) {
        $atualProject.style.position = 'relative'
        $atualProject.style.zIndex = '1'
        document.body.style.overflowY = 'auto'
        isFullScreen.value = false
    } else {
        $atualProject.style.position = 'fixed'
        $atualProject.style.left = '0px'
        $atualProject.style.top = '0px'
        $atualProject.style.zIndex = '51'
        document.body.style.overflow = 'hidden'
        isFullScreen.value = true
    }
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