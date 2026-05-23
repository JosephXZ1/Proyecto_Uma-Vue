<template>
    <section class="cards flex">
        <RouterLink :to="{ name: 'Legacy' }" class="flex">
            <div class="flex transition">
            <h3>El legado</h3>
            </div>
        </RouterLink>
        <RouterLink :to="{ name: 'Cards' }" class="flex">
            <div class="flex transition">
            <h3>Las cartas</h3>
            </div>
        </RouterLink>
        <RouterLink :to="{ name: 'Training' }" class="flex">
            <div class="flex transition">
            <h3>Entrenamiento</h3>
            </div>
        </RouterLink>
        <RouterLink :to="{ name: 'Stats' }" class="flex">
            <div class="flex transition">
            <h3>Estadísticas y estilos</h3>
            </div>
        </RouterLink>
    </section>
</template>

<style scoped>
.cards
{
    width: 100%;
    height: 68vh;
    margin: 7rem auto;
    padding-top: 1.5rem;
    align-items: flex-start;
    overflow: hidden;
}

.cards a
{
    width: 18vw;
    height: 57vh;
    margin: 0 2rem;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    text-decoration: none;
    box-shadow: 0 10px 10px rgba(0, 0, 0, .5);
    transition: transform .3s ease;
}

.cards a:hover{transform: scale(1.1);}

/* Layer de fondo con el efecto arcoíris */
/* Definición inicial */
.cards a::before
{
    content: "";
    position: absolute;
    width: 180%;
    height: 120%;
    background: conic-gradient(
        #FD9FEB,
        #01FEF2,
        #01FE38,
        #DDE104,
        #DDE104,
        #01FEF2,
        #01FEF2,
        #FD9FEB,
        #FD9FEB
    );

    transform: rotate(0deg); /* posición inicial */
    transition: transform 1.5s ease-in-out; /* animación ligera */
}

/* da la vuelta SOLO en hover */
.cards a:hover::before{transform: rotate(360deg);}

/* Layer que contiene la imagen de fondo */
.cards a::after
{
    content: "";
    position: absolute;
    width: 93%;
    height: 95%;
    border-radius: 0.4em;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-size: 2rem;
    font-weight: 500;
    color: #fff;
}

.cards a:nth-child(1)::after { background-image: url("@/assets/Multimedia/Imagenes/cards1.1.jpg"); }
.cards a:nth-child(2)::after { background-image: url("@/assets/Multimedia/Imagenes/cards1.jpg"); }
.cards a:nth-child(3)::after { background-image: url("@/assets/Multimedia/Imagenes/cards3.jpg"); }
.cards a:nth-child(4)::after { background-image: url("@/assets/Multimedia/Imagenes/cards4.jpg"); }

/* Layer de oscurecimiento y texto */
.cards a div
{
    width: 93%;
    height: 95%;
    padding: 2rem;
    border-radius: 0.8rem;
    z-index: 9;
    background-color: transparent;
}

.cards a div:hover{background-color: rgba(0, 0, 0, 0.51);}

.cards a div h3
{
    font-family: "Aleo", serif;
    font-size: 2.5rem;
    font-weight: 500;
    text-align: center;
    color: transparent;
    transition: color 0.3s ease;
}

.cards a:nth-child(3) div h3{font-size: 2rem;}
.cards a div:hover h3{color: #fff;}
</style>