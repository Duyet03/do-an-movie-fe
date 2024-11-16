<template>
     <div class="container">
        <div class="row">
         <div class="col-lg-3 col-md-12">
             <div class="card">
                 <div class="card-header">
                     <h6 class="mt-2">Thêm Ghế Mới</h6>
                 </div>
                 <div class="card-body">
                     <div class="mt-2">
                         <label for="" class="mb-2">Tên Ghế</label>
                         <input v-model="create_ghe.ten_ghe" type="text" class="form-control" />
                     </div>
                     <div class="mt-2">
                         <label for="" class="mb-2">Loại Ghế</label>
                         <select v-model="create_ghe.loai_ghe" class="form-control" >
                            <option value="1">Ghế thường</option>
                            <option value="0">Ghế đôi </option>
                         </select>
                         <!-- <input v-model="create_ghe.loai_ghe" type="text" class="form-control" /> -->
                     </div>
                     <div class="mt-2">
                         <label for="" class="mb-2">Tên Phòng</label>
                         <input v-model="create_ghe.id_phong" type="text" class="form-control" />
                     </div>
                     <div class="mt-2">
                         <label for="" class="mb-2">Tình trạng ghế</label>
                         <select v-model="create_ghe.trang_thai" class="form-control">
                             <option value="1">Hoạt Động</option>
                             <option value="0">Đang Bảo Trì</option>
                         </select>
                     </div>
                 </div>
                 <div class="card-footer">
                     <div class="text-end">
                         <button v-on:click="themMoiGhe()" class="btn btn-primary ">
                             Thêm Mới
                         </button>
                     </div>
                 </div>
             </div>
         </div>
         <div class="col-lg-9 col-md-12">
             <div class="card">
                 <div class="card-header">
                     <h5 class="mt-2">Danh Sách Ghế Rạp Chiếu Phim</h5>
                     <div class="input-group mt-3 w-100">
                         <input type="text" class="form-control search-control border border-3 border-secondary"
                             placeholder="Search..." />
                         <span class="position-absolute top-50 search-show translate-middle-y" style="left: 15px"><i
                                 class="bx bx-search"></i></span>
                         <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                             Tìm Kiếm
                         </button>
                     </div>
                 </div>
                 <div class="card-body">
                     <div class="table-responsive">
                         <table class="table table-bordered">
                             <thead class="text-center">
                                 <tr>
                                     <th>#</th>
                                     <th>Tên Ghế</th>
                                     <th>Loại Ghế</th>
                                     <th>Tên Phòng</th>
                                     <th>Tình Trạng</th>
                                     <th>Action</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 <tr v-for="(v, k) in listGhe" :key="k">
                                     <th class="text-center align-middle">{{ k + 1 }}</th>
                                     <td class="text-center align-middle">{{ v.ten_ghe }}</td>
                                     <td class="text-center align-middle">
                                        <button v-if="v.loai_ghe == 1" class="btn btn-light bg-dark  text-warning p-1 w-80" >Ghế thường</button>
                                        <button v-else class="btn btn-light bg-dark  text-warning p-1 w-80">Ghế Đôi</button>
                                        <!-- {{ v.loai_ghe }} -->
                                    </td>
                                     <td class="text-center align-middle">
                                         {{ v.id_phong }}
                                     </td>
                                     <td class="align-middle text-center">
                                         <button v-if="v.trang_thai == 1" class="btn btn-danger w-60">
                                             Hoạt Động
                                         </button>
                                         <button v-else class="btn btn-primary w-60">
                                             Bảo Trì
                                         </button>
                                     </td>
                                     <td>
                                     <div class="text-center align-middke">
                                             <div v-on:click="Object.assign(update_ghe, v)" data-bs-toggle="modal"
                                                 data-bs-target="#capnhapgheModal" class="btn btn-success">
                                                 Cập Nhập
                                             </div>
                                             <div v-on:click="delete_ghe = v.id" data-bs-toggle="modal"
                                                 data-bs-target="#xoagheModal" class="btn btn-danger">
                                                 Xóa Ghế
                                             </div>
                                         </div>
                                     </td>
                                 </tr>
                             </tbody>
                         </table>
                     </div>
                     <!-- CẬP NHẬP GHẾ -->
                     <div class="modal fade" id="capnhapgheModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                         aria-hidden="true">
                         <div class="modal-dialog">
                             <div class="modal-content">
                                 <div class="modal-header">
                                     <h1 class="modal-title fs-5" id="exampleModalLabel">
                                         Cập nhập ghế
                                     </h1>
                                     <button type="button" class="btn-close" data-bs-dismiss="modal"
                                         aria-label="Close"></button>
                                 </div>
                                 <div class="modal-body">
                                     <div class="mt-2 mb-2">
                                         <label for="">Tên Ghế</label>
                                         <input v-model="update_ghe.ten_ghe" class="form-control mt-2 mb-2" type="text"
                                             name="" id="" />
                                         <!-- <label for="">Loại Ghế</label>
                                         <input v-model="update_ghe.loai_ghe" class="form-control mt-2 mb-2" type="text"
                                             name="" id="" /> -->
                                        <div class="class">
                                        <label for="" class="mb-2">Loại Ghế</label>
                                        <select v-model="update_ghe.loai_ghe" class="form-control" >
                                            <option value="1">Ghế thường</option>
                                            <option value="0">Ghế đôi </option>
                                        </select>
                                        </div>
                                         <label for="">Tên Phòng</label>
                                         <input v-model="update_ghe.id_phong" class="form-control mt-2 mb-2" type="text"
                                             name="" id="" />
                                         <div class="mt-2 mb-2">
                                             <label for="">Tình Trạng</label>
                                             <select v-model="update_ghe.trang_thai" class="form-control">
                                                 <option value="0">Bảo Trì </option>
                                                 <option value="1">Hoạt Động</option>
                                             </select>
                                         </div>
                                     </div>
                                 </div>
                                 <div class="modal-footer">
                                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                         Close
                                     </button>
                                     <button v-on:click="capNhapGhe()" type="button" class="btn btn-primary">
                                         Xác Nhận
                                     </button>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <!-- Model xóa ghế -->
                     <div class="modal fade" id="xoagheModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                         aria-hidden="true">
                         <div class="modal-dialog">
                             <div class="modal-content">
                                 <div class="modal-header">
                                     <h1 class="modal-title fs-5" id="exampleModalLabel">
                                         Xóa Ghế
                                     </h1>
                                     <button type="button" class="btn-close" data-bs-dismiss="modal"
                                         aria-label="Close"></button>
                                 </div>
                                 <div class="modal-body">
                                     <div class="alert alert-danger" role="alert">
                                         Bạn thật sự có muốn xoá ghế này không?
                                     </div>
                                 </div>
                                 <div class="modal-footer">
                                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                         Close
                                     </button>
                                     <button v-on:click="xoaGhe()" type="button" data-bs-dismiss="modal" class="btn btn-danger">
                                         Xóa
                                     </button>
                                 </div>
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
 import axios from "axios";
 import { createToaster } from "@meforma/vue-toaster";
 const toaster = createToaster({ position: "top-right" });
 export default {
     data() {
         return {
             listGhe: [],
             create_ghe: {},
             update_ghe: {},
             delete_ghe: "",
         };
     },
     mounted() {
         this.layDuLieuGhe();
     },
     methods: {
         layDuLieuGhe() {
             axios.get("http://127.0.0.1:8000/api/ghe/data").then((res) => {
                 this.listGhe = res.data.data;
             });
         },
         themMoiGhe() {
             axios
                 .post("http://127.0.0.1:8000/api/ghe/create", this.create_ghe)
                 .then((res) => {
                     if (res.data.status) {
                         toaster.success("Thông báo<br>" + res.data.message);
                         this.layDuLieuGhe();
                         this.create_ghe = {};
                         console.log(this.create_ghe);
                     }
                 });
         },
         capNhapGhe() {
             axios
                 .put("http://127.0.0.1:8000/api/ghe/update", this.update_ghe)
                 .then((res) => {
                     if (res.data.status) {
                         toaster.success("Thông báo<br>" + res.data.message);
                         this.layDuLieuGhe();
                     } else {
                         toaster.error("Thông báo<br>" + res.data.message);
                     }
                 });
         },
         xoaGhe() {
         axios
             .delete("http://127.0.0.1:8000/api/ghe/delete/" + this.delete_ghe)
             .then((res) => {
                 if (res.data.status == true) {
                     toaster.success(res.data.message);
                     this.layDuLieuGhe();
                 }
             });
         },
     },
     
 };
 </script>
 <style></style>