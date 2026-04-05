/*
  ==========================================
  📚 08 - THIS: CONTEXTO EM JAVASCRIPT
  ==========================================
  
  Um dos conceitos mais confusos de JS
  
  Tópicos:
  ✅ `this` em métodos
  ✅ `this` em funções normais
  ✅ `this` em arrow functions
  ✅ `this` em classes
  ✅ call(), apply(), bind()
  ✅ Preservar contexto
  ✅ Boas práticas
*/

console.log('============== THIS - CONTEXTO ==============\n');

// ==========================================
// 📍 SEÇÃO 1: THIS EM MÉTODOS
// ==========================================

console.log('--- SEÇÃO 1: `this` em Métodos ---\n');

// 1.1 - This em método de objeto
console.log('📌 1.1 - This em Objeto\n');

const usuario = {
  nome: 'João',
  idade: 28,
  
  apresentar: function() {
    console.log(`${this.nome} tem ${this.idade} anos`);
    console.log('this:', this);
  }
};

usuario.apresentar();

// ✅ Quando uma função é método, `this` = objeto que a contém

// 1.2 - This em função anexada
console.log('\n📌 1.2 - This Anexado a Propriedade\n');

function apresentar2() {
  console.log(`Sou ${this.nome}`);
}

const pessoa = {
  nome: 'Ana',
  apresentar: apresentar2
};

pessoa.apresentar(); // `this` = pessoa

// ==========================================
// ⚠️ SEÇÃO 2: THIS EM FUNÇÕES NORMAIS
// ==========================================

console.log('\n--- SEÇÃO 2: `this` em Funções Normais ---\n');

// 2.1 - This em função solta
console.log('📌 2.1 - This em Função Solta\n');

function teste() {
  console.log('this em função solta:', this);
}

teste();
// Em modo normal: this = window (navegador) ou global (Node)
// Em 'use strict': this = undefined

// 2.2 - This em método anexado errado
console.log('\n📌 2.2 - Problema: This Perdido\n');

const carro = {
  marca: 'Toyota',
  velocidade: 0,
  
  acelerar: function() {
    console.log(`${this.marca} acelerou`);
  }
};

carro.acelerar(); // Funciona

// Mas se guardar a função em variável:
const acelerarSozinha = carro.acelerar;
// acelerarSozinha(); // ❌ ERRO: this = undefined ou window

console.log('Problema: ao passar função sem contexto');

// ==========================================
// 🔵 SEÇÃO 3: THIS EM ARROW FUNCTIONS
// ==========================================

console.log('\n--- SEÇÃO 3: `this` em Arrow Functions ---\n');

// 3.1 - Arrow function herda `this` do escopo pai
console.log('📌 3.1 - Arrow Function Herda This\n');

const objeto = {
  nome: 'Objeto',
  metodo: function() {
    console.log('Em função normal:', this.nome); // Objeto
    
    const arrowFunc = () => {
      console.log('Em arrow function:', this.nome); // Também Objeto!
    };
    arrowFunc();
  }
};

objeto.metodo();

// ✅ Arrow function NÃO tem seu próprio `this`
//    Usa o `this` do escopo externo (lexical this)

// 3.2 - Arrow function diretamente NÃO funciona
console.log('\n📌 3.2 - Arrow como Método (ERRADO)\n');

const meuObjeto = {
  valor: 42,
  metodo: () => {
    console.log('Em arrow como método:', this); // window/global!
    // this não referencia meuObjeto
  }
};

meuObjeto.metodo();

// ⚠️ Nunca use arrow function como método de objeto!

// ==========================================
// 🎯 SEÇÃO 4: THIS EM CLASSES
// ==========================================

console.log('\n--- SEÇÃO 4: `this` em Classes ---\n');

// 4.1 - This em classe
console.log('📌 4.1 - This em Classe\n');

class Produto {
  constructor(nome, preço) {
    this.nome = nome;
    this.preço = preço;
  }
  
  descricao() {
    return `${this.nome} custa R$ ${this.preço}`;
  }
}

const produto = new Produto('Mouse', 50);
console.log(produto.descricao());

// ✅ Em classes, `this` sempre referencia a instância

// ==========================================
// 🔀 SEÇÃO 5: CALL, APPLY, BIND
// ==========================================

console.log('\n--- SEÇÃO 5: call(), apply(), bind() ---\n');

// 5.1 - call(): Chama função com `this` específico
console.log('📌 5.1 - call()\n');

function saudacao(mensagem) {
  console.log(`${mensagem}, ${this.nome}`);
}

const pessoa1 = { nome: 'João' };
const pessoa2 = { nome: 'Maria' };

