// O metodo some() testa se ao menos um dos elementos do array passa por um teste implementado por uma função fornecida. Ele retorna true se a função retornar true para pelo menos um elemento do array, caso contrário, retorna false.

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const algumMaiorQueQuarenta = numeros.some((num) => num > 40);
console.log(algumMaiorQueQuarenta); // true

// se tiver almenos 1 maior que 40 da true