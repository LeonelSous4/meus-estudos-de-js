const input1 = document.querySelector('input')
const select = document.querySelector('select')
const element = document.querySelector('#btn-limpar')

// fica observando evento, e quando ele acontece voce escolhe o evento a ser observado em () ela dispara
input1.addEventListener('focus', () => {
    console.log("Focado com sucesso")
})

select.addEventListener('change', () => {
    console.log(select.value)
})