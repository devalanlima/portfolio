<template>
    <ul ref="arrows" class="inline-flex items-center justify-center ml-1">
        <li class="grow flex justify-center items-center relative -ml-0">
            <svg class="stroke-preto dark:stroke-branco w-full aspect-square" viewBox="0 -1 28 28" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0208 1H2L13.9792 13.5L2 26H15.0208L27 13.5L15.0208 1Z" />
            </svg>
        </li>
        <li class="grow flex justify-center items-center relative -ml-0">
            <svg class="stroke-preto dark:stroke-branco w-full aspect-square" viewBox="0 -1 28 28" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0208 1H2L13.9792 13.5L2 26H15.0208L27 13.5L15.0208 1Z" />
            </svg>
        </li>
        <li class="grow flex justify-center items-center relative -ml-0">
            <svg class="stroke-preto dark:stroke-branco w-full aspect-square" viewBox="0 -1 28 28" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0208 1H2L13.9792 13.5L2 26H15.0208L27 13.5L15.0208 1Z" />
            </svg>
        </li>
        <li class="grow flex justify-center items-center relative -ml-0">
            <svg class="stroke-preto dark:stroke-branco w-full aspect-square" viewBox="0 -1 28 28" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0208 1H2L13.9792 13.5L2 26H15.0208L27 13.5L15.0208 1Z" />
            </svg>
        </li>
        <li class="grow flex justify-center items-center relative -ml-0">
            <svg class="stroke-preto dark:stroke-branco w-full aspect-square" viewBox="0 -1 28 28" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0208 1H2L13.9792 13.5L2 26H15.0208L27 13.5L15.0208 1Z" />
            </svg>
        </li>

    </ul>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const arrows = ref(null)
onMounted(() => {
    const allArrows = [...arrows.value.children]
    let index = 0;
    setInterval(() => {
        const element = allArrows[index];

        if (index < allArrows.length - 1) {
            index++;

        } else {
            index = 0
        }
        if (document.documentElement.classList.contains("dark")) {
            element.firstChild.classList.add('fill-[var(--color1)]')
            setTimeout(() => {
                element.firstChild.classList.remove('fill-[var(--color1)]')
            }, 1500);
        } else {
            element.firstChild.classList.add('fill-[var(--color2)]')
            setTimeout(() => {
                element.firstChild.classList.remove('fill-[var(--color2)]')
            }, 1500);
        }
    }, 500);
})
</script>