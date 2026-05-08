/**
 * ===========================================================================
 * 07 - EVENTOS AVANÇADOS (Bubbling, Capturing, Delegation)
 * ===========================================================================
 * 
 * Conceitos importantes para entender como eventos se propagam.
 */


/* =========================================================================
   1. EVENT BUBBLING - PROPAGAÇÃO DE CIMA PRA BAIXO
   ========================================================================= */

// HTML:
// <div class="container">
//   <button>Click aqui</button>
// </div>

const container = document.querySelector(".container");
const button = document.querySelector("button");

// Event bubbling = evento sobe da fonte até o topo
button.addEventListener("click", () => {
    console.log("1. Botão clicado");
});

container.addEventListener("click", () => {
    console.log("2. Container recebeu a bolha do clique");
});

document.addEventListener("click", () => {
    console.log("3. Document recebeu a bolha do clique");
});

// Se clicar no botão, o console mostra:
// 1. Botão clicado
// 2. Container recebeu a bolha do clique
// 3. Document recebeu a bolha do clique


/* =========================================================================
   2. stopPropagation() - PARAR A BOLHA
   ========================================================================= */

button.addEventListener("click", (event) => {
    event.stopPropagation(); // Para a propagação aqui!
    console.log("Botão clicado, mas não vai bolhar");
});

// Agora, clicando no botão, SÓ mostra a primeira mensagem
// As outras não executam porque a bolha foi parada


/* =========================================================================
   3. EVENT CAPTURING - PROPAGAÇÃO DE BAIXO PRA CIMA (menos comum)
   ========================================================================= */

// addEventListener(tipo, funcao, true) usa capturing
// addEventListener(tipo, funcao, false) usa bubbling

document.addEventListener("click", () => {
    console.log("Document - fase de capturing");
}, true); // ← true = usar capturing

container.addEventListener("click", () => {
    console.log("Container - fase de capturing");
}, true);

button.addEventListener("click", (event) => {
    console.log("Botão - fase de capturing");
    event.stopPropagation(); // Para a propagação
}, true);

// Com capturing, a ordem é mais próxima do topo primeiro
document > container > button


/* =========================================================================
   4. EVENTO CAPTURE vs BUBBLE
   ========================================================================= */

// Ordem de execução normal (bubbling):
// 1. Document (nada acontece, é só o caminho)
// 2. Document (ouvidor bubbling)
// 3. Container (bubbling)
// 4. Button (bubbling - aqui o evento acontece)
// 5. Container (bolha até aqui)
// 6. Document (bolha até aqui)

// Não confunda! Na prática, você quase sempre usa bubbling (padrão)


/* =========================================================================
   5. EVENT DELEGATION - O PADRÃO MAIS ÚTIL
   ========================================================================= */

// HTML:
// <ul>
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>

const lista = document.querySelector("ul");

// ❌ FORMA RUIM - adicionar listener em cada item
const itens = document.querySelectorAll("li");
itens.forEach((item) => {
    item.addEventListener("click", function() {
        console.log("Clicou em:", this.textContent);
    });
});

// Problema: se adicionar um <li> novo dinamicamente, não vai ter listener!


// ✅ FORMA BOA - usar delegation no pai
lista.addEventListener("click", (event) => {
    // Verificar se o clique foi em um <li>
    if (event.target.tagName === "LI") {
        console.log("Clicou em:", event.target.textContent);
    }
});

// Agora, mesmo que adicione novos <li> depois, o listener continua funcionando!


/* =========================================================================
   6. EXEMPLO PRÁTICO: LISTA DE TAREFAS COM DELEGATION
   ========================================================================= */

// HTML:
// <ul id="tarefas">
//   <li>Tarefa 1 <button class="btn-delete">X</button></li>
//   <li>Tarefa 2 <button class="btn-delete">X</button></li>
// </ul>

const tarefasList = document.querySelector("#tarefas");

tarefasList.addEventListener("click", (event) => {
    const target = event.target;
    
    // Se clicou no botão delete
    if (target.classList.contains("btn-delete")) {
        target.closest("li").remove(); // Remove a tarefa
    }
    
    // Se clicou na tarefa
    if (target.tagName === "LI") {
        target.classList.toggle("completed");
    }
});

// closest() = sobe procurando o primeiro pai que tenha a classe/seletor


/* =========================================================================
   7. OBJETO EVENT ÚTIL - event.currentTarget vs event.target
   ========================================================================= */

// HTML:
// <div class="outer">
//   <div class="inner">
//     <button>Click</button>
//   </div>
// </div>

const outer = document.querySelector(".outer");

outer.addEventListener("click", (event) => {
    // event.target = elemento que DISPAROU o evento
    console.log(event.target); // <button>, <div class="inner">, ou <div class="outer">
    
    // event.currentTarget = elemento que TEM O LISTENER
    console.log(event.currentTarget); // Sempre <div class="outer">
    
    // this = igual a event.currentTarget
    console.log(this); // <div class="outer">
});


/* =========================================================================
   8. EXEMPLO: MENU COM SUBMENUS
   ========================================================================= */

// HTML:
// <nav>
//   <ul class="menu">
//     <li><a href="#">Home</a></li>
//     <li><a href="#">Produtos</a></li>
//     <li><a href="#">Contato</a></li>
//   </ul>
// </nav>

const menu = document.querySelector(".menu");

menu.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
        event.preventDefault();
        
        const link = event.target;
        const pagina = link.textContent.toLowerCase();
        
        console.log(`Navegando para: ${pagina}`);
        // Carregar página...
    }
});

// Vantagem: adicionar novos <a> sem precisar de novos listeners


/* =========================================================================
   9. preventDefault() vs stopPropagation()
   ========================================================================= */

// preventDefault() = impede o comportamento PADRÃO do navegador
// Exemplo: impede que um <a> mude de página

const link = document.querySelector("a");
link.addEventListener("click", (event) => {
    event.preventDefault(); // Não muda de página
    console.log("Link clicado, mas não navega");
});


// stopPropagation() = impede a PROPAGAÇÃO para os pais
// Exemplo: clique no botão não sobe para o container

const btn = document.querySelector("button");
btn.addEventListener("click", (event) => {
    event.stopPropagation(); // Não bolha para os pais
    console.log("Clicou no botão");
});

// Ambos juntos:
document.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("Clicou mas nada acontecer!");
});


/* =========================================================================
   10. EXEMPLO: VALIDAÇÃO DE FORMULÁRIO COM DELEGATION
   ========================================================================= */

// HTML:
// <form id="form">
//   <input type="email" name="email" required>
//   <input type="text" name="nome" required>
//   <button type="submit">Enviar</button>
// </form>

const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const formData = new FormData(form);
    let valido = true;
    
    formData.forEach((valor, nome) => {
        if (!valor.trim()) {
            console.log(`Campo ${nome} está vazio`);
            valido = false;
        }
    });
    
    if (valido) {
        console.log("Formulário pronto para enviar");
        // Enviar dados...
    }
});


/* =========================================================================
   RESUMO RÁPIDO
   ========================================================================= */

// Bubbling: evento sobe do elemento até o topo (padrão)
// Capturing: evento desce do topo até o elemento (raro)
// stopPropagation(): para o evento de bolhar/descer
// preventDefault(): anula o comportamento padrão do navegador

// EVENT DELEGATION: usar listener no PAI para detectar cliques nos FILHOS
// Vantagem: funciona até com elementos que são adicionados DEPOIS
// Use: if (event.target.matches("seletor")) {...}
