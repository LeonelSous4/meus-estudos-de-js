

const students = ['vitor', 'bruno', 'bruna', 'chichica', 'jaco']

// vai funcionar enquanto i for maior que array students
for(let i = 0; i <= students.length; i ++) {

    // console.log(`${students[i]} está presente no cabaré`)
}



// break

for(let i = 0; i < 10; i ++) {
    if (i === 5) {
        break
    }
}



// continue
// pulou o 5
for(let i = 0; i < 10; i ++) {
    if (i === 5) {
        continue
    }
    // quando ele viu que i era = 5 em vez de ele parar pois a condição tinha sido satisfeita,pormeio do continue, ele voutou para o loop.

    console.log(i)
}







// for of
console.log("---------------------------------------------------------------------")

let myName = 'Leo'
let Names = ['vitor', 'bruno', 'bruna', 'chichica', 'jaco']

// for of vai repetir todos os strings, a variavel letter assumiu o valor de Names, se tiver apenas um nome ela vai pegar os caracteres
for(let Name of Names) {
    console.log(Name)
}












console.log("---------------------------------------------------------------------")

// for in

const student = {
    name:  "leo",
    age: 20,
    genre: "male",
}
//  for in ideal para objetos
for(let property in student){
    console.log(`${property} : ${student[property]}`)
}