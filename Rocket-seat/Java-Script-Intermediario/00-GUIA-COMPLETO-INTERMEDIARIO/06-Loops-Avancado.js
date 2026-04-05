/*
  ==========================================
  📚 06 - LOOPS AVANÇADO: GUIA COMPLETO
  ==========================================
  
  Todos os tipos de loops e iteração
  
  Tópicos:
  ✅ for tradicional
  ✅ while e do...while
  ✅ for...of (valores)
  ✅ for...in (chaves)
  ✅ forEach, map, filter, find, etc
  ✅ some, every, reduce
  ✅ Performance e boas práticas
*/

console.log('============== LOOPS AVANÇADO ==============\n');

// ==========================================
// 🔄 SEÇÃO 1: FOR TRADICIONAL
// ==========================================

console.log('--- SEÇÃO 1: FOR Tradicional ---\n');

// 1.1 - Estrutura básica
console.log('📌 1.1 - FOR Básico\n');

for (let i = 0; i < 5; i++) {
  console.log(`Iteração ${i}`);
}

// 1.2 - Iterar array
console.log('\n📌 1.2 - FOR com Array\n');

const cores = ['vermelho', 'verde', 'azul'];
for (let i = 0; i < cores.length; i++) {
  console.log(`${i}: ${cores[i]}`);
}

// 1.3 - Break ( para o loop)
console.log('\n📌 1.3 - Break\n');

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log('Encontrou 5, parando');
    break;
  }
  console.log(i);
}

// 1.4 - Continue (pula iteração)
console.log('\n📌 1.4 - Continue\n');

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    console.log(`Pulando ${i}`);
    continue;
  }
  console.log(i);
}

// ==========================================
// ⏱️ SEÇÃO 2: WHILE E DO...WHILE
// ==========================================

console.log('\n--- SEÇÃO 2: While e Do...While ---\n');

// 2.1 - While
console.log('📌 2.1 - While\n');

let contador = 0;
while (contador < 3) {
  console.log(`While: ${contador}`);
  contador++;
}

// 2.2 - Do...While (executa pelo menos uma vez)
console.log('\n📌 2.2 - Do...While\n');

let num = 0;
do {
  console.log(`Do-While: ${num}`);
  num++;
} while (num < 3);

// Exemplo onde do...while faz diferença
console.log('\n📌 2.3 - Do...While vs While\n');

// Enquanto com condição falsa desde início
let x = 10;
while (x < 5) {
  console.log('While com condição falsa');
}
console.log('While: não exatamente uma vez');

// Do-while sempre executa pelo menos uma vez
let y = 10;
do {
  console.log('Do-While executa mesmo com condição falsa');
} while (y < 5);

// ==========================================
// 🎯 SEÇÃO 3: FOR...OF (VALORES)
// ==========================================

console.log('\n--- SEÇÃO 3: For...Of ---\n');

// 3.1 - For...of em array
console.log('📌 3.1 - For...Of em Array\n');

const numeros = [10, 20, 30];
for (const num of numeros) {
  console.log('Número:', num);
}

// 3.2 - For...of em string
console.log('\n📌 3.2 - For...Of em String\n');

for (const letra of 'ABC') {
  console.log('Letra:', letra);
}

// 3.3 - Com entries (índice + valor)
console.log('\n📌 3.3 - For...Of com Índice\n');

const nomes = ['Ana', 'Bruno'];
for (const [índice, nome] of nomes.entries()) {
  console.log(`${índice}: ${nome}`);
}

// ==========================================
// 🗝️ SEÇÃO 4: FOR...IN (CHAVES/ÍNDICES)
// ==========================================

console.log('\n--- SEÇÃO 4: For...In ---\n');

// 4.1 - For...in em objeto
console.log('📌 4.1 - For...In em Objeto\n');

const usuario = {
  nome: 'João',
  idade: 28,
  email: 'joao@email.com'
};

for (const chave in usuario) {
  console.log(`${chave}: ${usuario[chave]}`);
}

// 4.2 - For...in em array (cuidado!)
console.log('\n📌 4.2 - For...In em Array (Índices)\n');

const letras = ['a', 'b', 'c'];
for (const índice in letras) {
  console.log(`Índice ${índice}: ${letras[índice]}`);
}

