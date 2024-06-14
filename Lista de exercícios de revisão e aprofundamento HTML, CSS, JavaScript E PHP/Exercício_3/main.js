//Cadmiel Torres de Lima

var itens = document.querySelectorAll('#lista li');


for (var i = 0; i < itens.length; i++) {
  itens[i].addEventListener('click', function () {

    this.style.backgroundColor = 'yellow';
  });
}