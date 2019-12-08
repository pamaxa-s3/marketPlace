$(function () {


    $('.rate-star').rateYo({
        rating: 4.5,
        starWidth: '17px',
        readOnly: true,
        ratedFill: '#ffc000',
        normalFill: '#d5d5d5',
    });


    $('.create-slider__inner').slick({
        arrows: false,
        autoplay: true,
        dots: false,
    });


    $('.featured-item__slider').slick({
        arrows: false,
        dots: false,
    });


    $('.arow-prev').on('click', function (event) {
        event.preventDefault();

        $('.featured-item__slider').slick('slickPrev')
    });


    $('.arow-next').on('click', function (event) {
        event.preventDefault();

        $('.featured-item__slider').slick('slickNext')
    });


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