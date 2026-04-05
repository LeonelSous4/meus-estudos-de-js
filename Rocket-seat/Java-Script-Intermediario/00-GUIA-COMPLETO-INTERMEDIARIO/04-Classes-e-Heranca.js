/*
  ==========================================
  📚 04 - CLASSES E HERANÇA: GUIA COMPLETO
  ==========================================
  
  Programação orientada a objetos em JS
  
  Tópicos:
  ✅ Sintaxe de classes ES6
  ✅ Constructor e propriedades
  ✅ Métodos de instância
  ✅ Métodos estáticos
  ✅ Getters e Setters
  ✅ Herança com extends
  ✅ super() e chamada de métodos pai
  ✅ Sobrescrita (override)
  ✅ Campos privados (#)
*/

console.log('============== CLASSES E HERANÇA ==============\n');

// ==========================================
// 🏗️ SEÇÃO 1: CLASSE BÁSICA
// ==========================================

console.log('--- SEÇÃO 1: Classe Básica ---\n');

// 1.1 - Criação e constructor
console.log('📌 1.1 - Criação de Classe\n');

class Pessoa {
  // Constructor é chamado ao instanciar
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  
  // Método de instância
  apresentar() {
    return `Olá, meu nome é ${this.nome}`;
  }
  
  fazAnos() {
    this.idade++;
    return `${this.nome} fez ${this.idade} anos`;
  }
}

// Criar instâncias
const pessoa1 = new Pessoa('Ana', 28);
const pessoa2 = new Pessoa('Bruno', 25);

console.log('Pessoa 1:', pessoa1);
console.log('Apresentação:', pessoa1.apresentar());
console.log('Faz anos:', pessoa1.fazAnos());

// ---

// 1.2 - Propriedades com valores padrão
console.log('\n📌 1.2 - Valores Padrão\n');

class Animal {
  constructor(nome, espécie = 'Desconhecida') {
    this.nome = nome;
    this.espécie = espécie;
    this.energia = 100;
  }
}

const animal1 = new Animal('Rex', 'Cachorro');
const animal2 = new Animal('Fluffy'); // sem espécie

console.log('Animal 1:', animal1);
console.log('Animal 2:', animal2); // espécie: 'Desconhecida'

// ==========================================
// 🎯 SEÇÃO 2: MÉTODOS E THIS
// ==========================================

console.log('\n--- SEÇÃO 2: Métodos de Instância e Estáticos ---\n');

// 2.1 - Métodos de instância (usam `this`)
console.log('📌 2.1 - Métodos de Instância\n');

class Conta {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }
  
  depositar(valor) {
    this.saldo += valor;
    return `Depositou R$ ${valor}. Novo saldo: R$ ${this.saldo}`;
  }
  
  sacar(valor) {
    if (valor > this.saldo) {
      return 'Saldo insuficiente';
    }
    this.saldo -= valor;
    return `Sacou R$ ${valor}. Novo saldo: R$ ${this.saldo}`;
  }
  
  consultarSaldo() {
    return this.saldo;
  }
}

const conta = new Conta('João', 1000);
console.log(conta.depositar(500));
console.log(conta.sacar(200));
console.log('Saldo:', conta.consultarSaldo());

// 2.2 - Métodos estáticos (static)
console.log('\n📌 2.2 - Métodos Estáticos\n');

class Calculadora {
  static PI = 3.14159; // Propriedade estática
  
  constructor(nome = 'Calc Padrão') {
    this.nome = nome;
  }
  
  // Método de instância
  somar(a, b) {
    return a + b;
  }
  
  // Método estático (não precisa new)
  static multiplicar(a, b) {
    return a * b;
  }
  
  static areaCirculo(raio) {
    return this.PI * raio * raio;
  }
}

// Usar método estático sem instanciar
console.log('2 * 3 =', Calculadora.multiplicar(2, 3));
console.log('Área do círculo (r=5):', Calculadora.areaCirculo(5));

