
// Função que retorna uma promisses

function asyncFunction() {
    return new Promise((resolve, reject) => {
        // simulando operação assincrona
        setTimeout(() => {

            const isSucess = true // simula o resultado da operação, pode ser true ou false
            
            if(isSucess){
                resolve("A operação foi concluida")
            }else {
                reject("algo deu errado")
            }
        }, 4000) // simula uma operação que leva 4 segundos
    })
}

console.log('executando função assincrona...')


asyncFunction()
.then((Response) => {
    console.log("Sucesso",Response)
})
.catch((error) => {
    console.log("deu erro, ", error)
})
.finally(()=> {
    console.log("fim da execução")
})