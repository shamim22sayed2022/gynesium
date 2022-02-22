$(function(){
      //banner slick
    $('.banner_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:true
      });
      // about video
      new VenoBox({
        selector: ".my-video-links"
    });
      //gallery images
      new VenoBox({
        selector: ".my-image-links1"
    });
    //testimonial slick
    $('.test_main').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows:false,
      dots:true
    });
    jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });
        $('.slide_main').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          centerMode: true,
          nextArrow: ".next",
          prevArrow: ".prev",
          centerPadding: '0px',
          dots:false
        });
});