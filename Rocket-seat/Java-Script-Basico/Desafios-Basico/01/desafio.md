Para consolidar todo esse conhecimento que você organizou, preparei uma trilha de 10 desafios que progridem do nível básico ao mais avançado (dentro do escopo do JavaScript fundamental).

Eles foram desenhados para forçar o uso de tratamento de erros, funções modernas (arrow functions), callbacks e lógica de repetição.

## 1. Conversor de Temperaturas Pro ##
O que praticar: Variáveis, Operadores, Template Literals e Math.

Desafio: Crie uma função que receba um valor em Celsius e o converta para Fahrenheit e Kelvin.

Requisito: O resultado deve ser exibido em uma única string usando Template Literals e os valores devem ser arredondados para 2 casas decimais usando Math.

## 2. Classificador de Triângulos
O que praticar: Condicionais (if/else), Operadores Lógicos (&&, ||) e Comparação.

Desafio: Crie uma função que receba três números (lados de um triângulo).

Requisito: 1. Verifique se os lados formam um triângulo válido (a soma de dois lados deve ser sempre maior que o terceiro).
2. Classifique em: Equilátero (3 lados iguais), Isósceles (2 iguais) ou Escaleno (todos diferentes).

## 3. Simulador de Login com switch
O que praticar: switch/case, prompt (ou variáveis fixas) e Strings.

Desafio: Simule um sistema onde o usuário digita seu "cargo" (admin, editor, visitante, comum).

Requisito: Use switch para exibir as permissões de cada um:

admin: "Controle total do sistema"

editor: "Pode editar conteúdo"

visitante: "Pode apenas visualizar"

default: "Usuário não reconhecido"

## 4. Gerador de Estatísticas de Números
O que praticar: Laço for, Arrays (básico) e Math.

Desafio: Dado um array de números (ex: [12, 5, 8, 20, 3]), crie um script que percorra o array.

Requisito: Ao final, exiba:

O maior número.

O menor número.

A média aritmética de todos os números.

## 5. Validador de Idade com try...catch
O que praticar: Tratamento de exceções e throw.

Desafio: Crie uma função verificarIdade(idade).

Requisito: 1. Se a idade for menor que 0, lance um erro: "Idade não pode ser negativa".
2. Se não for um número (typeof), lance: "O valor enviado não é um número".
3. Use try...catch para executar a função e exibir a mensagem de erro amigável no catch.

## 6. Cronômetro de Contagem Regressiva
O que praticar: Laço while e decremento.

Desafio: Crie um script que receba um número inicial (ex: 10) e faça uma contagem regressiva até 0.

Requisito: Para cada número, exiba no console. Quando chegar a 0, exiba uma mensagem: "Foguete lançado! 🚀".

## 7. Filtro de Preços com Callback
O que praticar: Funções, Callbacks e Arrays.

Desafio: Crie uma função chamada filtrarPrecos que recebe um array de preços e uma função de callback.

Requisito: O callback deve definir a regra (ex: preços maiores que 100). A função principal deve retornar um novo array apenas com os itens que passaram no teste do callback.

## 8. Localizador de "Letras Mágicas"
O que praticar: for...of, Strings e Contadores.

Desafio: Crie uma função que receba uma frase e uma letra específica.

Requisito: Percorra a frase usando for...of e conte quantas vezes aquela letra aparece (independente de ser maiúscula ou minúscula). Retorne o total.

## 9. Calculadora de Juros com Arrow Function
O que praticar: Arrow Functions, Math.pow e Retorno de valores.

Desafio: Escreva uma arrow function chamada calcularJurosCompostos.

Requisito: Ela deve receber capital, taxa (ex: 0.02 para 2%) e tempo. A fórmula é: M = C * (1 + i)^t. Exiba o montante final formatado.

## 10. O Super Desafio: Sistema de Carrinho de Compras
O que praticar: TUDO (Objetos, Arrays, Loops, Condicionais, Funções e Exceções).

Contexto: Você tem um array de produtos, onde cada produto é um objeto: { nome: "Teclado", preco: 150, estoque: 5 }.

Desafio: Crie uma função finalizarCompra(carrinho) que:

Percorra o carrinho e some o total.

Verifique se algum item está com estoque: 0. Se estiver, use throw para dizer que o produto está esgotado.

Aplique um desconto de 10% se o total for maior que R$ 500,00.

Use finally para exibir a mensagem: "Processamento de compra finalizado".