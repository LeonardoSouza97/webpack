export default class Cliente {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`Olá meu nome é ${this.nome}`);
    }

}