<script setup>
import Fondo from '@/components/fondoText.vue'
import Training from '@/assets/Multimedia/Imagenes/training/background_train.jpg'

</script>

<template>
    <Fondo
        titulo="El entrenamiento"
        :imagenFondo="Training"
    />

    <section class="text">
        <p>El entrenamiento es crucial para progresar en el juego, y aqui nos vamos a centrar en el gameplay y en lo que se basa el juego: gestion de recursos, porque si, el juego durante la carrera te dará ciertas opciones de entrenamiento y donde dependerá de tu habilidad de gestion, toma de decisiones y vision a largo plazo para que tu gameplay de sus frutos, pero empecemos por lo basico, la interfaz, seguro habrás visto demasiadas cosas, pero calma que te explico.</p>
        <span>En las siguientes secciones, si pasas el cursor sobre las palabras en mayúsculas, se te mostrará un ejemplo</span>
    </section>

    
</template>

<style scoped>
.text span
{
    display: inline-block;
    margin-top: 1rem;
    font-weight: 500;
}
</style>