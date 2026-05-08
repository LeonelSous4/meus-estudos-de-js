




// ==========================================
// 🌟 DESAFIO 2: Contar Frequência de Palavras
// ==========================================

console.log('\n--- DESAFIO 2: Contar Frequência ---\n');
console.log('Dificuldade: ⭐⭐ Fácil-Médio\n');

console.log(`
  Enunciado:
  Crie uma função que recebe uma string com palavras
  e retorna um objeto com a frequência de cada palavra.
  
  Exemplo:
  contarPalavras('javascript python javascript python java')
  // { javascript: 2, python: 2, java: 1 }
`);

function contarPalavras(texto) {
  const array = texto.split(' ')
  const frequencia = array.reduce((acc, f) => {
    acc[f] = (acc[f] || 0) + 1
    return acc

  }, {})

  return frequencia
}

// Teste aqui:
console.log('Resultado:', contarPalavras('javascript python javascript python java ruby python javascript java typescript ruby golang javascript python rust typescript javascript golang ruby java python rust typescript javascript golang ruby python typescript java rust golang javascript ruby typescript python java rust golang javascript ruby typescript python java rust golang javascript python typescript java ruby'));