import Vue from 'vue'
import Router from 'vue-router'
const Inicio = () => import('./components/Inicio')
const Search = () => import('./components/Search')

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'home',
            component: Inicio
        },
        {
            path: '/busqueda',
            name: 'search',
            component: Search
        }     
    ]
})