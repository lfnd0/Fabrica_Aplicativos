function cadastrar(usuarios, ...novos) {
    let total = [
        ...usuarios,
        ...novos
    ];

    console.log(total);
}

let usuarios = ["Bob", "TJ"];
let novos = cadastrar(usuarios, "James", "Luke");