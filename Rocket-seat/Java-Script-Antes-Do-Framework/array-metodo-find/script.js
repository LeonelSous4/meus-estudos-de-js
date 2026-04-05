//  metodo find() retorna o valor do primeiro elemento do array que satisfaz a função de teste fornecida. Caso contrário, retorna undefined.

const numbers = [1, 2, 3, 4, 5] 

const result = numbers.find((number) => number > 3)
console.log(result)

// com objetos

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const result2 = produtos.find((product) => product.preco > 1000)

console.log(result2)