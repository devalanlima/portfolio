<script setup>
import HomeView from './HomeView.vue';
</script>

<template>
    <teleport to="body">
        <transition name="modal">
            <div
                class="transition-opacity duration-300 ease-in z-50 fixed top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 w-80 border-2 border-preto dark:border-branco bg-branco dark:bg-preto flex flex-col">
                <p class="font-roboto text-center p-5">A mensagem foi enviada com sucesso!</p>
                <div class="flex my-auto mb-0">
                </div>
                <button>
                    <RouterLink to="/"
                        class="w-full block bg-branco dark:bg-preto border-2 border-preto dark:border-branco hover:bg-preto dark:hover:bg-branco hover:text-branco dark:hover:text-preto py-3 border-r-0 border-b-0 border-l-0 transition-colors">
                        Voltar</RouterLink>
                </button>
            </div>
        </transition>
        <transition name="modal">
            <div
                class="transition-opacity duration-300 ease-in w-full h-full bg-preto bg-opacity-80 fixed top-0 left-0 z-40">
            </div>
        </transition>
    </teleport>
    <HomeView/>
</template>
