

const Versicle = "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça."



function Count (Versicle, letter) {

    let contador = 0

    for(let pw of Versicle) {

       if(pw.toLowerCase() === letter.toLowerCase()) {
        contador++

       }
    
    }

    return contador

}

Count(Versicle, "O")

let total = Count(Versicle, "O")
console.log(total)
