import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Path from "./PathEnum"
import Name from "./NameEnum"
import Home from '@/pages/Main.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: Path.MAIN,
        name: Name.MAIN,
        component: Home
    },
    {
        path: Path.POLICY,
        name: Name.POLICY,
        component: () => import('@/pages/Policy.vue'),
        props: true,
    },
    {
        path: Path.LIST,
        name: Name.LIST,
        component: () => import('@/pages/List.vue')
    },
    {
        path: '/:stackNameUrl',
        name: 'Detail',
        component: () => import('@/pages/Detail.vue'),
        props: true,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
