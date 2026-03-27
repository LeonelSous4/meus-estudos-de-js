
// informações da localidade
const currentLocale = Intl.DateTimeFormat().resolvedOptions()

console.log(currentLocale)


// exibe no formato de acrdo com a localidade
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()))
console.log(new Intl.DateTimeFormat("en-US").format(new Date()))



// diferença de fuso Horario

 const date1 = new Date ()
//  diferença de tempo em minutos
 console.log(date1.getTimezoneOffset())

//  diferença de tempo em horas
 console.log(date1.getTimezoneOffset() / 60)




//  Como criar data e hora já com o fuso

// +03 é mais 3 horas por conta do fuso
const DateTimezone = new Date ("2024-12-05T22:56:30.603+03:00")
console.log(DateTimezone.toLocaleString())