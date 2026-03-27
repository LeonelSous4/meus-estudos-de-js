// ESTRUTURAS DE REPETIÇÃO
// FOR, FOR...OF e FOR...IN

const students = ["vitor", "bruno", "bruna", "chichica", "jaco"];

console.log("-------------------------------------")

// for clássico
for (let i = 0; i < students.length; i++) {
  console.log(`Aluno ${i + 1}: ${students[i]}`);
}


console.log("-------------------------------------")


// for...of percorre os valores de uma lista
for (const name of students) {
  console.log(`Nome: ${name}`);
}

console.log("-------------------------------------")


// for...in percorre as chaves de um objeto
const student = {
  name: "leo",
  age: 20,
  genre: "male",
};

for (const property in student) {
  console.log(`${property}: ${student[property]}`);
}
