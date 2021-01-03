import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Path from "./PathEnum"
import Name from "./NameEnum"
import Home from '@/pages/Main.vue'
import List from '@/pages/List.vue'
import Detail from '@/pages/Detail.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: Path.MAIN,
    name: Name.MAIN,
    component: Home
  },
  {
    path: Path.LIST,
    name: Name.LIST,
    component: List
  },
  {
    path: '/:stackNameUrl',
    name: 'Detail',
    component: Detail,
    props: true,
  },  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
