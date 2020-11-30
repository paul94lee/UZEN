window.addEventListener('DOMContentLoaded', function () {
    $('header').load('./white-header.html header', nav);
    $('footer').load('./footer.html');
    function nav() {
        var navList = document.querySelectorAll('.nav-list li');
        navList.forEach(function (value, key) {

            if (navList[key].classList.contains('co')) {
                navList[key].classList.add('active');
            }
        });
    };
    var x, y;
    var ball = document.querySelector('.circle');
    window.addEventListener('mousemove', mMove);
    function mMove(e) {
        x = e.pageX;
        y = e.pageY;

        ball.style.top = "calc(" + y + "px - 15px)";
        ball.style.left = "calc(" + x + "px - 15px)";


    }

});