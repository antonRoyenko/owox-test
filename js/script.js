(function($) {

  $('#shares-carousel').carousel({
    interval: 10000
  });

  $('.slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

})(jQuery);
