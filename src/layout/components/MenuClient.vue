<template>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="javascript:;" title="Hướng dẫn cài đặt ứng dụng Lotte Cinema App QR Code">Lotte
            Cinema APP</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="https://www.facebook.com/LotteCinema" target="_blank"
                        title="Lotte Cinema Facebook">Lotte Cinema Facebook</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="lbtnLogin" title="Đăng nhập" href="/login">Đăng nhập</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:goToMembershipMenu(0,4,1);" id="topMembership"
                        title="Thẻ thành viên">Thẻ thành viên</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:goCustomerCenterMenu('0');" id="topCustomerService"
                        title="Hỗ trợ khách hàng">Hỗ trợ khách hàng</a>
                </li>

            </ul>
        </div>
    </nav>


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
                <template v-for="(v, k) in ds_slide" :key="k">
                    <template v-if="k == 0">
                        <div class="carousel-item active">
                            <img v-bind:src="v.link_hinh_anh" class="d-block w-100" alt="...">
                        </div>
                    </template>
                    <template v-else>
                        <div class="carousel-item">
                            <img v-bind:src="v.link_hinh_anh" class="d-block w-100" alt="...">
                        </div>
                    </template>
                </template>
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
</template>
<script>
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {

            ds_slide: [],
        }
    },
    mounted() {

        this.layDuLieuSlide();
    },
    methods: {
        layDuLieuReview() {
            axios
                .get('http://127.0.0.1:8000/api/review/data')
                .then((res) => {
                    this.ds_review = res.data.review;
                })
        },
        layDuLieuSlide() {
            axios
                .get('http://127.0.0.1:8000/api/slide/data')
                .then((res) => {
                    this.ds_slide = res.data.slide;
                })
        },
    },
}
</script>
<style></style>