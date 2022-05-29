import { createRouter, createWebHashHistory } from "vue-router";

import ComA from '../components/com-a.vue';
// import ComB from './components/com-b.vue';

import PeachDonkey from "../components/named-views/peach-donkey.vue";

const routes = [
    {
        path: '/:path___Math(.*)*', name: 'NotFound', component: ComA
    },
    {
        path: '/user-:after__user(.*)', name: 'AfterUser', component: () => import('../components/com-b.vue')
    },
    {
        path: '/regx/:id(\\d+)', component: () => import('../components/com-c.vue'),
    },
    {
        path: '/regx/:name', component: () => import('../components/com-d.vue'),
    },
    {
        path: '/cp/:chapters+', component: () => import('../components/com-e.vue'),
    },
    {
        path: '/cp1/:chapters*', component: () => import('../components/com-f.vue'),
    },
    {

        path: '/cp2/:userId?', component: () => import('../components/com-g.vue'),
        children: [
            {
                name: 'cp2',
                path: 'xxx',
                component: () => import('../components/com-g/xxx.vue')
            }
        ]
    },
    {
        path: '/multi-view',
        component: () => import("../components/named-views/index.vue"),
        children: [
            {
                path: ':id',
                components: {
                    default: () => import('../components/named-views/default.vue'),
                    monkey: () => import("../components/named-views/monkey.vue"),
                    'peach-donkey': () => import("../components/named-views/peach-donkey.vue")
                    // PeachDonkey
                },
                props: {
                    default: true,
                    monkey: true
                }
            }
        ]
    },
    {
        path: "/search",
        component: () => import("../components/search.vue"),
        // props: route => ({ query: route.query.q })
        props: { query: 'route.query.q' }
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
