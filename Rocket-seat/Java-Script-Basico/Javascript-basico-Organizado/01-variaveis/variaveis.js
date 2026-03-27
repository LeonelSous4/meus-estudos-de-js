// VARIÁVEIS EM JAVASCRIPT
// Aqui você aprende a diferença entre var, let e const.

// var: existe desde o JavaScript antigo.
// Hoje evita-se usar porque permite redeclaração e tem escopo menos previsível.
var nomeAntigo = "Leonel";
var idadeAntiga = 20;

// let: é a forma mais usada quando o valor pode mudar depois.
let nome = "Vitor";
nome = "Leonel";

// const: use quando o valor não deve ser reatribuído.
const anoNascimento = 2006;

console.log(nome);
console.log(anoNascimento);

// Exemplo com contas
let idade1 = 20;
let idade2 = 15;
const somaDasIdades = idade1 + idade2;

console.log(`A soma das idades é ${somaDasIdades}.`);

// Regras importantes de nomes:
// - não começar com número
// - não usar espaço
// - não usar caracteres especiais
// - prefira nomes claros e em inglês ou português consistente
// - JavaScript diferencia maiúsculas de minúsculas
