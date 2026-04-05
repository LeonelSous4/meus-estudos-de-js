/*
  ==========================================
  📚 01 - ARRAYS: GUIA COMPLETO
  ==========================================
  
  Revisão profunda de tudo que você precisa saber sobre Arrays
  em JavaScript Intermediário.
  
  Tópicos:
  ✅ Criação e acesso
  ✅ Métodos de mutação (modificam o original)
  ✅ Métodos de leitura (retornam novo array)
  ✅ Métodos de busca
  ✅ Métodos de transformação: map, filter, reduce
  ✅ Casos de uso e boas práticas
  ✅ Performance e quando usar cada método
*/

console.log('============== ARRAYS - GUIA COMPLETO ==============\n');

// ==========================================
// ❌ SEÇÃO 1: CRIAÇÃO E ACESSO
// ==========================================

console.log('--- SEÇÃO 1: Criação e Acesso ---\n');

// 1.1 - Criação de Arrays (3 formas)
console.log('📌 1.1 - Criação de Arrays\n');

// Forma 1: Sintaxe literal (RECOMENDADO)
const nomes = ['Ana', 'Bruno', 'Carla', 'Daniel'];
console.log('Literal:', nomes);

// Forma 2: Construtor Array
const numeros = new Array(1, 2, 3, 4, 5);
console.log('Constructor:', numeros);

// Forma 3: Array vazio com tamanho pré-alocado (cuidado!)
const arrayVazio = new Array(3); // [empty × 3]
console.log('Array vazio:', arrayVazio); // NÃO use assim geralmente

// ❗ OBS: new Array(5) cria um array com 5 espaços vazios
//    [1, 2, 3, 4, 5] é diferente de [5] ou new Array(5)

// ---

// 1.2 - Acessando elementos
console.log('\n📌 1.2 - Acessando Elementos\n');

const estudiantes = ['João', 'Maria', 'Pedro', 'Ana'];
console.log('Array:', estudiantes);

// Acesso por índice (começa em 0)
console.log('Primeiro elemento (índice 0):', estudiantes[0]); // 'João'
console.log('Segundo elemento (índice 1):', estudiantes[1]); // 'Maria'
console.log('Último elemento:', estudiantes[estudiantes.length - 1]); // 'Ana'

// ❗ IMPORTANTE: Arrays em JS são 0-indexed (começam em 0)

// ---

// 1.3 - Length (propriedade fundamental)
console.log('\n📌 1.3 - Propriedade length\n');

const frutas = ['maçã', 'banana', 'laranja'];
console.log('Array:', frutas);
console.log('Tamanho:', frutas.length); // 3

// Length sempre retorna o número de elementos
console.log('Ultimo índice válido:', frutas.length - 1); // 2

// ==========================================
// 🔄 SEÇÃO 2: MÉTODOS QUE MUTAM O ARRAY
// ==========================================

console.log('\n--- SEÇÃO 2: Métodos que Mutam (Modificam o Original) ---\n');

// ⚠️ IMPORTANTE: Estes métodos modificam o array original
//    Métodos mutantes: push, unshift, pop, shift, splice, reverse, sort

// 2.1 - PUSH: Adiciona elemento(s) no FINAL
console.log('📌 2.1 - push() - Adiciona no final\n');

const stack = ['HTML', 'CSS'];
console.log('Antes:', stack);

stack.push('JavaScript');
console.log('Depois de push("JavaScript"):', stack);

// push() retorna o novo tamanho do array
const novoTamanho = stack.push('React', 'Vue');
console.log('Novo tamanho após push duplo:', novoTamanho); // 5

// ---

// 2.2 - UNSHIFT: Adiciona elemento(s) no INÍCIO
console.log('\n📌 2.2 - unshift() - Adiciona no início\n');

const tecnologias = ['Java', 'Python'];
console.log('Antes:', tecnologias);

tecnologias.unshift('JavaScript');
console.log('Depois de unshift("JavaScript"):', tecnologias);

