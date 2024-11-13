

import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import kiemTraAdmin from "./kiemTraAdmin";

const routes = [
    {
        path: '/',
        component: () => import('../layout/wrapper/index.vue')
    },
    {
        path: '/login',
        component: () => import('../components/Client/login.vue'),
        meta: { layout: 'Login' }
    },
    {
        path: '/dang-ky',
        component: () => import('../components/Client/dangKy.vue'),
        meta: { layout: 'Login' }
    },
    {
        path: '/home-page',
        component: () => import('../components/Client/home.vue'),
        meta: { layout: 'client' }
    },
  
    {
        path : '/chi-tiet-phim/:id_phim',
        component: ()=>import('../components/Client/ChiTietPhim/index.vue'),
        meta : {layout : 'client'},
        props: true
    },
    {
        path: '/dat-cho',
        component: () => import('../components/Client/datSuat.vue'),
        meta: { layout: 'client' }
    },
    {
        path: '/dat-ve',
        component: () => import('../components/Client/datVe.vue'),
        meta: { layout: 'client' }
    },
    {
        path: '/thanh-toan',
        component: () => import('../components/Client/thanhToan.vue'),
        meta: { layout: 'client' }
    },
  

    //ADMIN

    {
        path: '/admin/dich-vu',
        component: () => import('../components/admin/QuanLyDichVu/index.vue'),
        beforeEnter: kiemTraAdmin,
       
    },
    {
        path: '/admin/doanh-thu',
        component: () => import('../components/admin/QuanLyDoanhThu/index.vue'),
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/ghe-xem-phim',
        component: () => import('../components/admin/QuanLyGhe/index.vue'),
        beforeEnter: kiemTraAdmin,
    },
    // {
    //     path: '/admin/he-thong',
    //     component: () => import('../components/admin/QuanLyHeThong/index.vue'),

    // },
    {
        path: '/admin/he-thong/chuc-vu',
        component: () => import('../components/admin/QuanLyHeThong/ChucVu/index.vue'),
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/khuyen-mai',
        component: () => import('../components/Admin/QuanLyKhuyenMai/index.vue'),
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/nguoi-dung/nhan-vien',
        component: () => import('../components/Admin/QuanLyNguoiDung/NhanVien/index.vue'),
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/nguoi-dung/khach-hang',
        component: () => import('../components/admin/QuanLyNguoiDung/KhachHang/index.vue'),
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/noi-dung',
        component: () => import('../components/Admin/QuanLyNoiDung/index.vue'),
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/phan-hoi',
        component: () => import('../components/admin/QuanLyPhanHoi/index.vue'),
        beforeEnter: kiemTraAdmin,
    },

    {
        path: '/admin/phim',
        component: () => import('../components/Admin/QuanLyPhim/index.vue'),
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/phong',
        component: () => import('../components/Admin/QuanLyPhong/index.vue'),
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/suat-chieu',
        component: () => import('../components/Admin/QuanLySuatChieu/index.vue'),
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/dang-nhap',
        component: () => import('../components/Admin/DangNhap/index.vue'),
        meta: { layout: 'auth' }
    },
    {
        path: '/admin/hoa-don',
        component: () => import('../components/Admin/QuanLyHoaDon/index.vue'),
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/chi-tiet-ve',
        component: () => import('../components/Admin/ChiTietVe/index.vue'),
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/chi-tiet-the-loai',
        component: () => import('../components/Admin/ChiTietTheLoai/index.vue'),
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/the-loai',
        component: () => import('../components/Admin/TheLoai/index.vue'),
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/phan-quyen',
        component: () => import('../components/Admin/PhanQuyen/index.vue'),
        beforeEnter: kiemTraAdmin,
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})


export default router

