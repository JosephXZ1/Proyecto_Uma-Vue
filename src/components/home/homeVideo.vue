<template>
    <div class="videoContainer">
        <video autoplay muted loop playsinline class="backgroundVideo fullSize">
            <source src="../../assets/Multimedia/Videos/Index_BG.mp4" type="video/mp4" />
            Tu navegador no soporta videos en HTML5.<!--Mensaje que aparece si el navegador no soporta el video-->
        </video>
        <div class="content flex">
            <h1>¿Te has preguntado cómo jugar el nuevo fenomeno Umamusume? No eres el único</h1>
        </div>
    </div>
</template>

<style scoped>
/* - - - - - - - - - - CONTENEDOR DE VIDEO - - - - - - - - - - */
.videoContainer
{
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.videoContainer::before
{
    content: '';
    position: absolute;
    inset: 0;
    background-color: #00000080;
    z-index: 1;
}

.backgroundVideo
{
    position: absolute;
    object-fit: cover;
    z-index: 0;
}

.content
{
    position: relative;
    z-index: 1;
    color: #fff;
    padding: 10rem 5rem;
    width: 85%;
    height: 100%;
    align-items: flex-start;
    text-align: left;
}

.content h1
{
    font-size: clamp(1.2rem, 4.6vw, 7rem);
    font-family: "Aleo", serif;
    font-weight: 700;
    color: #eeeef0;
    text-shadow: 5px 5px 5px #000;
}
</style>