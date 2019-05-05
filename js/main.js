$(document).ready(function() {
    $('.mobile-menu, .overlay').on('click', function() {
      $('.report aside').toggleClass('open');
      $('body').toggleClass('noScroll');
    });
});
