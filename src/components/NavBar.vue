<template>
    <nav class="flex border-b-[1px] border-preto dark:border-branco justify-between items-center relative bg-branco dark:bg-preto 
    ">
        <div v-if="!isDark" id="darkModeTransition"
            class="opacity-0 w-screen h-screen fixed top-0 left-0 bg-preto bg-opacity-80 z-50 pointer-events-none select-none ">
        </div>
        <button @click="menuIsHidden = !menuIsHidden"
            class="border-r-[1px] border-preto dark:border-branco w-11 h-11 grid place-items-center sm:hidden">
            <svg class="fill-preto dark:fill-branco" width="22" height="19" viewBox="0 0 22 19"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M22 3.66667C22 3.18515 21.7155 2.70835 21.1627 2.26349C20.6099 1.81863 19.7996 1.41442 18.7782 1.07394C17.7567 0.73346 16.5441 0.463376 15.2095 0.279108C13.8749 0.0948411 12.4445 -2.10476e-08 11 0C9.55546 2.10476e-08 8.12506 0.0948412 6.79048 0.279108C5.4559 0.463376 4.24327 0.73346 3.22182 1.07394C2.20038 1.41442 1.39013 1.81863 0.837325 2.26349C0.284523 2.70835 -1.26286e-07 3.18515 0 3.66667L11 3.66667H22Z" />
                <path
                    d="M22 11C22 10.5185 21.7155 10.0417 21.1627 9.59684C20.6099 9.15198 19.7996 8.74777 18.7782 8.40729C17.7567 8.0668 16.5441 7.79672 15.2095 7.61245C13.8749 7.42818 12.4445 7.33334 11 7.33334C9.55546 7.33334 8.12506 7.42818 6.79048 7.61245C5.4559 7.79672 4.24327 8.0668 3.22182 8.40729C2.20038 8.74777 1.39013 9.15198 0.837325 9.59684C0.284523 10.0417 -1.26286e-07 10.5185 0 11L11 11H22Z" />
                <path
                    d="M22 18.3333C22 17.8518 21.7155 17.375 21.1627 16.9302C20.6099 16.4853 19.7996 16.0811 18.7782 15.7406C17.7567 15.4001 16.5441 15.13 15.2095 14.9458C13.8749 14.7615 12.4445 14.6667 11 14.6667C9.55546 14.6667 8.12506 14.7615 6.79048 14.9458C5.4559 15.13 4.24327 15.4001 3.22182 15.7406C2.20038 16.0811 1.39013 16.4853 0.837325 16.9302C0.284523 17.375 -1.26286e-07 17.8518 0 18.3333L11 18.3333H22Z" />
            </svg>
            <p class="sr-only">Menu</p>
        </button>
        <div class="sm:ml-4">
            <h1 class="sr-only">Alan Lima</h1>
            <span class="font-stretch text-xl leading-none m-0">AALAN LLIMA</span>
        </div>
        <ContactIcons class="hidden lg:flex gap-4 grow justify-end px-4" />
        <button @click="darkMode"
            class="border-l-[1px] border-preto dark:border-branco w-11 h-11 grid place-items-center select-none order-3">
            <div title="Alternar para modo escuro" v-if="!isDark">
                <svg class="fill-preto dark:fill-branco" version="1.0" xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" viewBox="0 0 1000.000000 1000.000000" preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)" stroke="none">
                        <path d="M4740 9844 c-323 -30 -528 -60 -770 -115 -179 -41 -523 -146 -635
