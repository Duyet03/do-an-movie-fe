<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-header">
                        <h5>Tạo nhà đầu tư</h5>
                    </div>
                    <div class="card-body">
                        <div class="mb-2">
                          <label>Họ tên</label>
                          <input v-model="them_nha_dau_tu.ten_nha_dau_tu" type="text" class="form-control mt-2" />
                        </div>
                        <div class="mb-2">
                          <label>Số cổ phiếu</label>
                          <input v-model="them_nha_dau_tu.so_luong_co_phieu" type="number" class="form-control mt-2" />
                        </div>
                        <div class="mb-2">
                          <label>Lợi nhuận hàng tháng</label>
                          <input v-model="them_nha_dau_tu.loi_nhuan_hang_thang" type="text" class="form-control mt-2" />
                        </div>
                        <div class="mb-2">
                          <label>Lợi nhuận đầu tư</label>
                          <input v-model="them_nha_dau_tu.loi_nhuan_dau_tu" type="text" class="form-control mt-2" />
                        </div>
                        <div class="mb-2">
                          <label>Tổng tài sản</label>
                          <input v-model="them_nha_dau_tu.tong_tai_san" type="text" class="form-control mt-2" />
                        </div>
                    </div>
                    <div class="card-footer text-end">
                        <button v-on:click="themLuongNV()" class="btn btn-info">Thêm lương</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="card">
              <div class="card-header">
                <h5>Danh sách bảng lương</h5>
              </div>
              <div class="card-body">
                <table class="table table-bordered">
                  <thead>
                        <th class="text-center align-middle">#</th>
                        <th class="text-center align-middle">Họ tên</th>
                        <th class="text-center align-middle">Lợi nhuận hàng tháng</th>
                        <th class="text-center align-middle">Lợi nhuận đầu tư</th>
                        <th class="text-center align-middle">Tổng tài sản</th>
                        <th class="text-center align-middle">Action</th>
                  </thead>
                  <tbody>
                        <template v-for="(value, index) in nha_dau_tu" :key="index">
                            <tr>
                                <td class="text-center align-middle">{{ index + 1 }}</td>
                                <td class="text-center align-middle">
                                {{ value.ten_nha_dau_tu }}
                                </td>
                                <td class="text-center align-middle">
                                {{ value.so_luong_co_phieu }}
                                </td>
                                <td class="text-center align-middle">
                                {{value.loi_nhuan_hang_thang}}
                                </td>
                                <td class="text-center align-middle">
                                {{ value.loi_nhuan_dau_tu }}
                                </td>
                                <td class="text-center align-middle">
                                {{ value.tong_tai_san }}
                                </td>
                                <td class="text-nowrap text-center">
                                <button class="btn btn-info me-2" data-bs-toggle="modal"
                                data-bs-target="#updateModal">Update</button>
                                <button
                                    class="btn btn-danger"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteModal">Delete
                                </button>
                                </td>
                            </tr>
                        </template>
                  </tbody>
                </table>
              </div>
            </div>
            </div>
        </div>
          <!-- model xoa -->
      <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Xóa nhân viên</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Bạn có chắc chắn muốn xóa chức vụ: này không?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button  type="button" class="btn btn-danger" data-bs-dismiss="modal">Xác
                            Nhận</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- model update-->
      <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Cập nhật nhân viên</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="card-body">
                        <div class="mb-2">
                          <label>Họ tên</label>
                          <input v-model="them_nha_dau_tu.ten_nha_dau_tu" type="text" class="form-control mt-2" />
                        </div>
                        <div class="mb-2">
                          <label>Số cổ phiếu</label>
                          <input v-model="them_nha_dau_tu.so_luong_co_phieu" type="number" class="form-control mt-2" />
                        </div>
                        <div class="mb-2">
                          <label>Lợi nhuận hàng tháng</label>
                          <input v-model="them_nha_dau_tu.loi_nhuan_hang_thang" type="text" class="form-control mt-2" />
                        </div>
                        <div class="mb-2">
                          <label>Lợi nhuận đầu tư</label>
                          <input v-model="them_nha_dau_tu.loi_nhuan_dau_tu" type="text" class="form-control mt-2" />
                        </div>
                        <div class="mb-2">
                          <label>Tổng tài sản</label>
                          <input v-model="them_nha_dau_tu.tong_tai_san" type="text" class="form-control mt-2" />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button  type="button" class="btn btn-danger" data-bs-dismiss="modal">Xác
                            Nhận</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </template>
    <script>
    export default {
        data() {
            return {
            them_nha_dau_tu: [
                    {
                        ten_nha_dau_tu : "",
                        so_luong_co_phieu:"",
                        loi_nhuan_hang_thang:"",
                        loi_nhuan_dau_tu:"",
                        tong_tai_san:""
                    }
                    ],
            nha_dau_tu : [
            {
                'ten_nha_dau_tu': 'Trần Văn Tùng',
                'so_luong_co_phieu': '1500',
                'loi_nhuan_hang_thang': '5000000',
                'loi_nhuan_dau_tu': '7%',
                'tong_tai_san': '75000000',
            },
            {
                'ten_nha_dau_tu': 'Phạm Thị Hoa',
                'so_luong_co_phieu': '2000',
                'loi_nhuan_hang_thang': '6000000',
                'loi_nhuan_dau_tu': '8%',
                'tong_tai_san': '90000000',
            },
            {
                'ten_nha_dau_tu': 'Nguyễn Văn Hải',
                'so_luong_co_phieu': '1200',
                'loi_nhuan_hang_thang': '4000000',
                'loi_nhuan_dau_tu': '6.5%',
                'tong_tai_san': '72000000',
            },
            {
                'ten_nha_dau_tu': 'Lê Thị Hương',
                'so_luong_co_phieu': '1800',
                'loi_nhuan_hang_thang': '5500000',
                'loi_nhuan_dau_tu': '7.5%',
                'tong_tai_san': '85000000',
            },
            {
                'ten_nha_dau_tu': 'Hoàng Văn Phúc',
                'so_luong_co_phieu': '1000',
                'loi_nhuan_hang_thang': '3500000',
                'loi_nhuan_dau_tu': '6%',
                'tong_tai_san': '70000000',
            },
        ]

            }
        },
        methods: {
            themLuongNV(){
                this.nha_dau_tu.push(this.them_nha_dau_tu);
            }    
        },
    }
    </script>
    <style>
        
    </style>