/*
  ==========================================
  📚 02 - STRINGS: GUIA COMPLETO
  ==========================================
  
  Revisão profunda de manipulação de strings
  em JavaScript Intermediário.
  
  Tópicos:
  ✅ Criação e tipos
  ✅ Propriedades (length) e acesso
  ✅ Métodos de case
  ✅ Métodos de busca e extração
  ✅ Métodos de transformação
  ✅ Template Literals
  ✅ Regex básico e boas práticas
*/

console.log('============== STRINGS - GUIA COMPLETO ==============\n');

// ==========================================
// 📖 SEÇÃO 1: CRIAÇÃO E PROPRIEDADES
// ==========================================

console.log('--- SEÇÃO 1: Criação e Propriedades ---\n');

// 1.1 - Formas de criar strings
console.log('📌 1.1 - Criação de Strings\n');

// Interpolação (recomendado)
const nome = 'JavaScript';
const versão = 2024;
const msg1 = `${nome} é incrível em ${versão}`;
console.log('Template literal:', msg1);

// Concatenação
const msg2 = nome + ' é incrível';
console.log('Concatenação:', msg2);

// Strings vazias e espaços
const vazia = '';
const coespacos = '   ';
console.log('Vazia tem length:', vazia.length); // 0
console.log('3 espaços têm length:', coespacos.length); // 3

// ---

// 1.2 - Acessando caracteres
console.log('\n📌 1.2 - Acessando Caracteres\n');

const texto = 'JavaScript';
console.log('Texto:',texto);

// Por índice (como array)
console.log('Primeiro char:', texto[0]); // 'J'
console.log('Último char:', texto[texto.length - 1]); // 't'
console.log('Char no índice 4:', texto[4]); // 'S'

// ==========================================
// 🔤 SEÇÃO 2: TRANSFORMAÇÃO DE CASE
// ==========================================

console.log('\n--- SEÇÃO 2: Transformação de Case ---\n');

const frase = 'JavaScript Intermediário';

// 2.1 - toUpperCase
console.log('📌 2.1 - toUpperCase()\n');
console.log('Original:', frase);
console.log('MAIÚSCULO:', frase.toUpperCase());

// 2.2 - toLowerCase
console.log('\n📌 2.2 - toLowerCase()\n');
console.log('Original:', frase);
console.log('minúsculo:', frase.toLowerCase());

// ==========================================
// 🔍 SEÇÃO 3: BUSCA E VERIFICAÇÃO
// ==========================================

console.log('\n--- SEÇÃO 3: Busca e Verificação ---\n');

const email = 'usuario@exemplo.com.br';

// 3.1 - includes(): Verifica se contém substring
console.log('📌 3.1 - includes()\n');
console.log('Texto:', email);
console.log('Contém "@":', email.includes('@')); // true
console.log('Contém "exemplo":', email.includes('exemplo')); // true
console.log('Contém "xyz":', email.includes('xyz')); // false

// 3.2 - indexOf(): Encontra posição
console.log('\n📌 3.2 - indexOf()\n');
console.log('Posição de "@":', email.indexOf('@')); // 6
console.log('Posição de "com":', email.indexOf('com')); // 12
console.log('Posição de "xyz":', email.indexOf('xyz')); // -1 (não encontrado)

// 3.3 - startsWith(): Começa com?
console.log('\n📌 3.3 - startsWith()\n');
const url = 'https://google.com';
console.log('URL:', url);
console.log('Começa com "https":', url.startsWith('https')); // true
console.log('Começa com "http":', url.startsWith('http')); // false

// 3.4 - endsWith(): Termina com?
console.log('\n📌 3.4 - endsWith()\n');
const arquivo = 'documento.pdf';
console.log('Arquivo:', arquivo);
console.log('Termina com ".pdf":', arquivo.endsWith('.pdf')); // true
console.log('Termina com ".doc":', arquivo.endsWith('.doc')); // false

// ==========================================
// ✂️ SEÇÃO 4: EXTRAÇÃO E FATIA
// ==========================================

console.log('\n--- SEÇÃO 4: Extração e Fatia ---\n');

const palavra = 'JavaScript';

