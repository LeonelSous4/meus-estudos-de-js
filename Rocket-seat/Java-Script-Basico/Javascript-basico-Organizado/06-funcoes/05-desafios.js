// DESAFIOS RESOLVIDOS
// Aqui ficam os exercícios mais importantes já organizados e comentados.

// 1) Imprimir os números de 1 até um número enviado
function imprimirAte(numero) {
  for (let i = 1; i <= numero; i++) {
    console.log(i);
  }
}

// imprimirAte(10);

// 2) Tabuada de 1 a 10, aceitando apenas valores entre 1 e 10
function tabuada(numero) {
  if (numero < 1 || numero > 10) {
    console.log("Digite um número entre 1 e 10.");
    return;
  }

  console.log(`Tabuada do ${numero}`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

// tabuada(2);

// 3) Mostrar a hora atual
function horaAtual() {
  const agora = new Date();
  const horas = String(agora.getHours()).padStart(2, "0");
  const minutos = String(agora.getMinutes()).padStart(2, "0");
  const segundos = String(agora.getSeconds()).padStart(2, "0");

  console.log(`Agora são ${horas}:${minutos}:${segundos}`);
}

// horaAtual();

// 4) Mostrar o ano atual
function anoAtual() {
  const agora = new Date();
  console.log(agora.getFullYear());
}

// anoAtual();

// 5) Dizer qual número é maior
function maiorNumero(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} é maior`);
  } else if (num2 > num1) {
    console.log(`${num2} é maior`);
  } else {
    console.log("Os dois números são iguais");
  }
}

// maiorNumero(6, 2);

// 6) Média de salário, média de filhos e maior salário
function analisarPesquisa(populacao) {
  let somaSalarios = 0;
  let somaFilhos = 0;
  let maiorSalario = 0;

  for (const pessoa of populacao) {
    somaSalarios += pessoa.salario;
    somaFilhos += pessoa.filhos;

    if (pessoa.salario > maiorSalario) {
      maiorSalario = pessoa.salario;
    }
  }

  return {
    mediaSalario: somaSalarios / populacao.length,
    mediaFilhos: somaFilhos / populacao.length,
    maiorSalario,
  };
}

// Exemplo:
const pesquisa = [
  { salario: 2000, filhos: 2 },
  { salario: 3500, filhos: 1 },
  { salario: 1800, filhos: 3 },
];

// console.log(analisarPesquisa(pesquisa));

// 7) Taxa mensal de juros
function calcularJurosMensais(valorInicial, valorAtual, tempoMeses) {
  const taxa = Math.pow(valorAtual / valorInicial, 1 / tempoMeses) - 1;
  return (taxa * 100).toFixed(2).replace(".", ",") + "%";
}

// console.log(calcularJurosMensais(1000, 1200, 10));

// 8) Gerador de desconto
function calcularDesconto(valorCompra, primeiraCompra, pagamentoAVista) {
  let desconto = 0;

  if (primeiraCompra) {
    if (pagamentoAVista) {
      if (valorCompra > 1000) desconto = 0.30;
      else if (valorCompra >= 500) desconto = 0.25;
      else desconto = 0.20;
    } else {
      if (valorCompra > 1000) desconto = 0.20;
      else if (valorCompra >= 500) desconto = 0.15;
      else desconto = 0.10;
    }
  } else {
    if (pagamentoAVista) {
      if (valorCompra > 1000) desconto = 0.20;
      else if (valorCompra >= 500) desconto = 0.15;
      else desconto = 0.10;
    } else {
      if (valorCompra > 1000) desconto = 0.10;
      else if (valorCompra >= 500) desconto = 0.05;
      else desconto = 0;
    }
  }

  const valorComDesconto = valorCompra * (1 - desconto);

  console.log("Obrigado pela compra!");

  if (desconto > 0) {
    console.log(`Valor original: R$ ${valorCompra.toFixed(2)}`);
    console.log(`Valor com desconto: R$ ${valorComDesconto.toFixed(2)}`);
    console.log(`Desconto aplicado: ${desconto * 100}%`);
  } else {
    const cupom = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    console.log(`Valor total: R$ ${valorCompra.toFixed(2)}`);
    console.log(`Sem desconto hoje. Cupom para a próxima compra: ${cupom}%`);
  }
}

// calcularDesconto(1200, true, true);