// também retorna novo tamanho
tecnologias.unshift('Rust', 'Go');
console.log('Depois de unshift duplo:', tecnologias);

// ---

// 2.3 - POP: Remove do FINAL
console.log('\n📌 2.3 - pop() - Remove do final\n');

const pilha = ['primeiro', 'segundo', 'terceiro'];
console.log('Antes:', pilha);

const removido = pilha.pop();
console.log('Removido:', removido); // 'terceiro'
console.log('Array após pop:', pilha); // ['primeiro', 'segundo']

// ❗ pop() em array vazio retorna undefined
const vazio = [];
console.log('pop() em array vazio:', vazio.pop()); // undefined

// ---

// 2.4 - SHIFT: Remove do INÍCIO
console.log('\n📌 2.4 - shift() - Remove do início\n');

const fila = ['primeiro', 'segundo', 'terceiro'];
console.log('Antes:', fila);

const primeiro = fila.shift();
console.log('Removido:', primeiro); // 'primeiro'
console.log('Array após shift:', fila); // ['segundo', 'terceiro']

// ---

// 2.5 - SPLICE: Remove E/OU adiciona em posição específica
console.log('\n📌 2.5 - splice() - Remove/adiciona em posição\n');

// splice(índiceInício, quantidade, elemento1, elemento2, ...)
const alunos = ['Ana', 'Bruno', 'Carla', 'Daniel', 'Eduardo'];
console.log('Original:', alunos);

// Remover 2 elementos começando no índice 1
const removidos = alunos.splice(1, 2);
console.log('Removidos:', removidos); // ['Bruno', 'Carla']
console.log('Array após splice:', alunos); // ['Ana', 'Daniel', 'Eduardo']

// Adicionar elementos em posição específica
alunos.splice(1, 0, 'Bruno (novo)');
console.log('Após adicionar elemento:', alunos);

// Remover E adicionar ao mesmo tempo
const mix = ['A', 'B', 'C', 'D'];
mix.splice(2, 1, 'X', 'Y', 'Z');
console.log('Após splice com remoção e adição:', mix); // ['A', 'B', 'X', 'Y', 'Z', 'D']

// ---

// 2.6 - REVERSE: Inverte a ordem
console.log('\n📌 2.6 - reverse() - Inverte ordem\n');

const numeros2 = [1, 2, 3, 4, 5];
console.log('Antes:', numeros2);

numeros2.reverse();
console.log('Depois:', numeros2); // [5, 4, 3, 2, 1]

// ❗ reverse() modifica o array original

// ---

// 2.7 - SORT: Ordena elementos
console.log('\n📌 2.7 - sort() - Ordena elementos\n');

const letras = ['d', 'a', 'c', 'b'];
console.log('Desordenado:', letras);

letras.sort();
console.log('Ordenado alfabeticamente:', letras); // ['a', 'b', 'c', 'd']

// ❗ CUIDADO: sort() com números!
const numericosErrado = [10, 2, 30, 1, 100];
numericosErrado.sort();
console.log('Sort "natural" (ERRADO para números):', numericosErrado); 
// [1, 10, 100, 2, 30] ← não é ordem numérica!

// Para ordenar números CORRETAMENTE, use callback
const numericosCorreto = [10, 2, 30, 1, 100];
numericosCorreto.sort((a, b) => a - b); // Crescente
console.log('Sort CORRETO (crescente):', numericosCorreto);

const numericosDecrescente = [10, 2, 30, 1, 100];
numericosDecrescente.sort((a, b) => b - a); // Decrescente
console.log('Sort decrescente:', numericosDecrescente);

// Ordenar objetos
const pessoas = [
  { nome: 'Ana', idade: 30 },
  { nome: 'Bruno', idade: 25 },
  { nome: 'Carla', idade: 28 }
];
console.log('\nPessoas:', pessoas);
pessoas.sort((a, b) => a.idade - b.idade);
console.log('Ordenadas por idade:', pessoas);

