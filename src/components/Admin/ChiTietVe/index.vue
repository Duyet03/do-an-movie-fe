<<<<<<< HEAD
<<<<<<<< HEAD:src/components/Admin/ChiTietVe/index.vue
<template >
    ggggggggggggggg
========
<template>
    <!-- them -->
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-xl-2">
                            <button class="btn btn-primary mb-3 mb-lg-0" data-bs-toggle="modal"
                                data-bs-target="#taoPhongModal">
                                <i class="bx bxs-plus-square"></i>Thêm đánh giá
                            </button>
                        </div>
                    </div>
                    <div class="modal fade" id="taoPhongModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                                        Tạo Mới Đánh Giá
                                    </h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="mb-2 mt-2">
                                                <label>Id đánh giá</label>
                                                <input v-model="danh_gia_create.id_danh_gia" type="text"
                                                    class="form-control mt-2" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mb-2 mt-2">
                                                <label>Id phim</label>
                                                <input v-model="danh_gia_create.id_phim" type="text"
                                                    class="form-control mt-2" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mb-2 mt-2">
                                                <label>Id khách hàng</label>
                                                <input v-model="danh_gia_create.id_khach_hang" type="integer"
                                                    class="form-control mt-2" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mb-2 mt-2">
                                                <label>Sao đánh giá</label>
                                                <input v-model="danh_gia_create.sao_danh_gia" type="integer"
                                                    class="form-control mt-2" />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="mb-2 mt-2">
                                                <label>Nội dung</label>
                                                <textarea v-model="danh_gia_create.noi_dung" type="text"
                                                    class="form-control mt-2" rows="3">
                                                </textarea>
=======
<template>
    <div class="container">
        <div class="card">
            <div class="card-body d-flex justify-content-between">
                <h3>Tạo chi tiết vé</h3>
                <button data-bs-toggle="modal" data-bs-target="#themmoi" style="width: 100px;" class="btn btn-primary">Tạo <i class="fa-solid fa-plus"></i></button>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th class="text-center align-middle">#</th>
                                <th class="text-center align-middle">Mã vé</th>
                                <th class="text-center align-middle">Tên khách hàng</th>
                                <th class="text-center align-middle">Dịch vụ</th>
                                <th class="text-center align-middle">Suất</th>
                                <th class="text-center align-middle">Ghế</th>
                                <th class="text-center align-middle">Mã hoá đơn</th>
                                <th class="text-center align-middle">Ghi chú</th>
                                <th class="text-center align-middle">Action</th>
                                <th class="text-center align-middle"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(v, k) in list_chi_tiet_ve" :key="k">
                                <tr>
                                    <th class="text-center align-middle">{{ k + 1 }}</th>
                                    <th class="text-center align-middle">{{ v.id_chi_tiet_ve }}</th>
                                    <td class="text-center align-middle">{{ v.id_khach_hang }}</td>
                                    <td class="text-center align-middle">{{ v.id_dich_vu }}</td>
                                    <td class="text-center align-middle">{{ v.id_suat }}</td>
                                    <td class="text-center align-middle">{{ v.id_ghe }}</td>
                                    <td class="text-center align-middle">{{ v.id_hoa_don }}</td>
                                    <td class="text-center align-middle"><i data-bs-toggle="modal" data-bs-target="#ghichu" class="fa-2x fa-solid fa-pen-to-square"></i>
                                    </td>
                                    <td class="text-center align-middle">
                                        <button v-on:click="Object.assign(chi_tiet_ve_update,v)" data-bs-toggle="modal" data-bs-target="#cap_nhat"
                                            class="btn btn-primary">Cập nhật</button>
                                        <button data-bs-toggle="modal" data-bs-target="#xoa"
                                            v-on:click="id_can_xoa = v.id" class="btn btn-danger ms-1">Xoá</button>
                                    </td>
                                    <td class="text-center align-middle">
                                        <button class="btn btn-info">In vé</button>
                                    </td>
                                </tr>
                                <!-- ghi chu -->
                                <div class="modal fade" id="ghichu" tabindex="-1"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Ghi chú</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                {{ v.ghi_chu }}
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
>>>>>>> tung
                                            </div>
                                        </div>
                                    </div>
                                </div>
