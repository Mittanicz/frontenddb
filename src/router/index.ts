import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Path from "./PathEnum"
import Name from "./NameEnum"
import Home from '@/pages/Main.vue'

Vue.use(VueRouter)
const pageTitle = 'Frontend DB - '

const routes: Array<RouteConfig> = [
    {
        path: Path.MAIN,
        name: Name.MAIN,
        component: Home,
        meta: {
            title: 'Homepage'
        }
    },
    {
        path: Path.POLICY,
        name: Name.POLICY,
        component: () => import('@/pages/Policy.vue'),
        props: true,
        meta: {
            title: pageTitle + 'Privacy and Policy'
        }
    },
    {
        path: Path.LIST,
        name: Name.LIST,
        component: () => import('@/pages/List.vue'),
        meta: {
            title: pageTitle + 'List'
        }
    },
    {
        path: '/admin',
        name: 'Admin',
        component: () => import('@/module/admin/page/Admin.vue'),
    },
    {
        path: '/admin-:stackNameUrl',
        name: 'AdminDetail',
        component: () => import('@/module/admin/page/Detail.vue'),
        props: true,
    },
    {
        path: '/:stackNameUrl',
        name: 'Detail',
        component: () => import('@/pages/Detail.vue'),
        props: true,
        meta: {
            title: pageTitle + window.location.pathname.substring(1)
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
