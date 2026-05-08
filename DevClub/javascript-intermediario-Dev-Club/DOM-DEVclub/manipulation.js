// manipulando texto

const element = document.querySelector('h1')

// alterei o texto do h1
element.innerText = "hello word"
// duas formas de fazer a mesma coisa, mudam apenas o texto
element.textContent = "hi"


// esse muda tambem o html
// adicionando cdigo html com inner
element.innerHTML = "hello word <p> paragrafo js </p>"