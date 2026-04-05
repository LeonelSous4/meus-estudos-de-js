/*
  ==========================================
  📚 10 - TRATAMENTO DE ERROS: GUIA COMPLETO
  ==========================================
  
  Técnicas para lidar com erros robustamente
  
  Tópicos:
  ✅ Tipos de erro
  ✅ try...catch...finally
  ✅ throw - lançar erros
  ✅ Erros customizados
  ✅ instanceof para checagem
  ✅ Boas práticas
*/

console.log('============== TRATAMENTO DE ERROS ==============\n');

// ==========================================
// ⚠️ SEÇÃO 1: TIPOS DE ERRO
// ==========================================

console.log('--- SEÇÃO 1: Tipos de Erro ---\n');

// 1.1 - ReferenceError
console.log('📌 1.1 - ReferenceError\n');

try {
  console.log(variávelNaoExiste); // ReferenceError
} catch (erro) {
  console.log('Tipo:', erro.constructor.name);
  console.log('Mensagem:', erro.message);
}

// 1.2 - TypeError
console.log('\n📌 1.2 - TypeError\n');

try {
  const obj = { nome: 'João' };
  obj.metodoInexistente(); // TypeError
} catch (erro) {
  console.log('Tipo:', erro.constructor.name);
  console.log('Mensagem:', erro.message);
}

// 1.3 - SyntaxError (ocorre antes da execução)
// console.log(}{); // SyntaxError - não comentado pois interrompe

console.log('SyntaxError ocorre na análise do código');

// 1.4 - RangeError
console.log('\n📌 1.4 - RangeError\n');

try {
  new Array(-1); // RangeError
} catch (erro) {
  console.log('Tipo:', erro.constructor.name);
}

// ==========================================
// 🛡️ SEÇÃO 2: TRY...CATCH...FINALLY
// ==========================================

console.log('\n--- SEÇÃO 2: Try...Catch...Finally ---\n');

// 2.1 - Básico
console.log('📌 2.1 - Try...Catch Básico\n');

try {
  const resultado = 10 / 2;
  console.log('Resultado:', resultado); // Executa
} catch (erro) {
  console.log('Erro:', erro.message);
}

// 2.2 - Com finally
console.log('\n📌 2.2 - Try...Catch...Finally\n');

let arquivo = null;
try {
  // Simular abertura de arquivo
  console.log('Abrindo arquivo...');
  // arquivo = abrirArquivo(); // hipotético
  console.log('Processando...');
} catch (erro) {
  console.log('Erro ao processar:', erro.message);
} finally {
  console.log('Limpando recursos...');
  // fecharArquivo(arquivo);
}

// ✅ finally SEMPRE executa, mesmo com erro

// 2.3 - Múltiplos catches (opcional)
console.log('\n📌 2.3 - Múltiplos Catches\n');

try {
  throw new TypeError('Tipo inválido');
} catch (erro) {
  if (erro instanceof TypeError) {
    console.log('Erro de tipo tratado');
  } else if (erro instanceof ReferenceError) {
    console.log('Variável não definida');
  } else {
    console.log('Erro desconhecido');
  }
}

// ==========================================
// 🎯 SEÇÃO 3: THROW - LANÇAR ERROS
// ==========================================

console.log('\n--- SEÇÃO 3: Throw ---\n');

// 3.1 - Lançar erro predefinido
console.log('📌 3.1 - Lançar Erro Predefinido\n');

try {
  throw new Error('Algo deu errado!');
} catch (erro) {
  console.log('Capturado:', erro.message);
}

// 3.2 - Lançar tipos específicos
console.log('\n📌 3.2 - Lançar Tipos Específicos\n');

try {
  const idade = -5;
  if (idade < 0) {
    throw new RangeError('Idade não pode ser negativa');
  }
} catch (erro) {
  console.log('Erro:', erro.message);
}

// 3.3 - Relançar erro
console.log('\n📌 3.3 - Relançar Erro\n');

try {
  try {
    throw new Error('Erro original');
  } catch (erro) {
    console.log('Tratado internamente:', erro.message);
    throw erro; // Relança para catch externo
  }
} catch (erro) {
  console.log('Tratado externamente:', erro.message);
}

// ==========================================
// 🏗️ SEÇÃO 4: ERROS CUSTOMIZADOS
// ==========================================

console.log('\n--- SEÇÃO 4: Erros Customizados ---\n');

// 4.1 - Classe de erro customizada
console.log('📌 4.1 - Erro Customizado\n');

