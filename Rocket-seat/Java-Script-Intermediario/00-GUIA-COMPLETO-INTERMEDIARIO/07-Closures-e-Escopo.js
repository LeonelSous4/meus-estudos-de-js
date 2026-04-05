/*
  ==========================================
  📚 07 - CLOSURES E ESCOPO: GUIA AVANÇADO
  ==========================================
  
  Conceito difícil mas ESSENCIAL
  
  Tópicos:
  ✅ Escopo: global, local, lexical
  ✅ Cadeia de escopo (scope chain)
  ✅ Closures: capturar variáveis
  ✅ Factory functions
  ✅ Data privacy (variáveis privadas)
  ✅ Callbacks com closures
  ✅ Memory leaks
  ✅ IIFE
*/

console.log('============== CLOSURES E ESCOPO ==============\n');

// ==========================================
// 🌍 SEÇÃO 1: ESCOPO
// ==========================================

console.log('--- SEÇÃO 1: Entendendo Escopo ---\n');

// 1.1 - Escopo global
console.log('📌 1.1 - Escopo Global\n');

var global = 'Acessível em todo lugar';

function teste1() {
  console.log('De dentro:', global);
}

teste1();
console.log('De fora:', global);

// 1.2 - Escopo local (função)
console.log('\n📌 1.2 - Escopo Local\n');

function teste2() {
  const local = 'Existe só na função';
  console.log('De dentro:', local);
}

teste2();
// console.log(local); // ReferenceError!

// 1.3 - Bloco de escopo (let/const)
console.log('\n📌 1.3 - Escopo de Bloco\n');

{
  const bloqueConstante = 'Existe só no bloco';
  let bloceLet = 'Também no bloco';
  console.log(bloqueConstante, bloceLet);
}
// console.log(bloqueConstante); // ReferenceError!

// ⚠️ Cuidado: VAR não respeita bloco!
if (true) {
  var varNaoRespeita = 'Vazou para fora';
}
console.log(varNaoRespeita); // Existe! (por isso evite var)

// ==========================================
// 🔗 SEÇÃO 2: CLOSURES
// ==========================================

console.log('\n--- SEÇÃO 2: Closures ---\n');

// 2.1 - Closure simples
console.log('📌 2.1 - Closure Simples\n');

function criarContador() {
  let contador = 0; // Variável capturada
  
  return function() {
    contador++;
    return contador;
  };
}

const meuContador = criarContador();
console.log(meuContador()); // 1
console.log(meuContador()); // 2
console.log(meuContador()); // 3

// Cada closure tem sua própria variável
const outroContador = criarContador();
console.log(outroContador()); // 1 (começa do zero)

// ✅ Closure: função que "lembra" de variáveis do seu escopo

// 2.2 - Múltiplos closures
console.log('\n📌 2.2 - Múltiplos Closures\n');

function criarCalculadora(operacao) {
  return function(a, b) {
    switch(operacao) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return a / b;
      default: return 0;
    }
  };
}

const somar = criarCalculadora('+');
const multiplicar = criarCalculadora('*');

console.log('Somar 5 + 3:', somar(5, 3)); // 8
console.log('Multiplicar 5 * 3:', multiplicar(5, 3)); // 15

// ==========================================
// 🏭 SEÇÃO 3: FACTORY FUNCTIONS
// ==========================================

console.log('\n--- SEÇÃO 3: Factory Functions ---\n');

// 3.1 - Factory padrão
console.log('📌 3.1 - Factory Básica\n');

function criarPessoa(nome, idade) {
  return {
    nome,
    idade,
    apresentar: function() {
      return `Oi, sou ${this.nome}`;
    },
    fazerAnos: function() {
      this.idade++;
      return this.idade;
    }
  };
}

const pessoa1 = criarPessoa('Ana', 28);
const pessoa2 = criarPessoa('Bruno', 25);

console.log(pessoa1.apresentar());
console.log('Ana fez anos:', pessoa1.fazerAnos());

// 3.2 - Factory com dados privados
console.log('\n📌 3.2 - Factory com Privacidade\n');

function criarConta(saldoInicial) {
  let saldo = saldoInicial; // Privado (closure)
  
  return {
    depositar: function(valor) {
      saldo += valor;
      return `Depositou R$ ${valor}. Novo saldo: ${saldo}`;
    },
    sacar: function(valor) {
      if (valor > saldo) return 'Saldo insuficiente';
      saldo -= valor;
      return `Sacou R$ ${valor}. Novo saldo: ${saldo}`;
    },
    consultarSaldo: function() {
      return saldo;
    }
  };
}

const minhaConta = criarConta(1000);
console.log(minhaConta.depositar(500));
console.log(minhaConta.sacar(200));
console.log('Saldo:', minhaConta.consultarSaldo());

