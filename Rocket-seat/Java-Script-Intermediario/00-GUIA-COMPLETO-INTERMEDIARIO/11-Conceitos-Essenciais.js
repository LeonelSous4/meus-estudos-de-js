/*
  ==========================================
  📚 11 - CONCEITOS ESSENCIAIS AVANÇADOS
  ==========================================
  
  Entender "como funciona" JavaScript
  
  Tópicos:
  ✅ Tipos primitivos vs Referência
  ✅ Imutabilidade vs Mutabilidade
  ✅ Shallow copy vs Deep copy
  ✅ Hoisting
  ✅ Temporal Dead Zone
  ✅ Event loop (conceitual)
  ✅ Garbage collection
*/

console.log('============== CONCEITOS ESSENCIAIS ==============\n');

// ==========================================
// 🔷 SEÇÃO 1: TIPOS PRIMITIVOS vs REFERÊNCIA
// ==========================================

console.log('--- SEÇÃO 1: Tipos Primitivos vs Referência ---\n');

// 1.1 - Primitivos (guardados por valor)
console.log('📌 1.1 - Tipos Primitivos\n');

let a = 10;
let b = a; // Cópia do valor
b = 20;

console.log('a:', a); // 10 (não afetado)
console.log('b:', b); // 20

// Primitivos: number, string, boolean, null, undefined, Symbol, BigInt

// 1.2 - Referência (guardados por endereço)
console.log('\n📌 1.2 - Tipos Referência\n');

let obj1 = { x: 10 };
let obj2 = obj1; // Cópia da REFERÊNCIA (não do objeto)
obj2.x = 20;

console.log('obj1.x:', obj1.x); // 20 (afetado!)
console.log('obj2.x:', obj2.x); // 20

// Referência: object, array, function

console.log(`
  PRIMITIVOS:
  - Comparação por VALOR
  - Cópia cria novo valor
  - Passado em função cria cópia
  
  REFERÊNCIA:
  - Comparação por ENDEREÇO
  - Cópia aponta para mesmo lugar
  - Mudança em um afeta outros
`);

// ==========================================
// 🔄 SEÇÃO 2: IMUTABILIDADE vs MUTABILIDADE
// ==========================================

console.log('\n--- SEÇÃO 2: Imutabilidade vs Mutabilidade ---\n');

// 2.1 - Primitivos são imutáveis
console.log('📌 2.1 - Primitivos Imutáveis\n');

let string = 'Hello';
let string2 = string.toUpperCase();

console.log('Original:', string); // 'Hello'
console.log('Novo:', string2); // 'HELLO'
// String original não mudou!

// 2.2 - Objetos são mutáveis
console.log('\n📌 2.2 - Objetos Mutáveis\n');

const array = [1, 2, 3];
array.push(4); // Modificou o array original
console.log('Array após push:', array);

// ✅ const evita REATRIBUIÇÃO, não MODIFICAÇÃO
const obj = { x: 1 };
obj.x = 2; // OK (modificação)
// obj = {}; // Erro (reatribuição)

// 2.3 - Criar cópia verdadeira
console.log('\n📌 2.3 - Cópia Segura\n');

const original = [1, 2, 3];
const cópia = [...original]; // Shallow copy
cópia.push(4);

console.log('Original:', original); // [1,2,3]
console.log('Cópia:', cópia); // [1,2,3,4]

// ==========================================
// 📦 SEÇÃO 3: SHALLOW vs DEEP COPY
// ==========================================

console.log('\n--- SEÇÃO 3: Shallow Copy vs Deep Copy ---\n');

// 3.1 - Shallow copy
console.log('📌 3.1 - Shallow Copy\n');

const original2 = {
  nome: 'João',
  endereço: { cidade: 'SP' }
};

const shallow = { ...original2 };
shallow.nome = 'Maria'; // OK, não afeta original
console.log('Nome original:', original2.nome); // 'João'

shallow.endereço.cidade = 'RJ'; // PROBLEMA!
console.log('Cidade original:', original2.endereço.cidade); // 'RJ' (afetado!)

// ⚠️  Shallow copy: primeiro nível copiado, aninhados são referência

// 3.2 - Deep copy
console.log('\n📌 3.2 - Deep Copy\n');

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const deep = deepCopy(original2);
deep.endereço.cidade = 'BH';

console.log('Cidade original:', original2.endereço.cidade); // 'RJ' (não afetada!)

// ✅ JSON method funciona para objetos simples
// ⚠️ Não funciona com funções, Dates, undefined

