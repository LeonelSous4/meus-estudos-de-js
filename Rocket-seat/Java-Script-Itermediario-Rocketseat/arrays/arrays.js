// criando array com constructor 

const NewArray = new Array() 
console.log(NewArray)

// quando usa array [] usa cochetes
// quando usa objeto {} usa chaves

// array com 10 elementos vazios
const Array10 = new Array (10)
console.log(Array10.length)

// como acessar itens do array

const students = ["Luke Skywalker", "Gandalf", "Hermione Granger", "Tony Stark", "Katniss Everdeen", "capitão america", "deadpool"]
// console.log(students)

console.log(students[2], students[3])

console.log("-------------------------------------------------------")
// qual ultima posição, o ultimo da lista sempre vai ser o tamanho dela -1 pois uma lista tem 5 itens, o lenght conta 5, mas o console chama por nmr e uma array começa por 0, ou seja se ela tiver 5 itens o quinto item é [4] e o primeiro é [0]
console.log(students[students.length-1])

console.log("-------------------------------------------------------")

// convertendo string em array

let Fullname = "Leo sousa Dev Criador de sites"
// ele repartiu minha string nos espaços e ficou cada nome um elemento
// ficou assim: [ 'Leo', 'sousa', 'Dev', 'Criador', 'de', 'sites' ]
console.log(Fullname.split(" "))

// craindo array com letras
console.log(Array.from(Fullname))
// 'L', 'e', 'o', ' ', 's', 'o',
//   'u', 's', 'a', ' ', 'D', 'e',
//   'v', ' ', 'C', 'r', 'i', 'a',
//   'd', 'o', 'r', ' ', 'd', 'e',
//   ' ', 's', 'i', 't', 'e', 's'


// quais elementos array aceita
let MyArray = [
    "texto",
    10,
    true,
    function () {
       console.log("function dentro do array")
    }, {
        name: LockManager,
        number: 7857897609, 
    }
]
    
    
// verificando se item xiste no array 

const personas = ["Luke Skywalker", "Gandalf", "Hermione Granger", "Tony Stark", "Katniss Everdeen", "capitão america", "deadpool"]

// vai retornar false pois não tem chaves no array
console.log(personas.includes("chaves"))