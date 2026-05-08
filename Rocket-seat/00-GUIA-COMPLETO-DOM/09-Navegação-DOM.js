/**
 * ===========================================================================
 * 09 - NAVEGAÇÃO NO DOM (Traversal)
 * ===========================================================================
 * 
 * Como navegar entre elementos pai, filhos, irmãos.
 */


/* =========================================================================
   1. parentElement - ELEMENTO PAI
   ========================================================================= */

// HTML:
// <div class="container">
//   <button id="meuBotao">Click</button>
// </div>

const botao = document.querySelector("#meuBotao");

// Acessar o pai
const pai = botao.parentElement;
console.log(pai.className); // "container"

// Subir mais um nível
const avoó = botao.parentElement.parentElement;


/* =========================================================================
   2. children - FILHOS DO ELEMENTO
   ========================================================================= */

// HTML:
// <ul id="lista">
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>

const lista = document.querySelector("#lista");

// Pegar todos os filhos (HTMLCollection)
console.log(lista.children); // HTMLCollection(3) {...}

// Acessar um filho específico
console.log(lista.children[0].textContent); // "Item 1"
console.log(lista.children[1].textContent); // "Item 2"

// Número de filhos
console.log(lista.children.length); // 3


/* =========================================================================
   3. childNodes vs children
   ========================================================================= */

const elemento = document.querySelector(".container");

// children = apenas ELEMENTOS (tags HTML)
console.log(elemento.children); // HTMLCollection com <div>, <p>, etc

// childNodes = TUDO (elementos + texto + comentários)
console.log(elemento.childNodes); // NodeList com elementos E espaços em branco


/* =========================================================================
   4. firstChild, lastChild (incluem texto/espaços)
   ========================================================================= */

const pai = document.querySelector("ul");

// firstChild = pode ser espaço em branco!
console.log(pai.firstChild); // Pode ser #text (espaço)

// firstElementChild = primeiro ELEMENTO de verdade
console.log(pai.firstElementChild); // <li> definitivamente


/* =========================================================================
   5. FILHOS - FORMA RECOMENDADA
   ========================================================================= */

const container = document.querySelector(".container");

// ✅ Próximo elemento (irmão)
const proximoIrmao = container.nextElementSibling;
console.log(proximoIrmao); // próximo elemento

// ✅ Elemento anterior (irmão)
const irmaoAnterior = container.previousElementSibling;
console.log(irmaoAnterior); // elemento anterior

// ✅ Primeiro filho
const primeiroFilho = container.firstElementChild;
console.log(primeiroFilho);

// ✅ Último filho
const ultimoFilho = container.lastElementChild;
console.log(ultimoFilho);


/* =========================================================================
   6. closest() - SUBIR PROCURANDO UM SELETOR
   ========================================================================= */

// HTML:
// <div class="modal" id="modal-1">
//   <div class="modal-header">
//     <button class="close">X</button>
//   </div>
// </div>

const botaoFechar = document.querySelector(".close");

// Procura o primeiro PAI com a classe "modal"
const modal = botaoFechar.closest(".modal");
console.log(modal.id); // "modal-1"

// Se não encontrar, retorna null
const inexistente = botaoFechar.closest(".nao-existe");
console.log(inexistente); // null


/* =========================================================================
   7. PERCORRER FILHOS
   ========================================================================= */

const lista2 = document.querySelector("ul");

// Forma 1: forEach (moderno)
Array.from(lista2.children).forEach((item, index) => {
    console.log(`${index}: ${item.textContent}`);
});

// Forma 2: for
for (let i = 0; i < lista2.children.length; i++) {
    console.log(lista2.children[i].textContent);
}

// Forma 3: for...of (funciona com HTMLCollection)
for (const item of lista2.children) {
    console.log(item.textContent);
}


/* =========================================================================
   8. ENCONTRAR UM FILHO ESPECÍFICO
   ========================================================================= */