// ==========================================
// 📖 SEÇÃO 3: MÉTODOS DE LEITURA
// ==========================================

console.log('\n--- SEÇÃO 3: Métodos de Leitura (Não Mutam) ---\n');

// ✅ IMPORTANTE: Estes NÃO modificam o array original
//    Métodos não-mutantes: slice, concat, join, toString, etc.

// 3.1 - SLICE: Extrai parte do array (cópia)
console.log('📌 3.1 - slice() - Extrai parte (cópia)\n');

const dias = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'];
console.log('Original:', dias);

// slice(início, fim)
// fim é EXCLUSIVO (não inclui)
const labora = dias.slice(0, 5); // seg a sex
console.log('Dias úteis (0 a 4):', labora);

const fimSemana = dias.slice(5); // sab e dom
console.log('Fim de semana:', fimSemana);

// Índices negativos funcionam
console.log('Últimos 2:', dias.slice(-2)); // ['sab', 'dom']
console.log('Tudo menos os 2 últimos:', dias.slice(0, -2));

// ❗ slice() NÃO modifica o array original
console.log('Original após slice:', dias);

// ---

// 3.2 - CONCAT: Junta arrays
console.log('\n📌 3.2 - concat() - Junta arrays\n');

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8];

const juntado = arr1.concat(arr2, arr3);
console.log('Resultado concat:', juntado); // [1,2,3,4,5,6,7,8]

// Spread operator é mais moderno
const juntadoSpread = [...arr1, ...arr2, ...arr3];
console.log('Com spread operator:', juntadoSpread);

// ---

// 3.3 - JOIN: Transforma array em string
console.log('\n📌 3.3 - join() - Converte em string\n');

const diasSemana = ['segunda', 'terça', 'quarta', 'quinta', 'sexta'];

const emString = diasSemana.join(', ');
console.log('Join com separador ", ":', emString);

const emCSV = diasSemana.join(';');
console.log('Join com separador ";":', emCSV);

const semSeparador = diasSemana.join('');
console.log('Join sem separador:', semSeparador);

// ==========================================
// 🔍 SEÇÃO 4: MÉTODOS DE BUSCA
// ==========================================

console.log('\n--- SEÇÃO 4: Métodos de Busca ---\n');

// 4.1 - INCLUDES: Verifica se elemento existe
console.log('📌 4.1 - includes() - Verifica existência\n');

const cores = ['vermelho', 'verde', 'azul'];
console.log('Array:', cores);

console.log('Inclui "azul"?', cores.includes('azul')); // true
console.log('Inclui "amarelo"?', cores.includes('amarelo')); // false

// Útil em validações
if (cores.includes('vermelho')) {
  console.log('Vermelho encontrado!');
}

// ---

// 4.2 - INDEXOF: Encontra índice de um elemento
console.log('\n📌 4.2 - indexOf() - Encontra índice\n');

const letras2 = ['a', 'b', 'c', 'b', 'd', 'b'];
console.log('Array:', letras2);

console.log('Índice de "c":', letras2.indexOf('c')); // 2
console.log('Índice de "b":', letras2.indexOf('b')); // 1 (primeira ocorrência)
console.log('Índice de "z":', letras2.indexOf('z')); // -1 (não encontrado)

// ❗ indexOf() retorna -1 se não encontrar

// ---

// 4.3 - FIND: Encontra primeiro elemento que satisfaz condição
console.log('\n📌 4.3 - find() - Encontra elemento por condição\n');

const numeros3 = [5, 12, 8, 20, 3, 15];
console.log('Array:', numeros3);

// Encontrar primeiro número maior que 10
const maiorQue10 = numeros3.find(n => n > 10);
console.log('Primeiro número > 10:', maiorQue10); // 12

