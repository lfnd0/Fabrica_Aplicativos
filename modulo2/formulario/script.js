function validar() {
    var numero = document.getElementById("numero").value;
    var nome = document.getElementById("nome").value;
    
    if (numero.length > 2) {
        alert("Digite dois números ou menos!");
        document.formulario.numero.focus();
        return false;
    } else if (nome.length < 3) {
        alert("Digite um nome maior!");
        document.formulario.nome.focus();
        return false;
    } else {
        alert("Formulário enviado com sucesso!");
        return false;
    }
}