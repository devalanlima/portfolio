<template>
    <article class="md:grid md:grid-cols-2 md:items-center justify-items-end max-w-[1311px] py-5 lg:py-10 mx-auto lg:grid-cols-2">
        <div class="mx-auto grow flex flex-col justify-around h-full gap-6 col-span-1 lg:col-span-1" ref="el">
                <div class="flex justify-center md:justify-start">
                    <h2 class="font-stretch " :style="titleSize">DD<span>EV<AnimatedArrow :style="arrowsSize" class="ml-0 w-[146px]"/>
                        <br> FRONT-END
                    </span></h2>
                </div>
                <p class="text-justify font-roboto" :style="paragraphSize">
                    Meu nome é Alan Lima e pretendo me tornar um desenvolvedor júnior front-end. Tenho conhecimentos em <span class="font-bold">HTML</span>, <span class="font-bold">CSS</span>, <span class="font-bold">JavaScript</span> e <span class="font-bold">Vue.js</span>. Estou entusiasmado para trabalhar em projetos desafiadores e colaborar com equipes talentosas.
                </p>
            <KnowledgeIcons v-if="!(windowWidth < 768)" class="mt-5"/>
        </div>
        <div>
            <AlanImage class="mt-6 mx-auto w-full max-w-[490px] h-fit fill-preto dark:fill-branco md:m-0  "/>
            <KnowledgeIcons v-if="windowWidth < 768" class="max-w-[490px] mx-auto"/>
        </div>     
    </article>
</template>

<script setup>
import AnimatedArrow from '../common/AnimatedArrow.vue';
import KnowledgeIcons from '../common/KnowledgeIcons.vue';
import AlanImage from '../ui/AlanImage.vue';

import { computed, ref } from 'vue'
import { useElementSize } from '@vueuse/core'
const el = ref(null)
const { width } = useElementSize(el)

const titleSize = computed(()=>{
    if (windowWidth.value < 768) {
        return {fontSize: `${(44*width.value)/375}px`}
    } else {
        return {fontSize: `${(44*width.value)/375}px`}
    }
}) 

const paragraphSize = computed(()=>{
    if (windowWidth.value < 768) {
        return {fontSize: `${(14*width.value)/375}px`}
    } else if(windowWidth.value >= 768 && windowWidth.value < 1154) {
        return {
            fontSize: `${(18*width.value)/375}px`,
            lineHeight: 'normal'
        }
    } else{
        return {fontSize: `${(13*width.value)/375}px`}
    }
}) 
const arrowsSize = computed(()=>{
    if (windowWidth.value < 768) {
        return {width: `${(164*width.value)/375}px`}
    } else {
        return {width: `${(164*width.value)/375}px`}
    }
})

import { useWindowSize } from '@vueuse/core'

const { width: windowWidth } = useWindowSize()
</script>