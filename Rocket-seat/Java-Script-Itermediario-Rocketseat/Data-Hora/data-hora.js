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
console.log(data.getDay())

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