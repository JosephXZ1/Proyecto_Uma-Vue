<script setup>
import Video from '../components/home/homeVideo.vue'

import splitCont from '../components/home/splitCont.vue'
import esp1 from '../assets/Multimedia/Imagenes/esp1.jpg'
import esp2 from '@/assets/Multimedia/Imagenes/esp2.jpg'
import Cards from '@/components/home/cards.vue';
</script>

<template>

    <Video /> 

    <section class="text">
        <h2>Bienvenido, nuevo entrenador</h2>
        <p>Hice este sitio web para guiar a los nuevos interesados en el juego,  pues como saben, este juego fue un BOOM en internet y muchos como tu y yo nos interesamos, pero cuando vimos cuantas cosas hay en pantallas y cuantas estadísticas y demás cosas hay que gestionar fracasamos al primer y muchos mas intentos, y seguramente habrás visto tutoriales que son buenos, pero creo que hay aspectos que se dejan pasar que son importantes para lograr ganar en el juego, y mi objetivo es despejar esas dudas que puede y te hayas preguntado.</p>

        <p>Abarcaremos muchos campos muy importantes, desde las Umas, pasando por los entrenamientos, las estadísticas y las cartas (y si, son lo mas importante) para poder hacer estrategias de carreras y ganar.</p>
    </section>

    <section class="uraF">
        <img src="../assets/Multimedia/Imagenes/uraFinale.png" alt="Imagen representativa del modo URA Finale" title="URA Finale">
        <p>Cabe aclarar que esto es especialmente para los jugadores del URA Finale (Modo carrera del juego)</p>
    </section>

    <splitCont
        titulo="Primero... ¿Qué son las Umas?"
        descripcion="Apartado rápido para conocer lo básico que necesitas saber para de las Umas, nos centraremos en algunos personajes, que tipo de corredoras son y características que se verán a mayor profundidad en otros apartados"
        :enlace="{ name: 'Umas' }"
        :imagenFondo="esp1"
    />

    <Cards />

    <splitCont
        titulo="Estrategía de carrera"
        descripcion="Aquí, luego de ver el resto de apartados todo se complementará el día de las carreras, saber donde poner a tu Uma no será tan fácil, y se deberá analizar todo para ponerla en una posición que la haga ganadora"
        :enlace="{ name: 'Strategy' }"
        :imagenFondo="esp2"
        :invertido="true"
    />
</template>

<style scoped>
.uraF
{
    margin: 7rem auto;
    width: 85%;
    text-align: center;
}

.uraF p
{
    margin-top: 1rem;
    font-family: "Montserrat", sans-serif;
    font-size: 1.6rem;    
    font-weight: 600;
}

.uraF{width: 90%;}

.uraF img
{
    max-width: 40vw;
    height: auto;
}
</style>