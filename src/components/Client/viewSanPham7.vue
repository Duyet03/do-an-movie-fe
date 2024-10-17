<template>
    <div style="height: 100px;background-color: white;border-bottom: 3px solid olivedrab;" class="text-center">
        <img style="height: 97px"
            src="https://media.lottecinemavn.com/Media/WebAdmin/ccc95ee5b9274a12ba3e51317250dcbe.png" alt="" />
    </div>
    <div class="nav primary-menu " style=" height: 40px">
        <nav class="navbar navbar-expand-xl w-100 ">
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
    <template v-for="(value, index) in list_phim" :key="index">
        <div style="margin-top: 20px;">
            <div class="row ">
                <div class="col-lg-1 mt-2 mb-2"></div>
                <div class="col-lg-10 text-center mt-2 mb-2 ">
                    <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img :src="value.slide2" class="d-block w-100" style="height:600px;" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img :src="value.slide3" class="d-block w-100" style="height:600px;" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img :src="value.slide1" class="d-block w-100" style="height:600px;" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <!-- <img :src="value.slide1" style="width: 100%;height: 600px;" alt=""> -->
                </div>
                <div class="col-lg-1 mt-2 mb-2"></div>
            </div>
        </div>
        <div class="container">
            
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row mt-2">
                                <div class="col-lg-3">
                                    <img :src="value.slide1" class="img-fluid" alt="">
                                </div>
                                <div class="col-lg-3">
                                    <img :src="value.slide2" class="img-fluid" alt="">
                                </div>
                                <div class="col-lg-3">
                                    <img :src="value.slide3" class="img-fluid" alt="">
                                </div>
                                <div class="col-lg-3">
                                    <img :src="value.slide4" class="img-fluid" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row mt-2">
                                <div class="col-lg-3">
                                    <img :src="value.slide1" class="img-fluid" alt="">
                                </div>
                                <div class="col-lg-3">
                                    <img :src="value.slide2" class="img-fluid" alt="">
                                </div>
                                <div class="col-lg-3">
                                    <img :src="value.slide3" class="img-fluid" alt="">
                                </div>
                                <div class="col-lg-3">
                                    <img :src="value.slide4" class="img-fluid" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row mt-2">
                                <div class="col-lg-3">
                                    <img :src="value.slide1" class="img-fluid" alt="">
                                </div>
                                <div class="col-lg-3">
                                    <img :src="value.slide2" class="img-fluid" alt="">
                                </div>
                                <div class="col-lg-3">
                                    <img :src="value.slide3" class="img-fluid" alt="">
                                </div>
                                <div class="col-lg-3">
                                    <img :src="value.slide4" class="img-fluid" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            <div class="card mb-3 mt-3">
                <div class="row g-0">
                    <div class="col-md-3">
                        <div class="card-header">
                            <img :src="value.img"
                                class="img-fluid rounded-start" alt="..." style="width: 300px; height: 400px;">
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="card-body">
                            <h5 class="card-title" style="font-size: 30px;"><b>NAME : </b>{{ value.name }} </h5>
                            <p class="card-text"><b>RANK : </b>{{ value.xep_hang }}</p>
                            <p class="card-text"><b>NGÀY : </b>{{ value.ngay }}</p>
                            <p class="card-text"><b>THỂ LOẠI : </b>{{ value.loai }}</p>
                            <h6 class="card-title"><b>TÓM TẮT : </b></h6>
                            <p class="card-text"> {{ value.tom_tat }}</p>                           
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="card-footer mt-2 mb-2 text-end">
                            <button class="btn btn-danger ">Đặt vé ngay</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 ">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="ms-3 mt-2"><p>XẾP HẠNG VÀ ĐÁNH GIÁ</p></h5>
                        </div>
                        <div class="card-body">
                            <textarea class="form-control" placeholder="Bạn có thể đánh giá sau khi đăng nhập..." name="" id="" rows="5"></textarea>
                        </div>
                        <div class="card-footer text-end">
                            <button class="btn btn-danger">Đánh giá ngay</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 ">
                    <div class="card">
                        <div class="card-header">
                            <h5 class=" mt-2"><p>LỊCH SỬ ĐÁNH GIÁ</p></h5>
                        </div>
                        <div class="card-body">
                            <p class="card-title"><b>Đỗ Văn Đại : </b></p>
                            <p class="card-text">{{ value.danh_gia1 }}</p>
                            <p class="card-title"><b>Trần Văn Duyệt : </b></p>
                            <p class="card-text">{{ value.danh_gia2 }}</p>
                            <p class="card-title"><b>Nguyễn Quang Hùng : </b></p>
                            <p class="card-text">{{ value.danh_gia3 }}</p>
                        </div>
                        <div class="card-footer text-center">
                            <a class="mt-2" href=""><h5><p>Xem thêm đánh giá</p></h5></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slide">
            <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://media.lottecinemavn.com/Media/WebAdmin/ebd47d1784f74d6a9cb933c48efed53a.jpg"
                            class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://media.lottecinemavn.com/Media/WebAdmin/ecf8ee277eb24ee8a409d31eb5a856c7.jpg"
                            class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://media.lottecinemavn.com/Media/WebAdmin/ecf8ee277eb24ee8a409d31eb5a856c7.jpg"
                            class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div class="footer " style="background-color: w;">
            <img style="height: 70px;width: 500px;" alt="Lotte Cinema Logo"
                src="https://media.lottecinemavn.com/Media/WebAdmin/ccc95ee5b9274a12ba3e51317250dcbe.png" />
            <p class="mt-2">
                <a  href="#">
                    Chính Sách Khách Hàng Thường Xuyên
                </a>
                |
                <a href="#">
                    Chính Sách Bảo Mật Thông Tin
                </a>
                |
                <a href="#">
                    Điều Khoản Sử Dụng
                </a>
            </p>
            <p>
                CÔNG TY TNHH LOTTE CINEMA VIỆT NAM
            </p>
            <p>
                Giấy CNĐKDN: 0302575928, đăng ký lần đầu ngày 02/05/2008, đăng ký thay đổi lần thứ 10 ngày
                30/03/2018, cấp
                bởi Sở KHĐT Thành phố Hồ Chí Minh
            </p>
            <p>
                Địa chỉ: Tầng 3, TTTM Lotte, số 469 đường Nguyễn Hữu Thọ, Phường Tân Hưng, Quận 7, TPHCM, Việt Nam
            </p>
            <p>
                Hotline: (028) 3775 2524
            </p>
            <p>
                COPYRIGHT @ LOTTECINEMAVN.COM - ALL RIGHTS RESERVED.
            </p>
        </div>
        </div>
    </template>

