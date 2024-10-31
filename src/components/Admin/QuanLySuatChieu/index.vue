<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-xl-2">
                            <button class="btn btn-primary mb-3 mb-lg-0" data-bs-toggle="modal"
                                data-bs-target="#taoPhongModal">
                                <i class="bx bxs-plus-square"></i>Tạo Mới Suất</button>
                        </div>
                    </div>
                    <div class="modal fade" id="taoPhongModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Tạo Mới</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="mb-2">
                                        <label>Mã Suất</label>
                                        <input v-model="suat_create.id_suat" type="text" class="form-control mt-2">
                                    </div>
                                    <div class="mb-2">
                                        <label>Thời Gian Bắt Đầu</label>
                                        <input v-model="suat_create.thoi_gian_bat_dau" type="datetime-local"
                                            class="form-control mt-2">
                                    </div>
                                    <div class="mb-2">
                                        <label>Thời Gian Kết Thúc</label>
                                        <input v-model="suat_create.thoi_gian_ket_thuc" type="datetime-local"
                                            class="form-control mt-2">
                                    </div>
                                    <div class="mb-2">
                                        <label>Mã Phim</label>
                                        <input v-model="suat_create.id_phim" type="text" class="form-control mt-2">
                                    </div>

                                    <div class="mb-2">
                                        <label>Tình Trạng</label>
                                        <select v-model="suat_create.tinh_trang" class="form-control">
                                            <option value="1">Đang Chiếu</option>
                                            <option value="0">Dừng Chiếu</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button v-on:click="themMoiSuat()" type="button" class="btn btn-primary">Thêm
                                        Mới</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2">Danh Sách Suất Chiếu</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th class="text-center">#</th>
                                    <th class="text-center">Mã Suất</th>
                                    <th class="text-center">Thời Gian Bắt Đầu</th>
                                    <th class="text-center">Thời Gian Kết Thúc</th>
                                    <th class="text-center">Mã Phim</th>
                                    <th class="text-center">Tình Trạng</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(v, k) in ds_suat" :key="k">
                                    <th class="text-center align-middle">{{ k + 1 }}</th>
                                    <td class="align-middle">{{ v.id_suat }}</td>
                                    <td class="align-middle">{{ v.thoi_gian_bat_dau }}</td>
                                    <td class="align-middle">{{ v.thoi_gian_ket_thuc }}</td>
                                    <td class="align-middle">{{ v.id_phim }}</td>
                                    <td class="text-center">
                                        <button v-on:click="doiTrangThai(v)" v-if="v.tinh_trang == 1"
                                            class="btn btn-success">Đang Chiếu</button>
                                        <button v-on:click="doiTrangThai(v)" v-else class="btn btn-primary"> Ngừng
                                            Chiếu</button>
                                    </td>
                                    <td class="text-center text-nowrap align-middle">
                                        <button v-on:click="Object.assign(suat_update, v)" data-bs-toggle="modal"
                                            data-bs-target="#updateModal" class="btn btn-info me-1">Cập Nhật</button>
                                        <button data-bs-toggle="modal" data-bs-target="#deleteModal"
                                            v-on:click="id_can_xoa = v.id" class="btn btn-danger">Xoá Bỏ</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xoá Phòng</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="alert alert-danger" role="alert">
                                        Bạn thật sự có muốn xoá phòng này không?
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button v-on:click="xoaSuat()" type="button" class="btn btn-danger"
                                        data-bs-dismiss="modal">Xác Nhận Xoá</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Phòng</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="mb-2">
                                        <label>Mã Suất</label>
                                        <input v-model="suat_update.id_suat" type="text" class="form-control mt-2">
                                    </div>
                                    <div class="mb-2">
                                        <label>Thời Gian Bắt Đầu</label>
                                        <input v-model="suat_update.thoi_gian_bat_dau" type="text"
                                            class="form-control mt-2">
                                    </div>
                                    <div class="mb-2">
                                        <label>Thời Gian Kết Thúc</label>
                                        <input v-model="suat_update.thoi_gian_ket_thuc" type="text"
                                            class="form-control mt-2">
                                    </div>
                                    <div class="mb-2">
                                        <label>Tình Trạng</label>
                                        <select v-model="suat_update.tinh_trang" class="form-control">
                                            <option value="1">Đang Chiếu</option>
                                            <option value="0">Ngừng Chiếu</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button v-on:click="capNhatSuat()" type="button" class="btn btn-info"
                                        data-bs-dismiss="modal">Xác Nhận Cập
                                        Nhật</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            ds_suat: [],
            suat_create: {},
            suat_update: {},
            id_can_xoa: '',
        }
    },
    mounted() {
        this.layDuLieuSuatChieu();
    },
    methods: {

        layDuLieuSuatChieu() {
            axios
                .get('http://127.0.0.1:8000/api/suat-chieu/data')
                .then((res) => {
                    this.ds_suat = res.data.suat;
                })
        },
        themMoiSuat() {
            axios
                .post("http://127.0.0.1:8000/api/suat-chieu/create", this.suat_create)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDuLieuSuatChieu();
                    }
                });
        },
        xoaSuat() {
            axios
                .delete("http://127.0.0.1:8000/api/suat-chieu/delete/" + this.id_can_xoa)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDuLieuSuatChieu();
                    }
                });
        },
        capNhatSuat() {
            axios
                .put("http://127.0.0.1:8000/api/suat-chieu/update", this.suat_update)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDuLieuSuatChieu();
                    }
                });
        },
        doiTrangThai(xxx) {
            axios
                .put('http://127.0.0.1:8000/api/suat-chieu/doi-trang-thai', xxx)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDuLieuSuatChieu();
                    } else {
                        toaster.error(res.data.message)
                    }
                })
        },
    },
}
</script>
<style></style>