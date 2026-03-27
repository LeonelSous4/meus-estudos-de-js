// condicional ternario

let age = 16

console.log(age >= 18 ? "voce pode dirigir" : "não pode dirigir")

// ? se for verdadeiro, : se for falso







// falsy e truth
console.log('------------------falsy-------------------------------------')

console.log(false ? "verdadeiro" : "falso")
console.log(0 ? "verdadeiro" : "falso")
console.log("" ? "verdadeiro" : "falso")
console.log(null ? "verdadeiro" : "falso")
console.log(false ? "verdadeiro" : "falso")
console.log(undefined ? "verdadeiro" : "falso")
console.log(NaN ? "verdadeiro" : "falso")

// todos são falsos

console.log('-----------------------Truthy--------------------------------')


console.log(true ? "verdadeiro" : "falso")
console.log(2.5 ? "verdadeiro" : "falso")
console.log({} ? "verdadeiro" : "falso")
console.log([] ? "verdadeiro" : "falso")
console.log( 1 ? "verdadeiro" : "falso")

// todos são verdadeiro