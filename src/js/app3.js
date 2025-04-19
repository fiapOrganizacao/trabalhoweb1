// Calculadora de IMC
// IMC = peso / (kg) * altura(m)² 

function calculadoraIMC() {
    const peso = parseFloat(document.getElementById("peso").value)
    const altura = parseFloat(document.getElementById("altura").value)
    const resultado = document.getElementById("resultado")

    const imc = peso / (altura * altura)
    let classificacao = ""

    if (imc < 18.5) {
        classificacao = "Abaixo do peso"
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso normal"
    } else if (imc > 24.9){
        classificacao = "Sobrepeso"
    }
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} e você está classificado como ${classificacao}.`
    }