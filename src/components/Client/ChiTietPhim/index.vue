<template>
    <template v-for="(value, index) in list_phim" :key="index">
        <div style="margin-top: 20px;">
            <div class="row ">
                <div class="col-lg-1 mt-2 mb-2"></div>
                <div class="col-lg-10 text-center mt-2 mb-2 ">
                    <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <iframe width="560" height="315" class="d-block w-100" style="height:600px;"
                                    src="https://www.youtube.com/embed/LWkh_hXeEeg?si=eUd_mxvnOCXi9T-G"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                            <div class="carousel-item ">
                                <img :src="phim_chi_tiet.baner1" class="d-block w-100" style="height:600px;" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img :src="phim_chi_tiet.baner2" class="d-block w-100" style="height:600px;" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img :src="phim_chi_tiet.baner3" class="d-block w-100" style="height:600px;" alt="...">
                            </div>


                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <!-- <img :src="value.slide1" style="width: 100%;height: 600px;" alt=""> -->
                </div>
                <div class="col-lg-1 mt-2 mb-2"></div>
            </div>
        </div>
        <div class="container">
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row mt-2">
                            <div class="col-lg-3">
                                <img :src="phim_chi_tiet.baner1" class="img-fluid" alt="">
                            </div>
                            <div class="col-lg-3">
                                <img :src="phim_chi_tiet.baner2" class="img-fluid" alt="">
                            </div>
                            <div class="col-lg-3">
                                <img :src="phim_chi_tiet.baner3" class="img-fluid" alt="">
                            </div>
                            <div class="col-lg-3">
                                <img :src="phim_chi_tiet.baner1" class="img-fluid" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row mt-2">
                            <div class="col-lg-3">
                                <img :src="phim_chi_tiet.baner1" class="img-fluid" alt="">
                            </div>
                            <div class="col-lg-3">
                                <img :src="phim_chi_tiet.baner2" class="img-fluid" alt="">
                            </div>
                            <div class="col-lg-3">
                                <img :src="phim_chi_tiet.baner3" class="img-fluid" alt="">
                            </div>
                            <div class="col-lg-3">
                                <img :src="phim_chi_tiet.baner1" class="img-fluid" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row mt-2">
                            <div class="col-lg-3">
                                <img :src="phim_chi_tiet.baner1" class="img-fluid" alt="">
                            </div>
                            <div class="col-lg-3">
                                <img :src="phim_chi_tiet.baner2" class="img-fluid" alt="">
                            </div>
                            <div class="col-lg-3">
                                <img :src="phim_chi_tiet.baner3" class="img-fluid" alt="">
                            </div>
                            <div class="col-lg-3">
                                <img :src="phim_chi_tiet.baner1" class="img-fluid" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="card mb-3 mt-3">
                <div class="row g-0">
                    <div class="col-md-3">
                        <div class="card-header">
                            <img :src="phim_chi_tiet.hinh_anh" class="img-fluid rounded-start" alt="..."
                                style="width: 300px; height: 400px;">
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="card-body">
                            <h5 class="card-title" style="font-size: 30px;"><b>NAME : </b>{{ phim_chi_tiet.ten_phim
                                }} </h5>
                            <p class="card-text"><b>RANK : </b>{{ phim_chi_tiet.danh_gia }}</p>
                            <p class="card-text"><b>NGÀY : </b>{{ phim_chi_tiet.ngay_chieu }}</p>
                            <p class="card-text"><b>THỂ LOẠI : </b>{{ value.loai }}</p>
                            <h6 class="card-title"><b>TÓM TẮT : </b></h6>
                            <p class="card-text"> {{ phim_chi_tiet.mo_ta }}</p>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="card-footer mt-2 mb-2 text-end">
                            <router-link to="/dat-cho">
                                <button class="btn btn-danger ">Đặt vé ngay</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 ">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="ms-3 mt-2">
                                <p>XẾP HẠNG VÀ ĐÁNH GIÁ</p>
                            </h5>
                        </div>
                        <div class="card-body">
                            <textarea class="form-control" placeholder="Bạn có thể đánh giá sau khi đăng nhập..."
                                name="" id="" rows="5"></textarea>
                        </div>
                        <div class="card-footer text-end">
                            <button class="btn btn-danger">Đánh giá ngay</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 ">
                    <div class="card">
                        <div class="card-header">
                            <h5 class=" mt-2">
                                <p>LỊCH SỬ ĐÁNH GIÁ</p>
                            </h5>
                        </div>
                        <div class="card-body">
                            <p class="card-title"><b>Đỗ Văn Đại : </b></p>
                            <p class="card-text">{{ value.danh_gia1 }}</p>
                            <p class="card-title"><b>Trần Văn Duyệt : </b></p>
                            <p class="card-text">{{ value.danh_gia2 }}</p>
                            <p class="card-title"><b>Nguyễn Quang Hùng : </b></p>
                            <p class="card-text">{{ value.danh_gia3 }}</p>
                        </div>
                        <div class="card-footer text-center">
                            <a class="mt-2" href="">
                                <h5>
                                    <p>Xem thêm đánh giá</p>
                                </h5>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </template>

