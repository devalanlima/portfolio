<template>
    <div :class="['py-1 px-3 w-fit rounded-lg font-roboto hover:scale-105 hover:transition-all hover:duration-100 hover:font-semibold cursor-default transition-all', 
    {'bg-[#E8D44D] text-preto': props.value === 'JavaScript'},
    {'bg-[#0661AE] text-branco': props.value === 'CSS'},
    {'bg-[#42B883] text-[#35495E]': props.value === 'VueJS'},
    {'bg-[#DD4B24] text-branco': props.value === 'HTML'},
    {'bg-branco text-[#0661AE] border-[1px] border-[#0661AE]': props.value === 'TailwindCSS'},
    ]">
        {{ props.value }}
    </div>
</template>
<script setup>
const props = defineProps({
    value:{type:String, default:'JavaScript'}
})
</script>