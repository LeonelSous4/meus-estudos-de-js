
const precos = [
1,43,543,465,85,86,326,5645,234,443,23,211,4,5,45,6,55,768,
]



const filtrarPrecos = (precos, callback) => {

    console.log(callback())


    }

    filtrarPrecos(precos, callback)


function callback () {


    const Maiores = precos.filter(Mai => {
        return Mai > 100
    })

    return Maiores
    
}

