<script setup>
import Fondo from '@/components/fondoText.vue'
import Legado from '@/assets/Multimedia/Imagenes/legacy/background_legacy.jpeg'

</script>

<template>
    <Fondo
        titulo="El Legado"
        :imagenFondo="Legado"
    />

    <section class="text">
        <p>Escoger un legado inicial puede ser complicado, sobre todo cuando uno no tiene experiencia, no sabe que onda con el juego o al ser novato no cuentas con legados fuertes, pero ¿esto que significa? Te explico.</p>
        <p>A la hora de empezar una nueva carrera, el juego te dice que escojas aparte de tu personaje, el legado que lo acompañará (son las dos casillas donde debes añadir personajes que son los legados)</p> 
        <img src="@/assets/Multimedia/Imagenes/legacy/legacy4_1.png" alt="">
        <p>Este legado basicamente lo que hace es que aumenta incialmente las stats de tu Uma (puede ser de determinadas stats y puede aumentar desde +5 hasta incluso +65 puntos dependiendo del legado) y asi puedas iniciar tu carrera sin estar tan rezagado en stats, aunque dependiendo de que tan fuerte sea el legado tendrás mayor o menor impulso inicial, y en los primeros intentos el impulso será minimo por no tener legado fuerte.</p>
        <span class="subtitle">Consejo ganador: nunca escojas el auto-select, es mejor escogerlas por tu cuenta</span>
    </section>

    <section class="text" data-margin="bottom">
        <p>Pero ojo, no solo son las stats iniciales lo que aumentan, porque influyen en mas cosas, el legado tambien puede traer mejoras en estilos de carrera o aptitudes, mejorando la clase del estilo de tu personaje (por ejemplo, si tu Uma tiene clase B en carreras tipo long, un legado puede hacer que suba a clase A, o si es clase G en estilo pace-chaser, puede pasar a clase F) lo que puede beneficiar tus estrategias de carrera.</p>
    </section>

    <section class="imgs flex">
        <img src="@/assets/Multimedia/Imagenes/legacy/legacy1.1.png" alt="">
        <img src="@/assets/Multimedia/Imagenes/legacy/legacy1.2.png" alt="">
    </section>
    <span class="subtitle">Notese como después de escoger un legado los stats iniciales aumentan asi como la aptitud de distancia, se marcan en amarillo</span>

    <section class="text" data-margin="bottom">
        <p>Tambien los legados tiene el sistema <span class="bold" data-color="orange">Sparks</span> que basicamente es un power-up de stats que se da al inicio y pueden aumentar velocidad, power o resistencia, lo que es fundamental en el juego o mejorar aptitudes y se diferencian por colores, el azul y rosado.</p>
        <p>Los <span class="bold" data-color="blue">sparks azules</span> son los que aumentan stats del juego, desde los 3 fundamentales (velocidad, stamina o power) y los restantes de wit y guts, mientras que los <span class="bold" data-color="pink">sparks rosados</span> mejoran aptitudes en tu Uma (mejora su grado en cosas como cierta distancia de carreras, en terrenos de turf o terraceria o estilos de carrera)</p>
        <p>Puedes obtener sparks de 1 a 3 estrellas, estas estrellas dicen que tanto se pueden mejorar stats o aptitudes, si tienes un spark azul de una estrella puede subir desde 5 a 15 puntos, si son 2 mas de 20 y si son 3 estrellas pueden ser 30 o mas puntos, no hay un rango muy exacto pero mas o menos es una idea de que tanto suben, y los rosados aumentan mas sus aptitudes, aunque los expertos recomiendan priorizar los azules sobre los rosados.</p>
        <img src="@/assets/Multimedia/Imagenes/legacy/sparks1.png" alt="">
        <p>Pero aparte de que este power-up inicial se da al inicio de la carrera, también en medio del juego como evento aleatorio tu Uma recibirá otro power-up que aumentara sus stats otra vez, estos eventos son llamados "inspiration" y como se dijo, aparecen en un momento random del juego para darte un impulso extra a tus stats.</p>
    </section>
    <section class="imgs flex">
        <img src="@/assets/Multimedia/Imagenes/legacy/inspiration1.jpg" alt="">
        <img src="@/assets/Multimedia/Imagenes/legacy/inspiration2.jpg" alt="">
        <img src="@/assets/Multimedia/Imagenes/legacy/inspiration3.jpg" alt="">
    </section>

    <section class="legacyCat flex">
        <img src="@/assets/Multimedia/Imagenes/legacy/cat1.png" alt="">
        <p>Los legados se graduan con letras, desde la G hasta la S, un legado fuerte suele estar entre la B y la S (aunque es rarisimo tener/encontrar un legado S) y al mismo tiempo puede tener un signo + que significa que es un grado destacable, asi que si tienes un legado con la letra G, deberás formar legados fuertes para triunfar y eso solo se consigue mediante las derrotas iniciales porque si, lo mas probable es que pierdas (y bastante) al inicio, pero solo asi podrás avanzar.</p>
    </section>

    <section class="text">
        <p>Por tanto en resumen, para lograr avanzar necesitarás un fuerte legado tanto de tu parte (los que vayas forjando a traves de las derrotas y victorias) como tambien, porque no, de ayudas que tengas mediante personas que sigas, ya que como se dijo en el apartado de las cartas, se pueden pedir prestados cartas y legados de parte de tus amigos y personas que sigas, cosa muy útil para principiantes aunque solo podrás escoger 1 legado de tus amigos, y el segundo tiene que venir si o si de tu equipo, aun asi es una forma bastante util de empezar.</p>
        <p>Ya se dijo, el perder es algo natural al inicio y es en parte justamente a la falta de legados fuertes ya que el juego te da legados base debiles y por ende con sparks poco competitivas que influyen en el inicio con poco impacto y luego con las inspiraciones no tan grandes dado a esos sparks, cada que juegues y pierdas tendrás legados de grado mayor, y asi sucesivamente hasta tener legados fuertes, será mucho, si, pero todo se puede con esfuerzo.</p>
    </section>
</template>

<style scoped>
.text img
{
    width: 45vw;
    margin: 3rem auto;
}

.subtitle
{
    display: block;
    margin-top: 1rem;
    font-weight: 500;
    text-align: center;
}

.text[data-margin="bottom"]{margin-bottom: 3rem;}

.imgs
{
    margin: 1rem auto;
    width: 63%;
}

.imgs img
{
    flex: 1; /* cada imagen ocupa el mismo espacio */
    width: 100%; /* asegura que se ajuste dentro del flex-item */
    object-fit: cover; /* mantiene proporciones sin deformar */
    height: auto;
}

.imgs img:first-child
{
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
}

.imgs img:last-child
{
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
}

.legacyCat
{
    width: 80%;
    margin: 7rem auto;
    gap: 2rem;
    
}

.legacyCat img{width: 50%;}

.legacyCat p
{
    display: block;
    width: 55%;
    font-weight: 450;
    font-size: 1.6rem;
    text-align: center;
}
</style>