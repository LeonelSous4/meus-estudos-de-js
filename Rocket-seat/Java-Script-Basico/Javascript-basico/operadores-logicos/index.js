
console.log("----------------------igual a------------------")

let one = 1
let two = 2

// == igual a, mas ele so compara o conteudo 

console.log(one == two)
// falso

one = 1
two = '1'
console.log(one == two)
// true.

// == so compara o conteudo ou seja ele fala que o numero 1 é igual a uma string "1"



console.log("----------------------Estitamente igual a------------------")

// === compara tudo ou seja so diz que e igual se o conteudo e o tipo forem iguais

let number1 = 1
let number2 = '1'

console.log( number1 === number2)
console.log( number1 ===  1)








// -------------------------------diferetnte de ------------------------
// != diferente de
console.log("----------------- diferetnte de -----------------------")

let valor1 = 1
let valor2 = "1"

console.log(valor1 != valor2)
console.log(valor1 != 1)



console.log("-----------------estritamente diferetnte de -----------------------")

console.log(valor1 !== valor2)
console.log(valor1 !== 1)


// usar sempre o estritamnte igual ou estritamnete diferente


console.log("------------------------------------------------------------")
console.log("------------------------------------------------------------")
console.log("-----------------Maior menor ou igual-----------------------")



let saldo = 500
let pagamento = 120

console.log(saldo > pagamento)

// a > b "a maior que b"
// a < b "b maior que a"

// >= maior ou igual a 
//  <= menor ou igual a

saldo = 120

console.log(saldo >= pagamento)