// ⚠️ Tente acessar saldo diretamente
console.log('saldo direto:', minhaConta.saldo); // undefined (protegido!)

// ==========================================
// 🔐 SEÇÃO 4: DATA PRIVACY
// ==========================================

console.log('\n--- SEÇÃO 4: Dados Privados com Closures ---\n');

// 4.1 - Dados realmente privados
console.log('📌 4.1 - Privacidade Real\n');

function criarUsuário(email, senha) {
  // Dados privados via closure
  let _email = email;
  let _senha = senha;
  let tentativas = 0;
  
  return {
    autenticar: function(senhaInserida) {
      tentativas++;
      if (senhaInserida === _senha) {
        tentativas = 0;
        return 'Autenticado!';
      }
      if (tentativas >= 3) {
        return 'Conta bloqueada';
      }
      return `Senha incorreta. Tentativas: ${tentativas}`;
    },
    mudarSenha: function(senhaAtual, novaSenha) {
      if (senhaAtual === _senha) {
        _senha = novaSenha;
        return 'Senha alterada';
      }
      return 'Senha atual incorreta';
    },
    obterEmail: function() {
      // Máscara o email
      const [parte1, parte2] = _email.split('@');
      return `${parte1[0]}***@${parte2}`;
    }
  };
}

const usuário = criarUsuário('joao@email.com', '12345');
console.log(usuário.autenticar('123456')); // Errado
console.log(usuário.autenticar('12345')); // Certo
console.log('Email mascarado:', usuário.obterEmail());

// ==========================================
// ⏸️ SEÇÃO 5: IIFE (Immediately Invoked Function)
// ==========================================

console.log('\n--- SEÇÃO 5: IIFE ---\n');

// 5.1 - IIFE básica
console.log('📌 5.1 - IIFE Básica\n');

(function() {
  const variávelPrivada = 'Não vaza';
  console.log(variávelPrivada);
})();

// console.log(variávelPrivada); // ReferenceError!

// 5.2 - IIFE com retorno
console.log('\n📌 5.2 - IIFE com Retorno\n');

const config = (function() {
  const chavePrivada = 'abc123';
  
  return {
    obterChave: function(senha) {
      if (senha === '1234') {
        return chavePrivada;
      }
      return 'Acesso negado';
    }
  };
})();

console.log(config.obterChave('1234'));

// ==========================================
// 🎯 SEÇÃO 6: CASOS PRÁTICOS
// ==========================================

console.log('\n--- SEÇÃO 6: Casos Práticos ---\n');

// 6.1 - Sistema de autenticação
console.log('📌 6.1 - Sistema de Autenticação\n');

function criarSistema() {
  const usuários = []; // Privado
  let logado = null;
  
  return {
    registrar: function(nome, email, senha) {
      const existe = usuários.some(u => u.email === email);
      if (existe) return 'Email já registrado';
      
      usuários.push({ nome, email, senha });
      return 'Usuário registrado';
    },
    
    login: function(email, senha) {
      const usuário = usuários.find(u => u.email === email && u.senha === senha);
      if (usuário) {
        logado = usuário;
        return `Bem-vindo, ${usuário.nome}`;
      }
      return 'Credenciais inválidas';
    },
    
    logout: function() {
      logado = null;
      return 'Logout realizado';
    },
    
    ehEstado: function() {
      return logado ? `Logado como: ${logado.nome}` : 'Não logado';
    }
  };
}

const sistema = criarSistema();
console.log(sistema.registrar('Ana', 'ana@email.com', '123'));
console.log(sistema.login('ana@email.com', '123'));
console.log(sistema.ehEstado());

// ==========================================
// ⚠️ SEÇÃO 7: MEMORY LEAKS
// ==========================================

console.log('\n--- SEÇÃO 7: Memory Leaks com Closures ---\n');

console.log(`
  CUIDADO: Closures mantêm referências às variáveis capturadas
  Se não forem limpas, podem causar memory leaks
  
  Exemplo:
  function criarArray() {
    const arrayGrande = new Array(1000000); // Toma muita memória
    return function() {
      // Esta função retém arrayGrande na memória
      return arrayGrande.length;
    };
  }
  
  Solução:
  - Limpe referências quando não precisar
  - Use WeakMap/WeakSet para objetos que podem ser coletados
  - Tenha cuidado com loops que criam closures
`);

// ==========================================
// 🏁 CONCLUSÃO
// ==========================================

console.log('\n=== RESUMO FINAL ===\n');
console.log(`
  ✅ Closures são fundamentais em JS
  ✅ Permitem dados privados
  ✅ Factory functions criam objetos com estados
  ✅ IIFE isola código
  ✅ Cuidado com memory leaks
  ✅ Combine com classes para aproveitar o melhor
  
  PRÓXIMO: Use closures com This para código avançado!
`);
