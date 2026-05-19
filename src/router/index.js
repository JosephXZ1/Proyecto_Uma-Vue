//Aqui se importan las 'librerias' necesarias para el funcionamiento del router
import { createRouter, createWebHistory } from 'vue-router'

//Aquí se importan las paginas que se van a mostrar en cada ruta
//NOTA: Si se crean nuevas paginas, se deben importar aquí para que puedan ser usadas en las rutas
//Home es como se llama a la pagina principal, y Contact es como se llama a la pagina de contacto, pero se pueden llamar como se quiera, lo importante es que el nombre del componente sea el mismo que el nombre del archivo .vue, y from es la direccion del archivo, este si debe ser correcto para que funcione, si el archivo se llama home.vue, entonces el componente se debe llamar Home, y la direccion debe ser '../views/home.vue', lo mismo para contact.vue, el componente se debe llamar Contact, y la direccion debe ser '../views/contact.vue'
//En sintesis, es como declarar variables, el Home se puede llamar como se desee pero es recomendable que se llame igual que el archivo .vue para evitar confusiones, y la direccion debe ser correcta para que funcione, si el archivo se llama home.vue, entonces la direccion debe ser '../views/home.vue', lo mismo para contact.vue, la direccion debe ser '../views/contact.vue'
import Home from '../pages/home.vue'
import Umas from '../pages/umas.vue'

import SandBox from '../pages/compDev.vue'

//Arreglo de rutas, cada ruta es un objeto con dos propiedades, path y component, path es la ruta que se va a mostrar en el navegador, y component es el componente que se va a mostrar cuando se acceda a esa ruta, por ejemplo, cuando se acceda a la ruta '/', se va a mostrar el componente Home, y cuando se acceda a la ruta '/contact', se va a mostrar el componente Contact
const routes =
[
    {
      path: '/',
      component: Home
    },
    {
      path: '/compDev',
      component: SandBox
    },
    {
      path: '/umas',
      component: Umas
    }
]

const router = createRouter(
{
    history: createWebHistory(),
    routes
})

export default router