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
            <template v-for="(value, index) in list_phim" :key="index">
                <div class="col-lg-3 mb-2" style="border: 1px solid burlywood;padding-left: 0px;padding-right: 0px;">
                    <router-link to="/view-sp2">
                        <img class="img-fluid" :src="value.img" alt="" style="height: 480px;">
                        <div class="mt-3 text-center">
                            <h5 class="text-wrap">{{ value.name }}</h5>
                            <hr style="margin-top: 7px;">
                        </div>
                        <div class="text-center" style="margin-top: 7px;">
                            <div style="font-size: 20px;">{{ value.ngay }} | {{ value.tinh_trang }}</div>
                        </div>
                    </router-link>
                </div>
            </template>
        </div>
        <div class="text-center mt-3 mb-2" style="font-size: 20px">
            <a href=""><B>XEM THÊM</B></a>
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
    data() {
        return {
            list_phim: [
                {
                    img: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202409/11559_103_100001.jpg",
                    name: "JUNG KOOK: I AM STILL",
                    ngay: "16/10/2024",
                    tinh_trang: "chưa mở",
                },
                {
                    img: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11567_103_100006.jpg",
                    name: "TEE YOD: QUỶ ĂN TẠNG PHẦN 2",
                    ngay: "10/10/2024",
                    tinh_trang: "chưa mở",
                },
                {
                    img: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11482_103_100002.jpg",
                    name: "ROBOT HOANG DÃ",
                    ngay: "11/10/2024",
                    tinh_trang: "chưa mở",
                },
                {
                    img: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202409/11507_103_100004.jpg",
                    name: "CÁM",
                    ngay: "10/10/2024",
                    tinh_trang: "chưa mở",
                },
                {
                    img: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11574_103_100002.jpg",
                    name: "FUBAO: BẢO BỐI CỦA ÔNG",
                    ngay: "18/10/2024",
                    tinh_trang: "chưa mở",
                },
                {
                    img: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11595_103_100001.jpg",
                    name: "BIỆT ĐỘI HOT GIRL",
                    ngay: "25/10/2024",
                    tinh_trang: "chưa mở",
                },
                {
                    img: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11592_103_100001.jpg",
                    name: "TRÒ CHƠI NHÂN TÍNH",
                    ngay: "25/10/2024",
                    tinh_trang: "chưa mở",
                },
                {
                    img: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11556_103_100002.jpg",
                    name: "CÔ DÂU HÀO MÔN",
                    ngay: "18/10/2024",
                    tinh_trang: "chưa mở",
                },
            ],
        }
    }
};
</script>
<style></style>