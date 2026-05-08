/*
  ==========================================
  📚 12 - 15 DESAFIOS PRÁTICOS
  ==========================================
  
  Desafios para testar tudo que você aprendeu
  Do nível básico ao intermediário avançado
  
  INSTRUÇÕES:
  - Leia cada desafio
  - Implemente a solução
  - Teste com os exemplos
  - Compare com a solução comentada
*/

console.log('============== 15 DESAFIOS PRÁTICOS ==============\n');

// ==========================================
// 🌟 DESAFIO 1: Filtrar e Dobrar
// ==========================================

console.log('--- DESAFIO 1: Filtrar Pares e Dobrar ---\n');
console.log('Dificuldade: ⭐ Fácil\n');

console.log(`
  Enunciado:
  Crie uma função que recebe um array de números,
  filtra apenas os números pares, dobra cada um,
  e retorna a soma total.
  
  Exemplo:
  filtrarDobrarSomar([1, 2, 3, 4, 5, 6])
  // Pares: [2, 4, 6]
  // Dobrados: [4, 8, 12]
  // Soma: 24
`);

function filtrarDobrarSomar(números) {
  // TODO: Sua solução aqui
}

// Teste aqui:
// console.log('Resultado:', filtrarDobrarSomar([1, 2, 3, 4, 5, 6])); // 24

// ==========================================
// 🌟 DESAFIO 2: Contar Frequência de Palavras
// ==========================================

console.log('\n--- DESAFIO 2: Contar Frequência ---\n');
console.log('Dificuldade: ⭐⭐ Fácil-Médio\n');

console.log(`
  Enunciado:
  Crie uma função que recebe uma string com palavras
  e retorna um objeto com a frequência de cada palavra.
  
  Exemplo:
  contarPalavras('javascript python javascript python java')
  // { javascript: 2, python: 2, java: 1 }
`);

function contarPalavras(texto) {
  // TODO: Sua solução aqui
}

// Teste aqui:
// console.log('Resultado:', contarPalavras('javascript python javascript python java'));

// ==========================================
// 🌟 DESAFIO 3: Composição de Funções
// ==========================================

console.log('\n--- DESAFIO 3: Composição de Funções ---\n');
console.log('Dificuldade: ⭐⭐⭐ Médio\n');

console.log(`
  Enunciado:
  Crie uma função "compose" que recebe múltiplas funções
  e retorna uma nova função que as executa em cadeia
  da direita para a esquerda (ordem reversa).
  
  Exemplo:
  const add5 = x => x + 5;
  const mult2 = x => x * 2;
  const comp = compose(mult2, add5);
  comp(10) // (10 + 5) * 2 = 30
`);

function compose(...funcs) {
  // TODO: Sua solução aqui
}

// Teste aqui:
// const add5 = x => x + 5;
// const mult2 = x => x * 2;
// const comp = compose(mult2, add5);
// console.log('Resultado:', comp(10)); // 30

// ==========================================
// 🌟 DESAFIO 4: Validar CPF
// ==========================================

console.log('\n--- DESAFIO 4: Validar CPF ---\n');
console.log('Dificuldade: ⭐⭐⭐ Médio\n');

console.log(`
  Enunciado:
  Crie uma função que valida um CPF brasileiro.
  CPF válido: 11 dígitos, sem todos iguais.
  (Simplificado - sem cálculo de dígito verificador)
  
  Exemplo:
  validarCPF('12345678901') // true
  validarCPF('11111111111') // false
  validarCPF('123') // false
`);

function validarCPF(cpf) {
  // TODO: Sua solução aqui
}

// Teste aqui:
// console.log('12345678901:', validarCPF('12345678901')); // true
// console.log('11111111111:', validarCPF('11111111111')); // false

// ==========================================
// 🌟 DESAFIO 5: Cache de Função
// ==========================================

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

// ==========================================
// 🌟 DESAFIO 6: Validador de Formulário
// ==========================================

