window.addEventListener('DOMContentLoaded', function () {
    $('header').load('./white-header.html');
    var swtCOl = document.querySelector('header');
    swtCOl.classList.add('aa');
    var i = 0;
    var imgMove = document.querySelector('.img-content-wrap');
    var txtMove = document.querySelector('.txt-content-wrap');
    var indx = document.querySelector('.idx-wrap');
    var x, y;
    var ball = document.querySelector('.circle');
    var bln = false;
    var indi = document.getElementById('scrollIdx');

    window.addEventListener('mousewheel', swift);
    window.addEventListener('mousemove', mMove);

    function mMove(e) {
        x = e.pageX;
        y = e.pageY;

        ball.style.top = "calc(" + y + "px - 15px)";
        ball.style.left = "calc(" + x + "px - 15px)";
        // console.log(cursor.style)

    }
    function swift(e) {
        if (bln) return;
        if (e.wheelDelta > 0) {
            if (i >= 0) {
                imgMove.style.transform = "translateY(0%)";
                txtMove.style.transform = "translateY(0%)";
                indx.style.transform = "translateY(0%)";
                return;
            }
            i++;
            var c = i * 20;
            var t = i * 100;
            imgMove.style.transform = "translateY(" + c + "%)";
            txtMove.style.transform = "translateY(" + c + "%)";
            indx.style.transform = "translateY(" + c + "%)";
            indi.style.transform = "translateX(" + t + "%)";
        }
        else if (e.wheelDelta < 0) {
            if (i <= -4) {
                return;
            }
            i--;
            var c = i * 20;
            var t = i * 100;
            imgMove.style.transform = "translateY(" + c + "%)";
            txtMove.style.transform = "translateY(" + c + "%)";
            indx.style.transform = "translateY(" + c + "%)";
            indi.style.transform = "translateX(" + t + "%)";

        }
        bln = true;
        setTimeout(function () { bln = false }, 705);
    };

    $('html').plate({
        element: '.page-content',
        perspective: 4000,
        maxRotation: 2,
        animationDuration: 30
    });
});