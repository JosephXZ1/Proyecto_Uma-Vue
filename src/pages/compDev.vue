<script setup>
//import Prueba from '../components/prueba.vue'
//import Header from '../components/header.vue'
import Fondo from '../components/fondoText.vue'

import imgCards from '../assets/Multimedia/Imagenes/cards/background_cards.jpg';
</script>

<template>
    <!--<Header />-->

    <Fondo 
        titulo="Las cartas" 
        :imagenFondo="imgCards" 
    />
</template>

<style scoped>

</style>