class ErroValidação extends Error {
  constructor(mensagem, campo) {
    super(mensagem);
    this.nome = 'ErroValidação';
    this.campo = campo;
  }
}

try {
  if (!validarEmail('email-inválido')) {
    throw new ErroValidação('Email inválido', 'email');
  }
} catch (erro) {
  if (erro instanceof ErroValidação) {
    console.log(`Campo: ${erro.campo}`);
    console.log(`Mensagem: ${erro.message}`);
  }
}

function validarEmail(email) {
  return email.includes('@');
}

// 4.2 - Erro com informações adicionais
console.log('\n📌 4.2 - Erro com Contexto\n');

class ErroAPi extends Error {
  constructor(mensagem, status, dados) {
    super(mensagem);
    this.status = status;
    this.dados = dados;
    this.timestamp = new Date();
  }
}

try {
  // Simular erro de API
  throw new ErroAPi('Falha de conexão', 500, { tentativa: 3 });
} catch (erro) {
  if (erro instanceof ErroAPi) {
    console.log(`Status: ${erro.status}`);
    console.log(`Dados: ${JSON.stringify(erro.dados)}`);
    console.log(`Quando: ${erro.timestamp}`);
  }
}

// ==========================================
// 🎯 SEÇÃO 5: BOAS PRÁTICAS
// ==========================================

console.log('\n--- SEÇÃO 5: Padrões e Boas Práticas ---\n');

// 5.1 - Validar antes de errar
console.log('📌 5.1 - Validação Defensiva\n');

function dividir(a, b) {
  if (b === 0) {
    throw new Error('Divisão por zero');
  }
  return a / b;
}

try {
  console.log('Resultado:', dividir(10, 2));
  console.log('Resultado:', dividir(10, 0)); // Erro
} catch (erro) {
  console.log('Erro capturado:', erro.message);
}

// 5.2 - Não engolir erros silenciosamente
console.log('\n📌 5.2 - Não Silenciar Erros\n');

// ❌ ERRADO
try {
  // alguma lógica
} catch (erro) {
  // Não fazer nada (bad practice!)
}

// ✅ CORRETO
try {
  // alguma lógica
} catch (erro) {
  console.error('Erro:', erro);
  // ou relançar
  // throw erro;
}

// 5.3 - Stack trace (rastreamento)
console.log('\n📌 5.3 - Stack Trace\n');

try {
  function a() {
    throw new Error('Erro em A');
  }
  function b() {
    a();
  }
  b();
} catch (erro) {
  console.log('Stack:', erro.stack);
}

// ==========================================
// 🎯 SEÇÃO 6: CASOS PRÁTICOS
// ==========================================

console.log('\n--- SEÇÃO 6: Casos Práticos ---\n');

// 6.1 - Validar entrada de usuário
console.log('📌 6.1 - Validar Entrada\n');

function criarUsuário(nome, email, idade) {
  try {
    if (!nome || nome.length < 3) {
      throw new ErroValidação('Nome deve ter 3+ caracteres', 'nome');
    }
    if (!email.includes('@')) {
      throw new ErroValidação('Email inválido', 'email');
    }
    if (idade < 18) {
      throw new ErroValidação('Deve ter 18+', 'idade');
    }
    console.log(`Usuário criado: ${nome}`);
  } catch (erro) {
    console.log(`Erro em ${erro.campo}: ${erro.message}`);
  }
}

criarUsuário('Jo', 'jo@email.com', 25);
criarUsuário('João', 'joao@email.com', 25);

// 6.2 - Operações assíncronas (fetch simulado)
console.log('\n📌 6.2 - Operação Assíncrona\n');

function buscarDados() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({ dados: 'sucesso' });
      } else {
        reject(new Error('Falha na requisição'));
      }
    }, 100);
  });
}

buscarDados()
  .then(resultado => console.log('Dados:', resultado))
  .catch(erro => console.log('Erro capturado:', erro.message));

// ==========================================
// 🏁 CONCLUSÃO
// ==========================================

console.log('\n=== RESUMO FINAL ===\n');
console.log(`
  ✅ Sempre trate erros previsíveis
  ✅ Use try...catch para operações arriscadas
  ✅ Finally para limpeza de recursos
  ✅ Throw para sinalizar problemas
  ✅ Crie erros customizados para contexto
  ✅ Não engula erros silenciosamente
  ✅ Use instanceof para checagem de tipo
  ✅ Log/rastreie erros em produção
  
  PRÓXIMO: Combine com Promises para requisições!
`);
