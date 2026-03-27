

function triangulo (lado1, lado2, lado3) {

    if (lado1 + lado2 >= lado3 && 
    lado1 + lado3 >= lado2 && 
    lado2 + lado3 >= lado1) {

        if(lado1 === lado2 && lado2 === lado3) {
            console.log("esse triangulo é Equilátero (3 lados iguais),")
        } else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
            console.log("esse triangulo é Isósceles (2 iguais) ")
        } else {
            console.log("esse triangulo é Escaleno (todos diferentes). ")
        }

    } else {
        console.log("não ha triangulo")
    }
}

triangulo(2,5,5)