//  every testa se todos os elementos do array passam por um teste implementado por uma função fornecida. Ele retorna true se a função retornar true para todos os elementos do array, caso contrário, retorna false.

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const todosMaioresQueQuarenta = numeros.every((num) => num > 40);
console.log(todosMaioresQueQuarenta); // true