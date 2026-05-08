 /*
  ==========================================
  📚 03 - OBJETOS: GUIA PROFUNDO
  ==========================================
  
  Domínio completo de objetos em JS
  
  Tópicos:
  ✅ Criação e estrutura
  ✅ Acesso: notação de ponto vs colchetes
  ✅ Modificação dinâmica
  ✅ Métodos e `this`
  ✅ Object.keys, values, entries
  ✅ Optional chaining (?.)
  ✅ Nullish coalescing (??)
  ✅ Freeze, seal, assign
*/

console.log('============== OBJETOS - GUIA PROFUNDO ==============\n');

// ==========================================
// 🏗️ SEÇÃO 1: CRIAÇÃO E ESTRUTURA
// ==========================================

console.log('--- SEÇÃO 1: Criação e Estrutura ---\n');

// 1.1 - Objeto literal (mais comum)
console.log('📌 1.1 - Criação Básica\n');

const usuario = {
  nome: 'João',
  idade: 28,
  email: 'joao@email.com',
  ativo: true,
  hobbies: ['leitura', 'programação', 'games'],
  
  // Objeto aninhado
  endereço: {
    cidade: 'São Paulo',
    estado: 'SP',
    cep: '01234-567'
  },
  
  // Método
  apresentar: function() {
    console.log(`Oi, sou ${this.nome}`);
  }
};

console.log('Objeto:', usuario);

// ---

// 1.2 - Objeto vazio e dinâmico
console.log('\n📌 1.2 - Objeto Vazio e Dinâmico\n');

const vazio = {};
console.log('Vazio:', vazio);

// Adicionar propriedades dinamicamente
vazio.nome = 'Produto';
vazio.preço = 99.99;
vazio.estoque = true;
console.log('Com propriedades:', vazio);

// ==========================================
// 🔗 SEÇÃO 2: ACESSANDO PROPRIEDADES
// ==========================================

console.log('\n--- SEÇÃO 2: Acessando Propriedades ---\n');

const pessoa = {
  nome: 'Ana',
  idade: 30,
  'data-nascimento': '1994-05-15' // Chave com hífen
};

// 2.1 - Notação de ponto
console.log('📌 2.1 - Notação de Ponto (.)\n');
console.log('pessoa.nome:', pessoa.nome);
console.log('pessoa.idade:', pessoa.idade);
// ❗ Ponto não funciona com chaves hífen

// 2.2 - Notação de colchetes
console.log('\n📌 2.2 - Notação de Colchetes ([])\n');
console.log('pessoa["nome"]:', pessoa['nome']);
console.log('pessoa["data-nascimento"]:', pessoa['data-nascimento']);

// Dinâmico com colchetes
const chave = 'idade';
console.log('pessoa[chave]:', pessoa[chave]); // 30

// ---

// 2.3 - Propriedades inexistentes
console.log('\n📌 2.3 - Propriedades Inexistentes\n');
console.log('pessoa.cpf:', pessoa.cpf); // undefined
console.log('pessoa["telefone"]:', pessoa['telefone']); // undefined

// ==========================================
// 🔄 SEÇÃO 3: MODIFICAÇÃO DINÂMICA
// ==========================================

console.log('\n--- SEÇÃO 3: Modificação Dinâmica ---\n');

const produto = {
  nome: 'Notebook',
  preço: 2500,
  estoque: 5
};

// 3.1 - Adicionar propriedades
console.log('📌 3.1 - Adicionar Propriedades\n');
console.log('Original:', produto);
produto.desconto = 0.1;
console.log('Após adicionar .desconto:', produto);

// 3.2 - Modificar propriedades
console.log('\n📌 3.2 - Modificar Propriedades\n');
produto.preço = 2200;
console.log('Preço atualizado:', produto);

// 3.3 - Deletar propriedades
console.log('\n📌 3.3 - Deletar Propriedades\n');
delete produto.desconto;
console.log('Após delete desconto:', produto);

// ==========================================
// 🎯 SEÇÃO 4: MÉTODOS E `this`
// ==========================================

console.log('\n--- SEÇÃO 4: Métodos e `this` ---\n');

// 4.1 - Método com `this`
console.log('📌 4.1 - Método com `this`\n');

