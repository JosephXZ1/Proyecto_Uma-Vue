<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// 1. Creamos una variable REACTIVA (un estado interno).
// Empezará en 'false' porque al cargar la página estamos arriba de todo.
const haHechoScroll = ref(false);

// 2. Esta función revisará la posición del scroll en la pantalla
const controlarScroll = () => 
{
    // Si el scroll vertical de la ventana es mayor a 50 píxeles...
    if (window.scrollY > 50) 
    {
        haHechoScroll.value = true;  // Activamos el estado
    }
    else 
    {
        haHechoScroll.value = false; // Lo apagamos si vuelve al tope
    }
};

// 3. Ciclo de vida: Cuando el componente se monta en la pantalla,
// le decimos al navegador que empiece a escuchar el evento 'scroll'.
onMounted(() => 
{
    window.addEventListener('scroll', controlarScroll);
});

// 4. Limpieza: Si nos vamos a otra página, dejamos de escuchar el evento
// para no saturar la memoria del navegador.
onUnmounted(() => 
{
    window.removeEventListener('scroll', controllingScroll);
});
</script>

<template>
  <div class="simulador-pagina-larga">
    
    <nav class="barra-navegacion" :class="{ 'coloreado': haHechoScroll }">
      <h2>Mi Barra de Navegación</h2>
    </nav>
    
    <p class="instruccion">Haz scroll hacia abajo para ver la magia...</p>
    
  </div>
</template>

<style scoped>
/* Simulador para dar altura a la página */
.simulador-pagina-larga 
{
    height: 200vh; /* El doble de la altura de la pantalla */
    background: linear-gradient(to bottom, #1a1a1a, #333333);
    padding-top: 150px;
}

.instruccion 
{
    color: white;
    text-align: center;
    font-family: sans-serif;
    font-size: 1.5rem;
}

/* ESTILOS DEL CONTENEDOR (Por defecto: Transparente) */
.barra-navegacion 
{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1.5rem;
    text-align: center;
    z-index: 100;
    
    /* Estado inicial */
    background-color: transparent; 
    color: #ffffff;
    
    /* Una transición suave para que el cambio de color no sea brusco */
    transition: background-color 0.4s ease, box-shadow 0.4s ease;
}

/* LA CLASE ACTIVADORA (Se inyecta dinámicamente con Vue) */
.coloreado 
{
    background-color: #2c3e50; /* El color que quieras cuando baje */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); /* Un sombreado elegante */
}

.barra-navegacion h2 
{
    margin: 0;
    font-family: sans-serif;
}
</style>