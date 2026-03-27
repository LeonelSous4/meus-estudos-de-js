// OPERADORES LÓGICOS
// && = E
// || = OU
// !  = NÃO

let email = true;
let senha = false;

console.log(email && senha); // só é true se os dois forem true
console.log(email || senha); // é true se pelo menos um for true
console.log(!senha);         // inverte o valor

// Exemplo prático:
let temEmail = true;
let temSenha = true;
let podeEntrar = temEmail && temSenha;

console.log(podeEntrar);
