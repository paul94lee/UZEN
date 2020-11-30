window.addEventListener('DOMContentLoaded', function () {
    $('header').load('./white-header.html header', nav);
    var swtCOl = document.querySelector('header');
    swtCOl.classList.add('aa');
    var imgCon = document.querySelectorAll('.page-content .img-content-wrap .frame');
    var i = 0;
    var imgMove = document.querySelector('.img-content-wrap');
    var x, y;
    imgCon.forEach(function (value, key) {

        imgCon[key].addEventListener('mousewheel', swift);
    });
    function swift(e) {
        if (e.wheelDelta > 0) {
            var next = this.previousElementSibling.offsetTop;
            imgMove.style.transform = "translateY(" + -next + "px)";
            console.log('wheelup')
        }
        else if (e.wheelDelta < 0) {

            var prev = this.nextElementSibling.offsetTop;
            imgMove.style.transform = "translateY(" + -prev + "px)";
            console.log('wheeldown')

        }
    };




    // window.addEventListener('mousemove', mMove);
    // function mMove(e) {
    //     x = e.clientX;
    //     y = e.clientY;
    //     imgMove

    // }
});