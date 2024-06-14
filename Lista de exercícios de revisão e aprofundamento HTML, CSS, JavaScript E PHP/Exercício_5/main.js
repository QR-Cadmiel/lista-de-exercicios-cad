//Cadmiel Torres de Lima

document.getElementById("contactForm").addEventListener("submit", function (event) {
  var fname = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (fname == "" || email == "" || message == "") {
    alert("Por favor, preencha todos os campos.");
    event.preventDefault();
  }
});  