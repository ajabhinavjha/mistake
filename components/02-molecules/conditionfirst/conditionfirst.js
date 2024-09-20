import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import $ from 'jquery';
import 'slick-carousel';

window.jQuery = $;
window.$ = $;

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Slick Slider with options
  $('.condition').slick({
    dots: true,
    slidesToShow: 1, // Show exactly 3 slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    centerMode: true, // Keep the centered slide in focus
    centerPadding: '0px', // Ensure no side cards are visible
  });
});