</template>
<script>
export default {
    data() {
        return {
            list_phim: [
                // {
                //     img: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202409/11559_103_100001.jpg",
                //     name: "JUNG KOOK: I AM STILL",
                //     ngay: "16/10/2024",
                //     tinh_trang: "chưa mở",
                //     slide1: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202409/11559_105_100001.jpg",
                //     slide2: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202409/11559_105_100001.jpg",
                //     slide3: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202409/11559_105_100001.jpg",
                //     xep_hang: "8.5/10",
                //     thoi_gian: "111 phút",
                //     loai: "2D | Normal | Normal sound | Phụ đề",
                //     tom_tat: "Tôi chỉ đi theo kim chỉ nam của riêng mình.” BTS Jung Kook - thành viên của nhóm nhạc đạt danh hiệu 'Nghệ sĩ nhạc Pop thế kỷ 21' - đã trở thành ngôi sao toàn cầu với solo single đầu tay 'Seven’ ra mắt vào 07/2023. Liên tục đạt được thành công vang dội, Jung Kook trở thành nghệ sĩ solo châu Á đầu tiên ẵm gọn vị trí số 1 với bài hát debut trên ba bảng xếp hạng toàn cầu lớn - Billboard HOT 100, Global 200 và Global 200 trừ Mỹ - ngay sau khi phát hành. Các đĩa đơn 'Seven', '3D' và 'Standing Next to You' của anh đều lọt vào top 10 của Billboard HOT 100, giúp anh trở thành nghệ sĩ solo K-pop duy nhất đạt được thành tích này. Album 'GOLDEN' cũng đã tạo nên lịch sử khi trụ vững trên Billboard 200 24 tuần liên tiếp. Qua các cuộc phỏng vấn độc quyền, cảnh quay hậu trường chưa từng công bố, cùng với các sân khấu đầy phấn khích, bộ phim giới thiệu hành trình kéo dài tám tháng của Jung Kook, ghi lại sự cống hiến và trưởng thành không ngừng nghỉ của anh út. Hãy cùng Jung Kook chia sẻ về sự nổi tiếng đáng kinh ngạc và những khoảnh khắc chân thành với ARMY trên toàn thế giới trong 'JUNG KOOK: I AM STILL",
                // },
                // {
                //     img: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11567_103_100006.jpg",
                //     name: "TEE YOD: QUỶ ĂN TẠNG PHẦN 2",
                //     ngay: "10/10/2024",
                //     tinh_trang: "chưa mở",
                //     slide1: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11567_105_100006.jpg",
                //     slide2: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11567_105_100007.png",
                //     slide3: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11567_105_100009.jpg",
                //     slide4: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11567_105_100010.jpg",
                //     xep_hang: "8.5/10",
                //     thoi_gian: "111 phút",
                //     loai: "2D | Normal | Normal sound | Phụ đề",
                //     tom_tat: "Ba năm sau cái chết của Yam, Yak vẫn tiếp tục săn lùng linh hồn bí ẩn mặc áo choàng đen. Gặp một cô gái có triệu chứng giống Yam, Yak phát hiện ra người bảo vệ linh hồn, pháp sư ẩn dật Puang, sống trong một khu rừng đầy nguy hiểm. Giữa những phép thuật ma quỷ và những sinh vật nguy hiểm. Khi họ đuổi theo linh hồn mặc áo choàng đen, tiếng kêu đầy ám ảnh của Tee Yod sắp quay trở lại một lần nữa...",
                //     danh_gia1 : "Quỷ Ăn Tạng thực sự là một bộ phim kinh dị độc đáo, mang đến cảm giác ghê rợn và căng thẳng từ đầu đến cuối. Hiệu ứng hình ảnh đáng kinh ngạc và cách xây dựng không khí bí ẩn khiến tôi bị cuốn hút ngay từ những phút đầu tiên. Phim có sự kết hợp tuyệt vời giữa yếu tố tâm linh và máu me, tạo nên trải nghiệm khó quên. Nếu bạn là fan của thể loại kinh dị, đây chắc chắn là một tác phẩm không thể bỏ qua!", 
                //     danh_gia2 : "Điều ấn tượng nhất trong Quỷ Ăn Tạng chính là diễn xuất tuyệt vời của dàn diễn viên. Nhân vật chính truyền tải một cảm giác sợ hãi chân thực, giúp khán giả cảm nhận được nỗi khiếp sợ mà họ đang đối mặt. Cốt truyện độc đáo và bất ngờ đã giữ tôi ngồi im lặng suốt thời gian phim. Đây là một bộ phim kinh dị với nội dung sâu sắc, vượt xa những cảnh hù dọa thông thường.",              
                //     danh_gia3 : "Quỷ Ăn Tạng không chỉ đơn thuần là một bộ phim về máu me, mà còn là một tác phẩm nghệ thuật đầy sáng tạo. Bối cảnh phim tối tăm và âm thanh rùng rợn đã góp phần xây dựng nên bầu không khí đáng sợ đến nghẹt thở. Từng chi tiết nhỏ trong phim đều được chăm chút kỹ lưỡng, từ đạo cụ đến các cảnh quay, khiến tôi không thể rời mắt khỏi màn hình. Phim này chắc chắn sẽ ám ảnh tôi trong nhiều ngày tới!",                
                // },
                // {
                //     img: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11482_103_100002.jpg",
                //     name: "ROBOT HOANG DÃ",
                //     ngay: "11/10/2024",
                //     tinh_trang: "chưa mở",
                //     slide1: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11482_105_100002.jpg",
                //     slide2: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11482_105_100002.jpg",
                //     slide3: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11482_105_100002.jpg",
                //     xep_hang: "8.5/10",
                //     thoi_gian: "111 phút",
                //     loai: "2D | Normal | Normal sound | Phụ đề",
                //     tom_tat: "Cuộc phiêu lưu hoành tráng theo chân hành trình của một robot — đơn vị ROZZUM 7134, gọi tắt là Roz. Roz vô tình dạt vào hoang đảo sau một sự cố và nơi đây trở thành địa điểm sống mới của cô. Tại đây, Roz kết thân và nhận nuôi một chú ngỗng con, đặt tên là Brightbill. Roz và Brightbill dần dần thân thiết với các bạn thú trên đảo, song sau đó phải chống chọi, bảo vệ “nhà mới” trước sự xâm lăng của nhà máy từng sản xuất ra Roz.",
                // },
                // {
                //     img: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202409/11507_103_100004.jpg",
                //     name: "CÁM",
                //     ngay: "10/10/2024",
                //     tinh_trang: "chưa mở",
                //     slide1: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202409/11507_105_100003.jpg",
                //     slide2: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202409/11507_105_100005.jpg",
                //     slide3: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202409/11507_105_100007.jpg",
                //     xep_hang: "8.5/10",
                //     thoi_gian: "111 phút",
                //     loai: "2D | Normal | Normal sound | Phụ đề",
                //     tom_tat: "Câu chuyện phim là dị bản kinh dị đẫm máu lấy cảm hứng từ truyện cổ tích nổi tiếng Tấm Cám, nội dung chính của phim xoay quanh Cám - em gái cùng cha khác mẹ của Tấm đồng thời sẽ có nhiều nhân vật và chi tiết sáng tạo, gợi cảm giác vừa lạ vừa quen cho khán giả.",
                // },
                // {
                //     img: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11574_103_100002.jpg",
                //     name: "FUBAO: BẢO BỐI CỦA ÔNG",
                //     ngay: "18/10/2024",
                //     tinh_trang: "chưa mở",
                //     slide1: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11574_105_100001.jpg",
                //     slide2: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11574_105_100001.jpg",
                //     slide3: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11574_105_100001.jpg",
                //     xep_hang: "8.5/10",
                //     thoi_gian: "111 phút",
                //     loai: "2D | Normal | Normal sound | Phụ đề",
                //     tom_tat: "Bộ phim kể về cuộc hành trình trưởng thành của gấu trúc khổng lồ Fubao ở Hàn Quốc từ khi sinh ra đến khi quay trở về Trung Quốc. Đó là một hành trình đẹp đẽ và tràn ngập yêu thương của em bên gia đình, đặc biệt là hai ông. Bằng những thước phim chân thật, giản dị ghi lại hình ảnh chú gấu trúc nghịch ngợm dễ thương, bộ phim chắc chắn sẽ làm đổ gục những người yêu gấu trúc vì độ dưỡng thê của nó!",
                // },
                // {
                //     img: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11595_103_100001.jpg",
                //     name: "BIỆT ĐỘI HOT GIRL",
                //     ngay: "25/10/2024",
                //     tinh_trang: "chưa mở",
                //     slide1: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202409/11546_105_100002.jpg",
                //     slide2: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202409/11546_105_100003.jpg",
                //     slide3: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202409/11546_105_100005.jpg",
                //     xep_hang: "8.5/10",
                //     thoi_gian: "111 phút",
                //     loai: "2D | Normal | Normal sound | Phụ đề",
                //     tom_tat: "Bộ phim kể về cuộc hành trình trưởng thành của gấu trúc khổng lồ Fubao ở Hàn Quốc từ khi sinh ra đến khi quay trở về Trung Quốc. Đó là một hành trình đẹp đẽ và tràn ngập yêu thương của em bên gia đình, đặc biệt là hai ông. Bằng những thước phim chân thật, giản dị ghi lại hình ảnh chú gấu trúc nghịch ngợm dễ thương, bộ phim chắc chắn sẽ làm đổ gục những người yêu gấu trúc vì độ dưỡng thê của nó!",
                // },
                {
                    img: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11592_103_100001.jpg",
                    name: "TRÒ CHƠI NHÂN TÍNH",
                    ngay: "25/10/2024",
                    tinh_trang: "chưa mở",
                    slide1: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202409/11560_105_100002.jpg",
                    slide2: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202409/11560_105_100003.jpg",
                    slide3: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202409/11560_105_100004.jpg",
                    slide4: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202409/11560_105_100004.jpg",
                    xep_hang: "8.5/10",
                    thoi_gian: "111 phút",
                    loai: "2D | Normal | Normal sound | Phụ đề",
                    tom_tat: "Các thanh tra kỳ cựu nổi tiếng đã hoạt động trở lại! Thám tử Seo Do-cheol (HWANG Jung-min) và đội điều tra tội phạm nguy hiểm của anh không ngừng truy lùng tội phạm cả ngày lẫn đêm, đặt cược cả cuộc sống cá nhân của họ. Nhận một vụ án sát hại một giáo sư, đội thanh tra nhận ra những mối liên hệ với các vụ án trong quá khứ và nảy sinh những nghi ngờ về một kẻ giết người hàng loạt. Điều này đã khiến cả nước rơi vào tình trạng hỗn loạn. Khi đội thanh tra đi sâu vào cuộc điều tra, kẻ sát nhân đã chế nhạo họ bằng cách công khai tung ra một đoạn giới thiệu trực tuyến, chỉ ra nạn nhân tiếp theo và làm gia tăng sự hỗn loạn. Để giải quyết mối đe dọa ngày càng leo thang, nhóm đã kết nạp một sĩ quan tân binh trẻ Park Sun-woo (JUNG Hae-in), dẫn đến những khúc mắc và đầy rẫy bất ngờ trong vụ án.",
                },
                // {
                //     img: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11556_103_100002.jpg",
                //     name: "CÔ DÂU HÀO MÔN",
                //     ngay: "18/10/2024",
                //     tinh_trang: "chưa mở",
                //     slide1: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202409/11546_105_100005.jpg",
                //     slide2: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202409/11546_105_100005.jpg",
                //     slide3: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202409/11546_105_100005.jpg",
                //     xep_hang: "8.5/10",
                //     thoi_gian: "111 phút",
                //     loai: "2D | Normal | Normal sound | Phụ đề",
                //     tom_tat: "Bộ phim kể về cuộc hành trình trưởng thành của gấu trúc khổng lồ Fubao ở Hàn Quốc từ khi sinh ra đến khi quay trở về Trung Quốc. Đó là một hành trình đẹp đẽ và tràn ngập yêu thương của em bên gia đình, đặc biệt là hai ông. Bằng những thước phim chân thật, giản dị ghi lại hình ảnh chú gấu trúc nghịch ngợm dễ thương, bộ phim chắc chắn sẽ làm đổ gục những người yêu gấu trúc vì độ dưỡng thê của nó!",
                // },
            ],
        }
    }
}
</script>
<style></style>