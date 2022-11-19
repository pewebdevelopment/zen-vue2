import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Counter from '../views/Counter.vue'
import ToDos from '../views/ToDos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
    
  },
  {
    path: '/counter',
    name: 'Counter',
    component: Counter,
    
  },

   {
    path: '/todos',
    name: 'ToDos',
    component: ToDos,
    
  }
]

const router = new VueRouter({
  routes
})

export default router
