//Cadmiel Torres de Lima

function filterImages(category) {
  // Selecionar todas as imagens
  var images = document.querySelectorAll('.gallery img');

  // Loop por todas as imagens
  for (var i = 0; i < images.length; i++) {
    // Se a categoria for 'todos', mostrar todas as imagens
    if (category == 'todos') {
      images[i].style.display = 'block';
    } else {
      // Se a imagem pertencer à categoria, mostrar, senão ocultar
      if (images[i].classList.contains(category)) {
        images[i].style.display = 'block';
      } else {
        images[i].style.display = 'none';
      }
    }
  }
}

// Inicialmente mostrar todas as imagens
filterImages('todos');