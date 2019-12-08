$(function () {

    //rating
    $('.rate-star').rateYo({
        rating: 4.5,
        starWidth: '17px',
        readOnly: true,
        ratedFill: '#ffc000',
        normalFill: '#d5d5d5',
    });

    //slider header
    $('.create-slider__inner').slick({
        arrows: false,
        autoplay: true,
        dots: false,
    });

    //slider_featured
    $('.featured-item__slider').slick({
        arrows: false,
        dots: false,
    });

    //arows slider-featured
    $('.featured-slider__arow-prev').on('click', function (event) {
        event.preventDefault();

        $('.featured-item__slider').slick('slickPrev')
    });


    $('.featured-slider__arow-next').on('click', function (event) {
        event.preventDefault();

        $('.featured-item__slider').slick('slickNext')
    });

    //arows slider-featured END

    //filter START
    let filter = $('[data-filter]');

    filter.on('click', function () {
        event.preventDefault();

        let cat = $(this).data('filter');

        if (cat == 'all') {
            $('[data-cat]').removeClass('hide');
        } else {
            $('[data-cat]').each(function () {
                let workCat = $(this).data('cat');

                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });

    // filter added class 'active'

    $(".fil").click(function () {
        $(".fil").removeClass("active");
        $(this).toggleClass("active");
    });

    //filter END

    //slider-followers
    $('.followers__inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: false,
    });

    $('.followers-slider__prev').on('click', function (event) {
        event.preventDefault();

        $('.followers__inner').slick('slickPrev')
    });


    $('.followers-slider__next').on('click', function (event) {
        event.preventDefault();

        $('.followers__inner').slick('slickNext')
    });

    //slider-followers END


    // $('.js-range-slider').ionRangeSlider({
    //     type: 'double',
    //     min: 0,
    //     max: 1000,
    //     from: 0,
    //     to: 600,
    //     prefix: '$'
    // });

    // var mixer = mixitup('.sort__category-item');

});