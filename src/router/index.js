import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import PostView from '../views/PostView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/blog',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  //redireccionar
  {
    path: '/blog',
    redirect: {name: 'Blog'}
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogView
  },
  {
    //con los : le indico a router que voy a recibir una 
    //cadena en este caso sera :post
    path: '/blog/:post',
    name: 'Post',
    component: PostView
    //Entonces en la vista obtengo el parametro de la
    //siguiente manera {{$route.params.post}}

  },
  {
    path: '/user/:user/post/:post',
    name: 'User',
    component: () => import('../views/UserPostView.vue')
  },
  // Si tenemos 2 URL iguales para diferenciarlas 
  // podriamos poner ejemplo:
  // /compras/o/:orderID y /compras/p/:productName
  //
  // Pero tambien podemos especificar si recibo
  // un numero en el order ID o letras para el caso
  // de nombre de producto.
  // Para especificar numeros lo hacemos con: (\\d+)
  //
  {
    path: '/compras/:orderId(\\d+)',
    name: 'Order',
    component: () => import('../views/OrderView.vue')
  },  
  {
    path: '/compras/:productName',
    name: 'Product',
    component: () => import('../views/ProductView.vue')
  },
  //Para definir un parametro opcion agregamos ?
  {
    path: '/user/:userId?',
    name: 'User',
    component: () => import('../views/UserView.vue')
  },
  //Esta URL solo se va a leer cuando sea 404
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: () => import('../views/NotFoundView.vue')
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
