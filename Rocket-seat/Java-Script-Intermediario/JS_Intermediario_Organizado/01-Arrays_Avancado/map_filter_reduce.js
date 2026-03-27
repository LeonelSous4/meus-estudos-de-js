// map, filter e reduce (nível intermediário)

// MAP → transforma cada item
const numeros = [1, 2, 3, 4];
const dobrados = numeros.map(n => n * 2);
console.log(dobrados); // [2,4,6,8]

// FILTER → filtra baseado em condição
const pares = numeros.filter(n => n % 2 === 0);
console.log(pares); // [2,4]

// REDUCE → acumula valores
const soma = numeros.reduce((acc, n) => acc + n, 0);
console.log(soma); // 10
