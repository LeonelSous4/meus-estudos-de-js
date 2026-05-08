const element = document.querySelector('h1')

element.style.color = 'blue'
// pondo cores
element.style.backgroundColor = 'yellow'

// container
const cont = document.querySelector('.container') 

cont.style.backgroundColor = 'gray'


// eventos

const myFunction = () => {
    alert("chupa cabra")
}

// pegando o evento diretamente pelo js

const btn = document.querySelector("#btn-limpar"); // Verifique o 't' no final

btn.onclick = () => {
    alert("Segunda forma de linkar");
};

// pegando oque o usuario digita no input

const input = document.querySelector("#campo-tarefa");

input.onkeypress = (key) => {
    
    // pega as propriedades das teclas
    console.log(key)

    // pega tecla por tecla sem juntalas apenas 1 de cada ez
    console.log(key.key)

    // pega oque esta sendo escrito no input
    console.log(input.value)
};