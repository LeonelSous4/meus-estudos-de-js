
// metodo findIndex() retorna o indice do primeiro elemento do array que satisfaz a função de teste fornecida. Caso contrário, retorna -1.

const numbers = [1, 2, 3, 4, 5]

const result = numbers.findIndex((number) => number === 3)
// o resultado é o indice do elemento encontrado, no caso, 2
console.log(result)

// acessando o elemento pelo indice
console.log(numbers[result])

// quando o elemento não é encontrado, o findIndex retorna -1
const result2 = numbers.findIndex((number) => number === 6)
console.log(result2)

// aparce -1