// Instância normal
const calc = new Calculadora('Minha Calc');
console.log('1 + 2 =', calc.somar(1, 2));

// ==========================================
// 🔀 SEÇÃO 3: GETTERS E SETTERS
// ==========================================

console.log('\n--- SEÇÃO 3: Getters e Setters ---\n');

// 3.1 - Propriedades com validação
console.log('📌 3.1 - Getters e Setters\n');

class Produto {
  constructor(nome, preço, estoque = 0) {
    this._nome = nome; // _ indica "privado" (convenção)
    this._preço = preço;
    this._estoque = estoque;
  }
  
  // Getter (propriedade de leitura)
  get nome() {
    return this._nome;
  }
  
  // Setter (propriedade de escrita com validação)
  set nome(novoNome) {
    if (novoNome.length < 3) {
      console.log('Nome muito curto');
      return;
    }
    this._nome = novoNome;
  }
  
  get preço() {
    return this._preço.toFixed(2);
  }
  
  set preço(novoPreço) {
    if (novoPreço < 0) {
      console.log('Preço não pode ser negativo');
      return;
    }
    this._preço = novoPreço;
  }
  
  get disponível() {
    return this._estoque > 0;
  }
}

const produto = new Produto('Notebook', 2500, 3);
console.log('Nome:', produto.nome);
console.log('Preço:', produto.preço);
console.log('Disponível:', produto.disponível);

// Alterar via setter
produto.nome = 'Notebook Intel';
console.log('Novo nome:', produto.nome);

produto.nome = 'PC'; // Muito curto, não altera
console.log('Tentativa de nome curto:', produto.nome); // Ainda 'Notebook Intel'

// ==========================================
// 👨‍👩‍👧 SEÇÃO 4: HERANÇA (EXTENDS)
// ==========================================

console.log('\n--- SEÇÃO 4: Herança com Extends ---\n');

// 4.1 - Classe pai e filha básica
console.log('📌 4.1 - Herança Simples\n');

class Veiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidade = 0;
  }
  
  acelerar() {
    this.velocidade += 20;
    return `${this.marca} acelerou para ${this.velocidade} km/h`;
  }
  
  frear() {
    this.velocidade -= 10;
    if (this.velocidade < 0) this.velocidade = 0;
    return `${this.marca} freou para ${this.velocidade} km/h`;
  }
  
  detalhes() {
    return `${this.marca} ${this.modelo}`;
  }
}

class Carro extends Veiculo {
  constructor(marca, modelo, portas) {
    super(marca, modelo); // Chama constructor da classe pai
    this.portas = portas;
  }
  
  // Método adicional
  abrirPorta() {
    return `Carro tem ${this.portas} portas`;
  }
}

class Moto extends Veiculo {
  constructor(marca, modelo, cilindrada) {
    super(marca, modelo);
    this.cilindrada = cilindrada;
  }
  
  empinar() {
    return `Moto ${this.marca} empinando!`;
  }
}

const carro = new Carro('Toyota', 'Corolla', 4);
const moto = new Moto('Honda', 'CB 500', 500);

console.log('Carro:', carro.detalhes());
console.log(carro.acelerar());
console.log(carro.abrirPorta());

console.log('\nMoto:', moto.detalhes());
console.log(moto.acelerar());
console.log(moto.empinar());

// ---

// 4.2 - Método super() para chamar pai
console.log('\n📌 4.2 - Métodos super()\n');

class ContaBancaria {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }
  
  consultarSaldo() {
    return `Saldo de ${this.titular}: R$ ${this.saldo}`;
  }
}

// CORREÇÃO: Removido espaço em ContaBancariaPremium
class ContaBancariaPremium extends ContaBancaria {
  constructor(titular, saldo, limite = 0) {
    super(titular, saldo);
    this.limite = limite;
  }
  
  // Sobrescrita
  consultarSaldo() {
    const info = super.consultarSaldo();
    return info + ` + Limite: R$ ${this.limite}`;
  }
}

