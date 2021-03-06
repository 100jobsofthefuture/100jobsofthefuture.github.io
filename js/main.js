$(document).ready(function() {
    $('.site-menu-toggle').on('click', function() {
      $('.site-menu ul').slideToggle();
    });

    // contents menu
    $('.mobile-menu').on('click', function() {
      $('.report .contents').toggleClass('open');
      $('body').toggleClass('noScroll');
    });
    $('.overlay').on('click', function() {
      $('.report .contents').toggleClass('open');
      $('body').toggleClass('noScroll');

      // for job card details function below
      $('.job-card-full-descrip').hide();
    });


    // job card details
    $('.job-card').on('click', function(){
        $(this).find('.job-card-full-descrip').toggle();
        $('body').toggleClass('noScroll');
    });
    // enter key version for keyboard ally
    $('.job-card').on('keypress', function(event){
      if (event.which == 13){
        $(this).find('.job-card-full-descrip').toggle();
        $('body').toggleClass('noScroll');
      }
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

    // report jobs accordion
    $('.report-job-heading').on('click', function(){
      $(this).toggleClass('open');
      $(this).next().slideToggle();
    });
    // enter key version for keyboard ally
    $('.report-job-heading').on('keypress', function(){
      if (event.which == 13){
        $(this).toggleClass('open');
        $(this).next().slideToggle();
      }
    });

    $('#results-aow-toggle').on('click', function(){
      $(this).toggleClass('open');
      $('#aow').slideToggle();
    });

    $(window).scroll( function(){
      if($(window).scrollTop() > 1000){
        $('.button.top').fadeIn();
      } else {
        $('.button.top').fadeOut();
      }
    });

    $( window ).resize(function() {
      if(window.innerWidth > 900){
        $('.report .contents').removeClass('open');
        $('body').removeClass('noScroll');
      }
    });
});
