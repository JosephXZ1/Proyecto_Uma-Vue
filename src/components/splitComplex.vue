<script setup>
defineProps(
{
    imagen: 
    {
        type: String,
        required: true
    },
    invertido: 
    {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <section class="info flex" :class="{ 'reverse' : invertido }">
        <img :src="imagen" alt="Imagen informativa">
        
        <div class="text-block">
            <slot />
        </div>
    </section>
</template>

<style scoped>
/* - - - - - EL CHASIS ESTRUCTURAL SE QUEDA AQUÍ - - - - - */
.info
{
    margin: 5rem auto;
    width: 90%;
    height: fit-content;
}

.info img
{
    width: 45%;
    height: auto;
    border-radius: 1rem;
}

.info .text-block
{
    padding: 2rem;
    width: 55%;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 430;
}

.text-block { position: relative; }

.info .text-block :deep(p) { margin: 1rem 0; }

.reverse { flex-direction: row-reverse; }

/* Uso del :deep()
    Como el HTML del slot viene "desde afuera", el 'scoped' normal de Vue no lo alcanza por encapsulamiento. Usando :deep() se le dice a Vue: "Aplica este estilo a cualquier .trigger o .popup que termine cayendo aquí adentro". De esta forma el componente sigue controlando el diseño.
*/

:deep(.trigger)
{
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 530;
    color: #a06f4f;
    font-family: "Montserrat", sans-serif;
}

:deep(.trigger:hover) { color: #784217; }

:deep(.popup)
{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.95);
    opacity: 0;
    pointer-events: none;
    z-index: 15;

    width: var(--popup-width, 50%);
}

:deep(.popup img) { width: 100%; border-radius: 1rem; }

:deep(#swing img) { border-radius: 0.5rem; }

:deep(.popup.active)
{
    opacity: 1;
    pointer-events: auto;
    transform: translate(-50%, -50%) scale(1);
}
</style>