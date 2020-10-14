window.addEventListener('DOMContentLoaded', function () {
    $('header').load('./white-header.html', nav);
    $('footer').load('./footer.html');
    var x, y;
    var ball = document.querySelector('.circle');
    window.addEventListener('mousemove', mMove);
    function mMove(e) {
        x = e.pageX;
        y = e.pageY;

        ball.style.top = "calc(" + y + "px - 15px)";
        ball.style.left = "calc(" + x + "px - 15px)";


    }

    function nav() {
        var navList = document.querySelectorAll('.nav-list li');
        navList.forEach(function (value, key) {

            if (navList[key].classList.contains('cu')) {
                navList[key].classList.add('active');
            }
        });
    };
});