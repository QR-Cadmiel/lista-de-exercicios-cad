//Cadmiel Torres de Lima

var button = document.getElementById('myButton');
button.addEventListener('click', function () {
  button.style.animation = 'none';
  setTimeout(function () {
    button.style.animation = 'grow 1s linear';
  }, 10);
});