<template>
        <div style="height: 100px;background-color: white;border-bottom: 3px solid olivedrab;" class="text-center">
        <img style="height: 97px"
            src="https://media.lottecinemavn.com/Media/WebAdmin/ccc95ee5b9274a12ba3e51317250dcbe.png" alt="" />
    </div>
    <div class="nav primary-menu" style=" height: 40px">
        <nav class="navbar navbar-expand-xl w-100">
            <ul class="navbar-nav justify-content-center flex-grow-1 gap-1">
                <li class="nav-item">
                    <router-link to="/page1">
                        <a class="nav-link" href="/page1">
                            <div class="menu-title" style="font-size: 20px">
                                SHOP QUÀ TẶNG
                            </div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/page1">
                        <a class="nav-link" href="/page1">
                            <div class="menu-title" style="font-size: 20px">MUA VÉ</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/page1">
                        <a class="nav-link" href="/page1">
                            <div class="menu-title" style="font-size: 20px">PHIM</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/page1">
                        <a class="nav-link" href="/page1">
                            <div class="menu-title" style="font-size: 20px">
                                RẠP CHIẾU PHIM
                            </div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/page1">
                        <a class="nav-link" href="/page1">
                            <div class="menu-title" style="font-size: 20px">KHUYẾN MÃI</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/page1">
                        <a class="nav-link" href="/page1">
                            <div class="menu-title" style="font-size: 20px">LIÊN HỆ</div>
                        </a>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
    <div style="margin-top: 20px;">
        <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://media.lottecinemavn.com/Media/WebAdmin/c11aacf2c3b4446ba86c96e9e9be5b61.jpg"
                        class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://media.lottecinemavn.com/Media/WebAdmin/544c1477d2f0455dbb3f743075eafb8b.jpg"
                        class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://media.lottecinemavn.com/Media/WebAdmin/4e520019a0dc46969fb348d80d405a9c.jpg"
                        class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