-195 -16 -7 -86 -36 -155 -64 -141 -59 -279 -125 -390 -186 -41 -23 -97 -54
-125 -69 -82 -45 -375 -237 -409 -267 -11 -10 -23 -18 -27 -18 -4 0 -14 -6
-21 -13 -7 -7 -40 -33 -73 -57 -32 -25 -67 -52 -76 -60 -9 -8 -27 -24 -40 -34
-188 -148 -466 -425 -638 -636 -34 -41 -70 -84 -80 -95 -37 -42 -241 -335
-303 -435 -595 -959 -829 -2102 -662 -3235 52 -357 164 -768 294 -1080 23 -55
51 -121 61 -148 26 -65 140 -292 202 -402 51 -91 59 -105 138 -230 48 -77 237
-342 278 -391 14 -17 35 -42 45 -55 152 -190 429 -473 611 -623 33 -28 62 -53
65 -57 29 -38 495 -360 619 -427 24 -13 58 -32 75 -43 77 -46 334 -171 466
-226 437 -183 841 -289 1330 -350 209 -26 861 -26 1070 0 306 38 593 97 856
177 126 39 348 116 409 144 17 7 62 26 100 42 169 69 501 244 648 341 39 26
76 50 82 52 26 11 376 268 395 291 3 3 28 24 55 45 97 78 406 379 497 485 26
30 70 82 98 115 48 56 144 180 198 257 13 18 42 60 65 93 49 69 197 301 197
309 0 3 19 38 43 78 41 70 177 340 177 352 0 3 14 36 31 73 160 350 295 853
354 1318 113 900 -53 1876 -457 2690 -57 115 -178 335 -183 335 -2 0 10 -44
26 -97 39 -127 63 -232 86 -368 25 -156 26 -563 0 -720 -36 -216 -100 -436
-181 -625 -112 -258 -326 -564 -532 -760 -365 -348 -783 -558 -1297 -652 -106
-19 -157 -22 -392 -22 -291 -1 -393 11 -620 70 -321 83 -659 253 -909 457
-135 110 -344 328 -434 452 -12 16 -104 157 -128 195 -154 246 -272 587 -320
925 -21 148 -24 457 -5 605 48 383 183 751 390 1065 35 53 30 46 119 160 117
147 201 234 333 345 338 283 722 462 1164 541 116 21 161 24 405 24 222 0 295
-4 380 -18 214 -37 406 -94 598 -175 39 -17 72 -27 72 -22 0 6 -4 10 -8 10 -5
0 -22 11 -38 25 -16 14 -32 25 -36 25 -4 0 -13 6 -20 13 -20 19 -233 158 -315
206 -150 87 -202 114 -328 175 -175 84 -182 87 -336 149 -392 157 -818 263
-1259 313 -138 15 -718 28 -830 18z m-3155 -2626 c-2 -7 -15 -49 -29 -93 -39
-121 -93 -350 -121 -508 -50 -290 -60 -409 -60 -767 0 -359 10 -476 61 -770
105 -599 356 -1218 693 -1705 74 -106 206 -281 245 -325 17 -19 49 -58 71 -85
54 -66 310 -324 410 -411 96 -84 203 -170 305 -246 74 -55 335 -228 344 -228
2 0 40 -21 83 -46 73 -44 317 -167 411 -207 136 -59 379 -148 487 -178 410
-114 671 -159 1055 -179 446 -24 938 29 1360 146 52 14 111 30 130 35 39 9
283 94 315 109 11 5 45 19 75 30 70 26 64 23 270 123 190 92 407 218 545 317
113 80 129 85 78 24 -48 -58 -274 -279 -353 -346 -95 -82 -100 -86 -138 -116
-20 -17 -77 -60 -127 -96 -49 -36 -94 -69 -100 -73 -16 -13 -194 -126 -278
-177 -71 -43 -388 -206 -400 -206 -3 0 -34 -13 -69 -29 -90 -41 -271 -108
-401 -147 -1262 -388 -2636 -169 -3697 590 -47 33 -89 64 -95 68 -5 5 -28 22
-50 39 -140 107 -269 224 -431 389 -83 85 -99 103 -177 194 -23 27 -47 54 -52
60 -46 51 -305 408 -305 420 0 3 -29 52 -65 111 -36 58 -65 108 -65 110 0 3
-19 40 -43 82 -82 149 -193 410 -257 603 -333 1008 -288 2060 131 3040 37 86
182 371 213 418 29 43 38 52 31 30z" />
                    </g>
                </svg>
                <p class="sr-only">Alternar para modo escuro</p>
            </div>

            <div title="Alternar para modo claro" v-if="isDark">
                <svg class="fill-preto dark:fill-branco" version="1.0" xmlns="http://www.w3.org/2000/svg" width="26"
                    height="26" viewBox="0 0 1206.000000 1206.000000" preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,1206.000000) scale(0.100000,-0.100000)" stroke="none">
                        <path d="M5200 11104 c-642 -643 -816 -822 -785 -809 107 46 434 144 593 179
338 75 566 103 927 112 580 15 1161 -83 1720 -291 11 -4 -349 362 -800 814
-451 451 -822 821 -825 821 -3 0 -376 -372 -830 -826z" />
                        <path d="M1851 9033 c0 -867 3 -1171 11 -1153 45 101 198 394 252 483 36 60
66 110 66 112 0 11 219 319 265 372 5 7 15 18 20 25 239 303 555 607 857 827
233 169 419 282 677 413 l195 98 -1172 0 -1172 0 1 -1177z" />
                        <path d="M7890 10198 c234 -100 675 -356 845 -490 6 -4 55 -42 110 -85 196
