<script setup>
import { ref } from 'vue';

defineProps(
{
    invertido: 
    {
        type: Boolean,
        default: false
    }
});

// NUESTRA LÓGICA: Esta variable guarda qué popup debe verse.
const popupActivo = ref(null);
</script>

<template>
    <section class="info flex" :class="{ 'reverse' : invertido }">
        <img src="@/assets/Multimedia/Imagenes/training/training.jpg" alt="">
        
        <div class="text-block">
            <p>Primero esta algo llamado <span class="bold" data-color="blue">Turns</span> que son cuantos turnos tienes antes de una carrera, tienen que ser aprovechados al maximo en entrenamientos, pues habrá veces que tengas solo 5, 4 o hasta 3 que te pondrá en aprietos si no aprovechaste bien los turnos.</p>
            
            <p>
                Luego estan los <span class="bold" data-color="blue">goals</span> que cumplir para avanzar en la carrera, en 
                <button class="trigger transition"   @mouseenter="popupActivo = 'details'"   title="Pasar el cursor sobre la imagen para que desaparezca">DETAILS</button> 
                se puede ver los diferentes objetivos (quedar en X posicion en carreras) los objetivos pueden variar dependiendo del personaje ya que no todas tendrán los mismo objetivos.</p>
            <p>Habrá una barra de energía en colores <span class="bold" data-color="energy">azul-verde-rojo</span>, es la barra de energía de tu Uma, cada entrenamiento que hagas la ira drenando, algunos mas y otros menos, mantenerla en alto siempre es prioridad para entrenar mas y evitar fallar.</p>
            
            <p>
                Al lado está el <button class="trigger transition"   @mouseenter="popupActivo = 'mood'">MOOD</button> que basicamente es el estado de animo de tu Uma, estado al que tienes que prestarle atencion y cerciorarte que siempre este en <span class="bold" data-color="pink">Great</span>, <span class="bold" data-color="strongOrange">Good</span> o por lo menos <span class="bold" data-color="orange">Normal</span> ya que puede beneficiar o perjudicar entrenamientos o carreras.
            </p>
            <p>La barra llena de numeros simplemente es las stats que tienes en ese momento, que tan altas o bajas las tienes en terminos numericos.</p>

            <p>Abajo estarán las cosas que puedes hacer, desde <span class="bold" data-color="blue">entrenar</span>, <span class="bold" data-color="green">descansar</span>, <span class="bold" data-color="skyBlue">habilidades</span>, <span class="bold" data-color="purple">enfermería</span>, <span class="bold" data-color="orange">recreación</span> y <span class="bold" data-color="pink">carreras</span>, todos a excepción de las habilidades consumirán un turno, asi que debes tomar decisiones cruciales, tomar descansos solo cuando sea necesario o curar alguna condicion mala que tengas, pero casi todos los turnos deben irse a entrenar o carreras dependiendo de tu caso.</p>

            <div id="details" class="popup flex transition"
            :class="{ 'active': popupActivo === 'details' }"   @mouseleave="popupActivo = null">
                <img src="@/assets/Multimedia/Imagenes/training/Objectives.jpg" alt="">
            </div>
            
            <div id="mood" class="popup flex transition"
            :class="{ 'active': popupActivo === 'mood' }"   @mouseleave="popupActivo = null">
                <img src="@/assets/Multimedia/Imagenes/training/Mood.jpg" alt="">
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Contenedor y sus derivados */
.info
{
    margin: 5rem auto;
    width: 90%;
    height: fit-content;
}

.info img
{
    width: 45%;
    height: auto;
    border-radius: 1rem;
}

.info .text-block
{
    padding: 2rem;
    width: 55%;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 430;
}

.text-block{position: relative;}

.info .text-block p{margin: 1rem 0;}

/* estilos de los activadores de popup */
.trigger
{
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 530;
    color: #a06f4f;
    font-family: "Montserrat", sans-serif;
}

.trigger:hover{color: #784217;}

/* popup base (sin aparecer) */
.popup
{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.95);

    opacity: 0;
    pointer-events: none;
    z-index: 15;
}

/* estado visible */
.popup.active
{
    opacity: 1;
    pointer-events: auto;
    transform: translate(-50%, -50%) scale(1);
}

.popup img{width: 100%;}

#details{width: 55%;}
#mood, #fans{width: 67%;}
#ability{width: 47%;}
#moodDown{width: 43%;}
#swing{width: 70%;} #swing img{border-radius: 0.5rem;}

/* Esta clase es clave para invertir */
.reverse {flex-direction: row-reverse;}
</style>