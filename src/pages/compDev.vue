<script setup>
import Prueba from '@/components/prueba.vue'

import GoldShip from '@/assets/Multimedia/Imagenes/uma/goldie.png'
const Goldie =
[
    'Es notoriamente una de las Umas más “caras” en terminos de recursos y de stats si buscas consistencia, tienes que maximizar sus stats demasiado para no quedarte atrás.',
    'Tiene estilo "End Closer” o tácticas que implican acumular algo atrás para hacer remate al final, lo cual depende de habilidades, posicionamientos, stats altos (en especial power), recuperación de stamina y suerte. Los remates finales pueden fallar si hay tráfico (otras corredoras bloqueando) o si la stamina se agota antes del sprint final.',
    'Tiene bonos decentes de stamina pero su habilidad única (“Anchors Aweigh!” u otras, según la vestimenta) frecuentemente no se suficiente para compensar estar detrás, los bloqueos, etc.',
    'Y si contamos que aveces bloquea todos los entrenamientos si no lo haces bien, eso son turnos de entrenamiento perdidos.',
    'Dificultad: Moderada-Dificil (con tendencia a dificil)'
]
</script>

<template>
    <Prueba
        nombre="Gold Ship"
        :imagen="GoldShip"
        descripcion1="De las mas populares de la franquicia, la habrás visto en alguna parte de internet y seguro fue la que te atrajo en este mundo pero si la escoges de inicio, amenos que sepas lo que haces, tengas un mazo de cartas ganador y mucha suerte, no ganarás."
        :lista="Goldie"
    />

</template>

<style scoped>

</style>