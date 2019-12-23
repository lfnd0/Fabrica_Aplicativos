class Pessoa {
    constructor() {
        this.nome = "",
        this.sobrenome = ""
    }

    adicionarNome(nome) {
        this.nome = nome;
        console.log(`Meu nome é ${this.nome}.`);
    }

    adicionarSobrenome(sobrenome) {
        this.sobrenome = sobrenome;
        console.log(`Meu sobrenome é ${this.sobrenome}.`);
    }

    mostrarNomeCompleto() {
        let nomeCompleto = `Meu nome completo é ${this.nome} ${this.sobrenome}.`;
        console.log(nomeCompleto);
    }
}

let pessoa = new Pessoa();
pessoa.adicionarNome("Gunner");
pessoa.adicionarSobrenome("JR");
pessoa.mostrarNomeCompleto();