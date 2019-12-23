/* Funções para eventos da página */
function carregar() {
    alert('Página carregada!');
}

/* Funções para eventos do mouse */
function clicar() {
    console.log('Clicou!');
}

function soltar() {
    console.log('Soltou!');
}

function passar() {
    console.log('Passou!');
}

function tirar() {
    console.log('Tirou!');
}

function mover() {
    console.log('Moveu!');
}

function bloquear() {
    return false;
}

/* Funções para eventos do mouse */
function apertar(event) {
    console.log('Apertou!' + ' ' + event.ctrlKey + ' ' + event.shiftKey);
}

function largar(event) {
    console.log('Largou!' + ' ' + event.keyCode);
}

function pressionar(event) {
    console.log('Pressionou!' + ' ' + event.keyCode);
}

/* Funções para eventos de formulário */
function focar() {
    console.log("Focado!");
}

function desfocar() {
    console.log("Desfocado!");
}

function selecionar(objeto) {
    console.log("Selecionou a cidade " + objeto.value);
}

function enviar() {
    console.log("Enviado!");
}