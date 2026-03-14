// splice 

const students = ["Luke Skywalker", "Gandalf", "Hermione Granger", "Tony Stark", "Katniss Everdeen"]

// .splice
// posso tirar e adicionar estudantes na posição que quiser
// a partir de qual item
//  a partir do 1 gandalf, quero retirar 2 ou seja sai gandalf e hermione
students.splice(1, 2)

//  apartir do elemento 1, retire x e ponha zaza no lugar, se por 0  ele vai adicionar sem retirar ninguem
students.splice(1, 1, 'zaza')
console.log(students)


// slice 
// retira itens do array

// se tiver apenas 1 vai tirar todos a partir do 1
// (1,3) retira de 1 ate 3
const stt = students.slice(1,3)
console.log(students)




// pop
// apenas retire o ultimo item
students.pop()
console.log(students)


// shft
// apenas retire o primeiro item
students.shift()
console.log(students)