<script setup>
import Fondo from '@/components/fondoText.vue'
import FondoImg from '@/assets/Multimedia/Imagenes/uma/background_uma.jpg'

import splitCont from '@/components/umas/splitContUma.vue'

//Importacion de imagenes y creacion de arreglos para las Umas
import GoldShip from '@/assets/Multimedia/Imagenes/uma/goldie.png'
const Goldie =
[
    'Es notoriamente una de las Umas más “caras” en terminos de recursos y de stats si buscas consistencia, tienes que maximizar sus stats demasiado para no quedarte atrás.',
    'Tiene estilo "End Closer” o tácticas que implican acumular algo atrás para hacer remate al final, lo cual depende de habilidades, posicionamientos, stats altos (en especial power), recuperación de stamina y suerte. Los remates finales pueden fallar si hay tráfico (otras corredoras bloqueando) o si la stamina se agota antes del sprint final.',
    'Tiene bonos decentes de stamina pero su habilidad única (“Anchors Aweigh!” u otras, según la vestimenta) frecuentemente no se suficiente para compensar estar detrás, los bloqueos, etc.',
    'Y si contamos que aveces bloquea todos los entrenamientos si no lo haces bien, eso son turnos de entrenamiento perdidos.',
    'Dificultad: Moderada-Dificil (con tendencia a dificil)'
]
import Agnes from '@/assets/Multimedia/Imagenes/uma/tachyon.png'
const Tachyon =
[
    'Tiene buena base (velocidad, wit, etc.) y algunas versiones con habilidades únicas que favorecen estar adelante en curva o al final en distancias medias, pero no tiene grandes bonos de stamina/power desde el inicio, ni aptitudes ultra versátiles en todas las superficies.',
    'Si no tienes buen equipamiento de cartas de apoyo, puedes tener problemas con stamina o con llegar al punto en que su habilidad única pueda brillar.',
    'Su ventaja se da más adelante o con buen build; al inicio puede estar por detrás de personajes con bonos de velocidad altos o estilo “front” seguro.',
    'Dificultad: Moderada-Dificil'
]
import Rice from '@/assets/Multimedia/Imagenes/uma/rice.png'
const Shower =
[
    'Necesitas stats decentes en Velocidad y Potencia para que pueda adelantar y mantenerse competitiva; si está subdesarrollada, puede quedarte atrás gran parte de la carrera.',
    'Parece chiste pero es cierto que una de sus debilidades es su estado de animo, es muy volatil y eventos de mood decreciente o negativo no son raros, siendo de los personajes que tienden a tener humor bajo, teniendo que gastar turnos en "ifimary o recreación.',
    'Ligado a lo anterior, las cartas de soporte que restauren ánimo serán vitales para evitar bajones, proveer bonos de amistad y eventos de apoyo, cosa solo posible con un mazo ganador o por lo menos desarrollado.',
    'Dificultad: Moderada'
]
</script>

<template>
    <Fondo
        titulo="Las Umas"
        :imagenFondo="FondoImg"
    />

    <section class="text">
        <p>Son el núcleo central del juego, literalmente la razon por la que existe, y no hace falta recalcarlo, dado a que por eso estas aqui. No obstante, cuando inicias el modo carrera, por obviedad tendrás que escoger a tu personaje, a tu Uma, y fácil podrías escoger tu favorita, probablemente Gold Ship, Agnes Tachyon, Tokai Teiyo, El Condor Pasa, etc. pero apesar de que te gusten, ¿te has parado a pensar que quizá no sea la mejor opcion para iniciar? si, todas corren y tienen que entrenar, ganar stats, etc. como todas, pero hay particularidades, asi tan pequeñas que pueden hacerte la vida dificil, ¿por qué? supongamos que escogiste a Goldie, todo bien, te gusta sus eventos y estupideces, pero hay un problema, escogerla es un disparo en el pie como personaje inicial ¿porque?</p>
    </section>

    <splitCont
        nombre="Gold Ship"
        :imagen="GoldShip"
        descripcion1="De las mas populares de la franquicia, la habrás visto en alguna parte de internet y seguro fue la que te atrajo en este mundo pero si la escoges de inicio, amenos que sepas lo que haces, tengas un mazo de cartas ganador y mucha suerte, no ganarás."
        :lista="Goldie"
    />

    <section class="text between">
        <p>¿O que tal si quieres entrenar a Agnes Tachyon?</p>
    </section>

    <splitCont
        nombre="Agnes Tachyon"
        :imagen="Agnes"
        descripcion1="La vieja de muchos, padre IRL de Daiwa Scarlet y muy popular tambien por memes y por ser una leyenda del turf japones, no da tanta lata como Goldie, pero..."
        :lista="Tachyon"
        :invertido="true"
    />

    <section class="text between">
        <p>¿O a Rice Shower?</p>
    </section>

    <splitCont
        nombre="Rice Shower"
        :imagen="Rice"
        descripcion1='Conocida por el anime y tambien por ser la "segunda hija" del fandom junto a Haru Urara, es linda y tierna, pero...'
        :lista="Shower"
    />

    <section class="text pre-list">
        <p>¿Ahora entiendes porque escoger a tu Uma favorita no siempre rinde? Es en este apartado se abarcara lo que debes tener en cuenta al momento de elegir y algunas recomendaciones de Umas que son mas amigables con los novatos.</p>
        <p>La clave de esto es escoger a una Uma que sea fácil de entrenar y no de tantos problemas o eventos aleatorios que perjudiquen, ya que como vimos antes no todas son iguales y tienen sus diferencias, asi que las cosas que tienes que tener en cuenta son las siguientes:</p>
    </section>

</template>

<style scoped>
.between {margin: 0 auto;}
.pre-list {margin: 3rem auto;}
</style>