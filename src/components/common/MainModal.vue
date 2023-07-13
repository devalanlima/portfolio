<template>
    <teleport to="body">
        <transition name="modal">
            <div v-if="open"
                class="transition-opacity duration-300 ease-in z-50 fixed top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 w-80 border-2 border-preto dark:border-branco bg-branco dark:bg-preto flex flex-col">
                <p class="font-roboto text-center p-5">{{ message }}</p>
                <div class="flex my-auto mb-0">
                    <button
                        class="w-full bg-branco dark:bg-preto border-2 border-preto dark:border-branco hover:bg-preto dark:hover:bg-branco hover:text-branco dark:hover:text-preto py-3 border-l-0 border-r-0 border-b-0 transition-colors"
                        v-if="!isConfirmed && !isCanceled" @click="confirm">
                        Sim
                    </button>
                    <button
                        class="w-full bg-branco dark:bg-preto border-2 border-preto dark:border-branco hover:bg-preto dark:hover:bg-branco hover:text-branco dark:hover:text-preto py-3 border-r-0 border-b-0 transition-colors"
                        v-if="!isConfirmed && !isCanceled" @click="cancel">
                        Não
                    </button>
                </div>
                <button
                    class="w-full bg-branco dark:bg-preto border-2 border-preto dark:border-branco hover:bg-preto dark:hover:bg-branco hover:text-branco dark:hover:text-preto py-3 border-r-0 border-b-0 border-l-0 transition-colors"
                    v-if="isConfirmed || isCanceled" @click="reset">
                    Ok!
                </button>
            </div>
        </transition>
        <transition name="modal">
            <div v-if="open" class="transition-opacity duration-300 ease-in w-full h-full bg-preto opacity-80 fixed top-0 left-0 z-40"></div>
        </transition>
    </teleport>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    isOpen:{type:Boolean, default:false},
    startMessage:{type:String, default:'Question?'},
    confirmMessage:{type:String, default: 'Is confirmed'},
    cancelMessage:{type:String, default: 'is canceled'}
})

watch(()=>props.isOpen, ()=>{
    open.value = true
})
const open = ref(false)
const isConfirmed = ref(false)
const isCanceled = ref(false)
const message = ref(props.startMessage)

const reset = () => {
    open.value = false
    isConfirmed.value = false
    isCanceled.value = false
    message.value = props.startMessage
}

const emit = defineEmits([
    'isConfirmed'
])

const confirm = () => {
    isConfirmed.value = true
    emit('isConfirmed', true)
    message.value = props.confirmMessage
}

const cancel = () => {
    isCanceled.value = true
    emit('isConfirmed', false)
    message.value = props.cancelMessage
}
</script>

<style>

.modal-enter-from {
    opacity: 0;
}

.modal-leave-to {
    opacity: 0;
}
</style>