// ⚠️ OBS: for...in retorna chaves/índices
//    for...of retorna valores

// ==========================================
// 🎯 SEÇÃO 5: ARRAY METHODS - FOREACH
// ==========================================

console.log('\n--- SEÇÃO 5: Array Methods - Iteração ---\n');

// 5.1 - forEach (sem retorno)
console.log('📌 5.1 - forEach()\n');

const fruits = ['maçã', 'banana', 'laranja'];
fruits.forEach((fruta, índice) => {
  console.log(`${índice}: ${fruta}`);
});

// ==========================================
// 🔍 SEÇÃO 6: ARRAY METHODS - BUSCA
// ==========================================

// 6.1 - Find (primeiro que satisfaz)
console.log('\n📌 6.1 - find()\n');

const números = [5, 12, 8, 20, 3];
const maiorQue10 = números.find(n => n > 10);
console.log('Primeiro > 10:', maiorQue10); // 12

// 6.2 - FindIndex
console.log('\n📌 6.2 - findIndex()\n');

const índice = números.findIndex(n => n > 10);
console.log('Índice do primeiro > 10:', índice); // 1

// 6.3 - Some (existe algum?)
console.log('\n📌 6.3 - some()\n');

const temPar = [1, 3, 5, 6].some(n => n % 2 === 0);
console.log('Tem algum par?', temPar); // true

// 6.4 - Every (todos?)
console.log('\n📌 6.4 - every()\n');

const todosPares = [2, 4, 6, 8].every(n => n % 2 === 0);
console.log('Todos são pares?', todosPares); // true

// ==========================================
// 🔄 SEÇÃO 7: COMBINANDO LOOPS
// ==========================================

console.log('\n--- SEÇÃO 7: Loops Aninhados ---\n');

// 7.1 - Loop dentro de loop
console.log('📌 7.1 - Loops Aninhados\n');

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// ==========================================
// ⚡ SEÇÃO 8: PERFORMANCE
// ==========================================

console.log('\n--- SEÇÃO 8: Performance ---\n');

console.log('📌 Comparação de Performance\n');

const muitosItens = Array.from({length: 100000}, (_, i) => i);

// Teste 1: for tradicional
console.time('for tradicional');
let soma1 = 0;
for (let i = 0; i < muitosItens.length; i++) {
  soma1 += muitosItens[i];
}
console.timeEnd('for tradicional');

// Teste 2: forEach
console.time('forEach');
let soma2 = 0;
muitosItens.forEach(n => {
  soma2 += n;
});
console.timeEnd('forEach');

// Teste 3: for...of
console.time('for...of');
let soma3 = 0;
for (const n of muitosItens) {
  soma3 += n;
}
console.timeEnd('for...of');

// ==========================================
// 🎯 SEÇÃO 9: QUANDO USAR CADA UM
// ==========================================

console.log('\n--- SEÇÃO 9: Quando Usar Cada Um ---\n');

console.log(`
  FOR TRADICIONAL
  - Loops com controle fino (contador customizado)
  - Quando precisa de break/continue específico
  - Performance crítica (é o mais rápido)
  
  WHILE / DO...WHILE
  - Loops com condição dinâmica
  - Leitura de entrada (enquanto válido)
  - Do...while quando quer executar uma vez sempre
  
  FOR...OF
  - Iterar sobre valores
  - Arrays, strings, sets, maps
  - Mais legível que for tradicional
  
  FOR...IN
  - Iterar sobre chaves de objetos
  - NÃO use em arrays, use for...of
  
  ARRAY METHODS (map, filter, etc)
  - Transformações de dados
  - Programação funcional
  - Mais legível para operações complexas
  
  REDUCE
  - Agregar dados em um único valor
  - Cálculos complexos
`);

// ==========================================
// 🏁 CONCLUSÃO
// ==========================================

console.log('\n=== RESUMO FINAL ===\n');
console.log(`
  ✅ Escolha o loop adequado para cada situação
  ✅ for...of para arrays (mais legível)
  ✅ for...in para objetos
  ✅ Array methods para transformações
  ✅ Performance: for tradicional quando crítico
  ✅ Combine loops com condicionais
  ✅ Use break/continue com cuidado
  
  PRÓXIMO: Use loops com closures para dados privados!
`);
