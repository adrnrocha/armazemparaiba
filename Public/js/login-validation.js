// /public/js/login-validation.js
function validarLogin(event) {
    event.preventDefault(); // Impede o envio do formulário

    var email = document.getElementById("email").value;
    var senha = document.getElementById("password").value;

    // Fazendo a requisição para a função serverless da Vercel
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            senha: senha,
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = "menu.html"; // Redireciona para o menu
        } else {
            alert(data.message); // Exibe mensagem de erro
        }
    })
    .catch((error) => {
        console.error('Erro:', error);
    });
}
