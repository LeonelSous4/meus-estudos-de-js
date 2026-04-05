/*
  ========================================
  10 EXERCÍCIOS - JS INTERMEDIÁRIO
  Do Básico ao Avançado
  ========================================
*/

// ========================================
// 1️⃣ EXERCÍCIO 1: Manipulação de Arrays
// ========================================
// Crie uma função que recebe um array de números e retorna:
// - Array com apenas números pares
// - Array com números multiplicados por 2
// - Soma total dos números

console.log('--- EXERCÍCIO 1: Manipulação de Arrays ---');

function manipularArray(numeros) {
  // TODO: seu código aqui
  // Use: filter, map, reduce
}

// Teste:
// const nums = [1, 2, 3, 4, 5, 6];
// const resultado = manipularArray(nums);
// console.log(resultado);


// ========================================
// 2️⃣ EXERCÍCIO 2: Trabalhando com Strings
// ========================================
// Crie uma função que recebe uma string e retorna:
// - String em MAIÚSCULAS
// - String invertida (da direita pra esquerda)
// - Contagem de vogais
// - String sem espaços em branco

console.log('\n--- EXERCÍCIO 2: Trabalhando com Strings ---');

function processarString(texto) {
  // TODO: seu código aqui
  // Use: toUpperCase, split, reverse, join, trim, etc
}

// Teste:
// const texto = "JavaScript é incrível";
// const resultado = processarString(texto);
// console.log(resultado);


// ========================================
// 3️⃣ EXERCÍCIO 3: Datas e Horas
// ========================================
// Crie uma função que:
// - Retorne a data atual formatada (DD/MM/YYYY)
// - Calcule quantos dias faltam até o natal
// - Retorne o dia da semana em português
// - Calcule idade baseado em data de nascimento

console.log('\n--- EXERCÍCIO 3: Datas e Horas ---');

function trabalharComDatas(dataNascimento) {
  // TODO: seu código aqui
  // Use: new Date(), getDate(), getMonth(), getFullYear(), getDay()
}

// Teste:
// const idade = trabalharComDatas('1995-05-15');
// console.log(idade);


// ========================================
// 4️⃣ EXERCÍCIO 4: Objetos e Propriedades
// ========================================
// Crie um objeto "Usuário" com:
// - nome, email, idade, ativo
// - método para apresentar-se
// - método para atualizar email
// - método para verificar se é maior de idade
// Use optional chaining (?.

console.log('\n--- EXERCÍCIO 4: Objetos e Propriedades ---');

const usuario = {
  // TODO: seu código aqui
  // Inclua propriedades e métodos
};

// Teste:
// console.log(usuario.apresentar());
// console.log(usuario.ehMaiorIdade());


// ========================================
// 5️⃣ EXERCÍCIO 5: Arrays de Objetos + Filter
// ========================================
// Crie um array de produtos com: nome, preço, categoria, estoque
// Implemente funções para:
// - Listar produtos por categoria
// - Encontrar produtos com preço menor que X
// - Produtos em falta (estoque = 0)
// - Ordenar por preço (crescente/decrescente)

console.log('\n--- EXERCÍCIO 5: Arrays de Objetos ---');

const produtos = [
  { nome: 'Notebook', preço: 2500, categoria: 'Eletrônicos', estoque: 3 },
  { nome: 'Mouse', preço: 50, categoria: 'Periféricos', estoque: 0 },
  { nome: 'Teclado', preço: 150, categoria: 'Periféricos', estoque: 5 },
  { nome: 'Monitor', preço: 800, categoria: 'Eletrônicos', estoque: 2 },
  { nome: 'Webcam', preço: 200, categoria: 'Periféricos', estoque: 0 }
];

function filtrarProdutos(categoria) {
  // TODO: reterne produtos da categoria
}

function produtosPorPreço(preçoMaximo) {
  // TODO: retorne produtos com preço menor que preçoMaximo
}

function produtosEmFalta() {
  // TODO: retorne produtos com estoque = 0
}

// Teste:
// console.log(filtrarProdutos('Periféricos'));
// console.log(produtosPorPreço(500));
// console.log(produtosEmFalta());


// ========================================
// 6️⃣ EXERCÍCIO 6: Classes Básicas
// ========================================
// Crie uma classe "Carro" com:
// - Propriedades: marca, modelo, ano, velocidade
// - Métodos: acelerar(), frear(), velocidadeAtual()
// - Validação: velocidade não pode ser negativa

console.log('\n--- EXERCÍCIO 6: Classes Básicas ---');

class Carro {
  // TODO: seu código aqui
  constructor(marca, modelo, ano) {
    // inicialize propriedades
  }

  acelerar() {
    // TODO: aumente velocidade
  }

  frear() {
    // TODO: diminua velocidade
  }

  velocidadeAtual() {
    // TODO: retorne velocidade
  }
}

