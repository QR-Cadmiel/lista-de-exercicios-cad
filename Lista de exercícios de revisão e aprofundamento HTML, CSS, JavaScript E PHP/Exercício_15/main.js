//Cadmiel Torres de Lima

function contarPalavras() {
  var texto = document.getElementById('campoTexto').value;
  var palavras = texto.trim().split(/\s+/);
  var numeroPalavras = palavras.length;
  if (texto === '') {
    numeroPalavras = 0;
  }
  document.getElementById('contador').innerText = numeroPalavras;
}