const carro = {
  marca: 'Toyota',
  modelo: 'Corolla',
  ano: 2022,
  velocidade: 0,
  
  acelerar: function() {
    this.velocidade += 20;
    console.log(`${this.marca} ${this.modelo} acelerou para ${this.velocidade} km/h`);
  },
  
  frear: function() {
    this.velocidade -= 10;
    if (this.velocidade < 0) this.velocidade = 0;
    console.log(`Freou para ${this.velocidade} km/h`);
  },
  
  detalhes: function() {
    return `${this.marca} ${this.modelo} (${this.ano})`;
  }
};

carro.acelerar();
carro.acelerar();
carro.frear();
console.log('Detalhes:', carro.detalhes());

// ❗ IMPORTANTE: `this` em arrow function é diferente!
const carroErrado = {
  marca: 'Honda',
  velocidade: 0,
  acelerar: () => {
    // ❌ ERRADO: `this` não referencia o objeto
    // this.velocidade += 20;
  }
};

// 4.2 - Getter e Setter (ES6)
console.log('\n📌 4.2 - Getters e Setters\n');

const conta = {
  _saldo: 1000, // Convenção: _ indica "privado"
  
  get saldo() {
    return this._saldo;
  },
  
  set saldo(valor) {
    if (valor < 0) {
      console.log('Saldo não pode ser negativo');
      return;
    }
    this._saldo = valor;
  },
  
  depositar: function(valor) {
    this.saldo += valor;
    console.log(`Depositou R$ ${valor}. Novo saldo: R$ ${this.saldo}`);
  }
};

console.log('Saldo inicial:', conta.saldo);
conta.depositar(500);
conta.saldo = 2000;
console.log('Saldo final:', conta.saldo);

// ==========================================
// 🗝️ SEÇÃO 5: OBJECT.KEYS, VALUES, ENTRIES
// ==========================================

console.log('\n--- SEÇÃO 5: Object.keys(), values(), entries() ---\n');

const config = {
  theme: 'dark',
  language: 'pt-BR',
  notifications: true,
  timeout: 5000
};

// 5.1 - Object.keys()
console.log('📌 5.1 - Object.keys()\n');
const chaves = Object.keys(config);
console.log('Chaves:', chaves);
// ['theme', 'language', 'notifications', 'timeout']

// 5.2 - Object.values()
console.log('\n📌 5.2 - Object.values()\n');
const valores = Object.values(config);
console.log('Valores:', valores);
// ['dark', 'pt-BR', true, 5000]

// 5.3 - Object.entries()
console.log('\n📌 5.3 - Object.entries()\n');
const entradas = Object.entries(config);
console.log('Entradas:', entradas);
// [['theme', 'dark'], ['language', 'pt-BR'], ...]

// Iterar com entries
console.log('\nIterando com entradas:');
for (const [chave, valor] of entradas) {
  console.log(`${chave}: ${valor}`);
}

// ==========================================
// ❓ SEÇÃO 6: OPTIONAL CHAINING (?.)
// ==========================================

console.log('\n--- SEÇÃO 6: Optional Chaining (?.) ---\n');

// 6.1 - Acesso seguro a propriedades profundas
console.log('📌 6.1 - Propriedades Seguras\n');

const usuario2 = {
  nome: 'Bruno',
  perfil: {
    bio: 'Desenvolvedor',
    contato: {
      email: 'bruno@email.com'
    }
  }
};

// Sem opcional chaining (cuidado!)
// usuario2.perfil.contato.telefone retorna undefined (OK)
// usuario2.perfil2.telefone causaria erro!

// Com optional chaining (seguro)
console.log('Email:', usuario2.perfil?.contato?.email); // 'bruno@email.com'
console.log('Telefone:', usuario2.perfil?.contato?.telefone); // undefined
console.log('Perfil2:', usuario2.perfil2?.contato); // undefined (não erro!)

// Array com optional chaining
const usuários = [
  { nome: 'Ana', email: 'ana@email.com' },
  { nome: 'Bruno' } // sem email
];
console.log('Email do second:', usuários[1]?.email); // undefined
console.log('Telefone:', usuários[0]?.telefone); // undefined

// ==========================================
// ?? SEÇÃO 7: NULLISH COALESCING (??)
// ==========================================

console.log('\n--- SEÇÃO 7: Nullish Coalescing (??) ---\n');

// 7.1 - Diferença entre ?? e ||
console.log('📌 7.1 - ?? vs ||\n');

