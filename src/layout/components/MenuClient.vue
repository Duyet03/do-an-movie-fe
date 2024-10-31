<template>
    <div style="height: 100px;background-color: white;border-bottom: 3px solid olivedrab;" class="text-center">
        <img style="height: 97px"
            src="https://media.lottecinemavn.com/Media/WebAdmin/ccc95ee5b9274a12ba3e51317250dcbe.png" alt="" />
    </div>
    <div class="nav primary-menu" style=" height: 40px">
        <nav class="navbar navbar-expand-xl w-100">
            <ul class="navbar-nav justify-content-center flex-grow-1 gap-1">
                <li class="nav-item">
                    <router-link to="/page1">
                        <a class="nav-link" href="/page1">
                            <div class="menu-title" style="font-size: 20px">
                                SHOP QUÀ TẶNG
                            </div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/page1">
                        <a class="nav-link" href="/page1">
                            <div class="menu-title" style="font-size: 20px">MUA VÉ</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/page1">
                        <a class="nav-link" href="/page1">
                            <div class="menu-title" style="font-size: 20px">PHIM</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/page1">
                        <a class="nav-link" href="/page1">
                            <div class="menu-title" style="font-size: 20px">
                                RẠP CHIẾU PHIM
                            </div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/page1">
                        <a class="nav-link" href="/page1">
                            <div class="menu-title" style="font-size: 20px">KHUYẾN MÃI</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/page1">
                        <a class="nav-link" href="/page1">
                            <div class="menu-title" style="font-size: 20px">LIÊN HỆ</div>
                        </a>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
    <div style="margin-top: 20px;">
        <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://media.lottecinemavn.com/Media/WebAdmin/c11aacf2c3b4446ba86c96e9e9be5b61.jpg"
                        class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://media.lottecinemavn.com/Media/WebAdmin/544c1477d2f0455dbb3f743075eafb8b.jpg"
                        class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://media.lottecinemavn.com/Media/WebAdmin/4e520019a0dc46969fb348d80d405a9c.jpg"
                        class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>
<script>
export default {

}
</script>

<style></style>