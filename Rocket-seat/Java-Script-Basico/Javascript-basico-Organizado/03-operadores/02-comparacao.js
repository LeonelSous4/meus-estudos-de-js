// OPERADORES DE COMPARAÇÃO
// Compare valores usando ==, ===, !=, !==, >, <, >= e <=.

// Evite == e != em projetos reais.
// Prefira === e !== porque eles comparam valor e tipo.

console.log(1 == "1");   // true  -> compara só o valor
console.log(1 === "1");  // false -> compara valor e tipo

console.log(1 != "1");   // false
console.log(1 !== "1");  // true

console.log(5 > 3);      // maior que
console.log(5 < 3);      // menor que
console.log(5 >= 5);     // maior ou igual
console.log(4 <= 5);     // menor ou igual
