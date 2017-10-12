(function ($) {

    $(document).ready(function () {

        $('a[href*="#"]').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
                location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1500);
                }
            }
        });

        $(document).foundation();

        $('.menu-icon').on('click', function () {
            $(this).toggleClass('menu-icon--open');
            $('.menu').toggleClass('menu--show');
        });

        $('.txt-slide-img__slider').slick({
            dots: true,
            infinite: true
        });

        $('.txt-slider-icons__slider').slick({
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1
        });

    });

})(jQuery);



