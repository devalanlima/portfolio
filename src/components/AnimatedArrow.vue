<template>
    <div ref="arrows" class="w-fit inline-flex pl-[0.6rem] transition-colors ease-in-out duration-[2000ms]">
        <svg class="-ml-[5px] fill-branco stroke-preto dark:stroke-branco" width="28" height="29" viewBox="0 -1 28 28" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0208 1H2L13.9792 13.5L2 26H15.0208L27 13.5L15.0208 1Z" />
        </svg>
        <svg class="-ml-[5px] fill-branco stroke-preto dark:stroke-branco" width="28" height="29" viewBox="0 -1 28 28" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0208 1H2L13.9792 13.5L2 26H15.0208L27 13.5L15.0208 1Z" />
        </svg>
        <svg class="-ml-[5px] fill-branco stroke-preto dark:stroke-branco" width="28" height="29" viewBox="0 -1 28 28" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0208 1H2L13.9792 13.5L2 26H15.0208L27 13.5L15.0208 1Z" />
        </svg>
        <svg class="-ml-[5px] fill-branco stroke-preto dark:stroke-branco" width="28" height="29" viewBox="0 -1 28 28" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0208 1H2L13.9792 13.5L2 26H15.0208L27 13.5L15.0208 1Z" />
        </svg>
        <svg class="-ml-[5px] fill-branco stroke-preto dark:stroke-branco" width="28" height="29" viewBox="0 -1 28 28" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0208 1H2L13.9792 13.5L2 26H15.0208L27 13.5L15.0208 1Z" />
        </svg>
        <svg class="-ml-[5px] fill-branco stroke-preto dark:stroke-branco" width="28" height="29" viewBox="0 -1 28 28" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0208 1H2L13.9792 13.5L2 26H15.0208L27 13.5L15.0208 1Z" />
        </svg>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const arrows = ref(null)
onMounted(() => {
    const allArrows = [...arrows.value.children]
    let index = 0;
    setInterval(() => {
        const element = allArrows[index];

        if (index < allArrows.length -1) {
            index++;

        } else{
            index = 0
        }
        element.classList.add('fill-preto')
        setTimeout(() => {
            element.classList.remove('fill-preto')
        }, 1500);
    }, 500);
})
</script>