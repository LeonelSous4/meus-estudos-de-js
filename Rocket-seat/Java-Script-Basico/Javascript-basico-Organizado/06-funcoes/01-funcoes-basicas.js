// FUNÇÕES BÁSICAS
// Uma função é um bloco de código que executa uma tarefa.

function message() {
  console.log("Hello, world!");
}

message();
message();

// Parâmetros e argumentos
function info(name) {
  console.log("Olá,", name);
}

info("Leonel");

// Retorno de valor
function sum(a, b) {
  return a + b;
}

let resposta = sum(5, 10);
console.log(resposta);

// Documentação de função com JSDoc ajuda no VS Code.
/**
 * Soma dois números e retorna o resultado.
 * @param {number} a - Primeiro número.
 * @param {number} b - Segundo número.
 * @returns {number}
 */
function somar(a, b) {
  return a + b;
}

console.log(somar(2, 3));
