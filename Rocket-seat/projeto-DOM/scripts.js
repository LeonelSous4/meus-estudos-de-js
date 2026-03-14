// visualizar o conteudo do html(document)

// console.log(document)

// como obter o titulo da pagina

console.log(document.title)

// navegando pelo html

// acessando id

// getElementById = serve para deixar eu acessar elementos pelo id
// acessar o id guest-1
const elemento = document.getElementById("guest-1")

// mostra o elemento
console.log(elemento)








// (dir) mostra as propriedades
console.dir(elemento)


// acessando class
const guestByClass = document.getElementsByClassName("guest")
console.log(guestByClass)

// ele pega o apenas o que esta na primeira posição(0)

console.log(guestByClass.item(0))

// duas formas de fazer a mesma coisa

console.log(guestByClass[0])


// pega a tag que quiser
const guestsTag = document.getElementsByTagName("li")

console.log(guestsTag)