// 4.1 - slice(): Extrai parte (não modifica original)
console.log('📌 4.1 - slice()\n');
console.log('Original:', palavra);
console.log('slice(0, 4):', palavra.slice(0, 4)); // 'Java'
console.log('slice(4):', palavra.slice(4)); // 'Script'
console.log('slice(-6):', palavra.slice(-6)); // 'Script' (últimos 6)
console.log('slice(-6, -1):', palavra.slice(-6, -1)); // 'Scrip' (últimos 6, menos o último)

// 4.2 - substring(): Similar ao slice()
console.log('\n📌 4.2 - substring()\n');
console.log('substring(0, 4):', palavra.substring(0, 4)); // 'Java'
console.log('substring(4):', palavra.substring(4)); // 'Script'
// ❗ Diferença: substring() não aceita índices negativos

// 4.3 - substr(): Posição e tamanho (DEPRECATED - evitar)
console.log('\n📌 4.3 - substr() [EVITAR - DEPRECATED]\n');
console.log('substr(0, 4):', palavra.substr(0, 4)); // 'Java'
// ⚠️ Use slice() ou substring() no lugar

// ==========================================
// 🔄 SEÇÃO 5: SUBSTITUIÇÃO E TRANSFORMAÇÃO
// ==========================================

console.log('\n--- SEÇÃO 5: Substituição e Transformação ---\n');

// 5.1 - replace(): Substitui PRIMEIRA ocorrência
console.log('📌 5.1 - replace()\n');
const texto1 =  'Java Java JavaScript';
console.log('Original:', texto1);
console.log('replace("Java", "Python"):', texto1.replace('Java', 'Python'));
// 'Python Java JavaScript' - apenas primeira

// 5.2 - replaceAll(): Substitui TODAS ocorrências
console.log('\n📌 5.2 - replaceAll()\n');
console.log('Original:', texto1);
console.log('replaceAll("Java", "Python"):', texto1.replaceAll('Java', 'Python'));
// 'Python Python PythonScript'

// 5.3 - split(): Divide em array
console.log('\n📌 5.3 - split()\n');
const frase2 = 'HTML, CSS, JavaScript, Python';
console.log('Original:', frase2);
console.log('split(", "):', frase2.split(', '));
// ['HTML', 'CSS', 'JavaScript', 'Python']

// split sem argumento
console.log('split() sem args:', 'Hello'.split(''));
// ['H', 'e', 'l', 'l', 'o']

// 5.4 - trim(): Remove espaços
console.log('\n📌 5.4 - trim(), trimStart(), trimEnd()\n');
const coEspacos = '   JavaScript   ';
console.log('Original: "[' + coEspacos + ']"');
console.log('trim():', '[' + coEspacos.trim() + ']');
console.log('trimStart():', '[' + coEspacos.trimStart() + ']');
console.log('trimEnd():', '[' + coEspacos.trimEnd() + ']');

// 5.5 - repeat(): Repete string
console.log('\n📌 5.5 - repeat()\n');
console.log('"Ha" repetido 3 vezes:', 'Ha'.repeat(3)); // 'HaHaHa'
console.log('"*" repetido 5 vezes:', '*'.repeat(5)); // '*****'

// ==========================================
// 📐 SEÇÃO 6: PREENCHIMENTO (PADDING)
// ==========================================

console.log('\n--- SEÇÃO 6: Preenchimento (Padding) ---\n');

// 6.1 -  padStart(): Preenche no INÍCIO
console.log('📌 6.1 - padStart()\n');
const numero = '42';
console.log('Número:', numero);
console.log('padStart(5, "0"):', numero.padStart(5, '0')); // '00042'

// Usar em máscaras
const cartão = '1234567812345678';
const últimos4 = cartão.slice(-4);
const mascarado = últimos4.padStart(cartão.length, 'X');
console.log('Cartão mascarado:', mascarado); // 'XXXXXXXXXXXX5678'

// 6.2 - padEnd(): Preenche no FINAL
console.log('\n📌 6.2 - padEnd()\n');
const priceTag = '9.99';
console.log('Preço:', priceTag);
console.log('padEnd(8, "."):', priceTag.padEnd(8, '.')); // '9.99....'

// ==========================================
// 🧩 SEÇÃO 7: TEMPLATE LITERALS
// ==========================================

console.log('\n--- SEÇÃO 7: Template Literals (Backticks) ---\n');

// 7.1 - Interpolação
console.log('📌 7.1 - Interpolação com ${ }\n');
const usuario = 'João';
const idade = 25;
const msg = `Olá ${usuario}, você tem ${idade} anos!`;
console.log(msg);

