//  desestruturação assignment 

const data = ["Leonel Sousa", "Leo@gmail.com"]

// desestruturando array

const [username, email] = data

console.log("Nome:", username)
console.log("Email:", email)


const fruits = ["banana", "maçã", "laranja"]


// pegando so o primeiro

const [fruta] = fruits

console.log(fruta)

// pegando a segunda e ignorando o primeiro

const [_,apple] = fruits

console.log(apple)
