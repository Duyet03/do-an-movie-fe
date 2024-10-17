<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-lg-3 col-xl-2">
                <button
                  class="btn btn-primary mb-3 mb-lg-0"
                  data-bs-toggle="modal"
                  data-bs-target="#taoPhongModal"
                >
                  <i class="bx bxs-plus-square"></i>Tạo Nhân Viên
                </button>
              </div>
            </div>
            <div
              class="modal fade"
              id="taoPhongModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Tạo Nhân Viên
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div class="mb-2">
                      <label>Id nhân viên</label>
                      <input v-model="themNV.nv_id" type="text" class="form-control mt-2" />
                    </div>
                    <div class="mb-2">
                      <label>Tên nhân viên</label>
                      <input v-model="themNV.full_name" type="text" class="form-control mt-2" />
                    </div>
                    <div class="mb-2">
                      <label>Tình Trạng</label>
                      <select v-model="themNV.status" class="form-control">
                        <option value="1">Còn làm việc</option>
                        <option value="0">Đã nghỉ việc</option>
                      </select>
                    </div>
                    <div class="mb-2">
                      <label>Địa chỉ</label>
                      <textarea v-model="themNV.dia_chi"
                        class="form-control"
                        cols="30"
                        rows="3"
                      ></textarea>
                    </div>
                    <div class="mb-2">
                      <label>Ghi chú</label>
                      <textarea v-model="themNV.ghi_chu"
                        class="form-control"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button v-on:click="themMoiNV()" type="button" class="btn btn-primary" data-bs-dismiss="modal">
                      Thêm Mới
                    </button>
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
            <h5>Danh sách nhân viên</h5>
          </div>
          <div class="card-body">
            <table class="table table-bordered">
              <thead>
                <th class="text-center align-middle">#</th>
                <th class="text-center align-middle">Id</th>
                <th class="text-center align-middle">Họ tên</th>
                <th class="text-center align-middle">Tình trạng</th>
                <th class="text-center align-middle">Địa chỉ</th>
                <th class="text-center align-middle">Ghi chú</th>
                <th class="text-center align-middle">Action</th>
              </thead>
              <tbody>
                <template v-for="(value, index) in students" :key="index">
                  <tr>
                    <td class="text-center align-middle">{{ index + 1 }}</td>
                    <td class="text-center align-middle">
                      {{ value.nv_id }}
                    </td>
                    <td class="text-center align-middle">
                      {{ value.full_name }}
                    </td>
                    <td class="text-center align-middle">
                      <button v-if="value.status == 1" class="btn btn-primary">
                        Còn làm việc
                      </button>
                      <button v-else class="btn btn-danger">
                        Đã nghỉ việc
                      </button>
                    </td>
                    <td class="text-center align-middle">
                      {{ value.ghi_chu }}
                    </td>
                    <td class="text-center align-middle">
                      {{ value.dia_chi }}
                    </td>
                    <td class="text-nowrap text-center">
                      <button class="btn btn-info me-2" data-bs-toggle="modal"
                      data-bs-target="#updateModal">Update</button>
                      <button
                        class="btn btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteModal"
                      >
                        Delete
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
                <div class="modal-body">
                    <div class="mb-2">
                      <label>Id nhân viên</label>
                      <input type="text" class="form-control mt-2" />
                    </div>
                    <div class="mb-2">
                      <label>Tên nhân viên</label>
                      <input type="number" class="form-control mt-2" />
                    </div>
                    <div class="mb-2">
                      <label>Tình Trạng</label>
                      <select class="form-control">
                        <option value="1">Còn làm việc</option>
                        <option value="0">Đã nghỉ việc</option>
                      </select>
                    </div>
                    <div class="mb-2">
                      <label>Địa chỉ</label>
                      <select class="form-control">
                        <template>
                          <option></option>
                        </template>
                      </select>
                    </div>
                    <div class="mb-2">
                      <label>Ghi chú</label>
                      <textarea
                        class="form-control"
                        cols="30"
                        rows="10"
                      ></textarea>
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
</template>
<script>
export default {
  el: "#app",
  data() {
    return {
        themNV: [
        {
            nv_id : "",
            full_name:"",
            status:"",
            ghi_chu:"",
            dia_chi:""
        }
        ],
      students: [
        {
          nv_id: "nv001",
          full_name: "Nguyen Van A",
          status: 1,
          ghi_chu: "null",
          dia_chi: "abc, da nang",
        },
        {
          nv_id: "nv002",
          full_name: "Le Thi B",
          status: 1,
          ghi_chu: "null",
          dia_chi: "abc, da nang",
        },
        {
          nv_id: "nv003",
          full_name: "Tran Van C",
          status: 0,
          ghi_chu: "null",
          dia_chi: "abc, da nang",
        },
        {
          nv_id: "nv004",
          full_name: "Pham Thi D",
          status: 1,
          ghi_chu: "null",
          dia_chi: "abc, da nang",
        },
        {
          nv_id: "nv005",
          full_name: "Hoang Van E",
          status: 0,
          ghi_chu: "null",
          dia_chi: "abc, da nang",
        },
        {
          nv_id: "nv006",
          full_name: "Vu Thi F",
          status: 1,
          ghi_chu: "null",
          dia_chi: "abc, da nang",
        },
        {
          nv_id: "nv007",
          full_name: "Dang Van G",
          status: 0,
          ghi_chu: "null",
          dia_chi: "abc, da nang",
        },
        {
          nv_id: "nv008",
          full_name: "Bui Thi H",
          status: 1,
          ghi_chu: "null",
          dia_chi: "abc, da nang",
        },
      ],
    };
  },
  methods: {
    themMoiNV(){
        this.students.push(this.themNV);
    }
  },
};
</script>
<style></style>
