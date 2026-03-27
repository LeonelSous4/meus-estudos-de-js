// FUNÇÃO ANÔNIMA E ARROW FUNCTION

const message = function () {
  console.log("Olá!");
};

message();

// Arrow function mais curta
const sum = (n1, n2) => n1 + n2;

console.log(sum(5, 10));

// Quando a arrow function tem só uma linha com return,
// você pode escrever sem chaves e sem return.
const info = (name) => {
  console.log("Olá,", name);
};

info("Leozera");
