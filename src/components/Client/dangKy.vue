<template>
<div class="container-fluid">
        <div style="margin-top: 100px;" class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
            <div class="col mx-auto">
                <div class="card mt-5">
                    <div class="card-body">
                        <div class="border p-4 rounded">
                            <div class="text-center">
                                <h3 class="">Đăng Ký</h3>
                                <p>Bạn đã có tài khoản thì <router-link to="/login"><a href="/login">đăng nhập tại đây</a></router-link>
                                </p>
                            </div>
                            <div class="form-body">
                                <form class="row g-3">
                                    <div class="col-6">
                                        <label class="form-label">Họ Đệm</label>
                                        <input type="text" class="form-control">
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label">Tên Khách Hàng</label>
                                        <input type="text" class="form-control" >
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label">Địa Chỉ Email</label>
                                        <input type="email" class="form-control" >
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label">Số Điện Thoại</label>
                                        <input type="tel" class="form-control" >
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label">Ngày Sinh</label>
                                        <input type="date" class="form-control" >
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label">Mật Khẩu</label>
                                        <input type="password" class="form-control">
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label">Nhập Lại Mật Khẩu</label>
                                        <input type="password" class="form-control" >
                                    </div>
                                    <div class="col-12">
                                        <div class="d-grid">
                                            <button type="button" class="btn btn-primary" ><i
                                                    class="bx bxs-lock-open"></i>Đăng Ký</button>
                                        </div>
                                    </div>
                                </form>
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
<style>
    
</style>