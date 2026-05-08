/**
 * ===========================================================================
 * 02 - CRIAÇÃO E INJEÇÃO DE ELEMENTOS
 * ===========================================================================
 * 
 * Como criar elementos HTML dinamicamente com JavaScript.
 */


/* =========================================================================
   1. createElement() - CRIAR UM NOVO ELEMENTO
   ========================================================================= */

// Criar um novo elemento <li>
const novoGuest = document.createElement("li");
console.log(novoGuest); // <li></li> vazio

// Criar um <div>
const novaDiv = document.createElement("div");

// Criar um <button>
const novoBotao = document.createElement("button");
novoBotao.textContent = "Clique aqui";


/* =========================================================================
   2. appendChild() - ADICIONAR NO FINAL (DENTRO)
   ========================================================================= */

const lista = document.querySelector("ul");
const item = document.createElement("li");
item.textContent = "Novo item";

// Adiciona o item no FINAL da lista
lista.appendChild(item);

// ⚠️ IMPORTANTE: appendChild move o elemento se ele já existir
const existente = document.querySelector("#guest-1");
lista.appendChild(existente); // Move guest-1 para o fim da lista


/* =========================================================================
   3. prepend() - ADICIONAR NO COMEÇO (DENTRO)
   ========================================================================= */

const lista2 = document.querySelector("ul");
const itemNo Comeco = document.createElement("li");
itemNoCom eco.textContent = "Primeiro item";

// Adiciona no COMEÇO
lista2.prepend(itemNoCom eco);


/* =========================================================================
   4. insertBefore() - ADICIONAR ANTES DE UM ELEMENTO ESPECÍFICO
   ========================================================================= */

const lista3 = document.querySelector("ul");
const referencia = document.querySelector("#guest-2");
const novoItem = document.createElement("li");
novoItem.textContent = "Antes do guest-2";

// Adiciona antes de 'referencia'
lista3.insertBefore(novoItem, referencia);


/* =========================================================================
   5. insertAdjacentHTML() - MAIS FLEXÍVEL (pode inserir antes/depois)
   ========================================================================= */

const elemento = document.querySelector("ul");

// Adiciona HTML ANTES do elemento (fora)
elemento.insertAdjacentHTML("beforebegin", "<p>Antes da lista</p>");

// Adiciona HTML DENTRO, no começo
elemento.insertAdjacentHTML("afterbegin", "<li>Primeiro</li>");

// Adiciona HTML DENTRO, no final
elemento.insertAdjacentHTML("beforeend", "<li>Último</li>");

// Adiciona HTML DEPOIS do elemento (fora)
elemento.insertAdjacentHTML("afterend", "<p>Depois da lista</p>");


/* =========================================================================
   6. BOAS PRÁTICAS - CRIAR ESTRUTURAS MAIS COMPLEXAS
   ========================================================================= */

// Forma 1: Criar elemento + adicionar conteúdo antes de inserir
function criarItemComEstilo() {
    const item = document.createElement("li");
    item.textContent = "Novo item";
    item.classList.add("guest");
    item.id = "guest-novo";
    
    // Agora adiciona na página
    document.querySelector("ul").appendChild(item);
}

// Forma 2: Usar innerHTML (cuidado com segurança)
const container = document.querySelector(".container");
container.innerHTML += "<div class='box'>Novo box</div>";

// Forma 3: Usar template (melhor para estruturas complexas)
const template = `
    <li class="guest">
        <span>Maria</span>
        <button>Remover</button>
    </li>
`;
document.querySelector("ul").insertAdjacentHTML("beforeend", template);


/* =========================================================================
   7. REMOVER ELEMENTOS
   ========================================================================= */

// Forma 1: remove() - remove o elemento direto
const elemento Pararemodel = document.querySelector("#guest-1");
elementoParaRemover.remove();

// Forma 2: removeChild() - pai remove o filho
const pai = document.querySelector("ul");
const filho = document.querySelector("#guest-1");
pai.removeChild(filho);


/* =========================================================================
   8. ROTEIRO PRÁTICO - ADICIONAR ITEM À LISTA
   ========================================================================= */

function adicionarGuestÀLista(nome) {
    // 1. Criar o elemento
    const item = document.createElement("li");
    item.className = "guest";
    
    // 2. Montar a estrutura interna
    item.innerHTML = `
        <span>${nome}</span>
        <button onclick="removerGuest(this)">Remover</button>
    `;
    
    // 3. Adicionar na página
    document.querySelector("ul").appendChild(item);
}

// Usar:
// adicionarGuestÀLista("João");
// adicionarGuestÀLista("Maria");


/* =========================================================================
   COMPARAÇÃO RÁPIDA
   ========================================================================= */

// appendChild()       → Adiciona no final (dentro)
// prepend()           → Adiciona no começo (dentro)
// insertBefore()      → Adiciona antes de um elemento específico
// insertAdjacentHTML() → Mais flexível (4 posições)
// innerHTML          → Substitui TUDO o conteúdo (perigoso com dados dinâmicos)
// textContent        → Seguro para adicionar apenas texto
