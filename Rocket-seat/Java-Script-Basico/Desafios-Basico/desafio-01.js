
let celsius = 1



function converter () {

    const convertion = celsius * 9/5 + 32
        const fht = convertion.toFixed(2)

    const convertionK = celsius + 273.15
        const Kelv = convertionK.toFixed(2)


    console.log(`${celsius} celsius em farenheit = ${fht}`)
    console.log(`${celsius} celsius em Kelvin = ${Kelv}`)



}

converter()

