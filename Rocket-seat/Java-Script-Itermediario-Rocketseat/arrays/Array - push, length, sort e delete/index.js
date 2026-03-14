function espaco () {
console.log("------------------------------------------------------")
}





const students = ["Luke Skywalker", "Gandalf", "Hermione Granger", "Tony Stark", "Katniss Everdeen"]

// .push 
// adiciona item ao final do array
students.push('xixica')
students.push('It a coisa')
students.push('chefa')
console.log(students)


espaco()

// adicionando no inicio do array, usa o unshift
students.unshift('Primeiro do Array')

console.log(students)


espaco()

// .lenght
//  fala quantos itens tem no array
console.log(students.length)


espaco()

// .sort
// organiza o array em ordem alfabetica ou do maior para o menor
console.log(students.sort())

espaco()

// delete
// exclui pessoa do array

// remove do inicio do array
students.shift()

// remove do final do array
students.pop()



delete students[1]
console.log(students)



