<template>
  <div class="nav-container primary-menu">
    <div class="mobile-topbar-header">
      <div>
        <img
          src="assets/images/logo-icon.png"
          class="logo-icon"
          alt="logo icon"
        />
      </div>
      <div>
        <h4 class="logo-text">Rukada</h4>
      </div>
      <div class="toggle-icon ms-auto"><i class="bx bx-arrow-to-left"></i></div>
    </div>
    <nav class="navbar navbar-expand-xl w-100">
      <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
        <li class="nav-item dropdown">
          <a
            href="javascript:;"
            class="nav-link dropdown-toggle dropdown-toggle-nocaret"
            data-bs-toggle="dropdown"
          >
            <div class="parent-icon"><i class="bx bx-home-circle"></i></div>
            <div class="menu-title">Dashboard</div>
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="index.html"
                ><i class="bx bx-right-arrow-alt"></i>Default</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="index2.html"
                ><i class="bx bx-right-arrow-alt"></i>Alternate</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="index3.html"
                ><i class="bx bx-right-arrow-alt"></i>Graphical</a
              >
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <router-link to="/admin/dich-vu">
            <a class="nav-link" href="/admin/dich-vu">
              <div class="parent-icon">
                <i class="fa-brands fa-servicestack"></i>
              </div>
              <div class="menu-title">Dịch Vụ</div>
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/phong">
            <a class="nav-link" href="/admin/phong">
              <div class="parent-icon"><i class="fa-solid fa-store"></i></div>
              <div class="menu-title">Phòng</div>
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/phim">
            <a class="nav-link" href="/admin/phim">
              <div class="parent-icon"><i class="fa-solid fa-video"></i></div>
              <div class="menu-title">Phim</div>
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/the-loai-phim">
            <a class="nav-link" href="/admin/the-loai-phim">
              <div class="parent-icon"><i class="fa-solid fa-circle-notch"></i></div> 
              <div class="menu-title">thể loại phim</div>
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/ghe-xem-phim">
            <a class="nav-link" href="/admin/ghe-xem-phim">
              <div class="parent-icon"><i class="fa-solid fa-couch"></i></div>
              <div class="menu-title">Ghế</div>
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/suat-chieu">
            <a class="nav-link" href="/admin/suat-chieu">
              <div class="parent-icon"><i class="fa-solid fa-film"></i></div>
              <div class="menu-title">Suất Chiếu</div>
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/danh-gia">
            <a class="nav-link" href="/admin/danh-gia">
              <div class="parent-icon">
                <i class="fa-solid fa-comments"></i>
              </div>
              <div class="menu-title">Đánh Giá</div>
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/hoa-don">
            <a class="nav-link" href="/admin/hoa-don">
              <div class="parent-icon"><i class="fa-solid fa-barcode"></i></div>
              <div class="menu-title">Bill</div>
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/chuc-vu">
            <a class="nav-link" href="/admin/chuc-vu">
              <div class="parent-icon">
                <i class="fa-solid fa-network-wired"></i>
              </div>
              <div class="menu-title">Chức Vụ</div>
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/phan-quyen">
            <a class="nav-link" href="/admin/phan-quyen">
              <div class="parent-icon">
                <i class="fa-solid fa-layer-group"></i>
              </div>
              <div class="menu-title">Phân Quyền</div>
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/nguoi-dung">
            <a class="nav-link" href="/admin/nguoi-dung">
              <div class="parent-icon"><i class="fa-solid fa-user"></i></div>
              <div class="menu-title">Staff</div>
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/khach-hang ">
            <a class="nav-link" href="/admin/khach-hang">
              <div class="parent-icon"><i class="fa-solid fa-users-between-lines"></i></div>
              <div class="menu-title">Client</div>
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/chuc-nang">
            <a class="nav-link" href="/admin/chuc-nang">
              <div class="parent-icon"><i class="fa-solid fa-gears"></i></div>
              <div class="menu-title">Chức Năng</div>
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/chi-tiet-the-loai">
            <a class="nav-link" href="/admin/chi-tiet-the-loai">
              <div class="parent-icon"><i class="fa-brands fa-fly"></i></div>
              <div class="menu-title">Chi tiết thể loại</div>
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/chi-tiet-ghe">
            <a class="nav-link" href="/admin/chi-tiet-ghe">
              <div class="parent-icon"><i class="fa-solid fa-trowel-bricks"></i></div>
              <div class="menu-title">Chi tiết ghế</div>
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/chi-tiet-ve">
            <a class="nav-link" href="/admin/chi-tiet-ve">
              <div class="parent-icon"><i class="fa-solid fa-ticket"></i></div>
              <div class="menu-title">Chi tiết vé</div>
            </a>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
