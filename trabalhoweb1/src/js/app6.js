// Função para calcular a média de 7 notas e verificar aprovação
function calcularMediaNotas(notas) {
    if (notas.length !== 7) {
        console.error("É necessário fornecer exatamente 7 notas.");
        return;
    }

    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    const media = soma / notas.length;

    console.log(`Média: ${media.toFixed(2)}`);
    if (media >= 6) {
        console.log("Status: Aprovado");
    } else {
        console.log("Status: Reprovado");
    }
}

// Exemplo de uso
const notasAluno = [7, 3, 5.5, 4, 1, 4, 6.5];
calcularMediaNotas(notasAluno);