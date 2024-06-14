//Cadmiel Torres de Lima

function myFunction() {
  var nome = document.getElementById("nome").value;
  var sobrenome = document.getElementById("sobrenome").value;

  var table = document.getElementById("myTable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = nome;
  cell2.innerHTML = sobrenome;
}  