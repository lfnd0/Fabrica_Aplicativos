class Data {
    constructor() {
        this.data = [];
    }

    adicionar(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class Tarefas extends Data {
    constructor() {
        super();
        this.titulo = "Minha tarefa";
    }
    mostrarTitulo() {
        console.log(this.titulo);
    }
}

const minhasTarefas = new Tarefas();

document.getElementById('novo').onclick = function() {
    minhasTarefas.adicionar("23 dez. 2019");
}

minhasTarefas.mostrarTitulo();