$(function () {

    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade:true,
        asNavFor: '.slider__nav'

    });

    $('.slider__nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider__inner',
        centerMode: false,
        focusOnSelect: true,
        variableWidth: true,
    });


    $('.header__menu-btn').on('click', function(){
        $('.header__menu ul').slideToggle();
    });

});

