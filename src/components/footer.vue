<template>
    <footer class="flex">
        <div class="div1">
            <h3>Joseph_X</h3>
            <p>Diseñador y desarrollador web FrontEnd con aspiraciones a diseñar y hacer grandes sitios web y crear una firma llamada "BlackWater Studios"</p>
        </div>
        <div class="div2 flex">
            <a href="https://github.com/JosephXZ1" class="flex" target="_blank" rel="noreferrer noopener"><img class="linkImg transition" src="../assets/Multimedia/Imagenes/L-Git.png" alt="Enlace a perfil de GitHub"></a>
            <a href="https://www.instagram.com/joseph_xyp/" class="flex" target="_blank" rel="noreferrer noopener"><img class="linkImg transition" src="../assets/Multimedia/Imagenes/L-Insta.png" alt="Enlace a perfil de Instagram"></a>
            <a href="https://x.com/El_XPartano" class="flex" target="_blank" rel="noreferrer noopener"><img class="linkImg transition" src="../assets/Multimedia/Imagenes/L-Twit.png" alt="Enlace a perfil de Twitter"></a>
            <a href="https://www.reddit.com/user/ElEspartano209/" class="flex" target="_blank" rel="noreferrer noopener"><img class="linkImg transition" src="../assets/Multimedia/Imagenes/L-Red_1.png" alt="Enlace a perfil de Reddit"></a>
        </div>
    </footer>
    <div class="copyright">
        <p class="flex">© 2025 Web-site by <img src="../assets/Multimedia//Imagenes/BlackWaterLogoW.png" alt="blackwater logo" title="BlackWater St Logo"> | All rights reserved | Made with ❤︎ & <img src="../assets/Multimedia/Imagenes/VueLogo.png" alt="Vue Logo"></p>
    </div>
</template>

<style scoped>
/* - - - - - - - - - - FOOTER - - - - - - - - - - */
footer
{
    width: 100%;
    height: 37vh;
    padding: 1rem 2rem;
    background-color: #008d0a;
    font-family: consolas, monospace;
}

footer .div1
{
    margin: 0 1rem;
    width: 50%;
    height: 100%;
    color: #ffffff;
    gap: 0.5rem;
    padding: 2rem 0;
}

footer .div1 h3
{
    font-size: 3rem;
    font-weight: 700;
}

footer .div1 p
{
    font-size: 1.5rem;
    font-weight: 400;
    margin: 1rem 0;
}

footer .div2
{
    width: 50%;
    height: 100%;
    gap: 2.5rem;
}

footer .div2 a{width: 5.5vw;}

footer .div2 a img
{
    width: 100%;
    height: auto;
}

.linkImg:hover {filter: brightness(0) saturate(100%) invert(19%) sepia(83%) saturate(1195%) hue-rotate(100deg) brightness(99%) contrast(108%);}

/* Pie de pagina Copyright */
.copyright
{
    width: 100%;
    padding: 1.5rem 2rem;
    box-sizing: border-box;
    background-color: #005706;
}

.copyright p
{
    margin: 0;
    color: #fff;
    font-weight: 350;
    justify-content: flex-start;
}

.copyright p img
{
    height: 25px;
    margin: 0 0.5rem;
}

</style>