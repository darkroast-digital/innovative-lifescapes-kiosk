$(function(){
  'use strict';
  var $page = $('#app'),
      options = {
        debug: true,
        prefetch: true,
        cacheLength: 2,
        onStart: {
          duration: 1250, // Duration of our animation
          render: function ($container) {
            // Add your CSS animation reversing class
            $('.offCanvas').removeClass('offCanvas-open');
          $('.overlay').removeClass('overlay-active');
          $('.content').removeClass('offCanvas-open');
            $container.removeClass('is-entered');
            $container.addClass('is-exiting');
            // Restart your animation
            smoothState.restartCSSAnimations();
          }
        },
        onReady: {
          duration: 1250,
          render: function ($container, $newContent) {
            // Remove your CSS animation reversing class
            $container.removeClass('is-exiting');
            $container.addClass('is-entered');
            // Inject the new content
            $container.html($newContent);

            $('.hamburger').click(function() {
          $('.offCanvas').toggleClass('offCanvas-open');
          $('.overlay').toggleClass('overlay-active');
          $('.content').toggleClass('offCanvas-open');
      });
      $('.overlay').click(function() {
          $('.offCanvas').removeClass('offCanvas-open');
          $('.overlay').removeClass('overlay-active');
          $('.content').removeClass('offCanvas-open');
          $('.modal').removeClass('modal-open');
      });

      var modelPlan = $('li[data-model]');
      var modal = $('.modal');
      var modalImage = $('.modal img');

      modelPlan.click(function() {
        $('.overlay').addClass('overlay-active');
        var src = $(this).find('img').attr('src');

        modalImage.attr('src', src);
        modal.addClass('modal-open');
      });

          }
        }
      },
      smoothState = $page.smoothState(options).data('smoothState');
});