-151 448 -386 592 -552 21 -25 47 -54 58 -65 11 -12 45 -52 75 -91 30 -38 60
-76 67 -83 7 -8 27 -35 45 -60 18 -26 38 -53 45 -60 7 -7 13 -17 13 -21 0 -4
8 -16 18 -27 60 -65 255 -391 361 -605 l91 -183 0 1167 0 1167 -1172 -1 c-844
0 -1166 -3 -1148 -11z" />
                        <path d="M950 6855 l-825 -825 827 -827 827 -827 -53 155 c-329 962 -334 2002
-15 2952 28 84 56 160 61 170 5 10 8 20 6 22 -2 3 -375 -367 -828 -820z" />
                        <path d="M10316 7605 c130 -343 229 -799 264 -1210 13 -155 13 -576 0 -730
-35 -414 -133 -863 -264 -1210 l-27 -70 823 823 823 822 -823 823 -823 822 27
-70z" />
                        <path d="M1851 3028 l-1 -1178 1172 0 1172 0 -183 91 c-308 153 -649 372 -886
569 -120 101 -406 375 -469 451 -15 19 -45 52 -65 74 -20 22 -54 63 -76 90
-22 28 -43 52 -46 55 -21 19 -289 394 -289 404 0 2 -30 53 -67 112 -55 90
-209 386 -251 484 -8 18 -11 -298 -11 -1152z" />
                        <path d="M10116 3997 c-117 -238 -261 -476 -410 -677 -38 -52 -75 -100 -81
-107 -5 -7 -15 -18 -20 -25 -43 -54 -91 -114 -95 -118 -3 -3 -25 -27 -49 -55
-144 -164 -413 -422 -538 -518 -34 -26 -68 -53 -75 -60 -19 -18 -181 -135
-270 -195 -152 -102 -316 -197 -507 -294 l-195 -98 1167 0 1167 0 0 1165 c0
641 -1 1165 -2 1164 -2 0 -43 -82 -92 -182z" />
                        <path d="M5202 954 l828 -829 822 824 c453 453 814 820 803 816 -238 -92 -585
-186 -870 -234 -256 -43 -415 -55 -750 -55 -410 0 -643 24 -1003 104 -203 45
-557 152 -637 192 -11 6 352 -363 807 -818z" />
                    </g>
                </svg>
                <p class="sr-only">Alternar para modo claro</p>
            </div>
        </button>
        <ul
            :class="['text-lg font-mono absolute top-11 left-0 w-[187px] border-[1px] border-l-0 flex flex-col border-preto dark:border-branco bg-branco dark:bg-preto sm:flex sm:relative sm:flex-row sm:border-none sm:top-0 sm:w-fit sm:mx-auto sm:mr-0', { 'hidden': menuIsHidden }]">
            <li
                class="text-preto dark:text-branco hover:bg-preto hover:text-branco dark:hover:bg-branco dark:hover:text-preto border-[1px] border-t-0 border-l-0 border-preto dark:border-branco sm:border-b-0 sm:border-l-[1px] sm:border-r-0 sm:min-w-[100px] sm:text-center">
                <a href="#" class="block w-full h-full p-2 pl-4 sm:p-2">Home</a>
            </li>
            <li
                class="text-preto dark:text-branco hover:bg-preto hover:text-branco dark:hover:bg-branco dark:hover:text-preto border-[1px] border-t-0 border-l-0 border-preto dark:border-branco sm:border-b-0 sm:border-l-[1px] sm:border-r-0 sm:min-w-[100px] sm:text-center">
                <a href="#section_two" class="block w-full h-full p-2 pl-4 sm:p-2">Projetos</a>
            </li>
            <li
                class="text-preto dark:text-branco hover:bg-preto hover:text-branco dark:hover:bg-branco dark:hover:text-preto border-[1px] border-t-0 border-l-0 border-preto dark:border-branco sm:border-b-0 sm:border-l-[1px] sm:border-r-0 sm:min-w-[100px] sm:text-center">
                <a href="#" class="block w-full h-full p-2 pl-4 sm:p-2">Contato</a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { ref } from 'vue'
const menuIsHidden = ref(true)
import ContactIcons from '../components/common/ContactIcons.vue'

const isDark = ref(false)

const darkMode = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem("theme", "light");
        isDark.value = false
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem("theme", "dark")
        isDark.value = true
    }
}
</script>

<style scoped>
@keyframes fadeout {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

#darkModeTransition {
    animation: fadeout 3s;
}
</style>