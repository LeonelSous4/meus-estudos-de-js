let n1 = 2
let n2 = 5
const operation = "+"


const calculate = (n1, n2, operation) => {
    let result = 0
    switch (operation) {
        case "+":
                 result = n1 + n2

            
            break;

        case "-" :
                  result = n1 - n2

            break;


        case "*" :
                  result = n1 * n2

            break;
                

        case "/" :
                  result = n1 / n2

            break;

    
        default:
            console.log("invalido")
            break;
    }

    return result
}

const resultado = calculate( 500 , 10, "/")

console.log(resultado)