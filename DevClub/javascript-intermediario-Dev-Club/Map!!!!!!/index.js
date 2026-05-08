// 1. O Array de Estudantes
// JavaScript
// const estudantes = [
//   { nome: "Ana Silva", idade: 21 },
//   { nome: "Bruno Oliveira", idade: 19 },
//   { nome: "Carla Souza", idade: 23 },
//   { nome: "Diego Santos", idade: 20 }
// ];
// 2. Como o .map() funciona?
// Imagine que você quer criar uma nova lista contendo apenas os nomes dos estudantes, ignorando as idades.

// JavaScript
// // Criando um novo array apenas com os nomes
// const nomesApenas = estudantes.map((estudante) => {
//   return estudante.nome;
// });

// console.log(nomesApenas); 
// // Saída: ["Ana Silva", "Bruno Oliveira", "Carla Souza", "Diego Santos"]
// 3. Regras de Ouro do Map
// Sempre retorna um novo Array: Ele não altera o array original (estudantes continua intacto).

// Mesmo Tamanho: O array resultante terá exatamente o mesmo número de itens que o original.

// Imutabilidade: É ideal para programação funcional, pois você gera novos dados em vez de "sujar" os antigos.

// 4. Outro Exemplo: Transformando Dados
// Você pode usar o map para alterar os valores. Vamos supor que todos os alunos fizeram aniversário e você quer uma lista com as idades atualizadas:

// JavaScript
// const idadesAtualizadas = estudantes.map(estudante => {
//   return {
//     ...estudante, // Copia os dados atuais
//     idade: estudante.idade + 1 // Soma 1 na idade
//   };
// });
// Resumo da diferença:

// forEach: Serve para executar ações (dar um console.log, salvar no banco). Ele não retorna nada.

// map: Serve para transformar dados. Ele sempre retorna um novo array transformado.










const numbers = [1,2,3,4]

const newArray = numbers.map( (xupaCabra) => {
    const newNumber = xupaCabra + 10 * 2 /5

    return newNumber

    // return xupaCabra * 2
    // map vai pegar os numeros do array e multiplicar por 2
})

// map cria outro array aoseu gosto

console.log(newArray)








const estudantes = [
{ nome: "Ana Silva", idade: 21 },
{ nome: "Bruno Oliveira", idade: 19 },
{ nome: "Carla Souza", idade: 23 },
{ nome: "Diego Santos", idade: 20 } 

];

const newStudents = estudantes.map( (student) => {
    // por sobrenome em cada estudante
    const novosEstudantes = {
        nome: student.nome + 'Da silva',
        idade: student.idade -5
    }

    return novosEstudantes
})

console.log(newStudents)


























// 1. O que é cada coisa?
// double: É o nome da função. Você usa esse nome depois para "chamar" a execução (ex: double(5)).

// number: É o parâmetro (ou o "espaço reservado"). Imagine que o number é uma caixa vazia onde você vai colocar o valor que quer dobrar.

// number * 2: É o corpo da função e o que ela retorna. É o cálculo que diz: "pegue o que estiver na caixa number e multiplique por 2".

// 2. Por que o seu código deu erro?
// Você tentou escrever: const double = ( ) number => number * 2.

// O erro acontece porque, na sintaxe de Arrow Function, os parênteses () servem para guardar os parâmetros. Você não pode colocar os parênteses vazios e depois o nome do parâmetro solto.

// As duas formas corretas são:

// Sem parênteses (Só quando tem 1 parâmetro):
// const double = number => number * 2

// Com parênteses (Obrigatório para 0 ou mais de 1 parâmetro):
// const double = (number) => number * 2

// Nota: Se você colocar (), o JavaScript entende que a função não recebe nada. Se logo depois você escreve number, o motor do JS fica confuso e trava.




const numbers1 = [5,8,10,40]



// criei uma finção separada e botei dentro do map

const double = number => number * 2
const sum = number => `R$ ${number.toFixed(2)}`


const Nova = numbers1.map(double).map(sum)

// ele simplesmentte vai fazer para cada item do array: x * 2 + 30 - 10 

console.log(Nova)

// é a mesma coiisa de

const Nova1 = numbers1.map((double) => {

})