</template>
<script>
import baseRequest from '../../../core/baseRequest';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
import axios from 'axios';

export default {
    props: ['id_phim', 'slug_phim'],
    data() {
        return {
            list_phim: [
                {
                    img: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11567_103_100006.jpg",
                    name: "TEE YOD: QUỶ ĂN TẠNG PHẦN 2",
                    ngay: "10/10/2024",
                    tinh_trang: "chưa mở",
                    slide1: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11567_105_1006.jpg",
                    slide2: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11567_105_17.png",
                    slide3: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11567_105_19.jpg",
                    slide4: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11567_105_1010.jpg",
                    xep_hang: "8.5/10",
                    thoi_gian: "111 phút",
                    loai: "2D | Normal | Normal sound | Phụ đề",
                    tom_tat: "Ba năm sau cái chết của Yam, Yak vẫn tiếp tục săn lùng linh hồn bí ẩn mặc áo choàng đen. Gặp một cô gái có triệu chứng giống Yam, Yak phát hiện ra người bảo vệ linh hồn, pháp sư ẩn dật Puang, sống trong một khu rừng đầy nguy hiểm. Giữa những phép thuật ma quỷ và những sinh vật nguy hiểm. Khi họ đuổi theo linh hồn mặc áo choàng đen, tiếng kêu đầy ám ảnh của Tee Yod sắp quay trở lại một lần nữa...",
                    danh_gia1: "Quỷ Ăn Tạng thực sự là một bộ phim kinh dị độc đáo, mang đến cảm giác ghê rợn và căng thẳng từ đầu đến cuối. Hiệu ứng hình ảnh đáng kinh ngạc và cách xây dựng không khí bí ẩn khiến tôi bị cuốn hút ngay từ những phút đầu tiên. Phim có sự kết hợp tuyệt vời giữa yếu tố tâm linh và máu me, tạo nên trải nghiệm khó quên. Nếu bạn là fan của thể loại kinh dị, đây chắc chắn là một tác phẩm không thể bỏ qua!",
                    danh_gia2: "Điều ấn tượng nhất trong Quỷ Ăn Tạng chính là diễn xuất tuyệt vời của dàn diễn viên. Nhân vật chính truyền tải một cảm giác sợ hãi chân thực, giúp khán giả cảm nhận được nỗi khiếp sợ mà họ đang đối mặt. Cốt truyện độc đáo và bất ngờ đã giữ tôi ngồi im lặng suốt thời gian phim. Đây là một bộ phim kinh dị với nội dung sâu sắc, vượt xa những cảnh hù dọa thông thường.",
                    danh_gia3: "Quỷ Ăn Tạng không chỉ đơn thuần là một bộ phim về máu me, mà còn là một tác phẩm nghệ thuật đầy sáng tạo. Bối cảnh phim tối tăm và âm thanh rùng rợn đã góp phần xây dựng nên bầu không khí đáng sợ đến nghẹt thở. Từng chi tiết nhỏ trong phim đều được chăm chút kỹ lưỡng, từ đạo cụ đến các cảnh quay, khiến tôi không thể rời mắt khỏi màn hình. Phim này chắc chắn sẽ ám ảnh tôi trong nhiều ngày tới!",
                }],
            phim_chi_tiet: {},
            id_phim: null,

        }
    },
    mounted() {
        this.id_phim = this.$route.params.id_phim;
        this.loadDataPhimChiTiet();

    },
    methods: {



        loadDataPhimChiTiet() {
            axios
                .get('http://127.0.0.1:8000/api/phim-chi-tiet/' + this.id_phim)
                .then((res) => {
                    this.phim_chi_tiet = res.data.data
                })
        },



    },
}
</script>
<style></style>