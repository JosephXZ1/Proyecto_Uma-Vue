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
import SplitCont from '@/components/home/splitCont.vue'
const Shower =
[
    'Necesitas stats decentes en Velocidad y Potencia para que pueda adelantar y mantenerse competitiva; si está subdesarrollada, puede quedarte atrás gran parte de la carrera.',
    'Parece chiste pero es cierto que una de sus debilidades es su estado de animo, es muy volatil y eventos de mood decreciente o negativo no son raros, siendo de los personajes que tienden a tener humor bajo, teniendo que gastar turnos en "ifimary o recreación.',
    'Ligado a lo anterior, las cartas de soporte que restauren ánimo serán vitales para evitar bajones, proveer bonos de amistad y eventos de apoyo, cosa solo posible con un mazo ganador o por lo menos desarrollado.',
    'Dificultad: Moderada'
]
import Bakushin from '@/assets/Multimedia/Imagenes/uma/bakushin.png'
import Suzuka from '@/assets/Multimedia/Imagenes/uma/suzuka.png'
import Oguri from '@/assets/Multimedia/Imagenes/uma/oguri.png'
import Maruzensky from '@/assets/Multimedia/Imagenes/uma/maruzensky.png'
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

    <ul class="list">
        <li>Que tengan stats balanceadas/versátiles para que no tenga puntos débiles tan marcados, o al menos que su punto débil no le impida cumplir metas comunes de carreras (distancias variadas, superficies distintas: turf/dirt).</li>
        <li>Potencial de crecimiento alto con necesidades razonables: Osea, que su curva de mejora sea buena sin requerir equipo exótico o muchos recursos.</li>
        <li>Compatibilidad con cartas accesibles: que no dependa de apoyos o las habilidades de cartas SSR muy raros para rendir bien, y aunque conseguir cartas SSR tampoco es lo mas dificil del mundo, hacerles uncap y subirlas de nivel no será facil (se verá en el apartado de cartas)</li>
        <li>Eventos o habilidades útiles tempranamente: eventos de personaje útiles, habilidades que no dependan de condiciones complicadas, etc. Ya que los eventos durante entrenamientos son muy útiles</li> 
    </ul>

    <section class="text">
        <p>Sabiendo lo anterior, he aquí algunas sugerencias que pueden ser utiles para aquellos que quieran iniciar basandose en testimonios de jugadores ya experimentados:</p>
    </section>

    <splitCont
        nombre="Sakura Bakushin O"
        :imagen="Bakushin"
        descripcion1="Es la opcion predilecta y mas recomendada por los veteranos por su flexibilidad, sus objetivos de carrera poco exigentes y su buena actitud, permite aprender las mecanicas paso a paso, sus bonos de estadísticas iniciales (20% de velocidad y 10% de wit)."
        descripcion2="Es muy paciente con los jugadores en el sentido de que no exige mucho y con cartas medianamente subidas de nivel, es de las mejores opciones para empezar el juego"
        span="Dificultad: Sencilla"
        :invertido="true"
    />

    <splitCont
        nombre="Silence Suzuka"
        :imagen="Suzuka"
        descripcion1="Otra opción que muchos consideran ganadora para los novatos, ya que tiene buenas líneas de crecimiento, habilidades asequibles y útiles, balance entre velocidad y resistencia, es buena en front-runner, lo que evita problemas entre o tras el pelotón para mantenerse lider, etc."
        descripcion2="Lo malo es que en carreras dirt (de condicion terraceria) puede bajar un poco su rendimiento ya que tiene baja aptitud para estas carreras y a diferencia de Bakushin, que el juego directamente da como personaje inicial, Suzuka tiene que conseguirse mediante el gacha o mediante tickets especiales que te permiten conseguir un personaje de 3 estrellas directamente, usualmente a los nuevos jugadores se les da estos tickets asi que es buena opción para usarlo."
        span="Dificultad: Sencilla-moderada (con tendencia a sencilla)"
    />

    <splitCont
        nombre="Oguri Cap"
        :imagen="Oguri"
        descripcion1="Destaca tambien como de las mejores opciones de inicio gracias a su excepcional versatilidad entre diferentes tipos de carreras."
        descripcion2="Ofrece un rendimiento sólido en múltiples categorías de estadísticas y cuenta con una aptitud crucial de rango B para las carreras de terraceria (que es donde muchas tienen debilidad), algo que apreciarás cuando te enfrentes a diversas condiciones de carrera más adelante."
        descripcion3="Lo malo es que al igual que Suzuka, no es opcion de inicio disponible y tendrás que hacer tiradas de Gacha, si la consigues lo lograste, pero si no, siempre existira Bakushin para solventarlo."
        span="Dificultad: Sencilla-moderada"
        :invertido="true"
    />

    <splitCont
        nombre="Maruzensky"
        :imagen="Maruzensky"
        descripcion1='Una Uma que consideran "todo terreno" por las buenas aptitudes que tiene tanto en Turf como en Dirt, puede ayudarte mucho en las fases iniciales.'
        descripcion2="Buen ritmo, buena velocidad focalizada, aptitudes decentes para varias distancias, es casi la misma historia que con Oguri Cap en el sentido de que las bonificaciones, aptitudes y los entrenamientos rinden mucho mejor con ella que con otras Umas, no obstante y una vez mas, ella no esta disponible como inicial, como Bakushin, toca jugar Gacha para desbloquearla"
        span="Dificultad: Sencilla-moderada"
    />

    <section class="text">
        <p>Estas son las elecciones basadas en investigación, si bien otros personajes como Special Week pueden entrar en esta lista, aunque inicie de forma sencilla, puede complicarse mas las cosas a medida que se avanza en la carrera, cosa que estas 4 que describimos anteriormente no tanto y pueden ser mas amigables o menos exigentes, ya que al inicio las cartas no estan maximizadas o uncapeadas, apenas te estas familiarizando con las mecanicas del juego, etc. Y por eso iniciar con una que se adecue con nuestras necesidades es una forma rapida de asegurar la victoria (siempre que tambien entrenes y seas estrategico, claro).</p>
        <p>Cabe destacar tambien que obviamente conforme vayas avanzando y experimentandote en el juego podrás jugar con quien quieras, quieres entrenar a Tachyon, Goldie, Rice, Teio, McQueen, etc. puedes hacerlo, para entonces ya tendrás experiencia, cartas mejoradas y porque no, uno o varios campeonatos URA con algunas Umas lo que por consecuente hará legados fuertes, estos cuentan mucho y lo tocaremos mas adelante.</p>
    </section>

</template>

<style scoped>
.between {margin: 0 auto;}
.pre-list {margin: 3rem auto;}

.list
{
    margin: auto;
    width: 70%; 
    padding-left: 0;
    font-size: 1.5rem;
    font-weight: 430;
    list-style-type: '✅︎'; /* Remove default bullet points */
}

.list li{margin: 1rem 0;padding-left: 1rem;}
</style>