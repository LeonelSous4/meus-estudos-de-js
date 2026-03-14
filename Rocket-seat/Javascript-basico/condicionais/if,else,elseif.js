// Estrutura,Quando usar?,Tradução Direta

// if,Sempre é o início da pergunta.,"
// ""Se isso for verdade..."""



// else if,"Quando a primeira pergunta foi falsa, mas você tem outra opção.",""
// "Senão, se isso aqui for verdade..."""

// else,Quando nenhuma das opções anteriores funcionou.,""
// "Caso contrário..."" / ""Então..."""

let nota = 85;

if (nota >= 90) {
    console.log("Aprovado com Excelência! 🌟");
} 
else if (nota >= 60) {
    console.log("Aprovado! ✅");
} 
else {
    console.log("Reprovado. ❌");
}




// Correto ✅,                          Errado ❌

// if (x > 10) { ... },                 if x > 10 { ... } (Falta os parênteses)
// else { ... },                        else (x < 10) { ... } (else não tem condição)
// else if (condicao) { ... },          elseif (condicao) { ... } (Tem que ter espaço)