console.log('\n--- DESAFIO 6: Validador de Form ---\n');
console.log('Dificuldade: ⭐⭐⭐ Médio-Avançado\n');

console.log(`
  Enunciado:
  Crie um validador de formulário que:
  - Valida nome (mín 3 caracteres)
  - Valida email (contém @)
  - Valida idade (18+)
  - Retorna objeto com erros
  
  Exemplo:
  validar({ nome: 'Jo', email: 'Jo', idade: 15 })
  // { nome: 'Inválido', email: 'Inválido', idade: 'Inválido' }
`);

function validar(dados) {
  // TODO: Sua solução aqui
}

// Teste aqui:
// console.log('Inválido:', validar({ nome: 'Jo', email: 'jo', idade: 15 }));
// console.log('Válido:', validar({ nome: 'João', email: 'joao@email.com', idade: 25 }));

// ==========================================
// 🌟 DESAFIO 7: Classe com Privacidade
// ==========================================

console.log('\n--- DESAFIO 7: Classe Privada ---\n');
console.log('Dificuldade: ⭐⭐⭐ Médio\n');

console.log(`
  Enunciado:
  Crie uma classe Conta com:
  - saldo privado (não pode acessar direto)
  - método depositar()
  - método sacar() (com validação)
  - método consultarSaldo()
`);

class Conta {
  // TODO: Sua solução aqui
}

// Teste aqui:
// const minhaConta = new Conta(1000);
// console.log(minhaConta.depositar(500));
// console.log(minhaConta.sacar(200));

// ==========================================
// 🌟 DESAFIO 8: Array Multidimensional
// ==========================================

console.log('\n--- DESAFIO 8: Array Multidimensional ---\n');
console.log('Dificuldade: ⭐⭐ Fácil-Médio\n');

console.log(`
  Enunciado:
  Crie uma função que "achata" um array multidimensional.
  
  Exemplo:
  const arr = [1, [2, 3, [4, 5]]];
  achatar(arr) // [1, 2, 3, 4, 5]
`);

function achatar(arr) {
  // TODO: Sua solução aqui (use recursão!)
}

// Teste aqui:
// console.log('Resultado:', achatar([1, [2, 3, [4, 5]]])); // [1,2,3,4,5]

// ==========================================
// 🌟 DESAFIO 9: Debounce
// ==========================================

console.log('\n--- DESAFIO 9: Debounce ---\n');
console.log('Dificuldade: ⭐⭐⭐⭐ Avançado\n');

console.log(`
  Enunciado:
  Crie uma função debounce que atrasa a execução
  de uma função até que X ms passem sem chamadas.
  
  Exemplo:
  const buscar = debounce(console.log, 500);
  buscar('a');
  buscar('ab');
  buscar('abc');
  // Executa apenas uma vez: 'abc' após 500ms
`);

function debounce(func, delay) {
  // TODO: Sua solução aqui
}

// Teste aqui:
// const buscar = debounce(console.log, 300);
// buscar('a');
// buscar('ab');
// buscar('abc');

// ==========================================
// 🌟 DESAFIO 10: Objeto com Getters
// ==========================================

console.log('\n--- DESAFIO 10: Getter Avançado ---\n');
console.log('Dificuldade: ⭐⭐⭐ Médio\n');

console.log(`
  Enunciado:
  Crie uma classe Pessoa com:
  - Getter idade: calcula idade automaticamente
  - Setter dataNascimento: atualiza data
`);

class Pessoa {
  // TODO: Sua solução aqui
}

// Teste aqui:
// const pessoa = new Pessoa('João', '1995-05-15');
// console.log(`${pessoa.nome} tem ${pessoa.idade} anos`);

// ==========================================
// 🌟 DESAFIO 11: Fila (Queue)
// ==========================================

console.log('\n--- DESAFIO 11: Implementar Fila ---\n');
console.log('Dificuldade: ⭐⭐⭐ Médio\n');

