import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path : '/',
        component: ()=>import('../layout/wrapper/index.vue')
    },
    {
        path: '/login',
        component: ()=>import('../components/Client/login.vue'),
        meta: {layout: 'client'}
    },
    {
        path: '/dang-ky',
        component: ()=>import('../components/Client/dangKy.vue'),
        meta: {layout: 'client'}
    },
    {
        path: '/home-page',
        component: ()=>import('../components/Client/home.vue'),
        meta: {layout: 'client'}
    },
    {
        path: '/view-sp2',
        component: ()=>import('../components/Client/viewSanPham2.vue'),
        meta: {layout: 'client'}
    },
    {
        path: '/view-sp1',
        component: ()=>import('../components/Client/viewSanPham1.vue'),
        meta: {layout: 'client'}
    },
    {
        path: '/view-sp3',
        component: ()=>import('../components/Client/viewSanPham3.vue'),
        meta: {layout: 'client'}
    },
    {
        path: '/view-sp4',
        component: ()=>import('../components/Client/viewSanPham4.vue'),
        meta: {layout: 'client'}
    },
    {
        path: '/view-sp5',
        component: ()=>import('../components/Client/viewSanPham5.vue'),
        meta: {layout: 'client'}
    },
    {
        path: '/view-sp6',
        component: ()=>import('../components/Client/viewSanPham6.vue'),
        meta: {layout: 'client'}
    },
    {
        path: '/view-sp7',
        component: ()=>import('../components/Client/viewSanPham7.vue'),
        meta: {layout: 'client'}
    },
    {
        path: '/view-sp8',
        component: ()=>import('../components/Client/viewSanPham8.vue'),
        meta: {layout: 'client'}
    },
    {
        path: '/dat-cho',
        component: ()=>import('../components/Client/datCho.vue'),
        meta: {layout: 'client'}
    },
    {
        path: '/dat-ve',
        component: ()=>import('../components/Client/datVe.vue'),
        meta: {layout: 'client'}
    },
    {
        path: '/thanh-toan',
        component: ()=>import('../components/Client/thanhToan.vue'),
        meta: {layout: 'client'}
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router