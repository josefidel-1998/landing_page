<template>
    <article class="funcionalidades">
        <h2 class="text-white text-5xl font-bold lg:text-left md:mt-24 sm:mt-32 mt-48 lg:ml-44 ml-0 text-center">Funcionalidades</h2>
        <ul class="md:w-[80%] w-[100%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-content-center gap-20 md:mt-10 mt-20">

        <li 
        class="md:min-w-[240px] max-w-[400px] mx-auto bg-white li__fondo" 
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
            ruta: '../../public/imagenes/imagen_3.jpg'
        },
        {
            titulo: "Tips para informarse",
            ruta: '../../public/imagenes/imagen_4.jpg'
        },
        {
            titulo: "Sugerencias",
            ruta: '../../public/imagenes/imagen_6.jpg'
        },
        {
            titulo: "Puntuación de Campings",
            ruta: '../../public/imagenes/imagen_2.jpg'
        },
        {
            titulo: "Perfil de usuario",
            ruta: '../../public/imagenes/imagen_5.jpg'
        },
        {
            titulo: "Meteorología",
            ruta: '../../public/imagenes/imagen_1.jpg'
        },
    ])
</script>

<style scope>
    .li__fondo{
        border-radius: 2.5rem;
    }
</style>