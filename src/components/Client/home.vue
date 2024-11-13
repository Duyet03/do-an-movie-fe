<template>
    <div class="container mt-5">
        <div class="row">
            <template v-for="(value, index) in list_phim" :key="index">

                <div class="col-lg-3 mb-2" style="border: 1px solid burlywood;padding-left: 0px;padding-right: 0px;">
                    <router-link :to="'/chi-tiet-phim/' + value.id + '-' + value.slug_phim">
                        <img class="img-fluid" :src="value.hinh_anh" alt="" style="height: 480px;">
                        <div class="mt-3 text-center">
                            <h5 class="text-wrap">{{ value.ten_phim }}</h5>
                            <hr style="margin-top: 7px;">
                        </div>
                        <div class="text-center" style="margin-top: 7px;">
                            <div style="font-size: 20px;">{{ value.ngay_chieu }} | {{ value.tinh_trang }}</div>
                        </div>
                    </router-link>
                </div>
            </template>
        </div>
        <div class="text-center mt-3 mb-2" style="font-size: 20px">
            <a href=""><B>XEM THÊM</B></a>
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
            list_phim: [],
        }
    },
    mounted() {
        this.getDataHomePage();
    },
    methods: {
        getDataHomePage() {
            axios
                .get('http://127.0.0.1:8000/api/trang-chu/data')
                .then((res) => {
                    this.list_phim = res.data.listPhim;

                })
        }
    },
}
</script>
<style></style>
