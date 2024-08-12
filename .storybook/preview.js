import { Fancybox } from "@fancyapps/ui";
import { addDecorator } from '@storybook/html';
import { useEffect } from '@storybook/client-api';
import Twig from 'twig';
import { setupTwig } from './setupTwig';

import 'animate.css/animate.min.css';
import WOW from 'wowjs';
// document.addEventListener('DOMContentLoaded', () => {
//   const wow = new WOW();
//   wow.init();
// });

import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';      // Import AOS script

AOS.init({
  duration: 1200, // Example of AOS configuration
});




import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import 'bootstrap-icons/font/bootstrap-icons.css';


import "@fancyapps/ui/dist/fancybox/fancybox.css";


import'slick-carousel/slick/slick.css';
import'slick-carousel/slick/slick-theme.css';

import $ from 'jquery' ;
import 'slick-carousel' ; 
window.jQuery = $;
window.$ = $;




// GLOBAL CSS
import '../components/style.scss';


// If in a Drupal project, it's recommended to import a symlinked version of drupal.js.
import './_drupal.js';

export const decorators = [
  (Story, { args }) => {
    const { renderAs } = args || {};

    // Usual emulsify hack to add Drupal behaviors.
    useEffect(() => {
      Drupal.attachBehaviors();

      if (typeof window !== 'undefined') {
        // Ensure WOW.js is initialized only once
        window.addEventListener('load', () => {
          new WOW.WOW().init();
        });
      }

    }, [args]);
    return Story();
  },
];

setupTwig(Twig);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};




document.addEventListener('DOMContentLoaded',() =>{   
  // Initialize Slick Slider with options
  $('.carouse').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,            
  });
  

  });

  