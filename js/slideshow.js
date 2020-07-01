var slideIndex = 1;
//showSlides(slideIndex, 'mySlides1', 'dot1');
//showSlides(slideIndex, 'mySlides2', 'dot2');
showSlides(slideIndex, 'mySlidesReview');


function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Next/previous controls
function plusSlides(n, slideshow) {
  showSlides(slideIndex += n, slideshow);
}

// Thumbnail image controls
function currentSlide(n, slideshow) {
  showSlides(slideIndex = n, slideshow);
}

function showSlides(n, slideshow) {
  var i;
  var slides = document.getElementsByClassName(slideshow);
  var dots = document.getElementsByClassName("demo");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
  slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}