<<<<<<< HEAD
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                        Close</button>
                                    <button v-on:click="themDanhGia()" type="button" data-bs-dismiss="modal"
                                        class="btn btn-primary">
                                        Thêm Mới
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
=======
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- cap nhat -->
        <div class="modal fade" id="cap_nhat" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Cập nhật hoá đơn</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <label for="">Mã chi tiết vé</label>
                        <input v-model="chi_tiet_ve_update.id_chi_tiet_ve" class="form-control mb-2" type="text">
                        <label for="">Mã khách hàng</label>
                        <input v-model="chi_tiet_ve_update.id_khach_hang" class="form-control mb-2" type="text">
                        <label for="">Dịch vụ</label>
                        <input v-model="chi_tiet_ve_update.id_dich_vu" class="form-control mb-2" type="text">
                        <label for="">Suất</label>
                        <input v-model="chi_tiet_ve_update.id_suat" class="form-control mb-2" type="text">
                        <label for="">Ghế</label>
                        <input v-model="chi_tiet_ve_update.id_ghe" class="form-control mb-2" type="text">
                        <label for="">Hoá đơn</label>
                        <input v-model="chi_tiet_ve_update.id_hoa_don" class="form-control mb-2" type="text">
                        <label for="">Ghi chú</label>
                        <textarea v-model="chi_tiet_ve_update.ghi_chu" class="form-control " name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button v-on:click="capNhat()" type="button" class="btn btn-primary"
                            data-bs-dismiss="modal">Cập
                            nhật</button>
                    </div>  
                </div>
            </div>
        </div>
        <!-- xoa -->
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
                        <button v-on:click="xoa()" type="button" class="btn btn-primary"
                            data-bs-dismiss="modal">Xoá</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- themmoi -->
        <div class="modal fade" id="themmoi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm mới hoá đơn</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <label for="">Mã chi tiết vé</label>
                        <input v-model="chi_tiet_ve_create.id_chi_tiet_ve" class="form-control mb-2" type="text">
                        <label for="">Mã khách hàng</label>
                        <input v-model="chi_tiet_ve_create.id_khach_hang" class="form-control mb-2" type="text">
                        <label for="">Dịch vụ</label>
                        <input v-model="chi_tiet_ve_create.id_dich_vu" class="form-control mb-2" type="text">
                        <label for="">Suất</label>
                        <input v-model="chi_tiet_ve_create.id_suat" class="form-control mb-2" type="text">
                        <label for="">Ghế</label>
                        <input v-model="chi_tiet_ve_create.id_ghe" class="form-control mb-2" type="text">
                        <label for="">Hoá đơn</label>
                        <input v-model="chi_tiet_ve_create.id_hoa_don" class="form-control mb-2" type="text">
                        <label for="">Ghi chú</label>
                        <textarea v-model="chi_tiet_ve_create.ghi_chu" class="form-control " name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button v-on:click="themMoi()" type="button" class="btn btn-primary"
                            data-bs-dismiss="modal">Thêm mới</button>
                    </div>
>>>>>>> tung
                </div>
            </div>
        </div>
    </div>
