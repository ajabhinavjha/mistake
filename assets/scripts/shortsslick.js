jQuery(document).ready(function ($) {
    $('.shortsvideo').slick({
        dots: true,
        slidesToShow: 3, // Show exactly 3 slides at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: true,
    });
  });