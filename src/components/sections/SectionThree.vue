<template>
    <div class="relative overflow-hidden mx-auto">
        <div class="text-center">
            <h3 class="sr-only">Contatos</h3>
            <span class="font-stretch text-[2.1rem]">CCONTATOS</span>
        </div>
        <div class="ml-6">
            <form
                class="w-[492px] border-2 border-b-transparent border-preto dark:border-branco p-7 mt-7 flex flex-col gap-7 overflow-hidden"
                action="https://formsubmit.co/d508eed6ee546479cd0f3667fecc4fb5" method="POST" :onsubmit="validateForm">
                <input type="hidden" name="_captcha" value="false"> <!-- Disable reCAPTCHA -->
                <input type="hidden" name="_next" value="http://localhost:5173/sucesso"> <!-- alternative url -->
                <ul class="flex flex-col gap-10 w-60">
                    <li class="relative">
                        <label for="contact-name" :class="['absolute -top-4 text-sm font-roboto font-light text-red-600 dark:text-red-400',{'hidden': nomeIsValid}]">Mínimo 3 letras</label>
                        <input name="user_name" id="contact-name" type="text" placeholder="Seu nome" aria-label="Nome"
                        v-model.trim="seuNome"
                        autocomplete="name" 
                        required
                            :class="['placeholder:dark:text-branco dark:text-branco dark:border-branco w-60 bg-transparent border-b-2 border-preto font-roboto  text-preto placeholder:text-preto placeholder:font-light py-1 focus:outline-0', {'text-red-600 dark:text-red-400': !nomeIsValid}]">
                    </li>
                    
                    <li class="relative">
                        <label for="contact-mail" :class="['absolute -top-4 text-sm font-roboto font-light text-red-600 dark:text-red-400',{'hidden': emailIsValid}]">Insira um e-mail válido</label>
                        <input name="user_email" id="contact-mail" type="email" placeholder="Seu e-mail" aria-label="Email" v-model="seuEmail" required
                        :class="['placeholder:dark:text-branco dark:text-branco dark:border-branco w-60 bg-transparent border-b-2 border-preto font-roboto  text-preto placeholder:text-preto placeholder:font-light py-1 focus:outline-0', {'text-red-600 dark:text-red-400': !emailIsValid}]">

                    </li>
                    
                    <li class="relative">
                        <label for="contact-message" :class="['absolute -top-4 text-sm font-roboto font-light text-red-600 dark:text-red-400',{'hidden': mensagemIsValid}]">Mínimo de 35 caractéres</label>
                        <textarea name="user_message" id="contact-message" cols="40" rows="3" required
                        :class="['placeholder:dark:text-branco dark:text-branco dark:border-branco w-60 bg-transparent font-roboto  text-preto placeholder:text-preto placeholder:font-light focus:outline-0 -mt-6 bg-[repeating-linear-gradient(#F8F8F8,#F8F8F8_50px,#0d0d0d_50px,#0d0d0d_52px,#F8F8F8_51px)] dark:bg-[repeating-linear-gradient(#0d0d0d,#0d0d0d_50px,#F8F8F8_50px,#F8F8F8_52px,#0d0d0d_51px)] h-[156px] bg-local leading-[51px] pt-[10px] resize-none', {'text-red-600 dark:text-red-400': !emailIsValid}]"
                            v-model="suaMensagem"
                            placeholder="Sua Mensagem"></textarea>
                    </li>
                    
                    <li class="relative w-full">
                        <button title="Enviar formulário" type="submit" ref="enviarBtn"
                            class="transition-transform border-2 border-preto bg-branco dark:border-branco dark:bg-preto py-3 w-full font-roboto"
                            @mousedown="downBtn" @mouseup="upBtn" @mouseleave="upBtn">Enviar</button>
                        <div class="w-full h-full bg-preto dark:bg-branco absolute top-0 left-0 mt-2 ml-2 -z-10"></div>
                    </li>
                </ul>
                <div class="font-roboto text-preto dark:text-branco flex flex-col gap-2 w-fit mt-5">
                    <p>21 99605-8924</p>
                    <p>devalanlima@gmail.com</p>
                    <ContactIcons class="w-full mt-5 justify-between" />
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
const nomeIsValid = computed(()=>{
    const nomeRegex = /[a-zA-Z]{3,}/
    if (nomeRegex.test(seuNome.value) || seuNome.value.length === 0) {
        return true
    } else {
        return false
    }
})

const seuEmail = ref('')
const emailIsValid = computed(()=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    if (emailRegex.test(seuEmail.value) || seuEmail.value.length === 0) {
        return true
    } else {
        return false
    }
})

const suaMensagem = ref('')
const mensagemIsValid = computed(()=>{
    const nomeRegex = /[a-zA-Z]{35,}/
    if (nomeRegex.test(suaMensagem.value) || suaMensagem.value.length === 0) {
        return true
    } else {
        return false
    }
})

const validateForm = ()=>{
    if(nomeIsValid.value && emailIsValid.value && mensagemIsValid.value){
        return true
    } else {
        alert('Algo deu errado, confira os campos e tente novamente')
        return false
    }
}
</script>

