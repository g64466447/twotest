import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'



const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        redirect: 'cloud',
        children: [{
                path: '',
                name: 'userinfo',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/children/Cloud.vue')

            },
            {
                path: 'userinfo',
                name: 'userinfo',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/children/UserInfo.vue')

            },
            {
                path: '/cloud',
                name: 'CLOUD',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/children/Cloud.vue')

            },
            {
                path: 'music',
                name: 'music',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/children/Music.vue')

            },
            {
                path: 'find',
                name: 'find',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/children/Find.vue')
            },
        ]
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }, {
        path: '/search',
        name: 'search',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Search.vue')
    }, {
        path: '/listview',
        name: 'listview',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Listview.vue')
    }, {
        path: '/videoplay',
        name: 'videoplay',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/VideoPlay.vue')
    }

]

const router = createRouter({
    /* history: createWebHashHistory(process.env.BASE_URL), */
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router