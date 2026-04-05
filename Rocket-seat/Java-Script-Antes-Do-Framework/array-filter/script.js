

// Map manipula percorre e retorna novo array, diferente do forEach que apenas percorre o array


const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]


produtos.map((item) => {
    console.log(`${item.nome} - R$${item.preco}`)
})

// sintaxe redusida
produtos.map(item => console.log(item.nome))



// utiizando o novo array retornado

const formated = produtos.map((item) => {
    // return item.nome.toUpperCase()

    return {
        id: Math.random(),
        nome: item.nome.toUpperCase(),
        preco: `R$ - ${item.preco}`,
        description: `O produto ${item.nome} custa R$${item.preco}`
    }
})

console.log(formated)

