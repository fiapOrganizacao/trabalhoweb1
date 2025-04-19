// Definir as informações do aluno na tela 
const studentInfo = {
    name: "João",
    age: 20,
    course: "Engenharia de Software",
    year: 2024
};

const app = document.getElementById("app");

if (app) {
    app.innerHTML = `
        <p>Nome: ${studentInfo.name}</p>
        <p>Idade: ${studentInfo.age}</p>
        <p>Curso: ${studentInfo.course}</p>
        <p>Ano: ${studentInfo.year}</p>
    `;
}