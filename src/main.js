import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//Aquí se importa o enlaza estilos estandares y genericos para el sitio, similar a como se enlazaba con link en HTML pero ahora importado en main.js
import './assets/styles/global.css'

createApp(App)
    .use(router)
    .mount('#app')