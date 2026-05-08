//  desestruturação assignment 

const product =  {

    description: "teclado",
    price: 150

}

// desestruturando objetos

const {description, price} = product
console.log("Descrição:" , description )
console.log("preço:", price)

function newProduct({description, price}) {
    console.log("#######--NOVO PRODUTO--#######")
    console.log("Descrição:" , description )
    console.log("preço: R$", price)
}

newProduct({
    description: "Mouse",
    price: 270
})