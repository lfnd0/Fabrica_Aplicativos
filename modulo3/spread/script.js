function cadastrar(info) {
    let complemento = {
        ...info,
        cargo: "estudante",
        status: "matriculado",
        codigo: 1711
    };
    return complemento;
}

console.log(cadastrar({nome: "Luiz", sobrenome: "Fernando", ano: 2019}));