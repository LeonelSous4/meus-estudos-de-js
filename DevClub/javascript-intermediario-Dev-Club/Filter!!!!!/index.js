// FILTER filtra os itens 

const List = [
{ nome: "Ana Silva", vip: true },
{ nome: "Bruno Oliveira", vip: false },
{ nome: "Carla Souza", vip: true },
{ nome: "xico Santos", vip: false },
{ nome: "Maria Silva", vip: true },
{ nome: "Rick Oliveira", vip: false },
{ nome: "robson Souza", vip: true },
{ nome: "Alex Santos", vip: true } 

];

const JustVips = List.filter( client => {
    return client.vip
})

console.log(JustVips)




console.log("----------------------------------------")

const students = [
{ nome: "Ana ", testeGrade:  8},
{ nome: "Bruno ", testeGrade: 3},
{ nome: "Carla ", testeGrade: 6 },
{ nome: "xico ", testeGrade: 7 },
{ nome: "Maria ", testeGrade: 10  },
{ nome: "Rick ", testeGrade: 8 },
{ nome: "robson ", testeGrade: 2 },
{ nome: "Alex ", testeGrade: 4 } 
]

const Passados = students.filter( student => {
    return student.testeGrade >= 7
})



// 2. 'aprovados' recebe o conteúdo de 'Passados' (sem o parênteses!)
const aprovados = Passados

// 3. Agora você chama a const no console
console.log("Apenas esses alunos passaram:", aprovados)




//  cria uma tabela
// console.table(Passados);

