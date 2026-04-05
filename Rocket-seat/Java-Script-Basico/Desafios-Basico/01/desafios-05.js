

const VerificarIdade = (idade) => {
    
    try {
        if(idade < 0) {

        throw new Error("Idade não pode ser negativa"); 

        } else if (typeof idade !== "number") {

         throw new Error("O valor enviado não é um número"); 

        }

        console.log(` ${idade} é uma Idade certa`)
        
    } catch (error) {
        
        console.error("Capturado no catch:", error.message);

    }
}

VerificarIdade(10)