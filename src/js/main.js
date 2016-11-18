(function($) {

  $(document).ready(function() {

      'use strict';


    //slider

    (function () {
      $('.owl-carousel').owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        smartSpeed: 600,
        autoplaySpeed: 600
      });
    })();

    //tabs
    (function() {
        $('.team__item').on('click', function (e) {

        e.preventDefault();

        var $this = $(this);
        var item = $this.closest('.team__item');
        var container = $this.closest('.team');
        var content = container.find('.member__item');
        var active = $('.member__item_active');
        var index = item.index();
        var reqContent = content.eq(index);

        if (!item.hasClass('team__item_active')) {

          item.addClass('team__item_active')
               .siblings()
               .removeClass('team__item_active');

           active.fadeOut('fast', function() {
             reqContent.fadeIn('fast', function() {
               $(this).addClass('member__item_active')
                    .siblings()
                    .removeClass('member__item_active');
             });
           });
        }
      });
    })();

    //phone-mask
    (function() {
      $('#phone').mask('8 (000) 000-00-00');
    })();

    //scroll to order
    (function() {
      $('#order-link').on('click', function(e) {

        var link = $(this).attr('href');
        var target = $(link).offset().top;


        e.preventDefault();

        $('body').animate({
            scrollTop: target
        }, 1000);
      });
    })();

    //accordeon
    (function() {
      $('.questions__name').on('click', function(e) {

        e.preventDefault();

        var $this = $(this);
        var item = $this.closest('.questions__item');
        var currentContent = item.find('.questions__text');

        if(!item.hasClass('questions__item_active')) {
          item.addClass('questions__item_active')
              .siblings()
              .removeClass('questions__item_active')
              .find('.questions__text')
              .stop(true,true)
              .slideUp('100');

          currentContent.stop(true,true).slideDown('100');
        }
      });
    })();

  });
})(jQuery);
