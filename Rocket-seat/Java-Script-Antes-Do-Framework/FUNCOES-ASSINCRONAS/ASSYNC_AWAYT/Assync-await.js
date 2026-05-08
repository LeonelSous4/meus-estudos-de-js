


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


// usando async/await para lidar com a função assíncrona

// o async é usado para declarar uma função assíncrona, que pode usar o await para esperar a resolução de uma promisses

// await é usado para esperar a resolução de uma promisses, e só depois continuar a execução do código



// Usando Arrow Function

// const async3 = async () => {

//     const response = await asyncFunction()
//     console.log(response)
// }

async function asyncFunction2() {
    try {
        const response = await asyncFunction()
        console.log("Sucesso", response)
    }
    catch (error) {
        console.log("deu erro: ", error)
    }
    finally {
        console.log("######fim da execução#########")
        }
    }


asyncFunction2()