saudacao.call(pessoa1, 'Olá'); // Olá, João
saudacao.call(pessoa2, 'Oi'); // Oi, Maria

// 5.2 - apply(): Parecido com call, mas args em array
console.log('\n📌 5.2 - apply()\n');

function apresentacao(saudacao, despedida) {
  console.log(`${saudacao} ${this.nome} ${despedida}`);
}

apresentacao.apply(pessoa1, ['Olá', '!']); // Olá João!

// 5.3 - Diferença call vs apply
console.log('\n📌 5.3 - call vs apply\n');

console.log(`
  call(objeto, arg1, arg2, ...)    → argumentos soltos
  apply(objeto, [arg1, arg2, ...]) → argumentos em array
`);

// 5.4 - bind(): Retorna nova função com `this` fixo
console.log('\n📌 5.4 - bind()\n');

function cumprimento() {
  console.log(`Olá, ${this.nome}`);
}

const pessoa3 = { nome: 'Ana' };
const cumprimentoAna = cumprimento.bind(pessoa3);

cumprimentoAna(); // Sempre é Ana, não importa como chamar

// ==========================================
// 🛠️ SEÇÃO 6: PRESERVAR CONTEXTO
// ==========================================

console.log('\n--- SEÇÃO 6: Preservando Contexto ---\n');

// 6.1 - Problema: this perdido em callbacks
console.log('📌 6.1 - Problema com Callbacks\n');

class Botão {
  constructor(nome) {
    this.nome = nome;
    this.cliques = 0;
  }
  
  // ❌ ERRADO
  clicar_errado = function() {
    console.log(`${this.nome} foi clicado`);
    setTimeout(function() {
      // ❌ this perdido aqui
      console.log('Cliques:', this.cliques); // undefined
    }, 1000);
  }
  
  // ✅ CORRETO COM BIND
  clicar_correto1 = function() {
    console.log(`${this.nome} foi clicado`);
    setTimeout(function() {
      this.cliques++;
      console.log('Cliques:', this.cliques);
    }.bind(this), 1000);
  }
  
  // ✅ CORRETO COM ARROW
  clicar_correto2 = function() {
    console.log(`${this.nome} foi clicado`);
    setTimeout(() => {
      this.cliques++; // arrow herda this
      console.log('Cliques:', this.cliques);
    }, 1000);
  }
}

const botão = new Botão('Enviar');
// botão.clicar_errado(); // Problema
// botão.clicar_correto1(); // Usa bind
// botão.clicar_correto2(); // Usa arrow

// 6.2 - Bind em eventos
console.log('\n📌 6.2 - Bind em Manipulação\n');

class Contador {
  constructor() {
    this.count = 0;
  }
  
  incrementar() {
    this.count++;
    console.log('Count:', this.count);
  }
}

const contador = new Contador();
// Se fosse HTML, ao clicar um botão:
// btn.addEventListener('click', contador.incrementar); // ❌ this perdido
// btn.addEventListener('click', contador.incrementar.bind(contador)); // ✅ OK
// btn.addEventListener('click', () => contador.incrementar()); // ✅ OK

// ==========================================
// 🎯 SEÇÃO 7: CASOS PRÁTICOS
// ==========================================

console.log('\n--- SEÇÃO 7: Casos Práticos ---\n');

// 7.1 - Sistema com contexto correto
console.log('📌 7.1 - Sistema de Usuário\n');

class SistemaUsoários {
  constructor() {
    this.usuários = [];
  }
  
  adicionar(nome) {
    this.usuários.push(nome);
    console.log(`${nome} adicionado`);
  }
  
  listar = function() {
    console.log('Usuários:', this.usuários);
  }
  
  processarEmLote = function(nomes) {
    nomes.forEach(nome => {
      this.adicionar(nome);
    });
  }
}

const sistema = new SistemaUsoários();
sistema.processarEmLote(['João', 'Maria']);
sistema.listar();

// ==========================================
// 🏁 CONCLUSÃO
// ==========================================

console.log('\n=== RESUMO FINAL ===\n');
console.log(`
  ✅ this depende de COMO a função é chamada
  ✅ Em métodos: this = objeto
  ✅ Em funções soltas: this = global/undefined
  ✅ Em arrow functions: this = escopo pai (lexical)
  ✅ Use bind() para fixar contexto
  ✅ Prefira arrow functions em callbacks
  ✅ Nunca use arrow function como método
  
  REGRA DE OURO:
  - Função? → Use function normal
  - Callback? → Use arrow function
  - Método em classe? → Use function normal
  - Método em objeto? → Use function normal
  
  PRÓXIMO: Combine this com closures para máxima flexibilidade!
`);
