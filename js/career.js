window.addEventListener('DOMContentLoaded', function () {
    $('header').load('./white-header.html', nav);
    $('footer').load('./footer.html');
    function nav() {
        var navList = document.querySelectorAll('.nav-list li');
        navList.forEach(function (value, key) {

            if (navList[key].classList.contains('ca')) {
                navList[key].classList.add('active');
            }
        });
    };


    var benefits = document.querySelectorAll(".benefits > ul > li");
    var beneBtn = document.querySelectorAll(".benefits > ul > li >img");
    beneBtn.forEach(function (value, key) {
        beneBtn[key].addEventListener('click', function () {
            beneBtn[key].classList.toggle('active');
            benefits[key].classList.toggle('active');
        });
    });


});