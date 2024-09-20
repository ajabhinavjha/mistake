(function ($, Drupal) {
  Drupal.behaviors.aos = {
    attach: function (context, settings) {
      // Initialize AOS once the document is ready
      AOS.init();
    },
  };
})(jQuery, Drupal);


