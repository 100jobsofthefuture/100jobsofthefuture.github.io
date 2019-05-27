$(document).ready(function() {
    $('.site-menu-toggle').on('click', function() {
      $('.site-menu ul').slideToggle();
    });

    $('.mobile-menu, .overlay').on('click', function() {
      $('.report aside').toggleClass('open');
      $('body').toggleClass('noScroll');
    });
});
