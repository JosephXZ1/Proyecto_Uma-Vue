<script setup>
defineProps(
{
    titulo:
    {
        type: String,
        required: true
    },
    imagenFondo:
    {
        type: String,
        required: true
    }
});
</script>

<template>
    <section class="fondo flex" :style="{ '--bg-image': `url(${imagenFondo})` }">
        <h2>{{ titulo }}</h2>
    </section>
</template>

<style scoped>
/* CAPA 0: Definición de dimensiones */
.fondo
{
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 0 5rem;
    justify-content: flex-start;
    overflow: hidden;
}

/* CAPA 1: Imagen de fondo dinámica y blur */
.fondo::before
{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: var(--bg-image); /* Variable CSS para imagen */
    background-size: cover;
    background-position: center;
    filter: blur(3px);
    z-index: 1;
}

/* CAPA 2: Capa de oscurecimiento */
.fondo::after
{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000081;
    z-index: 2;
}

/* Contenido (Texto) */
.fondo h2
{
    position: relative;
    font-family: "aleo", serif;
    font-size: 6rem;
    color: #eeeef0;
    text-shadow: 5px 5px 5px #000;
    z-index: 3;
}
</style>