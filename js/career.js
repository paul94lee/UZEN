window.addEventListener('DOMContentLoaded', function () {
    $('header').load('./white-header.html header', nav);
    $('footer').load('./footer.html');
    function nav() {
        var navList = document.querySelectorAll('.nav-list li');
        navList.forEach(function (value, key) {

            if (navList[key].classList.contains('ca')) {
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

    var benefits = document.querySelectorAll(".benefits > ul > li");
    var beneBtn = document.querySelectorAll(".benefits > ul > li >img");
    benefits.forEach(function (value, key) {
        value.addEventListener('click', function () {
            beneBtn[key].classList.toggle('active');
            benefits[key].classList.toggle('active');
        });
    });


});