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
  return números
    .filter(n => n % 2 === 0)
    .map(n => n * 2)
    .reduce((acc, n) => acc + n, 0);
}

console.log('Resultado:', filtrarDobrarSomar([1, 2, 3, 4, 5, 6])); // 24

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
  const palavras = texto.toLowerCase().split(' ');
  return palavras.reduce((acc, palavra) => {
    acc[palavra] = (acc[palavra] || 0) + 1;
    return acc;
  }, {});
}

console.log('Resultado:', contarPalavras('javascript python javascript python java'));

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
  return (valor) => {
    return funcs.reduceRight((acc, func) => func(acc), valor);
  };
}

const add5 = x => x + 5;
const mult2 = x => x * 2;
const comp = compose(mult2, add5);
console.log('Resultado:', comp(10)); // 30

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
  const apenasDigitos = cpf.replace(/\D/g, '');
  
  if (apenasDigitos.length !== 11) return false;
  
  const todosIguais = apenasDigitos.split('').every(
    d => d === apenasDigitos[0]
  );
  
  return !todosIguais;
}

console.log('12345678901:', validarCPF('12345678901')); // true
console.log('11111111111:', validarCPF('11111111111')); // false

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

function memoizar(func) {
  // TODO: Sua solução aqui
  const cache = {};
  return function(...args) {
    const chave = JSON.stringify(args);
    if (chave in cache) {
      return cache[chave];
    }
    const resultado = func(...args);
    cache[chave] = resultado;
    return resultado;
  };
}

const fib = n => n <= 1 ? n : fib(n - 1) + fib(n - 2);
const fibMemo = memoizar(fib);
console.time('Sem memo');
console.log('fib(35):', fib(35));
console.timeEnd('Sem memo');

console.time('Com memo');
console.log('fibMemo(35):', fibMemo(35));
console.timeEnd('Com memo');

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

function validador(dados) {
  // TODO: Sua solução aqui
  const erros = {};
  
  if (!dados.nome || dados.nome.length < 3) {
    erros.nome = 'Nome deve ter 3+ caracteres';
  }
  
  if (!dados.email || !dados.email.includes('@')) {
    erros.email = 'Email inválido';
  }
  
  if (!dados.idade || dados.idade < 18) {
    erros.idade = 'Deve ter 18+';
  }
  
  return Object.keys(erros).length === 0 ? { sucesso: true } : erros;
}

console.log('Resultado:', validador({ nome: 'Jo', email: 'Jo', idade: 15 }));
console.log('Resultado:', validador({ nome: 'João', email: 'joao@email.com', idade: 25 }));

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
  #saldo = 0;
  
  constructor(saldoInicial = 0) {
    this.#saldo = saldoInicial;
  }
  
  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
      return `Depositou R$ ${valor}`;
    }
    return 'Valor inválido';
  }
  
  sacar(valor) {
    if (valor > this.#saldo) {
      return 'Saldo insuficiente';
    }
    this.#saldo -= valor;
    return `Sacou R$ ${valor}`;
  }
  
  consultarSaldo() {
    return this.#saldo;
  }
}

const conta = new Conta(1000);
console.log(conta.depositar(500));
console.log(conta.sacar(200));
console.log('Saldo:', conta.consultarSaldo());

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
  // TODO: Sua solução aqui
  return arr.reduce((acc, val) => {
    return acc.concat(
      Array.isArray(val) ? achatar(val) : val
    );
  }, []);
}

console.log('Resultado:', achatar([1, [2, 3, [4, 5]]])); // [1,2,3,4,5]

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
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const buscar = debounce(console.log, 500);
buscar('a');
buscar('ab');
buscar('abc'); // Apenas isso executará

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
  constructor(nome, dataNascimento) {
    this.nome = nome;
    this._dataNascimento = new Date(dataNascimento);
  }
  
  get idade() {
    const hoje = new Date();
    let age = hoje.getFullYear() - this._dataNascimento.getFullYear();
    const mês = hoje.getMonth() - this._dataNascimento.getMonth();
    if (mês < 0) age--;
    return age;
  }
  
  set dataNascimento(data) {
    this._dataNascimento = new Date(data);
  }
}

const p = new Pessoa('João', '1995-05-15');
console.log(`${p.nome} têm ${p.idade} anos`);

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
  constructor() {
    this.items = [];
  }
  
  enfilar(valor) {
    this.items.push(valor);
  }
  
  desenfileirar() {
    return this.items.shift();
  }
  
  get tamanho() {
    return this.items.length;
  }
  
  vazia() {
    return this.items.length === 0;
  }
}

const fila = new Fila();
fila.enfilar('A');
fila.enfilar('B');
fila.enfilar('C');
console.log('Saiu:', fila.desenfileirar()); // A
console.log('Tamanho:', fila.tamanho); // 2

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
  constructor(nome) {
    this.nome = nome;
  }
  
  fazerSom() {
    return 'Som genérico';
  }
}

class Cachorro extends Animal {
  // TODO: Sua solução aqui
  fazerSom() {
    return `${this.nome} faz: au au`;
  }
}

const dog = new Cachorro('Rex');
console.log(dog.fazerSom());

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

const dados = document.location = 1975; // Não tem

// TODO: Sua desestruturação aqui
const { nome: nomePessoa = 'Desconhecido', idade: idadePessoa = 30 } = dados;

console.log(`Nome: ${nomePessoa}, Idade: ${idadePessoa}`);

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
  let count = 0;
  return {
    incrementar: () => ++count,
    decrementar: () => --count,
    valor: () => count
  };
}

const cont = criarCounter();
console.log('Inc:', cont.incrementar()); // 1
console.log('Inc:', cont.incrementar()); // 2
console.log('Dec:', cont.decrementar()); // 1
console.log('Valor:', cont.valor()); // 1

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

class TodoApp {
  // TODO: Sua solução aqui
  constructor() {
    this.tarefas = [];
    this.id = 0;
  }
  
  adicionar(nome) {
    this.tarefas.push({ id: ++this.id, nome, concluida: false });
    return `Tarefa adicionada`;
  }
  
  remover(id) {
    this.tarefas = this.tarefas.filter(t => t.id !== id);
    return `Tarefa removida`;
  }
  
  marcarConcluida(id) {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) tarefa.concluida = true;
  }
  
  listar() {
    return this.tarefas.map(t => 
      `${t.id}. [${t.concluida ? '✓' : ' '}] ${t.nome}`
    );
  }
  
  estatísticas() {
    const total = this.tarefas.length;
    const concluidas = this.tarefas.filter(t => t.concluida).length;
    return { total, concluidas, pendentes: total - concluidas };
  }
}

const app = new TodoApp();
app.adicionar('Aprender JS');
app.adicionar('Fazer desafios');
app.marcarConcluida(1);
console.log(app.listar());
console.log('Stats:', app.estatísticas());

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