// find com objetos
const usuarios = [
  { id: 1, nome: 'Ana' },
  { id: 2, nome: 'Bruno' },
  { id: 3, nome: 'Carla' }
];

const usuarioBruno = usuarios.find(u => u.nome === 'Bruno');
console.log('Usuário encontrado:', usuarioBruno); // { id: 2, nome: 'Bruno' }

// ❗ find() retorna undefined se não encontrar

// ---

// 4.4 - FINDINDEX: Encontra índice usando condição
console.log('\n📌 4.4 - findIndex() - Encontra índice por condição\n');

const numeros4 = [5, 12, 8, 20, 3, 15];
console.log('Array:', numeros4);

const indexMaiorQue10 = numeros4.findIndex(n => n > 10);
console.log('Índice do primeiro > 10:', indexMaiorQue10); // 1

// ❗ findIndex() retorna -1 se não encontrar

// ==========================================
// 🎯 SEÇÃO 5: TRANSFORMAÇÃO - MAP, FILTER, REDUCE
// ==========================================

console.log('\n--- SEÇÃO 5: Métodos Fundamentais de Transformação ---\n');

// 5.1 - MAP: Transforma cada elemento
console.log('📌 5.1 - map() - Transforma cada elemento\n');

// map(elemento, índice, array) => novo_valor
const números = [1, 2, 3, 4, 5];
console.log('Original:', números);

// Dobrar cada número
const dobrados = números.map(n => n * 2);
console.log('Dobrados:', dobrados); // [2, 4, 6, 8, 10]

// Converter para string
const strings = números.map(n => `número: ${n}`);
console.log('Convertidos para string:', strings);

// Map com objetos
const produtos = [
  { nome: 'Notebook', preço: 2500 },
  { nome: 'Mouse', preço: 50 },
  { nome: 'Teclado', preço: 150 }
];

const preços = produtos.map(p => p.preço);
console.log('Apenas preços:', preços); // [2500, 50, 150]

const comDesconto = produtos.map(p => ({
  nome: p.nome,
  preço: p.preço,
  desconto: p.preço * 0.1,
  preçoFinal: p.preço * 0.9
}));
console.log('Com desconto:', comDesconto);

// ---

// 5.2 - FILTER: Filtra elementos baseado em condição
console.log('\n📌 5.2 - filter() - Filtra baseado em condição\n');

const números2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Original:', números2);

// Apenas números pares
const pares = números2.filter(n => n % 2 === 0);
console.log('Pares:', pares); // [2, 4, 6, 8, 10]

// Apenas números maiores que 5
const maioresQue5 = números2.filter(n => n > 5);
console.log('> 5:', maioresQue5); // [6, 7, 8, 9, 10]

// Filter com objetos
const pessoas2 = [
  { nome: 'Ana', idade: 25 },
  { nome: 'Bruno', idade: 17 },
  { nome: 'Carla', idade: 30 },
  { nome: 'Daniel', idade: 16 }
];

const maioresDeIdade = pessoas2.filter(p => p.idade >= 18);
console.log('Maiores de idade:', maioresDeIdade);

// ---

// 5.3 - REDUCE: Acumula um resultado
console.log('\n📌 5.3 - reduce() - Acumula resultado\n');

// reduce((acumulador, elemento, índice, array) => novo_acumulador, valor_inicial)
const valores = [1, 2, 3, 4, 5];
console.log('Original:', valores);

// Somar todos
const soma = valores.reduce((acc, n) => acc + n, 0);
console.log('Soma:', soma); // 15

// Multiplicar todos
const produto = valores.reduce((acc, n) => acc * n, 1);
console.log('Produto:', produto); // 120

// Contar ocorrências
const frutas2 = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'maçã'];
const contagem = frutas2.reduce((acc, fruta) => {
  acc[fruta] = (acc[fruta] || 0) + 1;
  return acc;
}, {});
console.log('Contagem de frutas:', contagem);
// { maçã: 3, banana: 2, laranja: 1 }

