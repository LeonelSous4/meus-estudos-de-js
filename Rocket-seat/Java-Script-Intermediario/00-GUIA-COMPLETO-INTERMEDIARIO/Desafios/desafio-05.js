

console.log('\n--- DESAFIO  5: Cache/Memoização ---\n');
console.log('Dificuldade: ⭐⭐⭐⭐ Avançado\n');

console.log(`
  Enunciado:
  Crie uma função "memoizar" que retorna uma versão
  cacheada de uma função. Resultados anteriores são reutilizados.
  
  Exemplo:
  const fib = n => n <= 1 ? n : fib(n-1) + fib(n-2);
  const fibMemo = memoizar(fib);
  fibMemo(40) // Muito mais rápido na segunda chamada
`);

function criarCache(func) {
  // TODO: Sua solução aqui (use Map ou objetos, SEM JSON!)
}

// Teste aqui:
// const fib = n => n <= 1 ? n : fib(n - 1) + fib(n - 2);
// const fibCache = criarCache(fib);
// console.log('fib(30):', fibCache(30));