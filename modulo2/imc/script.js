var peso;
var altura;
var imc;
var resultado;

function calcular() {
    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;
    imc = peso / (altura ** 2);

    if (imc < 17) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br> Seu IMC é: " + imc.toFixed(2) + ", você está muito abaixo do peso!";
        return false;
    } else if (imc > 17 && imc < 18.49) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br> Seu IMC é: " + imc.toFixed(2) + ", você está abaixo do peso!";
        return false;
    } else if (imc > 18.5 && imc < 24.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br> Seu IMC é: " + imc.toFixed(2) + ", você está com o peso ideal!";
        return false;
    } else if (imc > 25 && imc < 29.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br> Seu IMC é: " + imc.toFixed(2) + ", você está acima do peso!";
        return false;
    } else {
        return false;
    }
}