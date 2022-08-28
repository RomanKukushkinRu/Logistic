

// Menu


$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__menu1, .header__menu2, .header__menu3, .header__navigation').toggleClass('active')
        $('body').toggleClass('lock')
    });
});