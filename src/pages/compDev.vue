<script setup>
//import Prueba from '../components/prueba.vue'

//El header
//import Header from '../components/header.vue'

//El fondo y texto de inicio de pags.
//import Fondo from '../components/fondoText.vue'
//import imgCards from '../assets/Multimedia/Imagenes/cards/background_cards.jpg'; //La imagen

//El video
//import Video from '../components/homeVideo.vue'

//El Footer
//import Footer from '../components/footer.vue'

import splitCont from '../components/home/splitCont.vue'
import esp1 from '../assets/Multimedia/Imagenes/esp1.jpg'

import Cards from '@/components/home/cards.vue';
</script>

<template>
    <!-- <Prueba /> -->

    <!--<Header />-->

    <!--
    <Fondo 
        titulo="Las cartas" 
        :imagenFondo="imgCards" 
    />-->

    <!-- <Video /> -->

    <!-- <Footer /> -->

    <!-- <splitCont
        titulo="Primero... ¿Qué son las Umas?"
        descripcion="Apartado rápido para conocer lo básico que necesitas saber para de las Umas, nos centraremos en algunos personajes, que tipo de corredoras son y características que se verán a mayor profundidad en otros apartados"
        enlace="{ name: 'umas' }"
        :imagenFondo="esp1"
    /> -->

    <Cards />
</template>

<style scoped>

</style>