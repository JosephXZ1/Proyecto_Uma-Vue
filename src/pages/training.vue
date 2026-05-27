<script setup>
import Fondo from '@/components/fondoText.vue'
import Training from '@/assets/Multimedia/Imagenes/training/background_train.jpg'

//Para el splitComplex
import splitComplex from '@/components/splitComplex.vue';
import { ref } from 'vue';
const popupActivo = ref(null); //Se declara el estado nulo en la página y no en el componente

//Imagenes por cada contenedor
import imgTraining from '@/assets/Multimedia/Imagenes/training/training.jpg';
import imgObjectives from '@/assets/Multimedia/Imagenes/training/Objectives.jpg';
import imgMood from '@/assets/Multimedia/Imagenes/training/Mood.jpg';

import imgTraining2 from '@/assets/Multimedia/Imagenes/training/training2.jpg'
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

    <splitComplex :imagen="imgTraining">
        <p>Primero esta algo llamado <span class="bold" data-color="blue">Turns</span> que son cuantos turnos tienes antes de una carrera, tienen que ser aprovechados al maximo en entrenamientos, pues habrá veces que tengas solo 5, 4 o hasta 3 que te pondrá en aprietos si no aprovechaste bien los turnos.</p>
        
        <p>
            Luego estan los <span class="bold" data-color="blue">goals</span> que cumplir para avanzar in la carrera, en 
            <button class="trigger transition" @mouseenter="popupActivo = 'details'" title="Pasar el cursor sobre la imagen para que desaparezca">DETAILS</button> 
            se puede ver los diferentes objetivos (quedar en X posicion en carreras) los objetivos pueden variar dependiendo del personaje ya que no todas tendrán los mismo objetivos.
        </p>
        
        <p>Habrá una barra de energía en colores <span class="bold" data-color="energy">azul-verde-rojo</span>, es la barra de energía de tu Uma, cada entrenamiento que hagas la ira drenando, algunos mas y otros menos, mantenerla en alto siempre es prioridad para entrenar mas y evitar fallar.</p>
        
        <p>
            Al lado está el <button class="trigger transition" @mouseenter="popupActivo = 'mood'">MOOD</button> que basicamente es el estado de animo de tu Uma, estado al que tienes que prestarle atencion y cerciorarte que siempre este en <span class="bold" data-color="pink">Great</span>, <span class="bold" data-color="strongOrange">Good</span> o por lo menos <span class="bold" data-color="orange">Normal</span> ya que puede beneficiar o perjudicar entrenamientos o carreras.
        </p>
        
        <p>La barra llena de numeros simplemente es las stats que tienes en ese momento, que tan altas o bajas las tienes en terminos numericos.</p>

        <p>Abajo estarán las cosas que puedes hacer, desde <span class="bold" data-color="blue">entrenar</span>, <span class="bold" data-color="green">descansar</span>, <span class="bold" data-color="skyBlue">habilidades</span>, <span class="bold" data-color="purple">enfermería</span>, <span class="bold" data-color="orange">recreación</span> y <span class="bold" data-color="pink">carreras</span>, todos a excepción de las habilidades consumirán un turno, asi que debes tomar decisiones cruciales, tomar descansos solo cuando sea necesario o curar alguna condicion mala que tengas, pero casi todos los turnos deben irse a entrenar o carreras dependiendo de tu caso.</p>

        <div id="details" class="popup flex transition" 
        :class="{ 'active': popupActivo === 'details' }"   @mouseleave="popupActivo = null"  :style="{'--popup-width': '55%'}">
            <img :src="imgObjectives" alt="Objetivos">
        </div>
        
        <div id="mood" class="popup flex transition"
        :class="{'active': popupActivo === 'mood'}"   @mouseleave="popupActivo = null"  :style="{'--popup-width' : '67%'}">
            <img :src="imgMood" alt="Animo">
        </div>
    </splitComplex>

    <splitComplex :imagen="imgTraining2" :invertido="true">
        <p>Luego tenemos los entrenamientos, habrán 5 tipos de entrenamiento para cada stat, de entrada cabe decir que aunque dependerá mucho del personaje que usemos será el stat a mejorar, todos necesitarán mejorar los 3 primeros, que son la base de todo y lo que te hará ganar carreras.</p>
        
        <p>Ya hablamos antes de que tipo de stats requieres entrenar, enfoquemonos en la interfaz; cada entrenamiento tiene un nivel, nivel que ira aumentando conforme vayamos haciendo entrenamientos, va desde el nivel 1 al 5, y obviamente las stats subirán más conforme mayor sea el nivel.</p>
        <p>Las Umas que estan al costado derecho son las cartas que escogimos, estas harán sus efectos justamente en los entrenamientos donde aparte de los eventos (más abajo) si maximizamos su nivel o llegamos al nivel 4 (cuando la barra este anaranjada) puede suceder el <span class="bold" data-color="rainbow">friendship training</span></p>
        <p>El friendship training, también llamado rainbow traininig es cuando tienes almenos tus cartas a nivel 4 (la carta sube de nivel cada que entrenas con la carta), sucede de forma aleatoria y para un stat. Como se puede apreciar, 3 de las cartas tienen ese efecto arcoiris, puede aparecer solo una o varias como en este ejemplo, y mientras mas haya, mas puntos stat ganaremos (cuando son las 5 cartas y estan maximizadas puedes ganar hasta 100 puntos en un solo entrenamiento)</p>
        <p>Cabe resaltar que cada entrenamiento tendrá un porcentaje de fallo y depende de la energía de la Uma, si tienes almenos la mitad será un entrenamiento seguro, si es menos de la mitad el porcentaje de fallo será mayor como en este caso, y si fallas cabe la posibilidad de que el mood de tu Uma baje, revisa la energía y se cuidadoso con tus movimientos.</p>
    </splitComplex>
    
</template>

<style scoped>
.text span
{
    display: inline-block;
    margin-top: 1rem;
    font-weight: 500;
}
</style>