const listaProcurar = document.querySelector("ul");

// Procurar um <li> que contém "Item 2"
const item = Array.from(listaProcurar.children).find((el) => {
    return el.textContent === "Item 2";
});

console.log(item); // <li>Item 2</li>


/* =========================================================================
   9. IRMÃOS - nextElementSibling / previousElementSibling
   ========================================================================= */

// HTML:
// <li id="item1">Item 1</li>
// <li id="item2">Item 2</li>
// <li id="item3">Item 3</li>

const item2 = document.querySelector("#item2");

// Próximo irmão
const item3 = item2.nextElementSibling;
console.log(item3.id); // "item3"

// Irmão anterior
const item1 = item2.previousElementSibling;
console.log(item1.id); // "item1"


/* =========================================================================
   10. VERIFICAR RELAÇÃO ENTRE ELEMENTOS
   ========================================================================= */

const pai2 = document.querySelector(".container");
const filho = document.querySelector(".container button");

// Verificar se é pai/filho
console.log(pai2.contains(filho)); // true (elemento contém o outro)

// Verificar se é o mesmo
console.log(pai2 === filho); // false
console.log(pai2 === pai2); // true


/* =========================================================================
   11. EXEMPLO PRÁTICO - ADICIONAR/REMOVER ITEM DA LISTA
   ========================================================================= */

// HTML:
// <ul id="tarefas">
//   <li>Tarefa 1 <button>Remover</button></li>
//   <li>Tarefa 2 <button>Remover</button></li>
// </ul>
// <input id="nova-tarefa" placeholder="Nova tarefa">
// <button id="adicionar">Adicionar</button>

const tarefas = document.querySelector("#tarefas");
const inputTarefa = document.querySelector("#nova-tarefa");
const btnAdicionar = document.querySelector("#adicionar");

btnAdicionar.addEventListener("click", () => {
    if (inputTarefa.value.trim() === "") return;
    
    // Criar novo item
    const novoItem = document.createElement("li");
    novoItem.innerHTML = `
        ${inputTarefa.value}
        <button class="btn-remover">Remover</button>
    `;
    
    tarefas.appendChild(novoItem);
    inputTarefa.value = "";
});

// Remover com event delegation
tarefas.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-remover")) {
        // closest() consegue o <li> pai
        event.target.closest("li").remove();
    }
});


/* =========================================================================
   12. EXEMPLO: MENU COM SUBMENUS
   ========================================================================= */

// HTML:
// <nav>
//   <ul class="menu">
//     <li><a href="#">Item 1</a></li>
//     <li>
//       <a href="#">Item com submenu</a>
//       <ul class="submenu">
//         <li><a href="#">Sub 1</a></li>
//         <li><a href="#">Sub 2</a></li>
//       </ul>
//     </li>
//   </ul>
// </nav>

const itensMenu = document.querySelectorAll(".menu > li");

itensMenu.forEach((item) => {
    const submenu = item.querySelector(".submenu");
    
    if (submenu) {
        item.addEventListener("mouseenter", () => {
            submenu.style.display = "block";
        });
        
        item.addEventListener("mouseleave", () => {
            submenu.style.display = "none";
        });
    }
});


/* =========================================================================
   COMPARAÇÃO RÁPIDA - NAVEGAÇÃO NO DOM
   ========================================================================= */

// FILHOS:
// .children         → HTMLCollection de elementos filhos
// .childNodes       → NodeList com elementos + texto + comentários
// .firstElementChild → primeiro ELEMENTO filho
// .lastElementChild → último ELEMENTO filho

// PAIS:
// .parentElement    → elemento pai
// .closest("seletor") → primeiro PAI que coincide com o seletor

// IRMÃOS:
// .nextElementSibling → próximo elemento irmão
// .previousElementSibling → elemento anterior irmão

// ÚTEIS:
// .contains()       → verifica se contém um elemento
// Array.from()      → converte HTMLCollection/NodeList para array
