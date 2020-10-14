window.addEventListener('DOMContentLoaded', function () {
    $('header').load('./white-header.html', nav);
    $('footer').load('./footer.html', foot);
    function foot() {
        var swtFoo = document.querySelector('footer');
        swtFoo.classList.add('ff');
    }
    function nav() {
        var navList = document.querySelectorAll('.nav-list li');
        navList.forEach(function (value, key) {

            if (navList[key].classList.contains('co')) {
                navList[key].classList.add('active');
            }
        });
    };

    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options);
    console.log(container);
});