// Desestruturação de objetos
const pessoa = { nome: "Leonel", idade: 18 };

// extraindo propriedades
const { nome, idade } = pessoa;
console.log(nome, idade);

// renomeando
const { nome: nomePessoa } = pessoa;
console.log(nomePessoa);
