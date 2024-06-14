<!-- Cadmiel Torres de Lima -->

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Exercício 26</title>
</head>

<body>
    <div id="content">
        <h1>Conversa em tempo real</h1>
        <input type="text" id="username" placeholder="Digite seu nome">
        <br><br>
        <textarea id="message" placeholder="Digite sua mensagem"></textarea>
        <br><br>
        <button id="send">Enviar</button>
        <div id="content-ul">
            <ul id="messages"></ul>
        </div>
    </div>

    <script src="https://cdn.socket.io/4.0.0/socket.io.min.js"></script>
    <script>
        const socket = io('http://localhost:3000');
        const messages = document.getElementById('messages');
        const sendButton = document.getElementById('send');
        const usernameInput = document.getElementById('username');
        const messageInput = document.getElementById('message');

        sendButton.addEventListener('click', () => {
            const username = usernameInput.value;
            const message = messageInput.value;
            if (username && message) {
                const formattedMessage = `<strong>${username}:</strong> ${message}`;
                socket.emit('chat message', formattedMessage);
                messageInput.value = '';
            }
        });

        socket.on('chat message', (message) => {
            const li = document.createElement('li');
            li.innerHTML = message;
            messages.appendChild(li);
        });
    </script>

</body>

</html>