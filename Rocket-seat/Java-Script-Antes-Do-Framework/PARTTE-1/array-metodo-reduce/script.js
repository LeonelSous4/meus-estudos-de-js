//  Metodo reduce() executa uma função reducer (provida por você) em cada elemento do array, resultando em um único valor de retorno. Ele é frequentemente usado para acumular ou reduzir um array a um único valor, como a soma de todos os elementos, o produto, ou até mesmo a construção de um objeto a partir de um array.

// parametros
// 1. array original sobre o qual reduce() foi chamado. O método reduce() itera sobre cada elemento do array, aplicando a função reducer e acumulando um resultado final. A função reducer recebe quatro argumentos:
// 2. acumulador: o valor acumulado retornado pela última execução da função reducer. Na primeira execução, ele é igual ao valor inicial fornecido (se houver) ou ao primeiro elemento do array (se não houver valor inicial).
// 3. valorAtual: o elemento atual do array que está sendo processado.
// 4. indice: o índice do elemento atual que está sendo processado.
// 5. array: o array original sobre o qual reduce() foi chamado.

const values = [1, 2, 3, 4, 5];

const sum = values.reduce((accumulator, currentValue, index) => {
    console.log(`Acumulador: ${accumulator},`);
    console.log(`Valor Atual: ${currentValue}`);
    console.log(`Índice: ${index}`);


    console.log("soma", accumulator + currentValue)
    console.log("#############################################")

    return accumulator + currentValue
},0);