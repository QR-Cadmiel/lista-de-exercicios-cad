//Cadmiel Torres de Lima

function novocomentario() {
  var comentario = document.getElementById("comentario").value;
  var li = document.createElement("li");
  li.textContent = comentario;
  document.getElementById("secaocomentario").appendChild(li);
  document.getElementById("comentario").value = "";
}
