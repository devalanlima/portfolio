<template>
    <article class="relative overflow-hidden">
        <div class="text-center">
            <h3 class="sr-only">Projetos</h3>
            <span class="font-stretch text-[2.1rem]">PPROJETOS</span>
        </div>
        <CarouselProjects class="mt-5" />
        <GlobeImage class="hidden fill-branco dark:fill-preto bg-preto dark:bg-branco rounded-full absolute top-14 -right-10 -z-10 rotate-[205deg] w-[300px] "/>
    </article>
</template>

<script setup>
import CarouselProjects from '../CarouselProjects.vue';
import GlobeImage from '../ui/GlobeImage.vue';
</script>