// ?? considere APENAS null e undefined
// || considera: null, undefined, '', 0, false, NaN

const dados = {
  nome: '',
  idade: 0,
  ativo: false,
  email: null
};

console.log('Nome com ||:', dados.nome || 'Desconhecido'); // 'Desconhecido'
console.log('Nome com ??:', dados.nome ?? 'Desconhecido'); // '' (vazio, mas válido)

console.log('Idade com ||:', dados.idade || 18); // 18
console.log('Idade com ??:', dados.idade ?? 18); // 0 (zero é válido)

console.log('Email com ||:', dados.email || 'semEmail@...'); // 'semEmail@...'
console.log('Email com ??:', dados.email ?? 'semEmail@...'); // 'semEmail@...'

// ✅ USE ?? para valores padrão mais precisos

// ==========================================
// 📋 SEÇÃO 8: OBJECT.FREEZE, SEAL, ASSIGN
// ==========================================

console.log('\n--- SEÇÃO 8: Freeze, Seal, Assign ---\n');

// 8.1 - Object.freeze(): Previne todas mudanças
console.log('📌 8.1 - Object.freeze()\n');

const objeto1 = { nome: 'Original', valor: 100 };
Object.freeze(objeto1);
console.log('Original:', objeto1);

// Tentativas de mudança (silenciosamente falham)
objeto1.nome = 'Modificado';
objeto1.novo = 'propriedade';
delete objeto1.valor;

console.log('Após tentativas:', objeto1); // Inalterado

// 8.2 - Object.seal(): Permite mudança mas não adição/remoção
console.log('\n📌 8.2 - Object.seal()\n');

const objeto2 = { nome: 'Original', valor: 100 };
Object.seal(objeto2);
console.log('Original:', objeto2);

objeto2.nome = 'Modificado'; // OK
objeto2.novo = 'propriedade'; // Falha silenciosa
delete objeto2.valor; // Falha silenciosa

console.log('Após mudanças:', objeto2); // Nome alterado, resto igual

// 8.3 - Object.assign(): Copia/mescla objetos
console.log('\n📌 8.3 - Object.assign()\n');

const obj_a = { x: 1, y: 2 };
const obj_b = { y: 3, z: 4 };
const mergeado = Object.assign({}, obj_a, obj_b);

console.log('A:', obj_a);
console.log('B:', obj_b);
console.log('Mergeado:', mergeado); // { x: 1, y: 3, z: 4 }

// Spread operator é mais moderno
const mergeadoSpread = { ...obj_a, ...obj_b };
console.log('Com spread:', mergeadoSpread);

// ==========================================
// 🎯 SEÇÃO 9: CASOS DE USO PRÁTICO
// ==========================================

console.log('\n--- SEÇÃO 9: Casos de Uso Prático ---\n');

// 9.1 - Sistema de usuário
console.log('📌 9.1 - Sistema de Usuário\n');

const sistemaUsuário = {
  usuários: [
    { id: 1, nome: 'Ana', email: 'ana@email.com', ativo: true },
    { id: 2, nome: 'Bruno', email: 'bruno@email.com', ativo: false }
  ],
  
  adicionar: function(nome, email) {
    const novo = {
      id: this.usuários.length + 1,
      nome,
      email,
      ativo: true
    };
    this.usuários.push(novo);
    return novo;
  },
  
  buscar: function(id) {
    return this.usuários.find(u => u.id === id);
  },
  
  listar: function() {
    return this.usuários.map(u => `${u.id}. ${u.nome}`).join('\n');
  }
};

sistemaUsuário.adicionar('Carla', 'carla@email.com');
console.log('Usuário encontrado:', sistemaUsuário.buscar(2));
console.log('Listagem:\n' + sistemaUsuário.listar());

// ==========================================
// 🏁 CONCLUSÃO
// ==========================================

console.log('\n=== RESUMO FINAL ===\n');
console.log(`
  ✅ Objetos são estruturas fundamentais
  ✅ Domine acesso: ponto (.) e colchetes ([])
  ✅ use Optional chaining (?.) para segurança
  ✅ Use Nullish coalescing (??) para defaults
  ✅ Combine com arrays para dados reais
  ✅ Métodos com \`this\` para lógica encapsulada
  ✅ Object.freeze/seal para proteção
  
  PRÓXIMO: Combine com classes para ainda mais poder!
`);
