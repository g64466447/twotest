import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import playdetail from '../views/playdetail.vue'

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
                path: 'rank',
                name: 'rank',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/children/Rank.vue')
            },

        ]
    }, {
        path: '/playdetail',
        component: playdetail
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
            import ( /* webpackChunkName: "about" */ '../views/VueMap.vue')
    }, {
        path: '/commentlist/:id',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/CommentList.vue')
    },

    {
        path: '/active',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Active.vue')
    },
    {
        path: '/yuncun',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/YunCun.vue')
    },



]

const router = createRouter({
    /* history: createWebHashHistory(process.env.BASE_URL), */
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router