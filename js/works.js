window.addEventListener('DOMContentLoaded', function () {
    $('header').load('./white-header.html', nav);
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

    var listBtn = document.querySelectorAll('.represent div img');
    var thum = document.querySelector('.works-thum');
    var list = document.querySelector('.works-list');
    listBtn.forEach(function (value, key) {
        listBtn[key].addEventListener('click', function () {
            if (key == 0) {
                list.classList.remove('active');
                thum.classList.add('active');
            }
            else {
                list.classList.add('active');
                thum.classList.remove('active');
            }
        });
    });

    var liEle = document.querySelectorAll('.row');
    window.addEventListener('scroll', fadeFun);
    var winH = window.innerHeight;
    fadeFun();
    function fadeFun() {
        liEle.forEach(function (el, idx) {
            var absoluteTop = window.pageYOffset + el.getBoundingClientRect().top;
            if (absoluteTop - winH < this.scrollY) {
                el.classList.add('active');
            }
        });
    }


});