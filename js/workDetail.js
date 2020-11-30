window.addEventListener('DOMContentLoaded', function () {
    $('header').load('./white-header.html header', nav);
    $('footer').load('./footer.html', foot);
    function foot() {
        var swtFoo = document.querySelector('footer');
        swtFoo.classList.add('ff');
    }
    function nav() {
        var swtCOl = document.querySelector('header');
        swtCOl.classList.add('aa');
        var navList = document.querySelectorAll('.nav-list li');
        navList.forEach(function (value, key) {

            if (navList[key].classList.contains('wo')) {
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

    $('html').plate({
        element: '.workimg figure img',
        perspective: 4000,
        maxRotation: 2,
        animationDuration: 30
    });
});