// ==========================================
// ⬆️ SEÇÃO 4: HOISTING
// ==========================================

console.log('\n--- SEÇÃO 4: Hoisting ---\n');

// 4.1 - Hoisting com var
console.log('📌 4.1 - Var é Hoisted\n');

console.log('Valor antes:', typeof teste); // 'undefined'
var teste = 'Olá';
console.log('Valor depois:', teste); // 'Olá'

// Equivalente a:
// var teste;
// console.log(typeof teste); // undefined
// teste = 'Olá';

// 4.2 - Hoisting com let/const
console.log('\n📌 4.2 - Let/Const Não é Hoisted\n');

// ⚠️ Descomente para ver erro
// console.log(teste2); // ReferenceError!
// let teste2 = 'Olá';

console.log('Let/const não acessíveis antes da declaração');

// ==========================================
// ⏸️ SEÇÃO 5: TEMPORAL DEAD ZONE
// ==========================================

console.log('\n--- SEÇÃO 5: Temporal Dead Zone ---\n');

console.log('📌 TDZ: Zona Morta Temporal\n');

// From início do escopo até a declaração é "Temporal Dead Zone"
// let x está "hoisted" mas não inicializado

function teste3() {
  // ⚠️ x está em TDZ aqui
  // console.log(x); // ReferenceError!
  
  let x = 10; // Aqui x sai da TDZ
  console.log(x); // 10
}

teste3();

// ==========================================
// 🔄 SEÇÃO 6: EVENT LOOP (Conceitual)
// ==========================================

console.log('\n--- SEÇÃO 6: Event Loop (Conceitual) ---\n');

console.log('📌 Order of Execution\n');

console.log('1. Síncrono');

setTimeout(() => {
  console.log('3. Callback (Macrotask)');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('2. Promise (Microtask)');
  });

console.log('1.5 Síncrono final');

// Ordem de execução:
// 1. Síncrono
// 1.5 Síncrono final
// 2. Promise (Microtasks first)
// 3. Callback (Macrotasks after)

console.log(`
  EVENT LOOP EXECUTA ASSIM:
  1. Código síncrono (Call Stack)
  2. Microtasks (Promises, queueMicrotask)
  3. Macrotasks (setTimeout, setInterval, I/O)
  4. Repetir
`);

// ==========================================
// 🧹 SEÇÃO 7: GARBAGE COLLECTION
// ==========================================

console.log('\n--- SEÇÃO 7: Garbage Collection ---\n');

console.log(`
  GARBAGE COLLECTION:
  JavaScript automaticamente libera memória de objetos
  não referenciados mais
  
  Exemplo:
  let obj = { dados: 'grande' };
  obj = null; // Objeto será coletado
  
  Memory leaks ocorrem quando:
  - Referências circulares
  - Closures retêm dados desnecessários  
  - Event listeners não removidos
  
  Solução:
  - Sempre limpe referências
  - Use WeakMap para objetos temporários
  - Remova listeners ao destruir
`);

// ==========================================
// 🎯 SEÇÃO 8: CASOS PRÁTICOS
// ==========================================

console.log('\n--- SEÇÃO 8: Casos Práticos ---\n');

// 8.1 - Evitar problemas de referência
console.log('📌 8.1 - Protegendo Dados\n');

function criarConfiguracao() {
  let _config = { tema: 'light', idioma: 'pt' };
  
  return {
    obter: () => ({ ..._config }), // Cópia segura
    atualizar: (novoValor) => {
      _config = { ..._config, ...novoValor };
    }
  };
}

const config = criarConfiguracao();
const c1 = config.obter();
c1.tema = 'dark';
console.log('Config:', config.obter()); // Não foi afetada

// ==========================================
// 🏁 CONCLUSÃO
// ==========================================

console.log('\n=== RESUMO FINAL ===\n');
console.log(`
  ✅ Primitivos = valor, Objetos = referência
  ✅ Imутabilidade = programação mais segura
  ✅ Shallow copy não protege aninhados
  ✅ Hoisting pode ser confuso, evite com const/let
  ✅ Event loop: sincro → microtasks → macrotasks
  ✅ Garbage collection automático, mas cuide leaks
  
  REGRA DE OURO:
  - Quando copiar, crie cópia profunda
  - Quando passar, considere mutações
  - Quando closures, cuidado com memory
  - Quando async, respeite event loop
  
  VOCÊ AGORA ESTÁ PRONTO PARA ASYNC/AWAIT!
`);
