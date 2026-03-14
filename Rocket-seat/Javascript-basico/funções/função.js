// um bloco que realiza uma tarefa e pode ser invocado quando quiser

function message () {
    console.log("hello, world!")
}

// enquanto ela não for chamada ela não impriime
message()
message()
message()


// apenas a funão de dar espaço no console
function espaco () {
    console.log("------------------------------------------------------------------")
}






espaco()









// parametros e argumentos

// esse name é o parametro

function info (name) {
    console.log("olá, ", name)
}


//  estou atribuindo o argumento leo ao parametro
info("leo")
// eu coloquei leo no name quando chamei a função













espaco()












function soma (numero1, numero2) {
    console.log(numero1 + numero2)
}

soma(4,5)
soma(20,10)
// varias operações usando a mesma function

// a ordem importa muito












espaco()




// return







function sum(a,b) {
    let result = a + b
    return result 

    // retorna o resultado para quem chamou
}

let response1 = sum( 5, 10)

console.log(response1)








// aprendendo a documentar funções

/**  */







/**
 * Soma dois números e retorna o resultado.
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A soma dos dois parâmetros.
 */
function somar(a, b) {
  return a + b;
}

// Agora, digite a linha abaixo e PASSE O MOUSE sobre a palavra 'somar'
somar(5, 10);








/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
// so aparece acima de functions

function sum(a,b) {
    let result = a + b
    return result 

    // retorna o resultado para quem chamou
}

let response = sum( 5, 10)

console.log(response)