// Async/Await (requisições simuladas)

function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function executar() {
  console.log("Início");
  await esperar(1000);
  console.log("Depois de 1s");
}

executar();
