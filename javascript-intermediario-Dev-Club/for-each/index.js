
// For each serve para percorrer arrays


const students = [
  { name: "Ana Silva", idade: 21 },
  { name: "Bruno Oliveira", idade: 19 },
  { name: "Carla Souza", idade: 23 },
  { name: "Diego Santos", idade: 20 },
  { name: "Erika Lima", idade: 22 },
  { name: "Fabio Mello", idade: 25 },
  { name: "Gisele Costa", idade: 18 },
  { name: "Hugo Rocha", idade: 24 },
  { name: "Isabela Reis", idade: 21 },
  { name: "João Pedro", idade: 20 }
];

// for each aceita ate 3 argumentos

// vai percorrer item por item

// 1 - student vai assumir o valor de cada item a medida que for passando
// 2 - vai mostrar a posição de cada item. 0,1,2,3
// 3 - array completo,  se o array tiver 5 itens ele vai imprimir o array completo 5 vezes

// lembrando que pode por qualquer nome nos parenteses


students.forEach((student) => {
    console.log(student )
})





console.log("-----------------------------------------------")







// vendo idade media

const studants = [
  { name: "Ana Silva", idade: 21 },
  { name: "Bruno Oliveira", idade: 19 },
  { name: "Carla Souza", idade: 23 },
  { name: "Diego Santos", idade: 20 },
  { name: "Erika Lima", idade: 22 },
  { name: "Fabio Mello", idade: 25 },
  { name: "Gisele Costa", idade: 18 },
  { name: "Hugo Rocha", idade: 24 },
  { name: "Isabela Reis", idade: 21 },
  { name: "João Pedro", idade: 20 }
];

let AllstudentsAge = 0;

studants.forEach((student) => {
    // Usamos 'student' (o item atual), não o array 'studants'
    AllstudentsAge += student.idade; 
});

const media = AllstudentsAge / studants.length;
// lenght é o numero de itens dentro do array

console.log(media.toFixed()); 
// toFixed, deixa apenas 2 casas após a virgula