// Teste:
// const meuCarro = new Carro('Toyota', 'Corolla', 2022);
// meuCarro.acelerar();
// console.log(meuCarro.velocidadeAtual());


// ========================================
// 7️⃣ EXERCÍCIO 7: Herança de Classes
// ========================================
// Crie classe "Veiculo" (pai) e "Moto" + "Carro" (filhas)
// Veiculo: marca, modelo, velocidade + método acelerar()
// Moto: adicione capacete (sim/não)
// Carro: adicione portas (número)
// Cada filha deve ter seu próprio método freiar()

console.log('\n--- EXERCÍCIO 7: Herança de Classes ---');

class Veiculo {
  // TODO: classe pai
}

class Moto extends Veiculo {
  // TODO: herança
}

class CarroFilho extends Veiculo {
  // TODO: herança
}

// Teste:
// const moto = new Moto('Honda', 'CB 500', true);
// const carro = new CarroFilho('Ford', 'Fiesta', 4);
// console.log(moto.acelerar());
// console.log(carro.frear());


// ========================================
// 8️⃣ EXERCÍCIO 8: Tratamento de Erros
// ========================================
// Crie uma função que:
// - Valida dados de um usuário (nome, email, idade)
// - Lança erros customizados para dados inválidos
// - Use try/catch para capturar erros
// - Implemente classe de erro customizada

console.log('\n--- EXERCÍCIO 8: Tratamento de Erros ---');

class ErroValidacao extends Error {
  // TODO: classe customizada de erro
}

function validarUsuario(nome, email, idade) {
  try {
    // TODO: validações com throw
    // - nome não pode ser vazio
    // - email deve conter @
    // - idade deve ser >= 18
  } catch (erro) {
    // TODO: tratar erro
    console.error(erro.message);
  }
}

// Teste:
// validarUsuario('', 'teste@email.com', 25);
// validarUsuario('João', 'testemail.com', 25);


// ========================================
// 9️⃣ EXERCÍCIO 9: Factory Function + Closures
// ========================================
// Crie uma factory function que:
// - Cria contadores privados (closures)
// - Retorna métodos: incrementar(), decrementar(), valor()
// - Cada contador é independente
// - Mantenha estado privado

console.log('\n--- EXERCÍCIO 9: Factory Function ---');

function criarContador(inicial = 0) {
  // TODO: closure aqui
  // Crie variável privada
  // Retorne métodos que a acessam
}

// Teste:
// const contador1 = criarContador(0);
// const contador2 = criarContador(10);
// console.log(contador1.incrementar()); // 1
// console.log(contador2.incrementar()); // 11


// ========================================
// 🔟 EXERCÍCIO 10: DESAFIO FINAL (Tudo Junto!)
// ========================================
// Crie um sistema "Banco de Dados de Pessoas" que:
// 1. Use classe "Pessoa" (nome, email, dataNascimento)
// 2. Calcule idade automaticamente a partir da data
// 3. Valide dados com try/catch
// 4. Tenha array de pessoas
// 5. Filtrar por faixa de idade
// 6. Ordenar por velocidade (crescente/decrescente)
// 7. Contar pessoas por faixa etária
// 8. Gere relatório formatado (strings)
// 9. Use métodos como map, filter, reduce
// 10. Exiba tudo no console formatado

console.log('\n--- EXERCÍCIO 10: DESAFIO FINAL ---');

class Pessoa {
  // TODO: sua implementação
  constructor(nome, email, dataNascimento) {
    // validar e inicializar
  }

  // TODO: métodos auxiliares
  calcularIdade() {
    // TODO: calcule idade
  }

  apresentar() {
    // TODO: retorne string formatada
  }
}

function criarBancoPessoas() {
  // TODO: crie array de pessoas
  // TODO: implemente métodos:
  // - adicionarPessoa(nome, email, dataNascimento)
  // - listarPessoas()
  // - pessoasPorIdade(idadeMinima, idadeMaxima)
  // - contarPorFaixaEtaria()
  // - gerarRelatorio()
}

// Teste:
// const banco = criarBancoPessoas();
// banco.adicionarPessoa('João', 'joao@email.com', '1995-05-15');
// banco.adicionarPessoa('Maria', 'maria@email.com', '2000-03-22');
// banco.listarPessoas();
// console.log(banco.gerarRelatorio());

/*
  ========================================
  DESAFIOS EXTRAS (Se quiser mais!)
  ========================================

  1. Adicione busca por nome (case-insensitive)
  2. Implemente ordenação por email
  3. Crie método para remover pessoa por email
  4. Valide email com regex
  5. Calcule estatísticas (idade média, mais velho, mais jovem)
  6. Exporte dados em formato JSON
  7. Implemente operador ?? para valores padrão
  8. Use optional chaining (?.) para acesso seguro
  9. Localize datas em português (pt-BR)
  10. Use methods chaining (retorne this)
*/
