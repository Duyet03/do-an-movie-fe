<template>
<div class="container">
    <div class="row">
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    <h5>Tạo Nhân Viên</h5>
                </div>
                <div class="card-body">
                    <div class="mb-2">
                      <label>Họ tên</label>
                      <input v-model="themLuong.ten_nhan_vien" type="text" class="form-control mt-2" />
                    </div>
                    <div class="mb-2">
                      <label>Ngày công</label>
                      <input v-model="themLuong.so_ngay_cong" type="text" class="form-control mt-2" />
                    </div>
                    <div class="mb-2">
                      <label>Tiền thưởng</label>
                      <input v-model="themLuong.thuong" type="text" class="form-control mt-2" />
                    </div>
                    <div class="mb-2">
                      <label>Tiền phạt</label>
                      <input v-model="themLuong.phat" type="text" class="form-control mt-2" />
                    </div>
                    <div class="mb-2">
                      <label>Tổng lương</label>
                      <input v-model="themLuong.tong_luong" type="text" class="form-control mt-2" />
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
                    <th class="text-center align-middle">Ngày công</th>
                    <th class="text-center align-middle">Thưởng</th>
                    <th class="text-center align-middle">Phạt</th>
                    <th class="text-center align-middle">Tổng lương</th>
                    <th class="text-center align-middle">Action</th>
              </thead>
              <tbody>
                    <template v-for="(value, index) in luong" :key="index">
                        <tr>
                            <td class="text-center align-middle">{{ index + 1 }}</td>
                            <td class="text-center align-middle">
                            {{ value.ten_nhan_vien }}
                            </td>
                            <td class="text-center align-middle">
                            {{ value.so_ngay_cong }}
                            </td>
                            <td class="text-center align-middle">
                            {{value.thuong}}
                            </td>
                            <td class="text-center align-middle">
                            {{ value.phat }}
                            </td>
                            <td class="text-center align-middle">
                            {{ value.tong_luong }}
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
                      <input v-model="themLuong.ten_nhan_vien" type="text" class="form-control mt-2" />
                    </div>
                    <div class="mb-2">
                      <label>Ngày công</label>
                      <input v-model="themLuong.so_ngay_cong" type="text" class="form-control mt-2" />
                    </div>
                    <div class="mb-2">
                      <label>Tiền thưởng</label>
                      <input v-model="themLuong.thuong" type="text" class="form-control mt-2" />
                    </div>
                    <div class="mb-2">
                      <label>Tiền phạt</label>
                      <input v-model="themLuong.phat" type="text" class="form-control mt-2" />
                    </div>
                    <div class="mb-2">
                      <label>Tổng lương</label>
                      <input v-model="themLuong.tong_luong" type="text" class="form-control mt-2" />
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
            themLuong: [
                    {
                        ten_nhan_vien : "",
                        so_ngay_cong:"",
                        thuong:"",
                        phat:"",
                        tong_luong:""
                    }
                    ],
            luong : [
                {
                    'ten_nhan_vien': 'Trần Thị Mai',
                    'so_ngay_cong': '30',
                    'thuong': '600000',
                    'phat': '0',
                    'tong_luong': '25500000',
                },
                {
                    'ten_nhan_vien': 'Phạm Văn Minh',
                    'so_ngay_cong': '29',
                    'thuong': '500000',
                    'phat': '0',
                    'tong_luong': '23900000',
                },
                {
                    'ten_nhan_vien': 'Lê Văn Phong',
                    'so_ngay_cong': '27',
                    'thuong': '300000',
                    'phat': '100000',
                    'tong_luong': '21500000',
                },
                {
                    'ten_nhan_vien': 'Hoàng Thị Lan',
                    'so_ngay_cong': '26',
                    'thuong': '0',
                    'phat': '200000',
                    'tong_luong': '19800000',
                },
                {
                    'ten_nhan_vien': 'Ngô Văn Bình',
                    'so_ngay_cong': '22',
                    'thuong': '0',
                    'phat': '0',
                    'tong_luong': '18000000',
                },
            ]

        }
    },
    methods: {
        themLuongNV(){
            this.luong.push(this.themLuong);
        }    
    },
}
</script>
<style>
    
</style>