<template>
    <div class="nav-container primary-menu">
        <div class="mobile-topbar-header">
            <div>
                <img src="assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
            </div>
            <div>
                <h4 class="logo-text">Rukada</h4>
            </div>
            <div class="toggle-icon ms-auto"><i class="bx bx-arrow-to-left"></i>
            </div>
        </div>
        <nav class="navbar navbar-expand-xl w-100">
            <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
                <li class="nav-item dropdown">
                    <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                        data-bs-toggle="dropdown">
                        <div class="parent-icon"><i class="bx bx-home-circle"></i>
                        </div>
                        <div class="menu-title">Dashboard</div>
                    </a>
                    <ul class="dropdown-menu">
                        <li> <a class="dropdown-item" href="index.html"><i class="bx bx-right-arrow-alt"></i>Default</a>
                        </li>
                        <li> <a class="dropdown-item" href="index2.html"><i
                                    class="bx bx-right-arrow-alt"></i>Alternate</a>
                        </li>
                        <li> <a class="dropdown-item" href="index3.html"><i
                                    class="bx bx-right-arrow-alt"></i>Graphical</a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/admin/dich-vu">
                        <div class="parent-icon"><i class="fa-brands fa-servicestack"></i>
                        </div>
                        <div class="menu-title">Dịch Vụ</div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/admin/doanh-thu">
                        <div class="parent-icon"><i class="fa-solid fa-money-bill"></i>
                        </div>
                        <div class="menu-title">Doanh thu</div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/admin/ghe-xem-phim">
                        <div class="parent-icon"><i class="fa-solid fa-chair"></i>
                        </div>
                        <div class="menu-title">Quản Lý Ghế</div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/admin/he-thong">
                        <div class="parent-icon"><i class="fa-brands fa-ubuntu"></i>
                        </div>
                        <div class="menu-title">Quản Lý Hệ Thống</div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/admin/khuyen-mai">
                        <div class="parent-icon"><i class="fa-solid fa-gift"></i>
                        </div>
                        <div class="menu-title">Khuyến Mãi</div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/admin/nguoi-dung">
                        <div class="parent-icon"><i class="fa-solid fa-user"></i>
                        </div>
                        <div class="menu-title">Quản Lý Người Dùng</div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/admin/noi-dung">
                        <div class="parent-icon"><i class="fa-solid fa-book"></i>
                        </div>
                        <div class="menu-title">Quản Lý Nội Dung</div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/admin/phan-hoi">
                        <div class="parent-icon"><i class="fa-solid fa-comments"></i>
                        </div>
                        <div class="menu-title">Quản Lý Phản Hồi</div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/admin/phim">
                        <div class="parent-icon"><i class="fa-solid fa-video"></i>
                        </div>
                        <div class="menu-title">Quản Lý Phim</div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/admin/phong">
                        <div class="parent-icon"><i class="fa-solid fa-shop"></i>
                        </div>
                        <div class="menu-title">Quản Lý Phòng</div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/admin/suat-chieu">
                        <div class="parent-icon"><i class="fa-solid fa-film"></i>
                        </div>
                        <div class="menu-title">Quản Lý Suất Chiếu</div>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {};
</script>
<style></style>
