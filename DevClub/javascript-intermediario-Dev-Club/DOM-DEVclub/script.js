








const element = document.getElementById("titulo-principal")
// seleciono elemento pelo id
console.log("getElementById")
console.log(element)










console.log("-----------------------------------------------------")










const classe = document.getElementsByClassName("paragraph")
// pegando a class, retorna (html colections)
console.log("getElementByClassName")

console.log(classe)

// pega o item 2 da class paragraph, ou seja o segundo p do html
console.log(classe.item(2))
console.log(classe[2])

// duas formas de fazer a mesma coisa






console.log("-----------------------------------------------------")










const Tags = document.getElementsByTagName("p")
// pega pela tag, retorna (html colections)
console.log("getElementsByTagName")

console.log(Tags)



console.log("-----------------------------------------------------")




const seletor = document.querySelector("p")
// elepega, id, class, tag.. sempre pega o primeiro que encontrar
// para pegar class(.name)
// pegar ID (#name)
// para pegar tag("name")
console.log("querySelector")
console.log(seletor)






console.log("-----------------------------------------------------")


const seletorAll = document.querySelectorAll("p")
// ele pega, id, class, tag.. sempre pega o todos os elementos que encontrar
// para pegar class(.name)
// pegar ID (#name)
// para pegar tag("name")
// retorna (NodeList) -> isso significa que posso iterar
console.log("querySelectorAll")
console.log(seletorAll)


console.log("pos iteração")

const Iteration = seletorAll.forEach((element) => {
    console.log(element)
})





console.log("-----------------------------------------------------")







// pegando pelo nome nesse caso o input, pois são poucos elementos html que podem receber name
const Byname = document.getElementsByName("Input-do-html")

console.log(Byname)








// pegando o valor 
const valor = document.querySelector('input')

console.log(valor.value)