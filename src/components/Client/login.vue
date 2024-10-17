<template>
    <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3 mt-5">
        <div class="col mx-auto">
            <div class="card mt-5">
                <div class="card-body">
                    <div class="border p-4 rounded">
                        <div class="text-center">
                            <h3 class="">Sign in</h3>
                            <router-link to="/dang-ky">
                                <p>Don't have an account yet? <a href="dang-ky">Sign up here</a>
                                </p>
                            </router-link>
                        </div>
                        <div class="form-body">
                            <form class="row g-3">
                                <div class="col-12">
                                    <label class="form-label">Email Address</label>
                                    <input type="email" class="form-control"
                                        id="inputEmailAddress" placeholder="Email Address">
                                </div>
                                <div class="col-12">
                                    <label for="inputChoosePassword" class="form-label">Enter Password</label>
                                    <input  type="password" class="form-control border-end-0"
                                        placeholder="Enter Password">
                                </div>
                                <div class="col-md-6">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked"
                                            checked>
                                        <label class="form-check-label" for="flexSwitchCheckChecked">Remember Me</label>
                                    </div>
                                </div>
                                <div class="col-md-6 text-end">
                                    <router-link to="/quen-mat-khau">
                                        <a href="/quen-mat-khau">Forgot
                                            Password ?</a>
                                    </router-link>
                                </div>
                                <div class="col-12">
                                    <router-link to="/home-page">
                                    <div class="d-grid">
                                        
                                            <button type="button" class="btn btn-primary"><i
                                                class="bx bxs-lock-open"></i>Sign in</button>
                                        
                                    </div>
                                </router-link>
                                </div>
                            </form>
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