<div class="container mt-5">
   <div class="row">
       <div class="col-lg-12">
           <div class="card">
               <div class="card-body">
                   <div class="row">
                       <div class="col-lg-2 ms-3">
                           <label>Ngày:</label>
                           <input class="form-control" type="date">
                       </div>
                       <div class="col-lg-2 ms-3">
                           <label>Tỉnh thành:</label>
                           <select class="form-control">
                               <option value="0">Hà Nội</option>
                               <option value="1">Đà Nẵng</option>
                               <option value="2">Hồ Chí Minh</option>
                           </select>
                       </div>
                       <div class="col-lg-7 text-end">
                           <button style="width: 200px;" class="btn btn-outline-primary mt-3">Tìm kiếm <i class="fa-solid fa-magnifying-glass"></i></button>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <div class="col-lg-12">
           <div class="card">
               <div class="card-body">
                   <div class="row product-grid">
                       <div class="col-lg-2 col-md-4">
                           <router-link to="/dat-cho">
                               <div class="card" >
                               <div class="card-header text-cente">
                                   Screen03
                               </div>
                               <div class="card-body text-center ">
                                   <b><h4>11:00</h4></b>
                               </div>
                               <div class="card-footer text-center">
                                   80/90 Ghế ngồi
                               </div>
                           </div>
                           </router-link>
                       </div>
                       <div class="col-lg-2 col-md-4">
                           <router-link to="/dat-cho">
                               <div class="card">
                               <div class="card-header text-center">
                                   Screen03
                               </div>
                               <div class="card-body text-center ">
                                   <b><h4>11:30</h4></b>
                               </div>
                               <div class="card-footer text-center">
                                   20/90 Ghế ngồi
                               </div>
                           </div>
                           </router-link>
                       </div>
                       <div class="col-lg-2 col-md-4">
                           <router-link to="/dat-cho">
                               <div class="card">
                               <div class="card-header text-center">
                                   Screen03
                               </div>
                               <div class="card-body text-center ">
                                   <b><h4>12:00</h4></b>
                               </div>
                               <div class="card-footer text-center">
                                   19/90 Ghế ngồi
                               </div>
                           </div>
                           </router-link>
                       </div>
                       <div class="col-lg-2 col-md-4">
                           <router-link to="/dat-cho">
                               <div class="card">
                               <div class="card-header text-center">
                                   Screen03
                               </div>
                               <div class="card-body text-center ">
                                   <b><h4>13:30</h4></b>
                               </div>
                               <div class="card-footer text-center">
                                   30/90 Ghế ngồi
                               </div>
                           </div>
                           </router-link>
                       </div>
                       <div class="col-lg-2 col-md-4">
                           <router-link to="/dat-cho">
                               <div class="card">
                               <div class="card-header text-center">
                                   Screen03
                               </div>
                               <div class="card-body text-center ">
                                   <b><h4>15:00</h4></b>
                               </div>
                               <div class="card-footer text-center">
                                   67/90 Ghế ngồi
                               </div>
                           </div>
                           </router-link>
                       </div>
                       <div class="col-lg-2 col-md-4">
                           <router-link to="/dat-cho">
                               <div class="card">
                               <div class="card-header text-center">
                                   Screen03
                               </div>
                               <div class="card-body text-center ">
                                   <b><h4>15:00</h4></b>
                               </div>
                               <div class="card-footer text-center">
                                   67/90 Ghế ngồi
                               </div>
                           </div>
                           </router-link>
                       </div>
                       <div class="col-lg-2 col-md-4">
                           <router-link to="/dat-cho">
                               <div class="card">
                               <div class="card-header text-center">
                                   Screen03
                               </div>
                               <div class="card-body text-center ">
                                   <b><h4>15:00</h4></b>
                               </div>
                               <div class="card-footer text-center">
                                   67/90 Ghế ngồi
                               </div>
                           </div>
                           </router-link>
                       </div>
                       <div class="col-lg-2 col-md-4">
                           <router-link to="/dat-cho">
                               <div class="card">
                               <div class="card-header text-center">
                                   Screen03
                               </div>
                               <div class="card-body text-center ">
                                   <b><h4>15:00</h4></b>
                               </div>
                               <div class="card-footer text-center">
                                   67/90 Ghế ngồi
                               </div>
                           </div>
                           </router-link>
                       </div>
                       <div class="col-lg-2 col-md-4">
                           <router-link to="/dat-cho">
                               <div class="card">
                               <div class="card-header text-center">
                                   Screen03
                               </div>
                               <div class="card-body text-center ">
                                   <b><h4>15:00</h4></b>
                               </div>
                               <div class="card-footer text-center">
                                   67/90 Ghế ngồi
                               </div>
                           </div>
                           </router-link>
                       </div>
                       <div class="col-lg-2 col-md-4">
                           <router-link to="/dat-cho">
                               <div class="card">
                               <div class="card-header text-center">
                                   Screen03
                               </div>
                               <div class="card-body text-center ">
                                   <b><h4>15:00</h4></b>
                               </div>
                               <div class="card-footer text-center">
                                   67/90 Ghế ngồi
                               </div>
                           </div>
                           </router-link>
                       </div>
                       <div class="col-lg-2 col-md-4">
                           <router-link to="/dat-cho">
                               <div class="card">
                               <div class="card-header text-center">
                                   Screen03
                               </div>
                               <div class="card-body text-center ">
                                   <b><h4>15:00</h4></b>
                               </div>
                               <div class="card-footer text-center">
                                   67/90 Ghế ngồi
                               </div>
                           </div>
                           </router-link>
                       </div>
                       <div class="col-lg-2 col-md-4">
                           <router-link to="/dat-cho">
                               <div class="card">
                               <div class="card-header text-center">
                                   Screen03
                               </div>
                               <div class="card-body text-center ">
                                   <b><h4>15:00</h4></b>
                               </div>
                               <div class="card-footer text-center">
                                   67/90 Ghế ngồi
                               </div>
                           </div>
                           </router-link>
                       </div>
                       <div class="col-lg-2 col-md-4">
                           <router-link to="/dat-cho">
                               <div class="card">
                               <div class="card-header text-center">
                                   Screen03
                               </div>
                               <div class="card-body text-center ">
                                   <b><h4>15:00</h4></b>
                               </div>
                               <div class="card-footer text-center">
                                   67/90 Ghế ngồi
                               </div>
                           </div>
                           </router-link>
                       </div>
                       <div class="col-lg-2 col-md-4">
                           <router-link to="/dat-cho">
                               <div class="card">
                               <div class="card-header text-center">
                                   Screen03
                               </div>
                               <div class="card-body text-center ">
                                   <b><h4>15:00</h4></b>
                               </div>
                               <div class="card-footer text-center">
                                   67/90 Ghế ngồi
                               </div>
                           </div>
                           </router-link>
                       </div>
                       <div class="col-lg-2 col-md-4">
                           <router-link to="/dat-cho">
                               <div class="card">
                               <div class="card-header text-center">
                                   Screen03
                               </div>
                               <div class="card-body text-center ">
                                   <b><h4>15:00</h4></b>
                               </div>
                               <div class="card-footer text-center">
                                   67/90 Ghế ngồi
                               </div>
                           </div>
                           </router-link>
                       </div>
                       <div class="col-lg-2 col-md-4">
                           <router-link to="/dat-cho">
                               <div class="card">
                               <div class="card-header text-center">
                                   Screen03
                               </div>
                               <div class="card-body text-center ">
                                   <b><h4>15:00</h4></b>
                               </div>
                               <div class="card-footer text-center">
                                   67/90 Ghế ngồi
                               </div>
                           </div>
                           </router-link>
                       </div>
                       <div class="col-lg-2 col-md-4">
                           <router-link to="/dat-cho">
                               <div class="card">
                               <div class="card-header text-center">
                                   Screen03
                               </div>
                               <div class="card-body text-center ">
                                   <b><h4>15:00</h4></b>
                               </div>
                               <div class="card-footer text-center">
                                   67/90 Ghế ngồi
                               </div>
                           </div>
                           </router-link>
                       </div>
                       <div class="col-lg-2 col-md-4">
                           <router-link to="/dat-cho">
                               <div class="card">
                               <div class="card-header text-center">
                                   Screen03
                               </div>
                               <div class="card-body text-center ">
                                   <b><h4>15:00</h4></b>
                               </div>
                               <div class="card-footer text-center">
                                   67/90 Ghế ngồi
                               </div>
                           </div>
                           </router-link>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
   <div class="slide">
            <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://media.lottecinemavn.com/Media/WebAdmin/ebd47d1784f74d6a9cb933c48efed53a.jpg"
                            class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://media.lottecinemavn.com/Media/WebAdmin/ecf8ee277eb24ee8a409d31eb5a856c7.jpg"
                            class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://media.lottecinemavn.com/Media/WebAdmin/ecf8ee277eb24ee8a409d31eb5a856c7.jpg"
                            class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div class="footer " style="background-color: w;">
            <img style="height: 70px;width: 500px;" alt="Lotte Cinema Logo"
                src="https://media.lottecinemavn.com/Media/WebAdmin/ccc95ee5b9274a12ba3e51317250dcbe.png" />
            <p>
                <a href="#">
                    Chính Sách Khách Hàng Thường Xuyên
                </a>
                |
                <a href="#">
                    Chính Sách Bảo Mật Thông Tin
                </a>
                |
                <a href="#">
                    Điều Khoản Sử Dụng
                </a>
            </p>
            <p>
                CÔNG TY TNHH LOTTE CINEMA VIỆT NAM
            </p>
            <p>
                Giấy CNĐKDN: 0302575928, đăng ký lần đầu ngày 02/05/2008, đăng ký thay đổi lần thứ 10 ngày
                30/03/2018, cấp
                bởi Sở KHĐT Thành phố Hồ Chí Minh
            </p>
            <p>
                Địa chỉ: Tầng 3, TTTM Lotte, số 469 đường Nguyễn Hữu Thọ, Phường Tân Hưng, Quận 7, TPHCM, Việt Nam
            </p>
            <p>
                Hotline: (028) 3775 2524
            </p>
            <p>
                COPYRIGHT @ LOTTECINEMAVN.COM - ALL RIGHTS RESERVED.
            </p>
        </div>
</div>

</template>
<script>
export default {
    
}
</script>
<style>
    
</style>