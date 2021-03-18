function showHamb() {
    $('.hamburger-menu').show();
}

function hideHamb() {
    $('.hamburger-menu').hide();
}

function init() {
    $('.fas.fa-bars').click(function() {
        showHamb();
    });

    $('.fas.fa-times').click(function() {
        hideHamb();
    });
}

init();