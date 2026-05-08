

// / ==========================================
// // 🌟 DESAFIO 1: Filtrar e Dobrar
// // ==========================================

// console.log('--- DESAFIO 1: Filtrar Pares e Dobrar ---\n');
// console.log('Dificuldade: ⭐ Fácil\n');

// console.log(`
//   Enunciado:
//   Crie uma função que recebe um array de números,
//   filtra apenas os números pares, dobra cada um,
//   e retorna a soma total.
  
//   Exemplo:
//   filtrarDobrarSomar([1, 2, 3, 4, 5, 6])
//   // Pares: [2, 4, 6]
//   // Dobrados: [4, 8, 12]
//   // Soma: 24
// `);














function filtrarDobrarSomar(numbers) {
  const pares = numbers.filter(n => n % 2 === 0);
  console.log('Pares:', pares);
  const dobrados = pares.map(d => d * 2)
  console.log('dobrados:' , dobrados)
  const soma = dobrados.reduce((acc, s) => acc + s ,0)
  console.log('soma: ' , soma)
  
    
    
  
}

filtrarDobrarSomar([1, 2, 3, 4, 5, 6])