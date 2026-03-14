const form = document.querySelector("form")

// ver o submit

// dessa orma aplica apenas para o ultiom
form.onsubmit = (event) => {
    event.preventDefault()
    console.log("voce fez submit")
}


// essa aplica todas
form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("voce faz submit no formulario")
})