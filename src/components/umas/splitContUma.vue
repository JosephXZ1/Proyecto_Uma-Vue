<script setup>
defineProps(
{
    nombre:
    {
        type: String,
        required: true
    },
    imagen:
    {
        type: String,
        required: true
    },
    descripcion1:
    {
        type: String,
        required: true
    },
    descripcion2: String,
    descripcion3: String,
    lista:
    {
        type: Array
    },
    span:
    {
        type: String
    },
    invertido: 
    {
        type: Boolean,
        default: false
    }
}
)
</script>

<template>
    <section class="uma flex" :class="{ 'reverse': invertido }">
        <img :src="imagen" alt="Todas las umas">
        
        <div class="infoUma flex">
            <h3>{{ nombre }}</h3>
            
            <p>{{ descripcion1 }}</p>
            <p v-if="descripcion2">{{ descripcion2 }}</p>
            <p v-if="descripcion3">{{ descripcion3 }}</p>
            
            <ul v-if="lista && lista.length > 0">
                <li v-for="(item, index) in lista" :key="index">
                    {{ item }}
                </li>
            </ul>
            
            <span v-if="span">{{ span }}</span>
        </div> 
    </section>
</template>

<style scoped>
.uma
{
    margin: 4rem auto;
    width: 85%;
    height: fit-content;
    align-items: flex-start;
}

.uma img
{
    width: 50%;
    height: auto;
}

.infoUma
{
    width: 50%;
    height: 100vh;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    padding: 3rem 0;
}

.infoUma h3
{
    font-family: "Aleo", serif;
    font-size: 5rem;
    font-style: italic;
}

.infoUma p
{
    margin: 1rem 0;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.2rem;
}

.infoUma ul{list-style-type: '⭕';}

.infoUma li
{
    margin: 0.5rem 0;
    font-size: 1.3rem;
    font-weight: 450;
    line-height: 2rem;
}

.infoUma li:last-child, .infoUma span
{
    font-size: 1.5rem;
    font-weight: 600;
    list-style: none;
}

main > section:nth-of-type(4), main > section:nth-of-type(6){margin: 0 auto;}
main > section:nth-of-type(8){margin: 3rem auto;}

/* Esta clase es clave para invertir */
.reverse {flex-direction: row-reverse;}
</style>