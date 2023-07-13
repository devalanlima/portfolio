<template>
    <div class="relative mx-auto max-w-[1311px] pt-10" ref="el">
        <div class="text-center md:text-right px-5 pb-0">
            <h3 class="sr-only">Contatos</h3>
            <span class="font-stretch text-[2.1rem] " :style="titleSize">CCONTATOS</span>
        </div>

        <HipnoCircle class="hidden md:flex absolute left-5  top-1/2 -translate-y-1/2" />
        <div
            class="w-[110%] md:w-[100%] md:translate-x-1/2 ml-7 p-7 xl:p-10 mt-7 border-2 border-b-transparent border-preto dark:border-branco">
            <form
                class="w-full gap-7 pr-7 xl:pr-0 max-w-[70vw] md:max-w-[43vw] xl:max-w-[550px] grid grid-cols-1 xl:grid-cols-2 xl:justify-between"
                action="https://formsubmit.co/d508eed6ee546479cd0f3667fecc4fb5" method="POST" :onsubmit="validateForm">
                <input type="hidden" name="_captcha" value="false"> <!-- Disable reCAPTCHA -->
                <input type="hidden" name="_next" value="http://localhost:5173/sucesso"> <!-- alternative url -->
                <ul class="flex flex-col gap-10 ">
                    <li class="relative">
                        <label for="contact-name"
                            :class="['absolute -top-4 text-sm font-roboto font-light text-red-600 dark:text-red-400', { 'hidden': nomeIsValid }]">Mínimo
                            3 letras</label>
                        <input name="user_name" id="contact-name" type="text" placeholder="Seu nome" aria-label="Nome"
                            v-model.trim="seuNome" autocomplete="name" required
                            :class="['w-full placeholder:dark:text-branco dark:text-branco dark:border-branco  bg-transparent border-b-2 border-preto font-roboto  text-preto placeholder:text-preto placeholder:font-light py-1 focus:outline-0', { 'text-red-600 dark:text-red-400': !nomeIsValid }]">
                    </li>
                    <li class="relative">
                        <label for="contact-mail"
                            :class="['absolute -top-4 text-sm font-roboto font-light text-red-600 dark:text-red-400', { 'hidden': emailIsValid }]">Insira
                            um e-mail válido</label>
                        <input name="user_email" id="contact-mail" type="email" placeholder="Seu e-mail" aria-label="Email"
                            v-model="seuEmail" required
                            :class="['w-full placeholder:dark:text-branco dark:text-branco dark:border-branco  bg-transparent border-b-2 border-preto font-roboto  text-preto placeholder:text-preto placeholder:font-light py-1 focus:outline-0', { 'text-red-600 dark:text-red-400': !emailIsValid }]">
                    </li>
                    <li class="relative">
                        <label for="contact-message"
                            :class="['absolute -top-4 text-sm font-roboto font-light text-red-600 dark:text-red-400', { 'hidden': mensagemIsValid }]">Mínimo
                            de 35 caractéres</label>
                        <textarea name="user_message" id="contact-message" cols="40" rows="3" required
                            :class="['placeholder:dark:text-branco dark:text-branco dark:border-branco  bg-transparent font-roboto  text-preto placeholder:text-preto placeholder:font-light focus:outline-0 -mt-6 bg-[repeating-linear-gradient(var(--color1),var(--color1)_50px,var(--color2)_50px,var(--color2)_52px,var(--color1)_51px)] dark:bg-[repeating-linear-gradient(var(--color2),var(--color2)_50px,var(--color1)_50px,var(--color1)_52px,var(--color2)_51px)] h-[156px] bg-local leading-[51px] pt-[10px] resize-none w-full', { 'text-red-600 dark:text-red-400': !emailIsValid }]"
                            v-model="suaMensagem" placeholder="Sua Mensagem"></textarea>
                    </li>
                    <li class="w-full max-w-[200px] xl:max-w-full">
                        <div class="relative">
                            <button title="Enviar formulário" type="submit" ref="enviarBtn"
                                class="relative transition-transform border-2 border-preto bg-branco dark:border-branco dark:bg-preto py-3 w-full font-roboto"
                                @mousedown="downBtn" @mouseup="upBtn" @mouseleave="upBtn">Enviar
                            </button>
                            <div class="w-full h-full bg-preto dark:bg-branco absolute top-0 left-0 mt-2 ml-2 -z-10"></div>
                        </div>
                    </li>
                </ul>
                <div
                    class="font-roboto text-preto dark:text-branco flex flex-col mt-4 xl:mt-0 gap-2 w-full max-w-[202px] xl:self-start xl:place-self-end h-full justify-between font-light">
                    <div class="flex flex-col gap-2">
                        <p>21 99605-8924</p>
                        <p>devalanlima@gmail.com</p>
                    </div>
                    <p class="hidden xl:block"><span class="text-3xl">Morando em</span> Rio de Janeiro, Brasil</p>
                    <ContactIcons class="mt-5 justify-between" />
                </div>
            </form>
        </div>

    </div>
</template>

<script setup>
import ContactIcons from '../common/ContactIcons.vue';
import { ref, computed } from 'vue'

const enviarBtn = ref(null)
const downBtn = () => {
    enviarBtn.value.style.transform = ' translate(.5rem, .5rem)'
}
const upBtn = () => {
    enviarBtn.value.style.transform = 'translate(0, 0)'
}

const seuNome = ref('')
const nomeIsValid = computed(() => {
    const nomeRegex = /[a-zA-Z]{3,}/
    if (nomeRegex.test(seuNome.value) || seuNome.value.length === 0) {
        return true
    } else {
        return false
    }
})

const seuEmail = ref('')
const emailIsValid = computed(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    if (emailRegex.test(seuEmail.value) || seuEmail.value.length === 0) {
        return true
    } else {
        return false
    }
})

const suaMensagem = ref('')
const mensagemIsValid = computed(() => {
    const nomeRegex = /[a-zA-Z]{35,}/
    if (nomeRegex.test(suaMensagem.value) || suaMensagem.value.length === 0) {
        return true
    } else {
        return false
    }
})

const validateForm = () => {
    if (nomeIsValid.value && emailIsValid.value && mensagemIsValid.value) {
        return true
    } else {
        alert('Algo deu errado, confira os campos e tente novamente')
        return false
    }
}


import { useElementSize } from '@vueuse/core'
const el = ref(null)
const { width } = useElementSize(el)

const titleSize = computed(() => {
    if (windowWidth.value < 768) {
        return { fontSize: `${(33 * width.value) / 375}px` }
    } else {
        return { fontSize: `${(18 * width.value) / 375}px` }
    }
})

import { useWindowSize } from '@vueuse/core'
import HipnoCircle from '../common/HipnoCircle.vue';

const { width: windowWidth } = useWindowSize()
</script>

