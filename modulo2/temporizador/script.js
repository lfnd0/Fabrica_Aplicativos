function acao() {
    document.write("Executando o setTimeout! <br>");
}

setInterval(() => {
    document.write("Executando o setInterval! <br>")
}, 1000);

setTimeout(acao, 3000);