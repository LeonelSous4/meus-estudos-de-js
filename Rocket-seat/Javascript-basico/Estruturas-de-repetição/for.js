

const students = ['vitor', 'bruno', 'bruna', 'chichica', 'jaco']

// vai funcionar enquanto i for maior que array students
for(let i = 0; i <= students.length; i ++) {

    // console.log(`${students[i]} está presente no cabaré`)
}

// for of
console.log("---------------------------------------------------------------------")

let myName = 'Leo'
let Names = ['vitor', 'bruno', 'bruna', 'chichica', 'jaco']

// for of vai repetir todos os strings, a variavel letter assumiu o valor de Names, se tiverapenas um nome ela vai pegar os caracteres
for(let letter of Names) {
    console.log(letter)
}


console.log("---------------------------------------------------------------------")

// for in

const student = {
    name:  "leo",
    age: 20,
    genre: "male",
}

for(let property in student){
    console.log(`${property} : ${student[property]}`)
}