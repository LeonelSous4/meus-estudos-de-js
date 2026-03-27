// TRUTHY E FALSY
// Em JavaScript, alguns valores contam como falso mesmo sem serem false.

// Falsy:
// false, 0, "", null, undefined, NaN

console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

// Truthy:
// tudo que não é falsy

console.log(Boolean(1));         // true
console.log(Boolean("oi"));      // true
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true
