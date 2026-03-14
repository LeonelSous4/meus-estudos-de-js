// tratamento de exceções


try {
    // tenta executar algo

    console.log(result)


} catch (error) {
    // captura o erro para tratar
    
    console.log("houve um erro seu animal")


    console.log(error)
} finally {
    console.log('fim')
    // execulta mesmo dado erro
}

let number = 0

try {
    if (number === 0) {
        throw new Error("o valor e igual a 0")
    }

} catch (error) {
    console.log(error)

} finally {
    console.log("fim")

}

