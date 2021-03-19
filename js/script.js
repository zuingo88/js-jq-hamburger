function sol1() {

    function showHamb() {
        $('.hamburger-menu').show();
    }

    function hideHamb() {
        $('.hamburger-menu').hide();
    }

    function init() {
        $('.fas.fa-bars').click(function () {
            showHamb();
        });

        $('.fas.fa-times').click(function () {
            hideHamb();
        });
    }

    init();
}

function sol2() {

    function showHamb() {
        $('.hamburger-menu').addClass('active');
    }

    function hideHamb() {
        $('hamburger-menu').removeClass('active');
    }

    function init() {
        $('.header-right > a').click(showHamb);
        $('.hamburger-menu > a').click(hideHamb);
    }

    init();
}

function sol3 () {

    function hambToggle() {
        $('.hamburger-menu').toggleClass('active');
    }

    function init() {
        $('.header-right > a, .hamburger-menu > a').click(hambToggle);
    }

    init();
}

//sol1();

//sol2();

//sol3();

