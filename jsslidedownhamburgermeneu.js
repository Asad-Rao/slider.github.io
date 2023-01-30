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
// let slidePosition = 0;
// const slides=document.getElementsByClassName('carousel-item');
// const totalSlides = slides.length;
// document.getElementById("carousel-next").addEventListener("click",function(){
//   moveToNextSlide();
// });
// document.getElementById("carousel-prev").addEventListener("click",function(){
//   moveToPrevSlide();})



//  function updateSlidePosition(){
// for(let slide of slides){
//   console.log(slide);
// }
//  } 
// function moveToNextSlide(){
//   updateSlidePosition();
//   // currently Slide position is 0
// if(slidePosition===totalSlides-1){
//   slidePosition=0;
// }
// else
// {
//   slidePosition++;
// }
// }
// function moveToPrevSlide(){
//   updateSlidePosition();
//     // currently Slide position is 0
// if(slidePosition===0){
//   slidePosition=0;
// }
// else
// {
//   slidePosition--;
// }
// }



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-item");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}