$(document).ready(function () {
    var $window = $(window);
    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize >= 768) {
            if ($('.show-hide-menu').hasClass('active')) {
                $('.show-hide-menu').removeClass('active');
            }
            $('.menu-mobi').css('display', 'none');
        } else {
            if ($('.show-hide-menu').hasClass('active')) {
                $('.menu-mobi').css('display', 'block');
            } else {
                $('.menu-mobi').css('display', 'none');
            }
        }
    }
    checkWidth();
    $(window).resize(checkWidth);

    $('.show-hide-menu').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.menu-mobi').hide("slide", {direction: "up"}, 500);
        } else {
            $(this).addClass('active');
            $('.menu-mobi').show("slide", {direction: "up"}, 500);
        }
    });
});