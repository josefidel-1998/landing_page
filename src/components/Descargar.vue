<template>
    <article class="w-full flex flex-row flex-wrap gap-x-64 gap-y-14 justify-center items-center">
        <div class="flex flex-col items-center justify-center gap-y-5">
            <div class="flex flex-col items-center justify-center gap-y-5">
                <h2 class="md:text-5xl sm:text-4xl text-3xl fonsts_change">¡Descarga la App!</h2>
                <p class="text-center w-2/3">Comenzá una experiencia única con Biufort.</p>
            </div>
            <a class="text-xl py-4 md:px-36 sm:px-28 px-24 boton rounded-full ease-in-out duration-300 " 
            href="https://tesis-front-end-pwa.vercel.app/#/">Descargá</a>
        </div>
        <div>
            <img class="md:max-w-full max-w-[90%] mx-auto w-[500px] h-auto" src="../../public/imagenes/clima.png" alt="clima" />
        </div>
    </article>
</template>

<script setup>
    import {ref, onMounted} from "vue";

</script>

<style scoped>
     .boton{
        background-color: #FF7212;
        color: white;
     }
     .boton:hover{
        background-color: #dd5c06e2;
     }
</style>