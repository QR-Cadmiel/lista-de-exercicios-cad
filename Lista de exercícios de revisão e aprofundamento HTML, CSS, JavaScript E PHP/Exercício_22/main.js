//Cadmiel Torres de Lima

function validarFormulario() {
    var nome = document.forms["meuForm"]["nome"].value;
    var email = document.forms["meuForm"]["email"].value;
    var cartao = document.forms["meuForm"]["cartao"].value;

    if (nome == "" || email == "" || cartao == "") {
        alert("Todos os campos devem ser preenchidos");
        return false;
    }
}