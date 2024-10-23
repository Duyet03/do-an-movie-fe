import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

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
        path: '/view-sp2',
        component: () => import('../components/Client/viewSanPham2.vue'),
        meta: { layout: 'client' }
    },
    {
        path: '/view-sp1',
        component: () => import('../components/Client/viewSanPham1.vue'),
        meta: { layout: 'client' }
    },
    {
        path: '/view-sp3',
        component: () => import('../components/Client/viewSanPham3.vue'),
        meta: { layout: 'client' }
    },
    {
        path: '/view-sp4',
        component: () => import('../components/Client/viewSanPham4.vue'),
        meta: { layout: 'client' }
    },
    {
        path: '/view-sp5',
        component: () => import('../components/Client/viewSanPham5.vue'),
        meta: { layout: 'client' }
    },
    {
        path: '/view-sp6',
        component: () => import('../components/Client/viewSanPham6.vue'),
        meta: { layout: 'client' }
    },
    {
        path: '/view-sp7',
        component: () => import('../components/Client/viewSanPham7.vue'),
        meta: { layout: 'client' }
    },
    {
        path: '/view-sp8',
        component: () => import('../components/Client/viewSanPham8.vue'),
        meta: { layout: 'client' }
    },
    {
        path: '/dat-cho',
        component: () => import('../components/Client/datCho.vue'),
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
    {
        path: '/thanh-toan',
        component: () => import('../components/Client/thanhToan.vue'),
        meta: { layout: 'client' }
    },

    //ADMIN

    {
        path: '/admin/dich-vu',
        component: () => import('../components/admin/QuanLyDichVu/index.vue'),

    },
    {
        path: '/admin/ghe-xem-phim',
        component: () => import('../components/admin/QuanLyGhe/index.vue'),

    },
    {
        path: '/admin/nhan-vien',
        component: () => import('../components/admin/QuanLyNhanVien/index.vue'),

    },
    {
        path: '/admin/danh-gia',
        component: () => import('../components/admin/QuanLyDanhGia/index.vue'),

    },
    {
        path: '/admin/phim',
        component: () => import('../components/admin/QuanLyPhim/index.vue'),

    },
    {
        path: '/admin/phong',
        component: () => import('../components/admin/QuanLyPhong/index.vue'),

    },
    {
        path: '/admin/suat-chieu',
        component: () => import('../components/admin/QuanLySuatChieu/index.vue'),

    },
    {
        path: '/admin/hoa-don',
        component: () => import('../components/admin/QuanLyHoaDon/index.vue'),

    },
    {
        path: '/admin/phan-quyen',
        component: () => import('../components/admin/PhanQuyen/index.vue'),

    },
    {
        path: '/admin/chuc-vu',
        component: () => import('../components/admin/ChucVu/index.vue'),

    },
    {
        path: '/admin/khach-hang',
        component: () => import('../components/admin/KhachHang/index.vue'),

    },
    {
        path: '/admin/chuc-nang',
        component: () => import('../components/admin/ChucNang/index.vue'),

    },
    {
        path: '/admin/chi-tiet-ve',
        component: () => import('../components/admin/ChiTietVe/index.vue'),

    },
    {
        path: '/admin/chi-tiet-ghe',
        component: () => import('../components/admin/ChiTietGhe/index.vue'),

    },
    {
        path: '/admin/chi-tiet-the-loai',
        component: () => import('../components/admin/ChiTietTheLoai/index.vue'),

    },
    {
        path: '/admin/the-loai-phim',
        component: () => import('../components/admin/TheLoaiPhim/index.vue'),

    },




    {
        path: '/admin/dang-nhap',
        component: () => import('../components/Admin/DangNhap/index.vue'),
        meta: { layout: 'auth' }
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router