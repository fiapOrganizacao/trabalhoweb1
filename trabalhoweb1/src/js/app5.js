// Lista de usuários com verificação
const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    { username: "user3", password: "password3" }
];

function login() {
    const username = document.getElementById("usuario").value;
    const password = document.getElementById("senha").value;
    const loginResult = document.getElementById("resultadoLogin");

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        loginResult.innerHTML = "<p style='color: green;'>Login bem-sucedido!</p>";
    } else {
        loginResult.innerHTML = "<p style='color: red;'>Usuário ou senha inválidos.</p>";
    }
}