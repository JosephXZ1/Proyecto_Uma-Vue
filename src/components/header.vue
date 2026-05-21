<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// ===============================
// ESTADOS REACTIVOS
// ===============================

// Estado del menú hamburguesa
const menuOpen = ref(false)

// Estado del scroll
const isScrolled = ref(false)

// ===============================
// IMÁGENES
// ===============================

import menuIconOne from '../assets/Multimedia/Imagenes/menu1.png'
import menuIconTwo from '../assets/Multimedia/Imagenes/menu2.png'

// ===============================
// FUNCIONES
// ===============================

// Abrir/cerrar menú
function toggleMenu()
{
    menuOpen.value = !menuOpen.value
}


// Detectar scroll
function handleScroll()
{
    isScrolled.value = window.scrollY > 50
}

// ===============================
// CICLO DE VIDA
// ===============================

onMounted(() =>
{
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() =>
{
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>

    <header class="transition header flex" :class="{ scrolled: isScrolled }">
        <!-- LOGO -->
        <a href="/" class="flex transition">
            <h1>Cómo jugar</h1>
            <img src="../assets/Multimedia/Imagenes/logo_Uma.png" alt="Página principal">
        </a>

        <!-- BOTÓN HAMBURGUESA -->
        <button class="headerButton flex transition" aria-label="Abrir menú" @click="toggleMenu">
            <img :src="isScrolled ? menuIconOne : menuIconTwo" alt="Menú">
        </button>

        <!-- NAV -->
        <nav class="navBar flex" :class="{ active: menuOpen }">
            <ul class="flex">
                <li class="fullSize bgImg" data-nav="uma">
                    <a href="#" class="flex fullSize transition">Las Umas</a>
                </li>
                <li class="fullSize bgImg" data-nav="legacy">
                    <a href="#" class="flex fullSize transition">Legado</a>
                </li>
                <li class="fullSize bgImg" data-nav="training">
                    <a href="#" class="flex fullSize transition">Entrenamiento</a>
                </li>
                <li class="fullSize bgImg" data-nav="cards">
                    <a href="#" class="flex fullSize transition">Cartas</a>
                </li>
                <li class="fullSize bgImg" data-nav="stats">
                    <a href="#" class="flex fullSize transition">Estadísticas</a>
                </li>
                <li class="fullSize bgImg" data-nav="strategy">
                    <a href="#" class="flex fullSize transition">Estrategia</a>
                </li>
            </ul>
        </nav>
    </header>

</template>

<style scoped>
/* - - - - - - - - - - HEADER - - - - - - - - - - */
.header
{
    width: 100%;
    height: 15%;
    padding-left: 2rem;
    justify-content: space-between;
    background-color: transparent;
    box-shadow: 0 2px 5px transparent;
    font-family: "Aleo", serif;
    position: fixed;
    z-index: 100;
}

/* El texto e img de header (el de inicio) */
.header a
{
    gap: 1rem;
    font-size: 1.3rem;
    color: #707070;
    text-decoration: none;
}

.header a:hover {color: #744a22;}

.header a img {width: 15rem;}

/* EL BOTÓN DERECHO */
.header .headerButton
{
    width: 7vw;
    height: 100%;
    background-color: transparent;
    border: 0;
    cursor: pointer;
}

.header .headerButton img
{
    width: 73%;
    height: auto;
}

/* HEADER CON SCROLL */
.header.scrolled
{
    background-color: #eeeef0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.header.scrolled .headerButton {background-color: #93df37;}
.header .headerButton:hover, .header.scrolled .headerButton:hover {background-color: #008d0a;}

/* EL MENÚ DEL HEADER (Menú hamburguesa) */
.navBar
{
    position: fixed;
    top: 15%;
    right: -21vw;
    width: 21vw;
    height: 85vh;
    background: #008d0a;
    flex-direction: column;
    transition: right 0.3s ease-in-out;
}

.navBar.active {right: 0;}

.navBar ul
{
    width: 100%;
    height: 100%;
    flex-direction: column;
    list-style: none;
}

.navBar li[data-nav="uma"] {background-image: url('../assets/Multimedia/Imagenes/navUma.jpg');}
.navBar li[data-nav="legacy"] {background-image: url('../assets/Multimedia/Imagenes/navLegacy.jpg');}
.navBar li[data-nav="training"] {background-image: url('../assets/Multimedia/Imagenes/navTraining.jpg');}
.navBar li[data-nav="cards"] {background-image: url('../assets/Multimedia/Imagenes/navCards.jpg');}
.navBar li[data-nav="stats"] {background-image: url('../assets/Multimedia/Imagenes/navStats.jpg');}
.navBar li[data-nav="strategy"] {background-image: url('../assets/Multimedia/Imagenes/navStrategy.jpg');}

.navBar a
{
    padding: 3vh 0vw;
    font-family: "Aleo", serif;
    font-weight: 650;
    font-size: 1.7rem;
    color: transparent;
    background-color: transparent;
    text-shadow: 1px 1px 2px transparent;
    text-decoration: none;
    justify-content: flex-start;
    transition: all ease 0.3s;
}

.navBar a:hover
{
    padding-left: 2vw;
    background-color: #00000036;
    text-shadow: 2px 2px 1.5px #000;
    color: #fff;
}
</style>