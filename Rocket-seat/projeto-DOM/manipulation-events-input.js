// elemntos input 

const input = document.querySelector("input")

// keydown quando uma tecla e pressionada, capturatudo, (todas as teclas)

input.addEventListener("keydown", (event) => {
    console.log(event)
    console.log(event.key)
})

// so dispara quando uma tecla caracter e e pessionada
input.addEventListener("keypress", (event) => {
    console.log(event)
})