const contaNormal = new ContaBancaria('João', 1000);
const contaPremium = new ContaBancariaPremium('Ana', 2000, 500);

console.log(contaNormal.consultarSaldo());
console.log(contaPremium.consultarSaldo());

// ==========================================
// 🔒 SEÇÃO 5: CAMPOS PRIVADOS (#)
// ==========================================

console.log('\n--- SEÇÃO 5: Campos Privados (ES2022) ---\n');

// 5.1 - Usar # para campos privados (verdadeiramente privados)
console.log('📌 5.1 - Campos Privados com #\n');

class ContaSensível {
  #senha; // Campo privado (realmente privado, não apenas convenção)
  #historico = [];
  
  constructor(titular, senha) {
    this.titular = titular;
    this.#senha = senha;
  }
  
  autenticar(senhaInserida) { // Corrigido erro de digitação
    if (senhaInserida === this.#senha) {
      return 'Autenticado';
    }
    return 'Senha incorreta';
  }
  
  registrarOperação(tipo) {
    this.#historico.push({
      tipo,
      data: new Date().toLocaleString()
    });
  }
  
  verHistórico(senhaInserida) { // Corrigido erro de digitação
    if (senhaInserida === this.#senha) {
      return this.#historico;
    }
    return 'Acesso negado';
  }
}

const contaSensível = new ContaSensível('Bruno', '12345');
console.log(contaSensível.autenticar('12345'));
contaSensível.registrarOperação('depósito');
console.log('Histórico:', contaSensível.verHistórico('12345'));

// Campos privados não são acessíveis fora da classe
// console.log(contaSensível.#senha); // ERRO! Se descomentar, o código para de funcionar.
console.log('Tentando acessar #senha: Campos privados só são acessíveis dentro da classe.');

// ==========================================
// 🎯 SEÇÃO 6: CASOS PRÁTICOS
// ==========================================

console.log('\n--- SEÇÃO 6: Casos Práticos ---\n');

// 6.1 - Sistema de biblioteca
console.log('📌 6.1 - Sistema de Biblioteca\n');

class Livro {
  constructor(titulo, autor, isbn) {
    this.titulo = titulo;
    this.autor = autor;
    this.isbn = isbn;
    this.emprestado = false;
  }
  
  emprestar() {
    if (this.emprestado) {
      return 'Livro já está emprestado';
    }
    this.emprestado = true;
    return `${this.titulo} foi emprestado`;
  }
  
  devolver() {
    this.emprestado = false;
    return `${this.titulo} foi devolvido`;
  }
}

class Biblioteca {
  constructor(nome) {
    this.nome = nome;
    this.livros = [];
  }
  
  adicionar(livro) {
    this.livros.push(livro);
    return `${livro.titulo} foi adicionado`;
  }
  
  procurar(titulo) {
    return this.livros.find(l => l.titulo.toLowerCase() === titulo.toLowerCase());
  }
  
  listarDisponíveis() {
    return this.livros.filter(l => !l.emprestado);
  }
}

const lib = new Biblioteca('Biblioteca Central');
const livro1 = new Livro('1984', 'George Orwell', '123-456');
const livro2 = new Livro('O Hobbit', 'J.R.R. Tolkien', '789-012');

lib.adicionar(livro1);
lib.adicionar(livro2);

console.log(livro1.emprestar());
console.log('Disponíveis:', lib.listarDisponíveis().map(l => l.titulo));

// ==========================================
// 🏁 CONCLUSÃO
// ==========================================

console.log('\n=== RESUMO FINAL ===\n');
console.log(`
  ✅ Classes tornam código mais organizável
  ✅ Herança reduz duplicação de código
  ✅ Métodos estáticos para funcionalidades gerais
  ✅ Getters/setters para validação
  ✅ Campos privados (#) para segurança real
  ✅ super() para reutilizar lógica da classe pai
  ✅ Combine com objetos para aplicações robustas
  
  PRÓXIMO: Combine com Array methods para dominate!
`);