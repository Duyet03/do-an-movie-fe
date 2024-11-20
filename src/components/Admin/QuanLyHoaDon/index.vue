
<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h1>Tạo hoá đơn</h1>
                    </div>
                    <div class="card-body">
                        <label>Mã hoá đơn</label>
                        <input v-model="hoa_don_create.id_hoa_don" class="form-control mb-2" type="text">
                        <label>Tên khách hàng</label>
                        <input v-model="hoa_don_create.id_khach_hang" class="form-control mb-2" type="text">
                        <label>Tổng Tiền</label>
                        <input v-model="hoa_don_create.tong_tien" class="form-control mb-2" type="text">
                        <label>Nhân viên tạo đơn</label>
                        <input v-model="hoa_don_create.id_nhan_vien" class="form-control mb-2" type="text">
                        <label>Tình trạng</label>
                        <select v-model="hoa_don_create.is_thanh_toan" class="form-control mb-2">
                            <option value="0">Chưa thanh toán</option>
                            <option value="1">Đã thanh toán</option>
                        </select>
                    </div>
                    <div class="card-footer text-end">
                        <button v-on:click="themMoiHoaDon()" style="width: 100px;"
                            class="btn btn-outline-primary">Tạo</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-8 col-md-12">
                <div class="card">
                    <div class="card-header">
                        Danh sách hoá đơn
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th class="text-center align-middle">#</th>
                                        <th class="text-center align-middle">Mã hoá đơn</th>
                                        <th class="text-center align-middle">Tên khách hàng</th>
                                        <th class="text-center align-middle">Tổng tiền</th>
                                        <th class="text-center align-middle">Nhân viên</th>
                                        <th class="text-center align-middle">Tình trạng</th>
                                        <th class="text-center align-middle">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="(v, k) in list_hoa_don" :key="k">
                                        <tr>
                                            <th class="text-center align-middle">{{ k + 1 }}</th>
                                            <td class="text-center align-middle">{{ v.id_hoa_don }}</td>
                                            <td class="text-center align-middle">{{ v.id_khach_hang }}</td>
                                            <td class="text-center align-middle">{{ v.id_nhan_vien }}</td>
                                            <td class="text-center align-middle">{{ v.tong_tien }}</td>
                                            <td class="text-center align-middle">
                                                <button v-if="v.is_thanh_toan == 1" class="btn btn-success">Đã thanh
                                                    toán</button>
                                                <button v-else class="btn btn-warning">Chưa thanh toán</button>
                                            </td>
                                            <td class="text-center align-middle text-nowrap">
                                                <button v-on:click="Object.assign(hoa_don_update, v)"
                                                    class="btn btn-primary" data-bs-toggle="modal"
                                                    data-bs-target="#cap_nhat">Cập nhật</button>
                                                <button v-on:click="id_can_xoa = v.id" class="btn btn-danger ms-1"
                                                    data-bs-toggle="modal" data-bs-target="#xoa">Xoá</button>
                                            </td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal cap nhat -->
        <div class="modal fade" id="cap_nhat" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Cập nhật hoá đơn</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <label>Mã hoá đơn</label>
                        <input v-model="hoa_don_update.id_hoa_don" class="form-control mb-2" type="text">
                        <label>Tên khách hàng</label>
                        <input v-model="hoa_don_update.id_khach_hang" class="form-control mb-2" type="text">
                        <label>Tổng Tiền</label>
                        <input v-model="hoa_don_update.tong_tien" class="form-control mb-2" type="text">
                        <label>Nhân viên tạo đơn</label>
                        <input v-model="hoa_don_update.id_nhan_vien" class="form-control mb-2" type="text">
                        <label>Tình trạng</label>
                        <select v-model="hoa_don_update.is_thanh_toan" class="form-control mb-2">
                            <option value="0">Chưa thanh toán</option>
                            <option value="1">Đã thanh toán</option>
                        </select>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button v-on:click="capNhatHoaDon()" type="button" class="btn btn-primary"
                            data-bs-dismiss="modal">Cập
                            nhật</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal xoa -->
        <div class="modal fade" id="xoa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Xoá hoá đơn</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-danger" role="alert">
                            bạn có chắc muốn xoá!!!
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button v-on:click="xoaHoaDon()" type="button" class="btn btn-primary"
                            data-bs-dismiss="modal">Xoá</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { createToaster } from "@meforma/vue-toaster";
import axios from "axios";
const toaster = createToaster({ position: "top-right" });
import baseRequest from '../../../core/baseRequest';
export default {
    data() {
        return {
            list_hoa_don: [],
            hoa_don_update: {},
            hoa_don_create: {},
            id_can_xoa: '',
        }
    },
    mounted() {
        this.loadData()
    },
    methods: {
        formatVND(number) {
            return new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(number);
        },
        loadData() {
            baseRequest
                .get("hoa-don/data")
                .then((res) => {
                    this.list_hoa_don = res.data.hoa_don;
                })
        },
        xoaHoaDon() {
            baseRequest
                .delete("hoa-don/delete/" + this.id_can_xoa)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.loadData();
                        console.log(this.id_can_xoa);

                    } else {
                        toaster.error(res.data.message);
                        console.log(this.id_can_xoa);
                    }
                });
        },
        capNhatHoaDon() {
            baseRequest
                .put("hoa-don/update", this.hoa_don_update)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.loadData();
                    } else {
                        toaster.error(res.data.message)
                    }
                });
        },
        themMoiHoaDon() {
            baseRequest
                .post("hoa-don/create", this.hoa_don_create)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.loadData();
                    } else {
                        toaster.error(res.data.message)
                    }
                });
        },

    },
}
</script>

<style></style>