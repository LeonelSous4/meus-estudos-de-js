let obj = []

try {
    obj.execute()
} catch (error) {
    if (error instanceof TypeError) {
        console.log("deu errado")
    } 
}




// criando erros customizaods

class MyCustomError {
    constructor(message) {
        this.message = " CLASSE DE ERRO CUSTOMIZADA: " + message
    }
}

try {
    throw new MyCustomError("Error: personalizado lançado")

} catch (error) {
    if(error instanceof MyCustomError) {
        console.log(error.message)
    } else {
        console.log("Não foi possovel execultar")
    }
}