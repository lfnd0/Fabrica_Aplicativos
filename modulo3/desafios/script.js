let produtos = ["computador", "telefone", "mouse", "teclado"]
console.log(`Os produtos da lista são: ${produtos}`);
console.log(`Tamanho da lista ${produtos.length}`);

console.log(`Removendo o produto mouse da lista: ${produtos.filter(produto => produto !== "mouse")}.`);

const encontrarProduto = produtos.find(produto => produto === "computador");
if (encontrarProduto) {
    console.log(`O produto ${encontrarProduto} está na lista!`);
} else {
    console.log(`O produto não está na lista!`);
}

let numeros  = [1, 3, 4, 5, 0, 9];
console.log(`Lista ordenada: ${numeros.sort()}`);
console.log(`Retirando o primeiro elemento da lista: ${numeros.shift()}`);
console.log(`Invertendo a ordem dos elementos: ${numeros.reverse()}`);

let hoje = "23/12/2019";
const [dia, mes, ano] = hoje.split("/");
console.log(`Dia: ${dia}`);
console.log(`Mês: ${mes}`);
console.log(`Ano: ${ano}`);