console.log(`
  Enunciado:
  Implemente uma Fila com:
  - enfileirar(valor)
  - desenfileirar()
  - tamanho
  - vazia()
`);

class Fila {
  // TODO: Sua solução aqui
}

// Teste aqui:
// const fila = new Fila();
// fila.enfilar('A');
// fila.enfilar('B');
// console.log(fila.desenfilar()); // A

// ==========================================
// 🌟 DESAFIO 12: Herança com Super
// ==========================================

console.log('\n--- DESAFIO 12: Herança ---\n');
console.log('Dificuldade: ⭐⭐⭐ Médio\n');

console.log(`
  Enunciado:
  Crie Animal, depois Cachorro que extends Animal.
  Sobrescreva o método fazer Som.
`);

class Animal {
  // TODO: Sua solução aqui
}

class Cachorro extends Animal {
  // TODO: Sua solução aqui
}

class Gato extends Animal {
  // TODO: Sua solução aqui
}

// Teste aqui:
// const dog = new Cachorro('Rex');
// const cat = new Gato('Mimi');
// console.log(dog.apresentar());
// console.log(dog.fazerSom());

// ==========================================
// 🌟 DESAFIO 13: Desestruturação
// ==========================================

console.log('\n--- DESAFIO 13: Desestruturação ---\n');
console.log('Dificuldade: ⭐⭐ Fácil-Médio\n');

console.log(`
  Enunciado:
  Extraia nome e idade de um objeto,
  com valores padrão se não existirem.
`);

// TODO: Sua desestruturação aqui

// ==========================================
// 🌟 DESAFIO 14: Closures com Privacidade
// ==========================================

console.log('\n--- DESAFIO 14: Closure Privado ---\n');
console.log('Dificuldade: ⭐⭐⭐⭐ Avançado\n');

console.log(`
  Enunciado:
  Crie uma factory que gera objetos com contador privado.
`);

function criarCounter() {
  // TODO: Sua solução aqui
}

// Teste aqui:
// const cont = criarCounter();
// console.log('Inc:', cont.incrementar()); // 1
// console.log('Inc:', cont.incrementar()); // 2
// console.log('Dec:', cont.decrementar()); // 1

// ==========================================
// 🌟 DESAFIO 15: SUPER DESAFIO - Mini Todo App
// ==========================================

console.log('\n--- DESAFIO 15: SUPER DESAFIO - Mini Todo ---\n');
console.log('Dificuldade: ⭐⭐⭐⭐⭐ Intermediário Avançado\n');

console.log(`
  Enunciado:
  Crie um aplicativo de tarefas simples:
  - adicionar(nome)
  - remover(id)
  - marcarConcluida(id)
  - listar()
  - estadísticas()
`);

// class TodoApp {
  // TODO: Sua solução aqui
// }\n\n // Teste aqui:\n// const app = new TodoApp();\n// app.adicionar('Aprender JS');\n// app.adicionar('Fazer desafios');\n// app.marcarConcluida(1);\n// console.log(app.listar());\n// console.log('Stats:', app.estatísticas());

// ==========================================
// 🏁 CONCLUSÃO
// ==========================================

console.log('\n=== PARABÉNS! ===\n');
console.log(`
  Você completou 15 desafios de JavaScript Intermediário!
  
  Se acertou:
  - 1-5: Ainda precisa revisar
  - 6-10: Você sabe bem!
  - 11-15: Você domina!
  - Todos: VOCÊ É UM DESENVOLVEDOR INTERMEDIÁRIO! 🚀
  
  PRÓXIMOS PASSOS:
  ⏳ Async/Await e Promises
  🌐 Fetch API e requisições
  🎛️ DOM Manipulation
  ⚛️ Frameworks (React, Vue)
  
  NÃO DESISTA - VOCÊ CONSEGUE!
`);
