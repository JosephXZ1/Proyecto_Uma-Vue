<script setup>
defineProps(
{
    titulo: 
    {
        type: String,
        required: true
    },
    descripcion: 
    {
        type: String,
        required: true
    },
    enlace: 
    {
        type: String,
        required: true
    },
    imagenFondo: 
    {
        type: String,
        required: true
    },
    //Esta propiedad es básicamente un "interruptor" para voltear el orden (Texto|Img o Img|Text)
    invertido: 
    {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <section class="splitCont flex"   :class="{ 'reverse': invertido }"   :style="{ '--bgImage': `url(${imagenFondo})` }">
        
        <RouterLink class="flex bgImg" :to="enlace">
            <h3>Ver más</h3>
        </RouterLink>
        
        <div class="flex flexColumn">
            <h3>{{ titulo }}</h3>
            <p>{{ descripcion }}</p>
        </div>

    </section>
</template>

<style scoped>
.splitCont
{
    margin: 2rem auto;
    width: 90%;
    height: 70vh;
    border-radius: 1rem;
    overflow: hidden;
}

.splitCont div
{
    width: 50%;
    height: 100%;
    padding: 3rem; 
    text-align: center;
    background-color: #eeeef0;
}

.splitCont a
{
    width: 50%;
    height: 100%;
    text-decoration: none;
    position: relative;
    background-image: var(--bgImage); /* Variable dinámica de Vue (osea permite usarse y declararse) */
}

.splitCont a::before
{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    z-index: 8;
    transition: background-color 0.3s ease;
}

.splitCont a:hover::before {background-color: #00000081;}

.splitCont a h3
{
    font-family: "Aleo", serif;
    font-size: 3.5rem;
    font-weight: 500;
    color: transparent;
    text-shadow: 3px 3px 1px transparent;
    position: absolute;
    transition: all 0.3s ease;
    z-index: 9;
}

.splitCont a:hover h3
{
    color: #eeeef0;
    text-shadow: 3px 3px 1px #000;
}

.splitCont div h3
{
    font-family: "Aleo", serif;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.splitCont div p
{
    font-size: 1.6rem;
    font-weight: 500;
}

/* Esta clase es clave para invertir */
.reverse {flex-direction: row-reverse;}
</style>