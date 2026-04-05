/*
  ==========================================
  📚 09 - DESESTRUTURAÇÃO: GUIA COMPLETO
  ==========================================
  
  Sintaxe moderna para extrair valores
  
  Tópicos:
  ✅ Desestruturação de arrays
  ✅ Desestruturação de objetos
  ✅ Rest operator (...)
  ✅ Spread operator (...)
  ✅ Valores padrão
  ✅ Renomeação
  ✅ Aninhada
  ✅ Em parâmetros
*/

console.log('============== DESESTRUTURAÇÃO ==============\n');

// ==========================================
// 🔷 SEÇÃO 1: DESESTRUTURAÇÃO DE ARRAYS
// ==========================================

console.log('--- SEÇÃO 1: Desestruturação de Arrays ---\n');

// 1.1 - Básica
console.log('📌 1.1 - Desestruturação Array Básica\n');

const cores = ['vermelho', 'verde', 'azul'];

// Sem desestruturação
const cor1 = cores[0];
const cor2 = cores[1];

// Com desestruturação
const [c1, c2, c3] = cores;
console.log(`${c1}, ${c2}, ${c3}`);

// 1.2 - Pular elementos
console.log('\n📌 1.2 - Pular Elementos\n');

const [primeiro, , terceiro] = cores;
console.log(`1º: ${primeiro}, 3º: ${terceiro}`);

// 1.3 - Rest operator (...) pega resto
console.log('\n📌 1.3 - Rest Operator\n');

const [p1, ...resto] = cores;
console.log('Primeiro:', p1);
console.log('Resto:', resto); // ['verde', 'azul']

// 1.4 - Valores padrão
console.log('\n📌 1.4 - Valores Padrão\n');

const [a = 'padrão1', b = 'padrão2', c = 'padrão3', d = 'padrão4'] = ['um', 'dois'];
console.log(a, b, c, d); // 'um' 'dois' 'padrão3' 'padrão4'

// ==========================================
// 🔶 SEÇÃO 2: DESESTRUTURAÇÃO DE OBJETOS
// ==========================================

console.log('\n--- SEÇÃO 2: Desestruturação de Objetos ---\n');

// 2.1 - Básica
console.log('📌 2.1 - Desestruturação Objeto Básica\n');

const usuario = {
  nome: 'João',
  idade: 28,
  email: 'joao@email.com',
  ativo: true
};

// Sem desestruturação
const nome1 = usuario.nome;
const idade1 = usuario.idade;

// Com desestruturação
const { nome, idade, email } = usuario;
console.log(`${nome}, ${idade}, ${email}`);

// 2.2 - Seletivo (pegar apenas alguns)
console.log('\n📌 2.2 - Seletivo\n');

const { nome: nomeUsuário, idade: idadeUsuario } = usuario;
console.log(nomeUsuário, idadeUsuario);

// 2.3 - Valores padrão
console.log('\n📌 2.3 - Valores Padrão\n');

const { nome: n, telefone = 'não informado' } = usuario;
console.log(`${n}, Tel: ${telefone}`);

// 2.4 - Rest  em objetos
console.log('\n📌 2.4 - Rest em Objetos\n');

const { nome: n2, ...outrosDados } = usuario;
console.log('Nome:', n2);
console.log('Outros dados:', outrosDados);

// ==========================================
// 📦 SEÇÃO 3: SPREAD OPERATOR
// ==========================================

console.log('\n--- SEÇÃO 3: Spread Operator ---\n');

// 3.1 - Spread em arrays
console.log('📌 3.1 - Spread em Arrays\n');

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Sem spread: arr1.concat(arr2)
// Com spread:
const juntado = [...arr1, ...arr2];
console.log('Juntado:', juntado);

// Adicionar elementos
const comNovo = [0, ...arr1, 3.5, ...arr2];
console.log('Com novo:', comNovo);

// 3.2 - Spread em objetos
console.log('\n📌 3.2 - Spread em Objetos\n');

const objA = { x: 1, y: 2 };
const objB = { z: 3 };

const mergeado = { ...objA, ...objB };
console.log('Mergeado:', mergeado); // { x: 1, y: 2, z: 3 }

// Sobrescrever propriedade
const comSobrescrita = { ...objA, y: 999 };
console.log('Sobrescrita:', comSobrescrita); // { x: 1, y: 999 }

// 3.3 - Cópia rasa (shallow copy)
console.log('\n📌 3.3 - Cópia com Spread\n');

const original = { nome: 'Ana', dados: { idade: 30 } };
const cópia = { ...original };

cópia.nome = 'Bruno'; // Não afeta original
console.log('Original:', original.nome); // 'Ana'
console.log('Cópia:', cópia.nome); // 'Bruno'

// ⚠️ Mas arrays/objetos aninhados são referência
cópia.dados.idade = 40;
console.log('Original.dados.idade:', original.dados.idade); // 40 (afetado!)

