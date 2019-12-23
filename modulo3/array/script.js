const array = [1, 2, 3, 4, 5, 6];

const lista = array.map(function (item, index) {
    return item + index;
});
console.log(lista);

const soma = array.reduce(function (total, proximo) {
    return total + proximo;
})
console.log(soma);

const find = array.find(function(item) {
    return item === 6;
});
console.log(find);