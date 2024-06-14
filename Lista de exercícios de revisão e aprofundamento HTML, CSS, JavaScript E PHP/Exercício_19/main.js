//Cadmiel Torres de Lima

// Adiciona um ouvinte de evento 'change' ao input de arquivos
document.getElementById('inputArquivos').addEventListener('change', function (event) {
    // Seleciona o elemento onde a pré-visualização será exibida
    var preVisualizacao = document.getElementById('preVisualizacao');
    // Limpa a pré-visualização anterior
    preVisualizacao.innerHTML = '';

    // Obtém os arquivos selecionados pelo usuário
    var arquivos = event.target.files;
    for (var i = 0; i < arquivos.length; i++) {
        var arquivo = arquivos[i];

        // Cria um novo div para cada arquivo e exibe o nome do arquivo
        var div = document.createElement('div');
        div.classList.add('arquivo-info');
        div.textContent = 'Arquivo: ' + arquivo.name;
        preVisualizacao.appendChild(div);

        // Se o arquivo for uma imagem, cria uma pré-visualização da imagem
        if (arquivo.type.startsWith('image/')) {
            var img = document.createElement('img');
            img.src = URL.createObjectURL(arquivo); // Cria uma URL para o arquivo
            img.height = 500; // Define a altura da imagem de pré-visualização
            img.onload = function () {
                // Libera a memória quando a imagem for carregada
                URL.revokeObjectURL(this.src);
            }
            preVisualizacao.appendChild(img); // Adiciona a imagem ao div de pré-visualização
        }
    }
});