const button = document.querySelector("button")

// ver quando a interação acontecer com tal elemnto especifico
// ele vai ver quando clicar no botão

button.addEventListener("click", () =>  {

    // manda a pagina parar de ficar so recarregndo
    event.preventDefault()

    console.log("clicou")
})