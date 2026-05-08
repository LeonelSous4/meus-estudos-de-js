

// criando um módulo com as funções de soma e multiplicação

// preciso indicar qual função quero exportar, para isso uso a palavra reservada export
export function sum(a, b) {
    return a + b;
}
// la so aparece se eu usar a palavra reservada export, caso contrário ela fica privada, ou seja, não pode ser acessada fora do módulo

export function multiply(a, b) {
    return a * b;
}


// pode exportar assim tambem, mas não é recomendado, pois fica mais difícil de ler e entender o código
// export {sum, multiply};














