window.addEventListener('load', function () {

    var btn = document.querySelector('.bugerBtn');
    var hid = document.querySelector('.hidden-menu');
    console.log(btn)
    setTimeout(() => {
        btn.addEventListener('click', function () {
            btn.classList.toggle('active');
            hid.classList.toggle('active');

        });
    }, 200);

});