// Expressões dentro de ${}
const a = 10;
const b = 20;
console.log(`Soma: ${a + b}`);
console.log(`Par? ${a % 2 === 0}`);

// 7.2 - Strings multilinhas
console.log('\n📌 7.2 - Multilinhas\n');
const poema = `
Primeira linha
Segunda linha
Terceira linha
`;
console.log(poema);

// ==========================================
// 🔢 SEÇÃO 8: CONVERSÃO E COMPRIMENTO
// ==========================================

console.log('\n--- SEÇÃO 8: Conversão e Comprimento ---\n');

// 8.1 - length: Comprimento da string
console.log('📌 8.1 - length\n');
const tipl = 'JavaScript';
console.log(`"${tipl}" tem ${tipl.length} caracteres`);

// Contar espaços
const fraseComEspaço = 'Bem vindo ao JavaScript';
console.log(`Frase: "${fraseComEspaço}"`);
console.log('Total de caracteres:', fraseComEspaço.length);
console.log('Total de palavras:', fraseComEspaço.split(' ').length);

// 8.2 - Converter para string
console.log('\n📌 8.2 - Converter para String\n');
const numero2 = 42;
const booleano = true;
const nulo = null;

console.log('String(42):', String(numero2)); // '42'
console.log('String(true):', String(booleano)); // 'true'
console.log('String(null):', String(nulo)); // 'null'
console.log('(42).toString():', numero2.toString()); // '42'

// ==========================================
// 💬 SEÇÃO 9: CASOS DE USO PRÁTICO
// ==========================================

console.log('\n--- SEÇÃO 9: Casos de Uso Prático ---\n');

// 9.1 - Validar email (simples)
console.log('📌 9.1 - Validar Email\n');
function validarEmail(email) {
  return email.includes('@') && email.includes('.');
}
console.log('ana@email.com:', validarEmail('ana@email.com'));
console.log('anaem mail.com:', validarEmail('anaemail.com'));

// 9.2 - Capitalizar primeira letra
console.log('\n📌 9.2 - Capitalizar\n');
function capitalizar(str) {
  if (str.length === 0) return str;
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
console.log('javasCRIPT -> ', capitalizar('javasCRIPT'));
console.log('PYTHON ->', capitalizar('PYTHON'));

// 9.3 - Formatar CPF
console.log('\n📌 9.3 - Formatar CPF\n');
function formatarCPF(cpf) {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}
console.log('CPF: ', formatarCPF('12345678901')); // 123.456.789-01

// 9.4 - Inverter string
console.log('\n📌 9.4 - Inverter String\n');
function inverter(str) {
  return str.split('').reverse().join('');
}
console.log('JavaScript inverted:', inverter('JavaScript'));

// 9.5 - Contar caracteres
console.log('\n📌 9.5 - Contar Caracteres\n');
function contarCaracteres(str) {
  const objeto = {};
  for (let char of str) {
    if (char === ' ') continue; // Pula espaços
    objeto[char] = (objeto[char] || 0) + 1;
  }
  return objeto;
}
console.log('Contagem:', contarCaracteres('hello'));
// { h: 1, e: 1, l: 2, o: 1 }

// ==========================================
// 🎯 SEÇÃO 10: BOAS PRÁTICAS
// ==========================================

console.log('\n--- SEÇÃO 10: Boas Práticas ---\n');

//     console.log(`
//     ✅ Sempre use template literals (\\`) para maior legibilidade
//     ✅ Conheça a diferença entre slice(), substring(), substr()
//     ✅ Use includes() para verificações simples
//     ✅ Combine split() + map() ou filter() para transformar
//     ✅ Sempre trate espaços em branco (trim())
//     ✅ Validação deve ser robusta (não apenas includes())
//     ✅ Evitar manipulação complexa de strings - considere Regex
//     ✅ Performance: template literals são eficientes
//     ✅ Strings são IMUTÁVEIS - métodos retornam nova string
// `);

// ==========================================
// 🏁 CONCLUSÃO
// ==========================================

console.log('\n=== RESUMO FINAL ===\n');
console.log(`
  ✅ Strings são fundamentais em qualquer app
  ✅ Aprenda todos os métodos comuns
  ✅ Template literals tornam código mais legível
  ✅ Saiba quando usar cada método
  ✅ Pratique com casos reais
  
  PRÓXIMO: Revisite quando precisar validar dados!
`);
