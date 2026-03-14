const input = document.querySelector("input")
const form = document.querySelector("form")

form.onsubmit = (event) => {
    event.preventDefault()

    const value = input.value
    // so aceita string
    const hasNumber = /\d+/g

    if(hasNumber.test(value)) {
        alert("o texto contem numeros, por favor apenas letras")
    } else {
        alert("enviado")
    }
}