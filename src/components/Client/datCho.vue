<template >
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
    <div class="container mt-4">
       <div class="row">
           <div class="col-lg-12">
               <div class="card">
                   <div class="card-header">
                       <h2>Chọn ghế <i class="fa-solid fa-couch"></i></h2>
                   </div>
                   <div class="card-body">
                       <div class="card bg-secondary">
                           <div class="card-header text-center">
                               <h3 class="text-white">Screen</h3>
                           </div>
                       </div>
                       <div class="">
                           <div class="row">
                               <div class="col-lg-3"></div>
                               <div class="col-lg-6">
                                   <div class="d-flex justify-content-start mt-2">
                                       <h4 style="width: 20px;">a</h4>
                                       <button class="btn btn-outline-primary ms-5">1</button>
                                       <button class="btn btn-outline-primary ms-2">2</button>
                                       <button class="btn btn-outline-primary ms-5">3</button>
                                       <button class="btn btn-outline-primary ms-2">4</button>
                                       <button class="btn btn-outline-primary ms-2">5</button>
                                       <button class="btn btn-outline-primary ms-2">6</button>
                                       <button class="btn btn-outline-primary ms-2">7</button>
                                       <button class="btn btn-outline-primary ms-5">8</button>
                                       <button class="btn btn-outline-primary ms-2">9</button>
                                   </div>
                                   <div class="d-flex justify-content-start mt-2">
                                       <h4 style="width: 20px;">b</h4>
                                       <button class="btn btn-outline-primary ms-5">1</button>
                                       <button class="btn btn-outline-primary ms-2">2</button>
                                       <button class="btn btn-outline-primary ms-5">3</button>
                                       <button class="btn btn-outline-primary ms-2">4</button>
                                       <button class="btn btn-outline-primary ms-2">5</button>
                                       <button class="btn btn-outline-primary ms-2">6</button>
                                       <button class="btn btn-outline-primary ms-2">7</button>
                                       <button class="btn btn-outline-primary ms-5">8</button>
                                       <button class="btn btn-outline-primary ms-2">9</button>
                                   </div>
                                   <div class="d-flex justify-content-start mt-2">
                                       <h4 style="width: 20px;">c</h4>
                                       <button class="btn btn-outline-primary ms-5">1</button>
                                       <button class="btn btn-outline-primary ms-2">2</button>
                                       <button class="btn btn-outline-primary ms-5">3</button>
                                       <button class="btn btn-outline-primary ms-2">4</button>
                                       <button class="btn btn-outline-primary ms-2">5</button>
                                       <button class="btn btn-outline-primary ms-2">6</button>
                                       <button class="btn btn-outline-primary ms-2">7</button>
                                       <button class="btn btn-outline-primary ms-5">8</button>
                                       <button class="btn btn-outline-primary ms-2">9</button>
                                   </div>
                                   <div class="d-flex justify-content-start mt-2">
                                       <h4 style="width: 20px;">d</h4>
                                       <button class="btn btn-outline-primary ms-5">1</button>
                                       <button class="btn btn-outline-primary ms-2">2</button>
                                       <button class="btn btn-outline-primary ms-5">3</button>
                                       <button class="btn btn-outline-primary ms-2">4</button>
                                       <button class="btn btn-outline-primary ms-2">5</button>
                                       <button class="btn btn-outline-primary ms-2">6</button>
                                       <button class="btn btn-outline-primary ms-2">7</button>
                                       <button class="btn btn-outline-primary ms-5">8</button>
                                       <button class="btn btn-outline-primary ms-2">9</button>
                                   </div>
                                   <div class="d-flex justify-content-start mt-2">
                                       <h4 style="width: 20px;">e</h4>
                                       <button class="btn btn-outline-primary ms-5">1</button>
                                       <button class="btn btn-outline-primary ms-2">2</button>
                                       <button class="btn btn-outline-primary ms-5">3</button>
                                       <button class="btn btn-outline-primary ms-2">4</button>
                                       <button class="btn btn-outline-primary ms-2">5</button>
                                       <button class="btn btn-outline-primary ms-2">6</button>
                                       <button class="btn btn-outline-primary ms-2">7</button>
                                       <button class="btn btn-outline-primary ms-5">8</button>
                                       <button class="btn btn-outline-primary ms-2">9</button>
                                   </div>
                                   <div class="d-flex justify-content-start mt-2">
                                       <h4 style="width: 20px;">f</h4>
                                       <button class="btn btn-outline-primary ms-5">1</button>
                                       <button class="btn btn-outline-primary ms-2">2</button>
                                       <button class="btn btn-outline-primary ms-5">3</button>
                                       <button class="btn btn-outline-primary ms-2">4</button>
                                       <button class="btn btn-outline-primary ms-2">5</button>
                                       <button class="btn btn-outline-primary ms-2">6</button>
                                       <button class="btn btn-outline-primary ms-2">7</button>
                                       <button class="btn btn-outline-primary ms-5">8</button>
                                       <button class="btn btn-outline-primary ms-2">9</button>
                                   </div>
                                   <div class="d-flex justify-content-start mt-2">
                                       <h4 style="width: 20px;">g</h4>
                                       <button class="btn btn-outline-primary ms-5">1</button>
                                       <button class="btn btn-outline-primary ms-2">2</button>
                                       <button class="btn btn-outline-primary ms-5">3</button>
                                       <button class="btn btn-outline-primary ms-2">4</button>
                                       <button class="btn btn-outline-primary ms-2">5</button>
                                       <button class="btn btn-outline-primary ms-2">6</button>
                                       <button class="btn btn-outline-primary ms-2">7</button>
                                       <button class="btn btn-outline-primary ms-5">8</button>
                                       <button class="btn btn-outline-primary ms-2">9</button>
                                   </div>
                                   <div class="d-flex justify-content-start mt-2">
                                       <h4 style="width: 20px;">h</h4>
                                       <button class="btn btn-outline-primary ms-5">1</button>
                                       <button class="btn btn-outline-primary ms-2">2</button>
                                       <button class="btn btn-outline-primary ms-5">3</button>
                                       <button class="btn btn-outline-primary ms-2">4</button>
                                       <button class="btn btn-outline-primary ms-2">5</button>
                                       <button class="btn btn-outline-primary ms-2">6</button>
                                       <button class="btn btn-outline-primary ms-2">7</button>
                                       <button class="btn btn-outline-primary ms-5">8</button>
                                       <button class="btn btn-outline-primary ms-2">9</button>
                                   </div>
                                   <div class="d-flex justify-content-start mt-2">
                                       <h4 style="width: 20px;">i</h4>
                                       <button class="btn btn-outline-primary ms-5">1</button>
                                       <button class="btn btn-outline-primary ms-2">2</button>
                                       <button class="btn btn-outline-primary ms-5">3</button>
                                       <button class="btn btn-outline-primary ms-2">4</button>
                                       <button class="btn btn-outline-primary ms-2">5</button>
                                       <button class="btn btn-outline-primary ms-2">6</button>
                                       <button class="btn btn-outline-primary ms-2">7</button>
                                       <button class="btn btn-outline-primary ms-5">8</button>
                                       <button class="btn btn-outline-primary ms-2">9</button>
                                   </div>
                                   <div class="d-flex justify-content-start mt-2">
                                       <h4 style="width: 20px;">j</h4>
                                       <button class="btn btn-outline-danger ms-5">1</button>
                                       <button class="btn btn-outline-danger ms-2">2</button>
                                       <button class="btn btn-outline-danger ms-5">3</button>
                                       <button class="btn btn-outline-danger ms-2">4</button>
                                       <button class="btn btn-outline-danger ms-2">5</button>
                                       <button class="btn btn-outline-danger ms-2">6</button>
                                       <button class="btn btn-outline-danger ms-2">7</button>
                                       <button class="btn btn-outline-danger ms-5">8</button>
                                       <button class="btn btn-outline-danger ms-2">9</button>
                                   </div>
                               </div>
                               <div class="col-lg-3"></div>
                           </div>
                           <div class="d-flex justify-content-end mt-5">
                           
                                    <button class="btn btn-outline-primary">1</button>
                                    <h4 class="mt-2 ms-2">: ghế thường</h4>
                                    <button class="btn btn-outline-danger ms-2">1</button>
                                    <h4 class="mt-2 ms-2">: ghế đôi</h4>
                                    <router-link to="/thanh-toan">
                                        <button class="btn btn-danger ms-3">Thanh toán</button>
                                    </router-link>
                                    
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div class="col-lg-12">
               <div class="card">
                   <div class="card-header">
                       <h2>Dịch vụ <i class="fa-solid fa-glass-water"></i></h2>
                   </div>
                   <div class="card-body">
                       <div class="row">
                           <div class="col-lg-3 col-md-6">
                               <div class="card">
                                   <div class="card-body text-center">
                                       <img class="img-fluid" src="http://media.lottecinemavn.com/Media/WebAdmin/ec11397f97114de5bf16dd3b7a86ea45.png" alt="">
                                       <h5>[B]Harmory Couple</h5>
                                   </div>
                                   <div class="card-footer d-flex justify-content-between">
                                       <h5>Giá: </h5>
                                       <button class="btn btn-primary">120.000đ</button>
                                   </div>
                               </div>
                           </div>
                           <div class="col-lg-3 col-md-6">
                               <div class="card">
                                   <div class="card-body text-center">
                                       <img class="img-fluid" src="http://media.lottecinemavn.com/Media/WebAdmin/62e892a991a0479a994236c9ade6b4a1.png" alt="">
                                       <h5>[B]Harmory Couple</h5>
                                   </div>
                                   <div class="card-footer d-flex justify-content-between">
                                       <h5>Giá: </h5>
                                       <button class="btn btn-primary">150.000đ</button>
                                   </div>
                               </div>
                           </div>
                           <div class="col-lg-3 col-md-6">
                               <div class="card">
                                   <div class="card-body text-center">
                                       <img class="img-fluid" src="http://media.lottecinemavn.com/Media/WebAdmin/ec11397f97114de5bf16dd3b7a86ea45.png" alt="">
                                       <h5>[B]Harmory max</h5>
                                   </div>
                                   <div class="card-footer d-flex justify-content-between">
                                       <h5>Giá: </h5>
                                       <button class="btn btn-primary">220.000đ</button>
                                   </div>
                               </div>
                           </div>
                           <div class="col-lg-3 col-md-6">
                               <div class="card">
                                   <div class="card-body text-center">
                                       <img class="img-fluid" src="http://media.lottecinemavn.com/Media/WebAdmin/62e892a991a0479a994236c9ade6b4a1.png" alt="">
                                       <h5>[B]Harmory min</h5>
                                   </div>
                                   <div class="card-footer d-flex justify-content-between">
                                       <h5>Giá: </h5>
                                       <button class="btn btn-primary">100.000đ</button>
                                   </div>
                               </div>
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
<style >
    
</style>