// Agrupar por propriedade
const vendas = [
  { produto: 'A', valor: 100 },
  { produto: 'B', valor: 200 },
  { produto: 'A', valor: 150 },
  { produto: 'C', valor: 300 },
  { produto: 'B', valor: 80 }
];

const totalPorProduto = vendas.reduce((acc, venda) => {
  const produto = venda.produto;
  acc[produto] = (acc[produto] || 0) + venda.valor;
  return acc;
}, {});
console.log('Total por produto:', totalPorProduto);
// { A: 250, B: 280, C: 300 }

// ==========================================
// 🔄 SEÇÃO 6: OUTROS MÉTODOS IMPORTANTES
// ==========================================

console.log('\n--- SEÇÃO 6: Outros Métodos Importantes ---\n');

// 6.1 - FOREACH: Itera sem retornar nada
console.log('📌 6.1 - forEach() - Itera (sem retorno)\n');

const nomes2 = ['Ana', 'Bruno', 'Carla'];
console.log('Listando com forEach:');
nomes2.forEach((nome, índice) => {
  console.log(`${índice}: ${nome}`);
});

// ---

// 6.2 - SOME: Verifica se ALGUM elemento satisfaz condição
console.log('\n📌 6.2 - some() - Existe algum que satisfaz?\n');

const números3 = [2, 4, 6, 8];
console.log('Array:', números3);

const temImpar = números3.some(n => n % 2 !== 0);
console.log('Tem algum ímpar?', temImpar); // false

const números4 = [2, 4, 7, 8];
const temImpar2 = números4.some(n => n % 2 !== 0);
console.log('Tem algum ímpar?', temImpar2); // true

// ---

// 6.3 - EVERY: Verifica se TODOS satisfazem condição
console.log('\n📌 6.3 - every() - Todos satisfazem?\n');

const números5 = [2, 4, 6, 8];
console.log('Array:', números5);

const todosPares = números5.every(n => n % 2 === 0);
console.log('Todos são pares?', todosPares); // true

const números6 = [2, 4, 7, 8];
const todosPares2 = números6.every(n => n % 2 === 0);
console.log('Todos são pares?', todosPares2); // false

// ==========================================
// ⚡ SEÇÃO 7: CASOS DE USO PRÁTICO
// ==========================================

console.log('\n--- SEÇÃO 7: Casos de Uso Prático ---\n');

// 7.1 - Filtrar e transformar dados
console.log('📌 7.1 - Filtrar e Transformar\n');

const vendas2 = [
  { id: 1, produto: 'Notebook', preço: 2500, vendido: true },
  { id: 2, produto: 'Mouse', preço: 50, vendido: false },
  { id: 3, produto: 'Teclado', preço: 150, vendido: true },
  { id: 4, produto: 'Monitor', preço: 800, vendido: true }
];

// Pegar apenas vendas confirmadas e aplicar 10% desconto
const vendidosComDesconto = vendas2
  .filter(v => v.vendido)
  .map(v => ({
    ...v,
    desconto: v.preço * 0.1,
    preçoFinal: v.preço * 0.9
  }));

console.log('Vendidos com desconto:', vendidosComDesconto);

// Total de vendas
const totalVendas = vendas2
  .filter(v => v.vendido)
  .reduce((acc, v) => acc + v.preço, 0);
console.log('Total de vendas:', totalVendas);

// 7.2 - Validar dados
console.log('\n📌 7.2 - Validar Dados\n');

const usuários2 = [
  { nome: 'Ana', email: 'ana@email.com', ativo: true },
  { nome: 'Bruno', email: null, ativo: false },
  { nome: 'Carla', email: 'carla@email.com', ativo: true }
];

const usuáriosVálidos = usuários2.every(u => u.email && u.nome);
console.log('Todos os usuários têm email e nome?', usuáriosVálidos); // false

// ==========================================
// 📊 SEÇÃO 8: PERFORMANCE E BOAS PRÁTICAS
// ==========================================

