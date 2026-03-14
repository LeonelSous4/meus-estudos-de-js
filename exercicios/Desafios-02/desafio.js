// desafio 1


let num = 10

if(num > 10){
    console.log(`${num} é maior que 10`)
}

else if(num === 10){
    console.log(`${num} é = a 10`)
}

else {
     console.log(`${num} é menor que 10`)
}

console.log("--------------------------------")

// desafio 2

const Spencer = {

    name:"Spencer",
    age: 22,
    nacionality: "EUA",
    work:"teacher"

}

const nacionalidade = Spencer.nacionality === "BR"

console.log(nacionalidade)

console.log("--------------------------------")

// desafio 3

let player1 = Math.floor(Math.random() * 10) + 1;
let player2 = Math.floor(Math.random() * 10) + 1;

console.log(player1)
console.log(player2)

const winner = player1

console.log(`o numero vencedor é ${winner}`)

console.log(`o numero ${player2} é igual a ${winner}`)

const ganhou = winner === player2 ? "player 2 é vencedor" : "não foi dessa vez"

console.log(ganhou)

console.log("--------------------------------")
console.log("--------------------------------")


// desafio 3

// const n1 = 45;
// const n2 = 12;
// const n3 = 89;

let maior = n1;
let menor = n1;

// Verificando quem é o maior
if (n2 > maior) maior = n2;
if (n3 > maior) maior = n3;

// Verificando quem é o menor
if (n2 < menor) menor = n2;
if (n3 < menor) menor = n3;

console.log(`O maior número é ${maior}`);
console.log(`O menor número é ${menor}`);

const maiorr = Math.max(n1, n2, n3);
const menorr = Math.min(n1, n2, n3);

console.log(`Maior: ${maiorr}, Menor: ${menorr}`);






// desafio 4

console.log("--------------------------------------------------")

// 1. Criando os Objetos
const candidatos = [
    { nome: "Lucas", idade: 25, sexo: "M", profissao: "Engenheiro", nacionalidade: "brasileira" },
    { nome: "Ana", idade: 17, sexo: "F", profissao: "Estagiária", nacionalidade: "brasileira" },
    { nome: "John", idade: 30, sexo: "M", profissao: "Designer", nacionalidade: "americano" },
    { nome: "Carla", idade: 18, sexo: "F", profissao: "Dev", nacionalidade: "brasileira" },
    { nome: "Miguel", idade: 15, sexo: "M", profissao: "Estudante", nacionalidade: "espanhol" }
];

candidatos.forEach(pessoa => {

    const aprovado = pessoa.idade >= 18 && pessoa.nacionalidade.toLowerCase() === "brasileira";

  console.log(`Nome: ${pessoa.nome}`);
  console.log(`Status: ${aprovado ? "✅ APROVADO(A)" : "❌ REPROVADO(A)"}`);
  console.log("-----------------------");




})


  console.log("-----------------------");

// desafio 5

const criteriosJurado = {
  0: "Desastroso. Não houve nenhum comprometimento com a apresentação.",
  1: "Muito fraco. Faltou técnica, preparo e execução básica.",
  2: "Insuficiente. O desempenho ficou muito abaixo do esperado.",
  3: "Regular para baixo. Muitos erros visíveis e falta de ritmo.",
  4: "Abaixo da média. Mostrou potencial, mas falhou na execução técnica.",
  5: "Mediano. Cumpriu o básico, mas sem brilho ou diferencial.",
  6: "Bom. Uma apresentação sólida, apesar de alguns deslizes menores.",
  7: "Muito bom! Demonstrou domínio e boa técnica.",
  8: "Ótimo! Execução de alto nível com poucos pontos de correção.",
  9: "Excelente! Beirando a perfeição, com muita presença e carisma.",
  10: "Impecável! Uma performance memorável que merece a nota máxima."
};

function AvaliarCandidato(nome, nota) {
    console.log(`Candidato: ${nome}`);
    console.log(`Nota: ${nota}`);


    if (nota>= 0 && nota <= 10 && Number.isInteger(nota))
        console.log(`Justificativa do Jurado: "${criteriosJurado[nota]}"`);
    
    else {
        console.log("❌ Erro: Nota inválida. O jurado só pode atribuir notas inteiras de 0 a 10.");
    }
} 
  console.log("--------------------------------------------------");



AvaliarCandidato("xixica", 9)


// desafio 6 

  console.log("--------------------------------------------------");


const numero = 50 


const resultado = (numero % 2 === 0) ? `O número ${numero} é par` : `O número ${numero} é ímpar`;

console.log(resultado);

// desafio 07
  console.log("--------------------------------------------------");
  console.log("--------------------------------------------------");
  console.log("--------------------------------------------------");

// const number = 13

if(number % 2 === 0 ) {
  if(number % 5 ===0 )
    console.log(`o numero ${number} é par e divisivel por 5` )
  else console.log(`o numero ${number} é apenas par`)
 
} else {

  for (let i = 2; i < number; i++) 
    if (number % i === 0) {
      console.log(`o numero ${number} é impar mas não é primo`)

      break
      }   
  
      else {
        if(i === number -1) console.log( `${number} é um numero impar e primo`)
      }

    }  


const number = 13;

if (number % 2 === 0) {
    // REGRA 1: Se for par, checa divisibilidade por 5
    if (number % 5 === 0) {
        console.log(`O número ${number} é par e divisível por 5`);
    } else {
        console.log(`O número ${number} é apenas par`);
    }
} else {
    // REGRA 2: Se não for par, é automaticamente ímpar. Agora checa se é primo.
    let ehPrimo = true;

    if (number < 2) {
        ehPrimo = false;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                ehPrimo = false;
                break; // Achou um divisor, para tudo.
            }
        }
    }

    // Resultado final para o caso ímpar
    if (ehPrimo) {
        console.log(`${number} é um número ímpar e primo`);
    } else {
        console.log(`${number} é um número ímpar, mas não é primo`);
    }
}

// desafio 8

const n1 = 2;
const n2 = 4;
const n3 = 6;
const n4 = 8;

// Verifica se TODOS são pares
if (n1 % 2 === 0 && n2 % 2 === 0 && n3 % 2 === 0 && n4 % 2 === 0) {
    console.log("TODOS OS NÚMEROS SÃO PARES");
} 
// Verifica se TODOS são ímpares
else if (n1 % 2 !== 0 && n2 % 2 !== 0 && n3 % 2 !== 0 && n4 % 2 !== 0) {
    console.log("TODOS OS NÚMEROS SÃO ÍMPARES");
} 
// Se não caiu em nenhum dos casos acima, é porque está misturado
else {
    console.log("Há números pares e ímpares");
}