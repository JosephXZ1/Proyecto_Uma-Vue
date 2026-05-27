<script setup>
import Prueba from '@/components/prueba.vue'

import { ref } from 'vue';
const popupActivo = ref(null);
import Prueba2 from '@/components/prueba2.vue'

import imgTraining from '@/assets/Multimedia/Imagenes/training/training.jpg';
import imgObjectives from '@/assets/Multimedia/Imagenes/training/Objectives.jpg';
import imgMood from '@/assets/Multimedia/Imagenes/training/Mood.jpg';
</script>

<template>
    <Prueba2 :imagen="imgTraining">
        
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

        <p>Abajo estarán las cosas que puedes hacer, desde <span class="bold" data-color="blue">entrenar</span>, <span class="bold" data-color="green">descansar</span>, <span class="bold" data-color="skyBlue">habilidades</span>, <span class="bold" data-color="purple">enfermería</span>, <span class="bold" data-color="orange">recreación</span> y <span class="bold" data-color="pink">carreras</span>, todos a excepción de las habilidades consumirán un turno...</p>

        <div id="details" class="popup flex transition" 
        :class="{ 'active': popupActivo === 'details' }" :style="{'--popup-width': '55%'}" @mouseleave="popupActivo = null">
            <img :src="imgObjectives" alt="Objetivos">
        </div>
        
        <div id="mood" class="popup flex transition"
        :class="{'active': popupActivo === 'mood'}" :style="{'--popup-width' : '67%'}" @mouseleave="popupActivo = null">
            <img :src="imgMood" alt="Animo">
        </div>
    </Prueba2>
</template>