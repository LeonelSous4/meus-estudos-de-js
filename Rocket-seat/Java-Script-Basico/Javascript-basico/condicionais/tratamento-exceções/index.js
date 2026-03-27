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


function converterParaReal(valor) {
  try {
    if (typeof valor !== "number") {
      throw new Error("O valor fornecido não é um número!"); 
    }
    const total = valor * 5.50;
    console.log(`R$ ${total.toFixed(2)}`);
  } catch (error) {
    console.error("Erro na conversão:", error.message);
  } finally {
    console.log("Processo de conversão finalizado.");
  }
}

converterParaReal(10);    // Sucesso
converterParaReal("abc"); // Cai no catch

