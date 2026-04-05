🧠 DESAFIOS JS INTERMEDIÁRIO → AVANÇADO
## 🔹 1. Manipulação de Strings (Básico)

Crie uma função que receba um nome completo e retorne:

Todas as letras em maiúsculo
Quantidade de caracteres (sem espaços)
Primeiro nome
// entrada
"Leonel Sousa"

// saída esperada
{
  upper: "LEONEL SOUSA",
  length: 12,
  firstName: "Leonel"
}

## 🔹 2. Arrays + Loop

Dado um array de números:

[10, 5, 8, 20, 3]


Retorne:

Maior número
Menor número
Soma total

👉 Não pode usar Math.max ou Math.min

## 🔹 3. Objetos + Array

Você tem uma lista de usuários:

[
  { name: "João", age: 17 },
  { name: "Maria", age: 22 },
  { name: "Pedro", age: 15 }
]


Retorne apenas os maiores de idade.

## 🔹 4. Array Methods (map, filter, reduce)

Com esse array:

[100, 200, 300]

Use map para adicionar 10% de taxa
Use reduce para somar o total final
## 🔹 5. Datas (Intermediário)

Crie uma função que receba uma data de nascimento e retorne:

Idade atual
Quantos dias faltam para o próximo aniversário
## 🔹 6. Função Construtora

Crie uma função construtora Product com:

name
price

E um método que retorne:

"O produto X custa R$ Y"

## 🔹 7. Classes + Herança

Crie:

Classe User
Classe Admin que herda de User

O Admin deve ter um método extra:

deleteUser(nome)

## 🔹 8. Tratamento de Erros (try/catch)

Crie uma função que recebe um JSON (string):

'{"name": "Leonel"}'

Converta para objeto
Se der erro, retorne: "JSON inválido"
## 🔹 9. Desafio Real (Misturando tudo)

Você tem uma lista de pedidos:

[
  { product: "Pizza", price: 30, date: "2026-03-20" },
  { product: "Hamburguer", price: 20, date: "2026-03-25" },
  { product: "Refrigerante", price: 10, date: "2026-02-10" }
]


Faça uma função que:

Filtra pedidos do mês atual
Soma o total gasto
Retorna os produtos comprados
## 🔹 10. Desafio Nível Avançado 🚀

Crie um sistema simples de usuários:

Requisitos:
Classe User com:
nome
email
Método:
validar email (tem @)
Método:
exibir dados
Extra:
Use try/catch se o email for inválido
Crie um array de usuários e:
Filtre apenas emails válidos
Retorne quantos usuários válidos existem
⚠️ DESAFIO FINAL (OPCIONAL — nível quase avançado real)

Crie um mini sistema de carrinho:

Adicionar produto
Remover produto
Calcular total
Mostrar lista

👉 Use:

Classes
Arrays
Métodos
🧩 COMO SABER SE VOCÊ TÁ PRONTO?

Se você consegue:

Resolver até o 7 sem ajuda → 🟡 bom nível
Resolver até o 9 → 🟢 pronto pro avançado
Resolver o 10 + extra → 🔥 já tá acima da média