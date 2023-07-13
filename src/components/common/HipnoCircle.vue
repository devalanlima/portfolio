<template>
    <div
        class="w-[44vw] h-[90%] max-w-[600px] max-h-[600px] aspect-auto flex justify-center items-center overflow-hidden">
        <div class="relative aspect-square h-full grid place-items-center" ref="el">
            <div v-for="(circle, index) in circleNumbers" :key="circle"
                class="absolute circleAnimation h-[110%] aspect-square border-[12px] outline outline-[12px] outline-branco border-preto rounded-full"
                :class="`circle${index} -z-[1${index}]`">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const delay = ref(0.3)
const circleNumbers = ref(17)
const el = ref(null)
onMounted(()=>{
    const allCircles = [...el.value.children]
    allCircles.forEach((element, index) => {
        if(element.classList.contains(`circle${index}`)){
            element.style.animationDelay = `${delay.value * index}s`
        }
    });
})
</script>

<style>
.circleAnimation {
    animation: scaleCircle 4.5s infinite linear;
}

@keyframes scaleCircle {
    0% {
        height: 0%;
    }
    100% {
        height: 200%;
    }
}
</style>