<<<<<<< HEAD
    <!-- table  -->
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2">Quản lý tài khoản khách hàng</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr class="text-center">
                                    <th>#</th>
                                    <th>Id đánh giá</th>
                                    <th>Id phim</th>
                                    <th>Id khách hàng</th>
                                    <th>Sao đánh giá</th>
                                    <th>Nội dung</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(v, k) in danh_sach_danh_gia" :key="k">
                                    <tr class="align-middle">
                                        <td>{{ k + 1 }}</td>
                                        <td>{{ v.id_danh_gia }}</td>
                                        <td>{{ v.id_phim }}</td>
                                        <td>{{ v.id_khach_hang }}</td>
                                        <td>{{ v.sao_danh_gia }}</td>
                                        <td>{{ v.noi_dung }}</td>
                                        <td class="text-center">
                                            <button v-on:click="Object.assign(danh_gia_update, v)" data-bs-toggle="modal" data-bs-target="#updateModal"
                                                class="btn btn-info">Cập nhật</button>
                                            <button v-on:click="id_can_xoa = v.id" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal" class="btn btn-danger ms-2">Xoá</button>
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
    <!-- update Modal -->
    <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập nhật đanh giá</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="mb-2 mt-2">
                                <label>Id đánh giá</label>
                                <input v-model="danh_gia_update.id_danh_gia" type="text" class="form-control mt-2" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2 mt-2">
                                <label>Id phim</label>
                                <input v-model="danh_gia_update.id_phim" type="text" class="form-control mt-2" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2 mt-2">
                                <label>Id khách hàng</label>
                                <input v-model="danh_gia_update.id_khach_hang" type="text"
                                    class="form-control mt-2" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2 mt-2">
                                <label>Sao đánh giá</label>
                                <input v-model="danh_gia_update.sao_danh_gia" type="text"
                                    class="form-control mt-2" />
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="mb-2 mt-2">
                                <label>Nội dung</label>
                                <textarea v-model="danh_gia_update.noi_dung" type="text" class="form-control mt-2"
                                    rows="5">
                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button v-on:click="capNhatDanhGia()" data-bs-dismiss="modal" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
    <!-- delete Modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xoá đánh giá</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        Bạn có thực sự muốn xoá!
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button v-on:click="xoaDanhGia()" type="button" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
>>>>>>>> tung:src/components/Admin/QuanLyPhanHoi/index.vue
</template>
<script>
import axios from "axios";
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
<<<<<<<< HEAD:src/components/Admin/ChiTietVe/index.vue
    
}
</script>
<style >
    
</style>
========
    data() {
        return {
            danh_sach_danh_gia: [],
            danh_gia_create: {},
            danh_gia_update: {},
            id_can_xoa: '',
        };
    },
    mounted() {
        this.layDanhGia();
    },
    methods: {
        layDanhGia() {
            axios
                .get("http://127.0.0.1:8000/api/danh-gia/data")
                .then((res) => {
                    this.danh_sach_danh_gia = res.data.data;
                    console.log(this.danh_sach_danh_gia);
                });
        },
        themDanhGia() {
            axios
                .post('http://127.0.0.1:8000/api/danh-gia/create', this.danh_gia_create)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDanhGia();
                    }
                });
        },
        xoaDanhGia() {
            axios
                .delete("http://127.0.0.1:8000/api/danh-gia/delete/" + this.id_can_xoa)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDanhGia();
                    }
                });
        },
        capNhatDanhGia() {
            axios
                .put("http://127.0.0.1:8000/api/danh-gia/update", this.danh_gia_update)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        // this.layDanhGia();
                        this.danh_gia_update = res.data.data;
                        console.log(this.danh_gia_update);
                    }
                });
        },
        doiTrangThai(xxx) {
            axios
                .put('http://127.0.0.1:8000/api/danh-gia/doi-trang-thai', xxx)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layKhachHang();
                    } else {
                        toaster.error(res.data.message)
                    }
                })
        },
    },
}
</script>
<style></style>
>>>>>>>> tung:src/components/Admin/QuanLyPhanHoi/index.vue
=======
</template>
<script>
import { createToaster } from "@meforma/vue-toaster";
import axios from "axios";
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            list_chi_tiet_ve: [],
            chi_tiet_ve_update: {},
            chi_tiet_ve_create: {},
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
            axios
                .get("http://127.0.0.1:8000/api/chi-tiet-ve/data")
                .then((res) => {
                    this.list_chi_tiet_ve = res.data.data;
                })
        },
        xoa() {
            axios
                .delete("http://127.0.0.1:8000/api/chi-tiet-ve/delete/" + this.id_can_xoa)
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
        capNhat() {
            axios
                .put("http://127.0.0.1:8000/api/chi-tiet-ve/update", this.chi_tiet_ve_update)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.loadData();
                    } else {
                        toaster.error(res.data.message)
                    }
                });
        },
        themMoi() {
            axios
                .post("http://127.0.0.1:8000/api/chi-tiet-ve/create", this.chi_tiet_ve_create)
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
>>>>>>> tung
