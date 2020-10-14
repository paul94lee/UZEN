window.addEventListener('DOMContentLoaded', function () {
    $('header').load('./white-header.html', nav);
    $('footer').load('./footer.html');

    function nav() {
        var navList = document.querySelectorAll('.nav-list li');
        navList.forEach(function (value, key) {

            if (navList[key].classList.contains('cu')) {
                navList[key].classList.add('active');
            }
        });
    };
});