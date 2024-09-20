jQuery(document).ready(function ($) {
    $('.gallery').slick({
        dots: true,
        slidesToShow: 1, // Show exactly 3 slides at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: false,
    });
  });
  