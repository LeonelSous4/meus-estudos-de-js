



const calcularJurosCompostos = (capital, taxa, tempo) => {

    const Taxa = taxa / 100

    const formula1 = Taxa + 1

    const formula2 = Math.pow(formula1,tempo) 

    const formula3 = formula2 * capital

    return formula3

    // outra forma

    // return capital * (1 + taxa / 100) ** tempo;

    }

  let valor = calcularJurosCompostos( 1000, 20, 10)

  console.log(valor.toFixed(2))

