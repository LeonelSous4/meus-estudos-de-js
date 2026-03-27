// TRATAMENTO DE EXCEÇÕES
// Use try/catch quando existe risco de erro em tempo de execução.

try {
  console.log(resultado);
} catch (error) {
  console.log("Ocorreu um erro e ele foi tratado.");
  console.log(error.message);
} finally {
  console.log("Esse bloco sempre executa.");
}

let numero = 0;

try {
  if (numero === 0) {
    throw new Error("O valor não pode ser zero.");
  }
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Fim da validação.");
}
