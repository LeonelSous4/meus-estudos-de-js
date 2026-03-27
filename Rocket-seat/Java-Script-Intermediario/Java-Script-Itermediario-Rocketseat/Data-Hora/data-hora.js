const espaco = ((espaco1) => {
console.log("---------------------------------------------------------")
})

espaco()



// data e hora atual

console.log(new Date())
// data e hora


// data e hora de referencia
console.log(new Date(0))


espaco()
// numero de milissegundos
console.log(new Date().getTime())







espaco()







// definir hora e data especifica

// ano,mes,dia o mes começa em 0 então janeiro é o mes 0
 console.log(new Date(2024,6,7)) 








//  defininido hora 
// ano,mes,dia,hora,minutos,segundos
 console.log(new Date(2024, 6, 7, 5, 30, 0)) 

 console.log(new Date("2024-07-03T14:30:00")) 










//  pegando dia da semana especifico, domingo = 0 , seg = 1...
let data = new Date("2024-07-03T14:30:00")
// dia da semana
console.log(data.getDay())-

espaco()









// dia do mes (0 a 30)
console.log(data.getDate())










espaco()


// mes do ano (0 a 11)
console.log(data.getMonth())












espaco()


// Ano
console.log(data.getFullYear())










espaco()

// Horas
console.log(data.getHours())








espaco()

// Minutos
console.log(data.getMinutes())









espaco()

// modificando data e hora

let data1 = new Date("2024-07-03T14:30:00")
data1.setFullYear(2040)
console.log(data1)


// mudando horas
data1.setHours(18)

// todos os outros parametros como minutos, segundos dias mes seguem no memso esquema

espaco()


// Formatando data e hora
let date = new Date("2026-03-14T12:40:00")
// o dia sempre ter 2 digitos, e se não tiver completar com o 0

let day = (date.getDate().toString().padStart(2, "0"))
console.log(day)


// agora com o mes, +1 pq o mes começa em 0
let month = (date.getMonth() +1).toString().padStart(2, "0")

console.log(month)


let year = date.getFullYear()
let hour = date.getHours()
let minute = date.getMinutes()


console.log(`Data de hoje: ${day}/${month}/${year}`)

espaco()

// convertendo data para string

let date1 = new Date("2026-07-07T16:49:00")

// tudo em string data e hora
console.log(date.toString())

// apenas a data em string
console.log(date.toDateString())

// hora
console.log(date.toTimeString())





espaco()



// data e hora de acordo com a localização
let date2 = new Date("2026-07-07T16:49:00")

// retornou apenas a data sem o horario
console.log(date.toLocaleDateString())

console.log(date.toLocaleTimeString())










espaco ()
// Data e hora em formato escolhido

// mostrando no formato dos eua, do brasil é pt-BR
console.log(date.toLocaleDateString("en"))
console.log(date.toLocaleTimeString("en"))





espaco()

// too locale string
let date3 = new Date("2005-07-07T17:15:00")


// data de forma resumida

console.log(
    date3.toLocaleString("pt-BR", {
    dateStyle: "short",
})


// por extenso
)
console.log(
    date3.toLocaleString("pt-BR", {
    dateStyle: "long",
})



// por extenso resumida

)
console.log(
    date3.toLocaleString("pt-BR", {
    dateStyle: "medium",
})





// por extenso maior

)
console.log(
    date3.toLocaleString("pt-BR", {
    dateStyle: "full",
})









)

// formatando

espaco()
console.log(
    date3.toLocaleString("pt-BR", {
    day:"2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
})
)

