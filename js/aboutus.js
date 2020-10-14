window.addEventListener('DOMContentLoaded', function () {
    $('header').load('./white-header.html', nav);

    $('footer').load('./footer.html', foot);
    function foot(){
        var swtFoo = document.querySelector('footer');
        swtFoo.classList.add('ff');
    }

    function nav() {
        var swtCOl = document.querySelector('header');
        swtCOl.classList.add('aa');
        var navList = document.querySelectorAll('.nav-list li');
        navList.forEach(function (value, key) {


            if (navList[key].classList.contains('ab')) {
                navList[key].classList.add('active');
            }
        });
    };



});