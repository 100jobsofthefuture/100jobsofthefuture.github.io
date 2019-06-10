$(document).ready(function() {
    $('.site-menu-toggle').on('click', function() {
      $('.site-menu ul').slideToggle();
    });

    $('.mobile-menu').on('click', function() {
      $('.report aside').toggleClass('open');
      $('body').toggleClass('noScroll');
    });

    // job card details
    $('.job-card').on('click', function(){
      $(this).find('.job-card-full-descrip').toggle();
      $('body').toggleClass('noScroll');
    });

    // job browse filters
    $('.browse-filters .filter').on('click', function(){
      var category = $(this).attr('id');
      if(!$(this).hasClass('selected')){
        $('.browse-filters .filter').removeClass('selected');
        $(this).addClass('selected');
        $('.job-card').hide();
        if(category == 'all') {
          $('.job-card').fadeIn();
        } else {
          $('.job-card.' + category + '').fadeIn();
        }
      }
    });
});
