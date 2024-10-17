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
                  <i class="bx bxs-plus-square"></i>Tạo kế hoạch
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
                      Tạo kế hoạch
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
                      <label>Tên kế hoạch</label>
                      <input
                        v-model="them_ke_hoach.ten_ke_hoach"
                        type="text"
                        class="form-control mt-2"
                      />
                    </div>
                    <div class="mb-2">
                      <label>Trưởng phòng</label>
                      <input
                        v-model="them_ke_hoach.nguoi_chiu_trach_nhiem"
                        type="text"
                        class="form-control mt-2"
                      />
                    </div>
                    <div class="mb-2">
                      <label>Thời gian bắt đầu</label>
                      <input
                        v-model="them_ke_hoach.thoi_gian_bat_dau"
                        type="date"
                        class="form-control mt-2"
                      />
                    </div>
                    <div class="mb-2">
                      <label>Thời gian kết thức</label>
                      <input
                        v-model="them_ke_hoach.thoi_gian_ket_thuc"
                        type="date"
                        class="form-control mt-2"
                      />
                    </div>
                    <div class="mb-2">
                      <label>Trạng thái</label>
                      <select
                        v-model="them_ke_hoach.trang_thai"
                        class="form-control"
                      >
                        <option value="1">Còn hoạt động</option>
                        <option value="0">Đã tạm dừng</option>
                      </select>
                    </div>
                    <div class="mb-2">
                      <label>Mục tiêu</label>
                      <input
                        v-model="them_ke_hoach.muc_tieu"
                        type="text"
                        class="form-control mt-2"
                      />
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
                <th class="text-center align-middle">Tên kế hoạch</th>
                <th class="text-center align-middle">Trưởng phòng</th>
                <th class="text-center align-middle">Thời gian bắt đầu</th>
                <th class="text-center align-middle">Thời gian kết thúc</th>
                <th class="text-center align-middle">Mục tiêu</th>
                <th class="text-center align-middle">Trạng thái</th>
                <th class="text-center align-middle">Action</th>
              </thead>
              <tbody>
                <template v-for="(value, index) in ke_hoach" :key="index">
                  <tr>
                    <td class="text-center align-middle">{{ index + 1 }}</td>
                    <td class="text-center align-middle">
                      {{ value.ten_ke_hoach }}
                    </td>
                    <td class="text-center align-middle">
                      {{ value.nguoi_chiu_trach_nhiem }}
                    </td>
                    <td class="text-center align-middle">
                      {{ value.thoi_gian_bat_dau }}
                    </td>
                    <td class="text-center align-middle">
                      {{ value.thoi_gian_ket_thuc }}
                    </td>
                    <td class="text-center align-middle">
                      {{ value.muc_tieu }}
                    </td>
                    <td class="text-center text-nowrap">
                      <button
                        v-if="value.trang_thai == 1"
                        class="btn btn-primary"
                      >
                        Còn hoạt động
                      </button>
                      <button v-else class="btn btn-danger">Đã tạm dừng</button>
                    </td>
                    <td class="text-nowrap text-center align-middle">
                      <button
                        class="btn btn-info me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#updateModal"
                      >
                        Update
                      </button>
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
  <div
    class="modal fade"
    id="deleteModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Xóa nhân viên</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Bạn có chắc chắn muốn xóa chức vụ: này không?
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Đóng
          </button>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
            Xác Nhận
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- model update-->
  <div
    class="modal fade"
    id="updateModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Cập nhật nhân viên</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-2">
            <label>Tên kế hoạch</label>
            <input
              v-model="them_ke_hoach.ten_ke_hoach"
              type="text"
              class="form-control mt-2"
            />
          </div>
          <div class="mb-2">
            <label>Trưởng phòng</label>
            <input
              v-model="them_ke_hoach.nguoi_chiu_trach_nhiem"
              type="text"
              class="form-control mt-2"
            />
          </div>
          <div class="mb-2">
            <label>Thời gian bắt đầu</label>
            <input
              v-model="them_ke_hoach.thoi_gian_bat_dau"
              type="date"
              class="form-control mt-2"
            />
          </div>
          <div class="mb-2">
            <label>Thời gian kết thức</label>
            <input
              v-model="them_ke_hoach.thoi_gian_ket_thuc"
              type="date"
              class="form-control mt-2"
            />
          </div>
          <div class="mb-2">
            <label>Trạng thái</label>
            <select v-model="them_ke_hoach.trang_thai" class="form-control">
              <option value="1">Còn hoạt động</option>
              <option value="0">Đã tạm dừng</option>
            </select>
          </div>
          <div class="mb-2">
            <label>Mục tiêu</label>
            <input
              v-model="them_ke_hoach.muc_tieu"
              type="text"
              class="form-control mt-2"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Đóng
          </button>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
            Xác Nhận
          </button>
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
      them_ke_hoach: [
        {
          ten_ke_hoach: "",
          nguoi_chiu_trach_nhiem: "",
          thoi_gian_bat_dau: "",
          thoi_gian_ket_thuc: "",
          trang_thai: "",
          muc_tieu: "",
        },
      ],
      ke_hoach: [
        {
          ten_ke_hoach: "Phát triển sản phẩm mới",
          nguoi_chiu_trach_nhiem: "Trần Thị Mai",
          thoi_gian_bat_dau: "2024-01-10",
          thoi_gian_ket_thuc: "2024-05-30",
          trang_thai: 1,
          muc_tieu: "Tạo ra sản phẩm mới đáp ứng thị trường",
        },
        {
          ten_ke_hoach: "Tăng trưởng thị phần",
          nguoi_chiu_trach_nhiem: "Phạm Văn Minh",
          thoi_gian_bat_dau: "2024-03-01",
          thoi_gian_ket_thuc: "2024-09-15",
          trang_thai: 0,
          muc_tieu: "Mở rộng thị phần lên 20%",
        },
        {
          ten_ke_hoach: "Đào tạo nhân viên mới",
          nguoi_chiu_trach_nhiem: "Lê Văn Phong",
          thoi_gian_bat_dau: "2024-02-15",
          thoi_gian_ket_thuc: "2024-04-15",
          trang_thai: 1,
          muc_tieu: "Đào tạo và phát triển kỹ năng cho 50 nhân viên mới",
        },
        {
          ten_ke_hoach: "Tối ưu hóa quy trình sản xuất",
          nguoi_chiu_trach_nhiem: "Hoàng Thị Lan",
          thoi_gian_bat_dau: "2024-01-01",
          thoi_gian_ket_thuc: "2024-06-30",
          trang_thai: 1,
          muc_tieu: "Giảm thiểu chi phí sản xuất 15%",
        },
        {
          ten_ke_hoach: "Quản lý tài chính",
          nguoi_chiu_trach_nhiem: "Ngô Văn Bình",
          thoi_gian_bat_dau: "2024-04-01",
          thoi_gian_ket_thuc: "2024-12-31",
          trang_thai: 0,
          muc_tieu: "Tối ưu hóa chi phí hoạt động công ty",
        },
      ],
    };
  },
  methods: {
    themMoiNV(){
        this.ke_hoach.push(this.them_ke_hoach);
    }
  },
};
</script>
  <style></style>
  