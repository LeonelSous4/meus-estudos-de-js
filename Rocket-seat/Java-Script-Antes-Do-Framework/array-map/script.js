
// filter filtra os elementos de um array, retornando um novo array com os elementos que passaram no teste implementado pela função fornecida 

const words = ['HTML', 'CSS', 'JavaScript', 'PHP']

const result = words.filter((word) => word.length > 3)
console.log(result)

const produts = [
    { nome: 'Notebook', preco: 2499, fragil: true, promotion: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true, promotion: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true, promotion: false },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false, promotion: false },
    { nome: 'Copo de Aço', preco: 25.99, fragil: false, promotion: false }
]

const promotion = produts.filter((product) => !product.promotion) 
console.log(promotion)