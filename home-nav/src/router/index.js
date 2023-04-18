import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        children : [
            {
                path: '/mainpage',
                name: 'mainpage',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "MainPage01" */ '../views/MainPage01.vue')
            },
            {
                path: '/app-vue-hash*',
                name: 'appVueHash',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "SingleHash" */ '../views/SingleHash.vue')
            },
            {
                path: '/app-vue-history*',
                name: 'appVueHistory',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "SingleHistory" */ '../views/SingleHistory.vue')
            }
        ]
    },
]

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
