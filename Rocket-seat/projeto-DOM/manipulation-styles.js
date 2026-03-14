// adicionando borda pelo js

const input = document.querySelector("#name")

// acessa as classes do elemento e adicionar
// adicionei o estilo do css na class do html pelo js
// ja tem uma class css pronta, eu apenas coloquei essa class no html por js
input.classList.add("input-error")



// remover a classe
input.classList.remove("input-error")


// toggle significa: se esxisitr a classe remove, se não exisitr adiciona
input.classList.toggle("input-error")


// como so existe um botão no html pode por ele direto
const button = document.querySelector("button")

// mudei a cor do botão por js, usando a sintaxe do css
button.style.backgroundColor = "red"