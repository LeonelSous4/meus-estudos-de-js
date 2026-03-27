// CONVERSÃO E COERÇÃO
// Conversão = você faz de propósito.
// Coerção = o JavaScript converte automaticamente.

let textoNumero = "9";
let numeroConvertido = Number(textoNumero);

console.log(numeroConvertido);        // 9
console.log(typeof numeroConvertido); // number

let idade = 18;
console.log(String(idade));           // "18"
console.log(typeof idade.toString());  // string

// Coerção automática: aqui o + faz o JS entender que tudo deve virar string.
console.log("10" + 5); // "105"

// Mas com outros operadores, o JS tende a transformar em número.
console.log("10" - 5); // 5
console.log("10" * 2); // 20
