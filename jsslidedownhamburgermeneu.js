$(document).ready(function () {
  $(".container").click(function () {
    $(".backgroundtopsection").toggleClass("displayblock");
    $(".nav-items").slideToggle("fast");
    $(".bar1").toggleClass("change1");
    $(".bar2").toggleClass("change2");
    $(".bar3").toggleClass("change3");
  })
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $('#nav-id').addClass('navbarclass');
    $('#nav-items').addClass('navbarclass');
  }
  else {
    $('#nav-id').removeClass('navbarclass');
    $('#nav-items').removeClass('navbarclass');
  }
});
// $('.slideshow-container').slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1,
//   adaptiveHeight: true,
//   arrows : false,
// });
$('.slideshow-container').slick({
  infinite: true,
  slidesToShow: 1,
  speed: 300,
  dots: true,
  infinite: true,
  arrows : false,
  responsive: [
    {
      breakpoint: 767,
      settings: {

        adaptiveHeight: true,
      }
    },
    {
      breakpoint: 600,
      settings: {

        adaptiveHeight: true,
      }
    },
    {
      breakpoint: 480,
      settings: {

        adaptiveHeight: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});






