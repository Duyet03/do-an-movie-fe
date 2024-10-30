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
        path: '/admin/doanh-thu',
        component: () => import('../components/admin/QuanLyDoanhThu/index.vue'),

    },
    {
        path: '/admin/ghe-xem-phim',
        component: () => import('../components/admin/QuanLyGhe/index.vue'),

    },
    // {
    //     path: '/admin/he-thong',
    //     component: () => import('../components/admin/QuanLyHeThong/index.vue'),

    // },
    {
        path: '/admin/he-thong/chuc-vu',
        component: () => import('../components/admin/QuanLyHeThong/ChucVu/index.vue'),

    },
    {
        path: '/admin/khuyen-mai',
        component: () => import('../components/admin/QuanLyKhuyenMai/index.vue'),

    },
    {
        path: '/admin/nguoi-dung/nhan-vien',
        component: () => import('../components/admin/QuanLyNguoiDung/NhanVien/index.vue'),

    },
    {
        path: '/admin/nguoi-dung/khach-hang',
        component: () => import('../components/admin/QuanLyNguoiDung/KhachHang/index.vue'),

    },
    {
        path: '/admin/noi-dung',
        component: () => import('../components/admin/QuanLyNoiDung/index.vue'),

    },
    {
        path: '/admin/phan-hoi',
        component: () => import('../components/admin/QuanLyPhanHoi/index.vue'),

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
        path: '/admin/dang-nhap',
        component: () => import('../components/Admin/DangNhap/index.vue'),
        meta: { layout: 'auth' }
    },
    {
        path: '/admin/hoa-don',
        component: () => import('../components/admin/QuanLyHoaDon/index.vue'),

    },
    {
        path: '/admin/chi-tiet-ve',
        component: () => import('../components/admin/ChiTietVe/index.vue'),

    },
    {
        path: '/admin/chi-tiet-the-loai',
        component: () => import('../components/admin/ChiTietTheLoai/index.vue'),

    },

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router