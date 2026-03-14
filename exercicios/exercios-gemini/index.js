// Exercício 1: A Lanchonete (Foco em switch case e if/else)Você está criando o sistema de caixa de uma lanchonete. O usuário escolhe um código de produto e a quantidade.Regra 1: Use um switch case para definir o preço do produto com base no código:Código 1: Hambúrguer (R$ 15,00)Código 2: Pizza (R$ 35,00)Código 3: Refrigerante (R$ 5,00)Default: "Código inválido".Regra 2: Calcule o valor total (preço $\times$ quantidade).Regra 3: Use if/else para aplicar um desconto: se o valor total passar de R$ 50,00, dê 10% de desconto. Mostre o valor final no console

// foco em switch

const codigo = 1
const qtditems = 5

let valor = 0


switch (codigo) {
    case codigo: 1
    valor = 15
    console.log("escolheu Hambúrguer ")
        break;

        case codigo: 2
    valor = 35
    console.log("escolheu Pizza ")
        break

    case codigo: 3;
    valor = 5
        console.log("escolheu Refrigerante ")
        break

    default:
        console.log("Código inválido")
        break;
}

const valorTotal = qtditems * valor 

console.log(` o valor total dos itens é ${valorTotal}`)

if(valorTotal > 50) {
    valorDesconto = valorTotal * 0.9

    console.log(`com o desconto o valor fica fica ${valorDesconto}` )
}

console.log("--------------------------------------------")


// desafio 2

// Exercício 2: O Cofrinho Inteligente (Foco em while)
// O laço while (enquanto) é perfeito para quando não sabemos exatamente quantas vezes o loop vai rodar, mas sabemos a condição de parada.
// Você tem um cofrinho e está guardando moedas até conseguir comprar um jogo de R$ 60,00.

// O Desafio: Você tem um array com os valores que depositou por dia. Use um while para ir somando esses valores até que o saldo seja maior ou igual a 60.

// Mostre no console quantos dias (quantos depósitos) foram necessários para atingir a meta.

const depositos = [10, 15, 20, 5, 20, 10, 5];
let saldo = 0;
let indice = 0; // Serve como nosso contador de dias e navegador do array

while (saldo < 60) {
    saldo += depositos[indice]; // Soma o valor do depósito atual ao saldo
    indice++; // Passa para o próximo dia
}

console.log(`Meta atingida! Foram necessários ${indice} dias para juntar R$ ${saldo.toFixed(2)}.`);

// Escreva seu while aqui...
// Dica: A condição será while(saldo < 60)

console.log("--------------------------------------------")

// desafio 3 

// Exercício 3: O Inspetor de Qualidade (Foco em for...of e else if)
// Uma fábrica produz peças que devem pesar exatamente entre 50g e 60g. Você tem um array com os pesos de um lote de peças.

// O Desafio: Use o for...of para ler o peso de cada peça.

// Use if, else if e else para classificar cada uma e contar os resultados:

// Menor que 50g: "Reprovado (Muito Leve)" -> Aumente o contador de leves

// Maior que 60g: "Reprovado (Muito Pesado)" -> Aumente o contador de pesadas

// Entre 50 e 60 (inclusive): "Aprovado" -> Aumente o contador de aprovadas

const lotePesos = [
55, 48, 65, 50, 42, 60, 71, 54, 21, 77,
34, 62, 45, 29, 71, 38, 50, 
23, 68, 41, 79, 33, 57, 26, 44, 73, 22, 
80, 47, 31, 65, 59, 28, 70, 36, 52, 25, 
61, 43, 75, 27, 49, 66, 30, 78, 35, 55, 
24, 69, 42, 74, 32, 58, 20, 46, 72, 37];

let aprovadas = 0;
let leves = 0;
let pesadas = 0;

for(sizes of lotePesos) {
    if(sizes < 50) {
        console.log(`${sizes} Reprovado (Muito Leve)`)

        leves ++
        
    } else if(sizes > 60) {
        console.log(`${sizes} Reprovado (Muito pesado)`)
        pesadas ++
    } else if (sizes >= 50 && sizes <= 60) {
         console.log(`${sizes} Aprovado`)

        aprovadas ++
    }


}

console.log(`Total final de itens leves: ${leves}`);
console.log(`Total final de itens pesado: ${pesadas}`);
console.log(`Total final de itens aprovados: ${aprovadas}`);

const total = leves + pesadas + aprovadas
const reprovados = leves + pesadas

const aproveitamento = aprovadas / total * 100

console.log(`${aproveitamento.toFixed(2)} %`)



// Exercício 4: O Boletim Escolar (Foco em for...in)
// O for...in é especial: enquanto o for...of foi feito para Arrays (listas), o for...in foi feito para navegar dentro de Objetos (coleções de propriedades e valores).

// O Desafio: Você tem o boletim de um aluno. Use o for...in para passar por cada matéria.

// Se a nota for maior ou igual a 7, imprima: "Aprovado em [materia] com nota [nota]".

// Caso contrário, imprima: "Recuperação em [materia] com nota [nota]".

const boletim = {
    matematica: 8,
    portugues: 6,
    ciencias: 9,
    historia: 5
};

let somaTotal = 0; // 1. Criamos a variável acumuladora fora do loop

for (const materia in boletim) {
    // 1. Pegamos a nota usando a chave 'materia'
    const nota = boletim[materia];

    somaTotal += nota

    // 2. Comparamos a NOTA, não o nome da matéria
    if (nota >= 7) {
        console.log(`Aprovado em ${materia} com nota ${nota}`);
    } else {
        console.log(`Recuperação em ${materia} com nota ${nota}`);
    }

    
}

// 3. Exibimos o resultado final fora do loop
console.log(`---`);
const passou = somaTotal / boletim.lenght
console.log(`A soma de todas as notas é: ${somaTotal}`);

// Dica de como o for...in começa:
// for (const materia in boletim) { ... }
// Para pegar a nota, você usará: boletim[materia]