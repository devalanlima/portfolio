<template>
    <article>
        <div class="flex justify-center">
            <h2 class="font-stretch text-[2.47rem]">DD<span>EV<AnimatedArrow class="ml-0"/>
                <br> FRONT-END
            </span></h2>
        </div>

        <p class="text-justify font-roboto mt-4">
            Meu nome é Alan Lima e sou um desenvolvedor júnior front-end. Tenho conhecimentos em <span class="font-bold">HTML</span>, <span class="font-bold">CSS</span>, <span class="font-bold">JavaScript</span> e <span class="font-bold">Vue.js</span>. Estou entusiasmado para trabalhar em projetos desafiadores e colaborar com equipes talentosas. 
        </p>

        <AlanImage class="mt-6 mx-auto w-full max-w-md h-fit fill-preto dark:fill-branco"/>

        <KnowledgeIcons class="max-w-md mx-auto mt-6"/>
    </article>
</template>

<script setup>
import AnimatedArrow from '../common/AnimatedArrow.vue';
import KnowledgeIcons from '../common/KnowledgeIcons.vue';
import AlanImage from '../ui/AlanImage.vue';

</script>