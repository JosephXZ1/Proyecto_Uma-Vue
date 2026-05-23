<script setup>
//Esto de aquí importa router para que se pueda usar el <RouterCiew />
import { useRoute } from 'vue-router';
import Header from '@/components/header.vue'

//Con esto se puede ver en qué página está el usuario metido
const route = useRoute(); 
</script>

<template>
  <ul class="background">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
  </ul>
  <Header v-if="!route.meta.ocultarHeader" /> 
  
  <!-- Desbloquear o quitar comentario una vez que el proyecto se termine -->
  <!-- <RouterView /> -->
  
  <RouterView />
</template>