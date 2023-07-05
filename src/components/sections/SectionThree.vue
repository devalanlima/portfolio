<template>
    <div class="relative overflow-hidden mx-auto -mr-5 pr-5">
        <div class="text-center">
            <h3 class="sr-only">Contatos</h3>
            <span class="font-stretch text-[2.1rem]">CCONTATOS</span>
        </div>
        <div class="ml-6">
            <form class="w-[492px] border-2 border-b-transparent border-preto dark:border-branco p-7 mt-7 flex flex-col gap-7 overflow-hidden"
            action="https://formsubmit.co/d508eed6ee546479cd0f3667fecc4fb5"
            method="POST"
            >
            <input type="hidden" name="_captcha" value="false"> <!-- Disable reCAPTCHA -->
            <input type="hidden" name="_next" value="http://localhost:5173/sucesso"> <!-- alternative url -->
                <ul class="flex flex-col gap-7 w-60">
                    <li>
                        <label for="contact-name"></label>
                        <input
                        name="user_name"
                        id="contact-name"
                        type="text"
                        placeholder="Seu nome"
                            class="placeholder:dark:text-branco dark:text-branco dark:border-branco w-60 bg-transparent border-b-2 border-preto font-roboto  text-preto placeholder:text-preto font-light py-1">
                    </li>
                    <li>
                        <label for="contact-mail">
                            <input
                            name="user_email"
                            id="contact-mail"
                            type="email"
                            placeholder="Seu e-mail"
                                class="placeholder:dark:text-branco dark:text-branco dark:border-branco w-60 bg-transparent border-b-2 border-preto font-roboto  text-preto placeholder:text-preto font-light py-1">
                        </label>
                    </li>
                    <li>
                        <label for="contact-message"></label>
                        <textarea
                        name="user_message"
                        id="contact-message"
                        cols="40"
                        rows="3"
                            class="placeholder:dark:text-branco dark:text-branco dark:border-branco relative w-60 bg-transparent border-b-2 border-preto font-roboto  text-preto placeholder:text-preto font-light py-1"
                            placeholder="Sua Mensagem"></textarea>
                    </li>
                    <li class="relative mt-4 w-full">
                        <button type="submit" ref="enviarBtn" class="transition-transform border-2 border-preto bg-branco dark:border-branco dark:bg-preto py-3 w-full font-roboto" @mousedown="downBtn" @mouseup="upBtn" @mouseleave="upBtn">Enviar</button>
                        <div class="w-full h-full bg-preto dark:bg-branco absolute top-0 left-0 mt-2 ml-2 -z-10"></div>
                    </li>
                </ul>
                <div class="font-roboto text-preto dark:text-branco flex flex-col gap-2 w-fit mt-5">
                    <p>21 99605-8924</p>
                    <p>devalanlima@gmail.com</p>
                    <ContactIcons class="w-full mt-5"/>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import ContactIcons from '../common/ContactIcons.vue';
import { ref } from 'vue'

const enviarBtn = ref(null)
const downBtn = ()=>{
    enviarBtn.value.style.transform = ' translate(.5rem, .5rem)'
}
const upBtn = ()=>{
    enviarBtn.value.style.transform = 'translate(0, 0)'
}
</script>
