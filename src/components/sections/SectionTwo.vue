<template>
    <article class="relative overflow-hidden max-w-[1311px] mx-auto" ref="el">
        <div class="text-center md:text-left px-5">
            <h3 class="sr-only">Projetos</h3>
            <span class="font-stretch text-[2.1rem]" :style="titleSize">PPROJETOS</span>
        </div>
        <CarouselProjects class="mt-14" />
        <GlobeImage
            class="hidden md:block fill-branco dark:fill-preto bg-preto dark:bg-branco rounded-full absolute top-0 right-[10%] -z-10 rotate-[205deg] w-[300px] " />
    </article>
</template>

<script setup>
import CarouselProjects from '../CarouselProjects.vue';
import GlobeImage from '../ui/GlobeImage.vue';
import { ref, computed } from 'vue'

import { useElementSize } from '@vueuse/core'
const el = ref(null)
const { width } = useElementSize(el)

const titleSize = computed(() => {
    if (windowWidth.value < 768) {
        return {fontSize: `${(33*width.value)/375}px`}
    } else {
        return { fontSize: `${(18 * width.value) / 375}px` }
    }
}) 

import { useWindowSize } from '@vueuse/core'

const { width: windowWidth } = useWindowSize()
</script>