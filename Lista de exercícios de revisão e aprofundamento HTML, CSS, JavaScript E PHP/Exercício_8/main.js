//Cadmiel Torres de Lima

var slideIndex = 0;
var x = document.getElementsByClassName("mySlides");
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

setInterval(function () {
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1
  }
  showDivs(slideIndex);
}, 3000); // Muda a imagem a cada 3 segundos