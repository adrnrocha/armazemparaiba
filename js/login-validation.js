// Função para validar usuário e senha
function validarLogin() {
    // Defina o usuário e a senha fixos (exemplo: admin e 12345)
    var usuarioValido = "admin@gmail.com";
    var senhaValida = "12345";

    // Obtenha os valores dos campos
    var email = document.getElementById("email").value;
    var senha = document.getElementById("password").value;

    // Verifique se o email e a senha são válidos
    if (email === usuarioValido && senha === senhaValida) {
        // Redireciona para a página menu.html
        window.location.href = "menu.html";
        return false; // Evita que o formulário seja enviado
    } else {
        // Se o login falhar, exiba uma mensagem de erro
        alert("Usuário ou senha inválidos.");
        return false; // Evita que o formulário seja enviado
    }
}
