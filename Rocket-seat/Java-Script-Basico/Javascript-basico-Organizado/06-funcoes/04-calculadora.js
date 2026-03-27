// CALCULADORA SIMPLES
// Exemplo de função com switch para escolher a operação.

function calculate(n1, n2, operation) {
  let result;

  switch (operation) {
    case "+":
      result = n1 + n2;
      break;
    case "-":
      result = n1 - n2;
      break;
    case "*":
      result = n1 * n2;
      break;
    case "/":
      result = n2 !== 0 ? n1 / n2 : "Erro: divisão por zero";
      break;
    default:
      result = "Operação inválida";
  }

  return result;
}

console.log(calculate(500, 10, "/"));
console.log(calculate(2, 5, "+"));
