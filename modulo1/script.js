function entrar() {
    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome: ');

    if (texto == '' || texto == null) {
        alert('Digite seu nome novamente!');
        area.innerHTML = 'Bem vindo visitante!';
    } else {
        area.innerHTML = 'Bem vindo ' + texto + '!';
    }
}

document.write("Valores para x com while:");
x = 0;
while (x <= 10) {
    document.write("<br> x = " + x);
    x++;
}

document.write("<br><br>Valores para y com for:");

for (y = 0; y <= 10; y++) {
    document.write("<br> y = " + y);
}

document.write("<br> Escolha seu pedido: <br>")
document.write("<br> 0 - Sorvete | 1 - Suco de fruta | 2 - Refrigerante <br>")
document.write("<br> Escolha seu pedido: <br>")

function pedir() {
    z = prompt("Digite seu pedido: ");
    switch (z) {
        case "0":
            alert("Você pediu um sorvete!");
            break;
        case "1":
            alert("Você pediu um suco de fruta!");
            break;
        case "2":
            alert("Você pediu um refrigerante!");
            break;
        default:
            alert("Obs, pedido não encontrado! Tente de novo.")
    }
}