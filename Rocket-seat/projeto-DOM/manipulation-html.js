// manipulando conteudo

// quero apenas o texto




// quando atribui texto pelo textContent no js ele substutui tudo no html

// const guest = document.querySelector("#guest-1")
// console.log(guest.textContent)




const guest = document.querySelector("#guest-1 span")
console.log("kkkk")
console.log(guest.textContent)

// o ponto significa que voce vai pegar alguma propriedade do guest
// textContent vai exibir o conteudo

guest.textContent = "charmander"

// retorna e manipula o conteudo visivel e oculto
console.log(guest.textContent)

// retorna texto sem formatação e apenas o conteudo visivel
console.log(guest.innerText)

// retorna o html do documento como texto
console.log(guest.innerHTML)





// alterei o conteudo pelo js
// quando atribui texto pelo textContent no js ele substutui tudo no html