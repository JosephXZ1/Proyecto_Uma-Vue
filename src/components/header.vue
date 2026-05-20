<template>
    <header class="header flex">
        <a href="index.html" class="flex">
            <h1>Cómo jugar</h1>
            <img src="../assets/Multimedia/Imagenes/logo_Uma.png" alt="Página principal">
        </a>
        <!-- botón como button para accesibilidad 
        <button class="headerButton flex transition" aria-label="Abrir menú">
            <img id="menuIcon" src="../assets/Multimedia/Imagenes/menu2.png" alt="Menú">
        </button>-->
        <!--
    <nav class="navBar flex">
        <ul class="flex">
            <li class="fullSize bgImg" data-nav="uma"><a href="umas.html" class="flex fullSize transition" >Las Umas</a></li>
            <li class="fullSize bgImg" data-nav="legacy"><a href="legacy.html" class="flex fullSize transition" >Legado</a></li>
            <li class="fullSize bgImg" data-nav="training"><a href="training.html" class="flex fullSize transition" >Entrenamiento</a></li>
            <li class="fullSize bgImg" data-nav="cards"><a href="cards.html" class="flex fullSize transition" >Cartas</a></li>
            <li class="fullSize bgImg" data-nav="stats"><a href="stats.html" class="flex fullSize transition" >Estadísticas</a></li>
            <li class="fullSize bgImg" data-nav="strategy"><a href="strategy.html" class="flex fullSize transition" >Estrategia</a></li>
        </ul>
    </nav>-->
    </header>
</template>

<style scoped>
.header
{
    width: 100%;
    height: 15vh;
    padding-left: 2rem;
    justify-content: space-between;
    background-color: #eeeef0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    font-family: "Aleo", serif;
    position: fixed;
    z-index: 100;
}

.header a
{
    gap: 1rem;
    font-size: 1.3rem;
    color: #707070;
    text-decoration: none;
    transition: color 0.3s ease;
}

.header a:hover{color: #744a22;}

.header a img{width: 15rem;}

.header .headerButton
{
    width: 7vw;
    height: 100%;
    background-color: #93df37;
    border: 0;
    transition: background-color 0.3s ease;
    cursor: pointer;
}

.header .headerButton:hover{background-color: #008d0a;}

.header .headerButton img
{
    width: 73%;
    height: auto;
    cursor: pointer;
}
</style>