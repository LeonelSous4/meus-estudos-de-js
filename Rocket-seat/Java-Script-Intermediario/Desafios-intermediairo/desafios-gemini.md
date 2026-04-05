🚀 Desafios: Do Básico ao Avançado
## 1. Formatador de Nomes (Strings)
Crie uma função que receba um nome completo e retorne apenas o primeiro e o último nome, ambos com a primeira letra maiúscula, mesmo que o usuário digite tudo em minúsculo.

Exemplo: "anastácio leonel nascimento de sousa" → "Anastácio Sousa"

## 2. Filtro de Treinos (Arrays & Loops)
Você tem um array de distâncias percorridas em km: [2, 5.5, 1, 3.2, 8, 0.5]. Use um loop para criar um novo array apenas com treinos acima de 3km e, ao final, exiba quantos treinos "longos" você fez.

## 3. Cardápio Digital (Objetos & This)
Crie um objeto chamado produto que represente um item do "Paiva's Burguer". Ele deve ter nome, preco e um método chamado detalhes que use this para retornar uma string formatada: "O [nome] custa R$ [preco]".

## 4. Validador de Configuração (Coalescência Nula)
Simule o recebimento de configurações de um site. Crie uma variável temaUsuario = null. Crie outra chamada temaFinal que receba temaUsuario, mas se ele for nulo ou indefinido, deve assumir o valor padrão "light".

## 5. Contador de Dias (Dates)
Crie um script que calcule quantos dias faltam de hoje até o dia 01 de Junho de 2026 (sua meta para o CRUD). Exiba o resultado no console.

## 6. Gerador de Atletas (Constructor Function)
Crie uma função construtora Atleta que receba nome, posicao e clube. Instancie dois jogadores do Flamengo e use um método interno para exibir: "[Nome] joga na posição [posicao] do [clube]".

## 7. Sistema de Login Seguro (Try/Catch)
Crie uma função verificarSenha(senha). Se a senha tiver menos de 6 caracteres, use throw para lançar um erro personalizado. Envolva a chamada da função em um try/catch para mostrar a mensagem de erro amigável no console.

## 8. Gestão de Membros AWS (Classes & Static)
Crie uma classe BolsistaAWS. Ela deve ter um constructor para o nome. Adicione um método estático chamado regras que apenas imprima as regras do programa Santander Jornada Tech. Tente acessar esse método a partir de uma instância e veja o que acontece.

## 9. Herança de Componentes (OOP)
Crie uma classe base Componente com a propriedade id. Crie uma subclasse Botao que herda de Componente e adiciona a propriedade cor. Sobrescreva um método renderizar() para que cada classe mostre uma mensagem diferente no console.

## 10. O Desafio Final: Mini-Gerenciador de Design
Misture tudo! Crie uma classe Projeto que armazene uma lista de tarefas (array).

Use um método para adicionar tarefas (objetos com nome e prazo).

Use try/catch para impedir tarefas sem nome.

Use Intl.DateTimeFormat para exibir a data de criação do projeto no padrão brasileiro.

Crie um método que use filter para listar apenas tarefas que vencem em datas futuras.