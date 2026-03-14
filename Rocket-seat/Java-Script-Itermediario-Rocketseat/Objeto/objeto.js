// 1. Criando um Objeto (Sintaxe Literal)
// A forma mais comum de criar um objeto é usando as chaves {}. Dentro delas, colocamos propriedades (que são como variáveis) e métodos (que são funções do objeto). Tudo funciona no esquema chave: valor.

// Criando um objeto que representa um perfil de estudante
const perfilAcademico = {
    nome: "Leonel",
    curso: "Análise e Desenvolvimento de Sistemas",
    instituicao: "Uninter",
    periodo: 3,
    aprovado: true,
    habilidades: ["HTML", "CSS", "JavaScript"], // Pode guardar arrays e até outros objetos

    endereço: {
        cidade: "tamboril",
        rua: "Lourenço Bonfim",
        Bairro:"Monte azul",
    },

    Apresent: function  () {
        console.log(`olá meu nome é ${perfilAcademico.nome}`)
        console.log(`olá meu nome é ${this.nome}`)
        // posso usar o this ives do perfilacademico, pois o this significa 
        // this significa esse objeto que estou dentro
        // não funciona com arrow function


    },
    // puxando de dentro da propriedade
    message: () => {
        console.log("Leo apelão")
    }
}

// acessando prorpiedades e metodos usando .


console.log(perfilAcademico.habilidades)
// pegando conteudo aninhado
console.log(perfilAcademico.habilidades[2])

console.log(perfilAcademico.endereço.cidade)

// chamando funcção
perfilAcademico.message()
perfilAcademico.Apresent()


 const espaco =  () => {
    console.log("----------------------------------------------------------------------------------")
 }

 espaco()


 // como atualizar o valor de uma propriedade

const product = {
   name:'tecldo',
   quantity:100,

}

console.log(product)


product.quantity = 90
product.name = 'mouse'

console.log(product)


espaco()


// Encadeamento 
// coisas opcionasi que possa ser acionada ou não

const itens = {
   name:'teclado',
   quantity:100,

}

console.log(itens?.id)
// " ? " significa que ele não sabe se id existe, ou vai existir, mas vaai tentar

espaco()





















// 2. Acessando e Atualizando Propriedades
// Existem duas formas principais de ler ou alterar os dados de um objeto: a Notação de Ponto e a Notação de Colchetes.

/* --- ACESSANDO --- */

// 1. Notação de Ponto (A mais usada, mais limpa)
console.log(perfilAcademico.curso); // Retorna: "Análise e Desenvolvimento de Sistemas"

// 2. Notação de Colchetes (Usada quando o nome da chave é dinâmico ou tem espaços/hífens)
const chaveDinamica = "instituicao";
console.log(perfilAcademico[chaveDinamica]); // Retorna: "Uninter"


/* --- ATUALIZANDO E ADICIONANDO --- */

// Atualizando um valor que já existe
perfilAcademico.periodo = 4;

// Adicionando uma propriedade nova que não existia antes
perfilAcademico.foco = "Full-stack";
perfilAcademico.meta = "Aprovação na UECE";

// Deletando uma propriedade
delete perfilAcademico.aprovado;

console.log(perfilAcademico); // O objeto agora tem 'foco' e 'meta', mas não tem mais 'aprovado'












// 3. Acessando Propriedades no Contexto (this)
// Quando uma função está dentro de um objeto, ela é chamada de método. Para que esse método acesse os dados do próprio objeto em que ele vive, usamos a palavra-chave this (que significa "isto" ou "este objeto").

const projeto = {
    nome: "Clone do Discord",
    tecnologias: 3,
    
    // Método (uma ação que o objeto sabe fazer)
    apresentarProjeto: function() {
        // O 'this' aponta para o objeto 'projeto'
        console.log(`O projeto ${this.nome} usa ${this.tecnologias} tecnologias principais.`);
    },

    adicionarTecnologia: function(novaTecnologia) {
        this.tecnologias += 1;
        console.log(`Mais uma tecnologia adicionada! Total: ${this.tecnologias}`);
    }
};

projeto.apresentarProjeto(); // O projeto Clone do Discord usa 3 tecnologias principais.
projeto.adicionarTecnologia(); // Mais uma tecnologia adicionada! Total: 4

// Atenção: Arrow functions (=>) não possuem o seu próprio this. Se você usar uma arrow function dentro de um objeto, o this não vai apontar para o objeto, mas sim para a janela global (window). Por isso, para métodos de objetos, prefira a sintaxe clássica function().









// 4. Encadeamento Opcional (Optional Chaining ?.)
// Isso salva a vida de qualquer desenvolvedor. Imagine tentar acessar uma propriedade que está dentro de outra, mas a primeira não existe. O JavaScript vai quebrar a aplicação com o erro Cannot read properties of undefined. O ?. verifica se o caminho existe antes de continuar.

const usuario = {
    nome: "Vitor",
    contato: {
        email: "vitor@email.com"
        // Perceba que não existe um objeto 'telefone' aqui
    }
};

// Sem o ?. (Vai causar um ERRO FATAL no código)
// console.log(usuario.contato.telefone.celular); 

// Com o ?. (Encadeamento Opcional)
// Ele lê: "Se contato existir, procure telefone. Se telefone existir, procure celular".
console.log(usuario.contato?.telefone?.celular); // Retorna: undefined (não quebra o código!)












// 5. Função Construtora (Constructor Function)
// Se você precisa criar 50 projetos ou 100 usuários, escrever o objeto literal {} toda vez é inviável. A Função Construtora funciona como uma fábrica (ou um molde) para criar vários objetos com a mesma estrutura.

// Regras da Construtora:

// 1 - O nome da função sempre começa com Letra Maiúscula (boa prática).

// 2 - Usamos o this para definir as propriedades que o novo objeto terá.

// 3 - Usamos a palavra new na hora de "fabricar" o objeto.


// O "Molde"
function Desenvolvedor(nome, especialidade, nivel) {
    this.nome = nome;
    this.especialidade = especialidade;
    this.nivel = nivel;
    
    this.trabalhar = function() {
        console.log(`${this.nome} está codando em ${this.especialidade}.`);
    };
}

// Criando instâncias (fabricando os objetos)
const dev1 = new Desenvolvedor("Sousa", "JavaScript", "Júnior");
const dev2 = new Desenvolvedor("Leonel", "React", "Pleno");

// Acessando os objetos criados
console.log(dev1.nome); // "Sousa"
dev2.trabalhar();       // "Leonel está codando em React."