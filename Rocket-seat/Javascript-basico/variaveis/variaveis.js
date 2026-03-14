// esses são os 3 tipos de variaveis

var nome1  = 'leonel'
var idade1 = 20
// var deixa criar duas variaveis de mesmo nome


let nome2 = 'vitor'
let idade2 = 15

// let não deixa criar outra variavel de mesmo nome porque sabe que vai prescerver, podemos mudar o conteudo depois sem precisar chamar var ou let

const idadeTotal = idade1 + idade2

// const depois de definida não pode ser mudada

console.log(nome1 + ' e ' + nome2 + ' juntos tem o total de ' + idadeTotal + ' anos de idade ' )


// var, tem scopo global, ou seja pega em todos os lugares do codigo

// let, não tem escopo global, apenas de função e bloco função e bloco e que ele pega apenas dentro do seu scopo ou do seu bloco { }
// const, escopo função e bloco


// -----------------Nomes para variaveis ----------------------------

// não podem começar com numero
// não recomendado usar acento ou caracteres especiais, pode usar mas não recomendado
// o js diferencia Miuscula de minuscula
// escrever sempre em ingles
// não usar acento ou caracteres especiais
// de nomes que façam sentido, nomes descritivios
// Cameocase usar primerira letra Maiuscula e a segunda minuscula
// Snake case Snake_case
