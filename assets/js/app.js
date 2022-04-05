(function ($) {
    'use strict';
    var browserWindow = $(window);
    browserWindow.on('load', function () {
        $('.preloader').fadeOut(2000, function () {
            $(this).remove();
        });

        $('.burger').on("click", function () {
            console.log(1)
            $('.nav-links').toggleClass('show');
        });


        let navLinks = $('.nav-links li a')
     
    });

})(jQuery);