console.log('\n--- SEÇÃO 8: Performance e Boas Práticas ---\n');

logicaSeparadorConsole('Performance: Qual usar?');

console.log(`
  MAP         → Transformar cada elemento
  FILTER      → Filtrarpor condição
  REDUCE      → Acumular em um valor
  FIND        → Encontrar UM elemento
  INCLUDES    → Checar se existe
  FOREACH     → Iterar e fazer efeito colateral
  SOME        → Checagem "existe algum"
  EVERY       → Checagem "todos"
  
  ❗ CUIDADO: Não use array.map().filter().reduce()
             em arrays muito grandes (millões de elementos)
             sem necessidade - cria arrays intermediários
             
  ✅ MELHOR: Usar reduce() direto ou um único loop
             para operações complexas
`);

// Exemplo: não fazer assim
const muitosNúmeros = Array.from({length: 1000}, (_, i) => i + 1);
// ❌ EVITAR
const resultado1 = muitosNúmeros
  .map(n => n * 2)     // cria novo array
  .filter(n => n > 500) // cria outro array
  .reduce((acc, n) => acc + n, 0); // finalmente acumula

// ✅ MELHOR
const resultado2 = muitosNúmeros.reduce((acc, n) => {
  const dobrado = n * 2;
  if (dobrado > 500) {
    acc += dobrado;
  }
  return acc;
}, 0);

console.log('Ambos dão o mesmo resultado?', resultado1 === resultado2);

// ==========================================
// 🎓 SEÇÃO 9: RESUMO COM COMPARAÇÕES
// ==========================================

console.log('\n--- SEÇÃO 9: Comparações Práticas ---\n');

const dados = [
  { id: 1, nome: 'Produto A', preço: 100, categoria: 'X' },
  { id: 2, nome: 'Produto B', preço: 200, categoria: 'Y' },
  { id: 3, nome: 'Produto C', preço: 150, categoria: 'X' },
  { id: 4, nome: 'Produto D', preço: 300, categoria: 'Z' }
];

console.log('📚 Exemplos com o mesmo dataset:\n');

// 1. Filtrar por categoria
const categoriaX = dados.filter(d => d.categoria === 'X');
console.log('1. Categoria X:', categoriaX);

// 2. Pegar todos os nomes
const nomes3 = dados.map(d => d.nome);
console.log('2. Nomes:', nomes3);

// 3. Preço total
const preçoTotal = dados.reduce((acc, d) => acc + d.preço, 0);
console.log('3. Preço total:', preçoTotal);

// 4. Produto mais caro
const maisCaro = dados.reduce((max, d) => d.preço > max.preço ? d : max);
console.log('4. Mais caro:', maisCaro);

// 5. Agrupar por categoria
const porCategoria = dados.reduce((acc, d) => {
  if (!acc[d.categoria]) acc[d.categoria] = [];
  acc[d.categoria].push(d);
  return acc;
}, {});
console.log('5. Agrupado por categoria:', porCategoria);

// ==========================================
// 🏁 CONCLUSÃO
// ==========================================

console.log('\n=== RESUMO FINAL ===\n');
console.log(`
  ✅ Arrays são estruturas fundamentais
  ✅ Domine map(), filter(), reduce() - são essenciais
  ✅ Entenda a diferença entre mutantes e não-mutantes
  ✅ Use métodos corretos para cada situação
  ✅ Combine métodos para resolver problemas complexos
  ✅ Teste em casos reais com dados
  
  PRÓXIMO PASSO: Revisite o arquivo quando precisar!
`);

// Função auxiliar usada acima
function logicaSeparadorConsole(titulo) {
  console.log('\n' + '='.repeat(40));
  console.log(titulo);
  console.log('='.repeat(40) + '\n');
}

// ==========================================
// 📝 EXERCÍCIOS PRÁTICOS NA PRÓXIMA SEÇÃO!
// ==========================================
