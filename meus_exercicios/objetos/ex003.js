const pessoa = {
    nome: ["Vinícius", "Marinho"],
    idade: 21,
    biografia: function() {
        return `${this.nome[0]} ${this.nome[1]} tem ${this.idade} anos de idade`;
    },
    apresentacao: function() {
        return `Olá, eu sou o ${this.nome[0]}`;
    },
};
console.log(pessoa.nome);
console.log(pessoa.nome[0]);
console.log(pessoa.nome[1]);
console.log(pessoa.idade);
console.log(pessoa.biografia());
console.log(pessoa.apresentacao());


// Criando um objeto dentro de um objeto
const pessoa1 = {
    nome: {
        primeiro_nome: "Vini",
        sobrenome: "Marinho",
    },
}
// Acessando os valores de um objeto (dentro de outro objeto)
console.log(pessoa1.nome.primeiro_nome)