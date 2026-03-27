
const numbers = [12, 5, 8, 20, 3,45,56,68,789,46,79,36,98,57]

// Use the spread operator ...

// 1. A 'soma' começa em 0 FORA do laço para poder guardar os valores
let somaTotal = 0; 

for (let i = 0; i < numbers.length; i++) {
    
    // 2. Pegamos apenas o número da posição atual (sem mexer no 'i')
    const numeroAtual = numbers[i];

    // 3. Somamos o que já tínhamos na 'somaTotal' com o 'numeroAtual'
    somaTotal = somaTotal + numeroAtual; 

    // Opcional: ver a soma crescendo a cada passo
    console.log(`Passo ${i + 1}: somando ${numeroAtual}, total agora é ${somaTotal}`);
}

console.log("Resultado final:", somaTotal);

console.log(Math.max(...numbers)); // Output: 789
console.log(Math.min(...numbers)); // Output: 5
 
