let message = "Meus estudos DE java script"

console.log(message)

// exibir todo em maiusculo

// upercase = maiusculo
console.log(message.toUpperCase())

// lowercase = minusculo
console.log(message.toLowerCase())


// Obtendo comprimento de sting

let message1 = "Meus estudos DE java script html css"

// lenght mostra o comprimento ou seja a quantidade de letras e espaços
console.log(message1.length)



console.log("---------------------------------------------------------------")



// contando digitos

let value = 126717681387
// transforma o number em string
console.log(String(value).length)
// duas formas de fazer a mesma coisa
console.log(value.toString().length)






console.log("---------------------------------------------------------------")









// fatiando string
// substituindo texto

let message2 = "Meus.  estudos.  DE.   java.script.  html.  css."

console.log(message2.replace('.', '-'))
// vai substituir apenas o primeiro . por -
console.log(message2.replaceAll('.', '-'))
// vai substituir todos os . por -








console.log("---------------------------------------------------------------")







let message3 = "Meus  estudos  DE   java.script  html  css"

// estrair parte da string (start, end)
// ele pegou apartir da dasa 0 ate a 5, ou seja 5 letras
console.log(message3.slice(0,5))
// aqui ele vai mostrar 19 espaços ou 19 letras
console.log(message3.slice(20,39))

// pegando de tras pra frente
console.log(message3.slice(-3))





console.log("---------------------------------------------------------------")







// removendo espaços em branco

let message4 = "       java.script         "  
console.log(message4)
// trim vai remover todos os espaços a frente e no final
console.log(message4.trim())





console.log("---------------------------------------------------------------")

// Completando Sring 


let CreditCard = "1234567812344928"
console.log(CreditCard.length)


// vai pegar os ultimos 4 digitos
const lastDigits = CreditCard.slice(-4)
console.log(lastDigits)

// agora irei ocultar os outros 12 digitos, eles devem ficar com um x no lugar

// padStart preenche a string do inicio pegou todos os numeros pelo lenght, e substiyuiu todos po x menos os ultimos (lastDigits)
// padEnd preenche a string do final
const OcultDigits = lastDigits.padStart(CreditCard.length, "X")

console.log(OcultDigits)



console.log("---------------------------------------------------------------")


// separando e unindo tring 
let text = "estudar, aprender, Praticar "

let separate = text.split(',')
// ele cota onde tem virgula, ou seja ele cria um array pois nomes separados na cosnt são arrays
console.log(separate)


console.log("---------------------------------------------------------------")

let Juntando = separate.join(" - ")
// agora estou juntando itens 
console.log(Juntando)


console.log("---------------------------------------------------------------")
// obtendo posição da palavra

let text1 = "Meus  estudos  DE   javascript  html  css"
console.log(text1.indexOf("javascript"))
// java script inicia na 20
// quando não encontra retorna -1





// Verificar se existe a palavra na string
console.log(text1.includes("javascript"))


