// $('.slider').slick({
//     autoplay:true,
//     autoplaySpeed:5000,
//     dots:true,
// });

$(function () {
    $(".slider").slick({
        //   arrows: false,
        arrows: true,
        //   autoplay: true, 
        autoplay: false, 
        // autoplaySpeed: 2000,
        centerMode: true,
        // centerPadding: "30px",
        // centerPadding: "100px",
        dots: true,
        // fade: true,
        slidesToShow: 3,
        speed: 400,
        variableWidth: true,
    });
  });

// $('.slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.products_photo'
//   });
//   $('.slider').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.products_photo',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true
//   });
