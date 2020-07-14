function openModal(modal) {
    document.getElementById(modal).style.display = "block";
  }
  
  function closeModal(modal) {
    document.getElementById(modal).style.display = "none";
  }
  
  var slideIndex = 1;
  showSlidesLightBox(slideIndex, 1);
  showSlidesLightBox(slideIndex, 2);
  
  function plusSlidesLightbox(n, slidebox) {
    showSlidesLightBox(slideIndex += n, slidebox);
  }
  
  function currentSlideLightbox(n, slidebox) {
    showSlidesLightBox(slideIndex = n, slidebox);
  }
  
  function showSlidesLightBox(n, slidebox) {
    var i;
  var slides = document.getElementsByClassName("mySlides" + slidebox);
  var dots = document.getElementsByClassName("demo" + slidebox);
  var captionText = document.getElementById("caption" + slidebox);
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
  captionText.innerHTML = dots[slideIndex-1].alt;
  }