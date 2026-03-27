// TIPOS PRIMITIVOS DE DADOS
// Os mais usados no começo são: string, number, boolean, undefined e null.

let nome = "Leonel";         // string = texto
let idade = 20;              // number = número
let aprovado = true;         // boolean = verdadeiro ou falso
let indefinido;              // undefined = não recebeu valor ainda
let vazio = null;            // null = valor intencionalmente vazio

console.log(typeof nome);       // string
console.log(typeof idade);      // number
console.log(typeof aprovado);   // boolean
console.log(typeof indefinido); // undefined
console.log(typeof vazio);      // object (isso é um detalhe antigo do JS)

// Strings podem usar aspas simples, duplas ou crase.
console.log('Ela disse: "estou estudando JavaScript"');

// Crase permite quebra de linha e interpolação de variáveis.
console.log(`Nome: ${nome}
Idade: ${idade}`);
