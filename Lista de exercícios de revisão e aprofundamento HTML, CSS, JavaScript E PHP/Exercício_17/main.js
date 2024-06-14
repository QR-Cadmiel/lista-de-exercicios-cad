//Cadmiel Torres de Lima

function validarLogin() {
  var usuario = document.getElementById('usuario').value;
  var senha = document.getElementById('senha').value;

  if (usuario == 'Joaquim' && senha == 'Senha321') {
    // Armazena o estado de login no Local Storage
    localStorage.setItem('login', 'true');
    alert('Login realizado com sucesso!');
    // Redireciona para a página principal
    window.location = 'pagina_principal.html';
  } else {
    alert('Usuário ou senha inválidos.');
    localStorage.setItem('login', 'false');
  }
  return false;
}

function verificarLogin() {
  // Verifica o estado de login
  if (localStorage.getItem('login') == 'true') {
    alert('Você já está logado.');
    window.location = 'pagina_principal.html';
  }
}