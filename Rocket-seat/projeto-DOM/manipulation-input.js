const input = document.querySelector("input")

input.addEventListener("input", () => {
    const value = input.value
    const regex = /\D+/g


    console.log(value.match(regex))

})