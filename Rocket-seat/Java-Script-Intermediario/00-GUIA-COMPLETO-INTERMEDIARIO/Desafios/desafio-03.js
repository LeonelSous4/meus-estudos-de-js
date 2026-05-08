




// ==========================================
// 🌟 DESAFIO 3: Composição de Funções
// ==========================================

// console.log('\n--- DESAFIO 3: Composição de Funções ---\n');
// console.log('Dificuldade: ⭐⭐⭐ Médio\n');

// console.log(`
//   Enunciado:
//   Crie uma função "compose" que recebe múltiplas funções
//   e retorna uma nova função que as executa em cadeia
//   da direita para a esquerda (ordem reversa).
  
//   Exemplo:
//   const add5 = x => x + 5;
//   const mult2 = x => x * 2;
//   const comp = compose(mult2, add5);
//   comp(10) // (10 + 5) * 2 = 30
// `);



// Teste aqui:
// const add5 = x => x + 5;
// const mult2 = x => x * 2;
// const comp = compose(mult2, add5);
// console.log('Resultado:', comp(10)); // 30



  const add5 = x => x + 5;
  const mult2 = x => x * 2;


function compose(...funcs) {

  return function(valor)  {
    return funcs.reduceRight((acc, f) => f(acc), valor)
  }
}

const val = compose(mult2, add5)

// console.log(val(10))




// ```javascript
// const add5 = x => x + 5;
// const mult2 = x => x * 2;

// function compose(...funcs) {
//   // ...funcs captura todas as funções passadas em um array
//   // compose(mult2, add5) → funcs = [mult2, add5]

//   return function(valor) {
//     // retorna uma função filha que recebe o valor inicial
//     // val(10) → valor = 10

//     return funcs.reduceRight((acc, f) => f(acc), valor)
//     // reduceRight percorre o array da direita pra esquerda
//     // valor é o ponto de partida do acc
//     // cada iteração: f(acc) executa a função atual passando o resultado anterior
    
//     // passo a passo com val(10):
//     // acc = 10 → f = add5  → add5(10)  = 15 → acc vira 15
//     // acc = 15 → f = mult2 → mult2(15) = 30 → acc vira 30
//     // resultado final = 30
//   }
// }

// const val = compose(mult2, add5)
// // val guarda a função filha retornada por compose

// console.log(val(10)) // 30
// // val(10) executa a função filha com valor = 10
// ```

// Salva aí! 🚀








function validarCPF(cpf) {
  // TODO: Sua solução aqui
  if(cpf.length !== 11) return false

 if (cpf.split('').every(d => d === cpf[0])) return false

 return true
}

// Teste aqui:
console.log('12345678901:', validarCPF('12345678901')); // true
console.log('11111111111:', validarCPF('11111111111')); // false
console.log('123:', validarCPF('123')); // false








function criarCache(func) {
  // TODO: Sua solução aqui
}

// Teste aqui:
const fib = n => n <= 1 ? n : fib(n-1) + fib(n-2);
const fibCache = criarCache(fib);

console.log('fib(10):', fibCache(10)); // 55
console.log('fib(10):', fibCache(10)); // 55 (dessa vez veio do cache!)
console.log('fib(30):', fibCache(30)); // 832040