// Desafio 1

const List = [
{ nome: "Ana ", vip: true },
{ nome: "Bruno ", vip: false },
{ nome: "Carla ", vip: true },
{ nome: "xico ", vip: false },
{ nome: "Maria ", vip: true },
{ nome: "Rick ", vip: false },
{ nome: "robson ", vip: true },
{ nome: "Alex ", vip: true } 

];

const setores = List.map( (guests) => {
    let setorEscolhido;
     
    if(guests.vip === true) {
        setorEscolhido = "black"
    }else {
        setorEscolhido = "green"
    }

    return {
        nome: guests.nome,
        vip: guests.vip,
        age: 20,
        setor: setorEscolhido
    }


} )

console.log(setores)

// vip = sector: black
//  não vip = setor green



// Desafio 2



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

const Validation = students.map((alunos) => {
   return {
    nome: alunos.nome,
    finalResult: alunos.testeGrade >= 7 ? "aproved" : "desaproved"
   }
})

console.log(Validation)