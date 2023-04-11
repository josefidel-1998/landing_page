<template>
    <article class="funcionalidades">
        <h2 class="text-white text-5xl font-bold lg:text-left md:mt-24 sm:mt-32 mt-48 lg:ml-44 ml-0 text-center">Funcionalidades</h2>
        <ul class="md:w-[80%] w-[100%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-content-center gap-20 md:mt-10 mt-20">

        <li 
        class="md:min-w-[240px] sm:max-w-[400px] max-w-[300px] mx-auto bg-white li__fondo" 
        v-for="articulo in articulos" 
        :key="articulo.titulo">
        <img
            :alt="articulo.titulo"
            :src="articulo.ruta"
            class="w-full h-auto max-w-full  rounded-xl object-cover"/>

        <div class="p-4">
            <h3 class="text-lg font-bold text-gray-900 text-center">
                {{ articulo.titulo }}
            </h3>
        </div>
        </li>

        </ul>
    </article>
</template>

<script setup>
    import {ref} from 'vue';
    const articulos = ref([
        {
            titulo: "Busquedas de especies",
            ruta: 'https://res.cloudinary.com/duadnkhtu/image/upload/v1681181733/imagen_3_lxsl0p.jpg'
        },
        {
            titulo: "Tips para informarse",
            ruta: 'https://res.cloudinary.com/duadnkhtu/image/upload/v1681181733/imagen_4_kqvzkj.jpg'
        },
        {
            titulo: "Sugerencias",
            ruta: 'https://res.cloudinary.com/duadnkhtu/image/upload/v1681181733/imagen_6_ev315k.jpg'
        },
        {
            titulo: "Puntuación de Campings",
            ruta: 'https://res.cloudinary.com/duadnkhtu/image/upload/v1681181733/imagen_2_pxrhxl.jpg'
        },
        {
            titulo: "Perfil de usuario",
            ruta: 'https://res.cloudinary.com/duadnkhtu/image/upload/v1681181733/imagen_5_brghrd.jpg'
        },
        {
            titulo: "Meteorología",
            ruta: 'https://res.cloudinary.com/duadnkhtu/image/upload/v1681181733/imagen_1_g2pvyy.jpg'
        },
    ])
</script>

<style scope>
    .li__fondo{
        border-radius: 2.5rem;
    }
</style>