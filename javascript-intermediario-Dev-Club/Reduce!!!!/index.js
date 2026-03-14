// aceita 4 parametros
// acumulador, valor atual, index, array completo


const list = [1, 2, 3, 4];

const sum = list.reduce((acc, current) => {
    // 1. O 'acc' (acumulador) guarda o resultado da soma anterior.
    // 2. O 'current' (atual) é o número da vez na lista (1, depois 2, depois 3...).
    
    console.log(`Acumulador: ${acc} | Valor Atual: ${current}`); 
    
    // O valor retornado aqui vira o 'acc' da próxima rodada:
    return acc + current; 

}, 0); // <-- Este 0 é o VALOR INICIAL. O 'acc' começa valendo 0.

console.log("Resultado final da soma:", sum); 

/* PASSO A PASSO NO CONSOLE:
  1ª rodada: acc (0) + current (1) = Retorna 1
  2ª rodada: acc (1) + current (2) = Retorna 3
  3ª rodada: acc (3) + current (3) = Retorna 6
  4ª rodada: acc (6) + current (4) = Retorna 10 -> VALOR FINAL
*/




const companies = []