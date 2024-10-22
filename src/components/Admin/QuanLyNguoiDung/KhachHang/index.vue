<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-xl-2">
                            <button class="btn btn-primary mb-3 mb-lg-0"
                                data-bs-toggle="modal" data-bs-target="#taoPhongModal">
                                <i class="bx bxs-plus-square"></i>Tạo Mới Phòng
                            </button>
                        </div>
                    </div>
                    <div class="modal fade" id="taoPhongModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Tạo Mới Phòng Khách Sạn</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close">
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="mb-2"><label>Tên Phòng</label><input type="text"
                                            class="form-control mt-2"></div>
                                    <div class="mb-2"><label>Giá Mặc Định</label><input type="number"
                                            class="form-control mt-2"></div>
                                    <div class="mb-2"><label>Tình Trạng</label><select class="form-control">
                                            <option value="1">Đang Hoạt Động</option>
                                            <option value="0">Dừng Kinh Doanh</option>
                                        </select></div>
                                    <div class="mb-2"><label>Loại Phòng</label><select class="form-control">
                                            <option value="1">Phòng Standard</option>
                                            <option value="2">Phòng Superior</option>
                                            <option value="3">Phòng Deluxe</option>
                                            <option value="4">Phòng Suite</option>
                                            <option value="5">Phòng View Biển</option>
                                            <option value="6">Phòng VIP</option>
                                        </select></div>
                                    <div class="mb-2"><label>Tiện Ích Khác</label><textarea class="form-control"
                                            cols="30" rows="10"></textarea></div>
                                </div>
                                <div class="modal-footer"><button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button><button type="button"
                                        class="btn btn-primary">Thêm Mới</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>