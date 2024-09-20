jQuery(document).ready(function ($) {
    $('.autoplay').slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      centerMode: true,
      centerPadding: '0px',
      arrows:false,
    });
  });
  