// ==========================================
// 🎯 SEÇÃO 4: DESESTRUTURAÇÃO ANINHADA
// ==========================================

console.log('\n--- SEÇÃO 4: Desestruturação Aninhada ---\n');

// 4.1 - Arrays aninhados
console.log('📌 4.1 - Arrays Aninhados\n');

const matriz = [[1, 2], [3, 4], [5, 6]];
const [[a1, a2], [b1, b2]] = matriz;
console.log(a1, a2, b1, b2); // 1 2 3 4

// 4.2 - Objetos aninhados
console.log('\n📌 4.2 - Objetos Aninhados\n');

const pessoa = {
  nome: 'Carlos',
  endereço: {
    cidade: 'São Paulo',
    cep: '01234-567'
  }
};

const { nome: n3, endereço: { cidade, cep } } = pessoa;
console.log(`${n3} em ${cidade}`);

// ==========================================
// 🔧 SEÇÃO 5: EM PARÂMETROS DE FUNÇÃO
// ==========================================

console.log('\n--- SEÇÃO 5: Desestruturação em Parâmetros ---\n');

// 5.1 - Função com desestruturação de array
console.log('📌 5.1 - Array em Parâmetros\n');

function soma([a, b]) {
  return a + b;
}

console.log('Soma:', soma([5, 3])); // 8

// 5.2 - Função com desestruturação de objeto
console.log('\n📌 5.2 - Objeto em Parâmetros\n');

function apresentarPessoa({ nome, idade }) {
  console.log(`${nome} tem ${idade} anos`);
}

apresentarPessoa({ nome: 'Diana', idade: 26 });

// 5.3 - Com valores padrão
console.log('\n📌 5.3 - Valores Padrão em Parâmetros\n');

function configurar({ tema = 'light', idioma = 'pt-BR' } = {}) {
  console.log(`Tema: ${tema}, Idioma: ${idioma}`);
}

configurar(); // Valores padrão
configurar({ tema: 'dark' }); // Parcial
configurar({ tema: 'dark', idioma: 'en' }); // Completo

// ==========================================
// 🎯 SEÇÃO 6: REST VS SPREAD
// ==========================================

console.log('\n--- SEÇÃO 6: Rest vs Spread ---\n');

console.log(`
  REST (...) - Receber valores
  ✓ Desestruturação: [a, ...resto] = array
  ✓ Parâmetros: function(...args)
  ✓ Agrupa valores em array
  
  SPREAD (...) - Espalhar valores
  ✓ Arrays: [...arr]
  ✓ Objetos: {...obj}
  ✓ Argumentos: func(...array)
  ✓ Distribui elementos
`);

// Exemplo: Rest em parâmetros
function listarNomes(primeiro, ...resto) {
  console.log('Primeiro:', primeiro);
  console.log('Resto:', resto);
}

listarNomes('Ana', 'Bruno', 'Carla');

// ==========================================
// 🎯 SEÇÃO 7: CASOS PRÁTICOS
// ==========================================

console.log('\n--- SEÇÃO 7: Casos Práticos ---\n');

// 7.1 - Extrair dados de API
console.log('📌 7.1 - Dados de API\n');

const respostaAPI = {
  id: 1,
  nome: 'Produto',
  preço: 99.99,
  descricao: 'Descrição longa...',
  sku: 'SKU123',
  categoria: 'Eletrônicos'
};

// Pegar apenas o que precisa
const { nome: nomeProd, preço: precoProd } = respostaAPI;
console.log(`${nomeProd}: R$ ${precoProd}`);

// 7.2 - Combinar dados
console.log('\n📌 7.2 - Combinar Dados\n');

const usuário2 = { nome: 'Eva', email: 'eva@email.com' };
const endereço2 = { cidade: 'Rio', estado: 'RJ' };

const completo = { ...usuário2, ...endereço2, ativo: true };
console.log('Completo:', completo);

// 7.3 - Atualizar parcial
console.log('\n📌 7.3 - Atualizar Objeto\n');

const config = { tema: 'dark', idioma: 'pt-BR', tamanho: 'grande' };
const configNova = { ...config, tema: 'light' }; // Atualiza só tema
console.log('Nova config:', configNova);

// ==========================================
// 🏁 CONCLUSÃO
// ==========================================

console.log('\n=== RESUMO FINAL ===\n');
console.log(`
  ✅ Desestruturação torna código mais legível
  ✅ Use em arrays e objetos
  ✅ Rest (...) para coletar valores
  ✅ Spread (...) para distribuir valores
  ✅ Comece simples, evite aninhamento excessivo
  ✅ Funciona em parâmetros para APIs
  ✅ Combine com valores padrão
  
  PRÓXIMO: Use desestruct com Array methods!
`);
