<template>
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