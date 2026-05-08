/**
 * ===========================================================================
 * 10 - CONCEITOS ESSENCIAIS E BOAS PRÁTICAS
 * ===========================================================================
 * 
 * Performance, padrões úteis, e técnicas que você vai precisar.
 */


/* =========================================================================
   1. PERFORMANCE - NÃO REESCREVER HTML
   ========================================================================= */

// ❌ RUIM - reescreve tudo toda vez
function adicionarItems Ruim() {
    const lista = document.querySelector("ul");
    for (let i = 0; i < 100; i++) {
        lista.innerHTML += `<li>Item ${i}</li>`;
    }
    // innerHTML recalcula e rerendeniza HTML 100 vezes!
}

// ✅ BOM - adiciona tudo de uma vez
function adicionarItens Bom() {
    const lista = document.querySelector("ul");
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < 100; i++) {
        const li = document.createElement("li");
        li.textContent = `Item ${i}`;
        fragment.appendChild(li);
    }
    
    lista.appendChild(fragment); // Só 1 rerender!
}


/* =========================================================================
   2. DocumentFragment - ADICIONAR MUITOS ELEMENTOS EFICIENTEMENTE
   ========================================================================= */

const lista = document.querySelector("ul");
const fragment = document.createDocumentFragment();

// Adicionar elementos ao fragment (não afeta o DOM ainda)
for (let i = 0; i < 1000; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i}`;
    fragment.appendChild(li);
}

// Quando adiciona o fragment, todos aparecem de uma vez
lista.appendChild(fragment);

// Vantagem: elemento aparece um vez, não aos poucos


/* =========================================================================
   3. DELEGAÇÃO DE EVENTOS - Não adicionar listener em cada criança
   ========================================================================= */

// ❌ RUIM
function adicionarListenersCada Elemento() {
    const itens = document.querySelectorAll("li");
    itens.forEach((item) => {
        item.addEventListener("click", () => {
            console.log("Clicou em:", item.textContent);
        });
    });
    // Se adicionar novo <li> depois, não terá listener!
}

// ✅ BOM
function adicionarListenerDelegado() {
    const lista = document.querySelector("ul");
    lista.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            console.log("Clicou em:", event.target.textContent);
        }
    });
    // Funciona mesmo com <li> adicionados depois!
}


/* =========================================================================
   4. REMOVER LISTENERS QUANDO NÃO PRECISAR MAIS
   ========================================================================= */

const modal = document.querySelector(".modal");
const btnFechar = document.querySelector(".btn-close");

function abrirModal() {
    modal.style.display = "block";
    
    // Adicionar listener
    btnFechar.addEventListener("click", fecharModal);
}

function fecharModal() {
    modal.style.display = "none";
    
    // IMPORTANTE: Remover listener para não deixar "lixo" de memória
    btnFechar.removeEventListener("click", fecharModal);
}

// Se não remover, cada vez que abre, adiciona um novo listener
// Clicando no botão vai executar múltiplas vezes


/* =========================================================================
   5. ARMAZENAR REFERÊNCIAS AO DOM
   ========================================================================= */

// ❌ RUIM - fazer query toda hora
function atualizarProgressoRuim() {
    // Fazer querySelector a cada frame é caro!
    document.querySelector(".progress-bar").style.width = "50%";
    document.querySelector(".progress-bar").style.backgroundColor = "green";
    document.querySelector(".progress-bar").textContent = "50%";
}

// ✅ BOM - guardar a referência
const progressBar = document.querySelector(".progress-bar");

function atualizarProgressoBom() {
    progressBar.style.width = "50%";
    progressBar.style.backgroundColor = "green";
    progressBar.textContent = "50%";
}


/* =========================================================================
   6. BATCH UPDATES - Agrupar mudanças de estilo
   ========================================================================= */

const elemento = document.querySelector(".box");

// ❌ RUIM - altera o DOM 3 vezes
elemento.style.width = "100px";
elemento.style.height = "100px";
elemento.style.backgroundColor = "red";

// ✅ BOM - alterar classe (1 mudança)
elemento.classList.add("estilo-novo");

// ✅ OU - agrupar com cssText
elemento.style.cssText = `
    width: 100px;
    height: 100px;
    background-color: red;
`;


/* =========================================================================
   7. DEBOUNCE - Evitar chamadas excessivas de função
   ========================================================================= */

// Problema: esse evento dispara muitas vezes enquanto digita
const input = document.querySelector("input");

// ❌ RUIM - faz requisição a cada caractere digitado
input.addEventListener("input", (event) => {
    buscarDadosNoServidor(event.target.value); // Muitas requisições!
});

// ✅ BOM - debounce (espera parar de digitar)
function debounce(funcao, espera) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => funcao(...args), espera);
    };
}

const buscarComDebounce = debounce((valor) => {
    buscarDadosNoServidor(valor); // Só faz requisição se parou de digitar
}, 300);

input.addEventListener("input", (event) => {
    buscarComDebounce(event.target.value);
});


/* =========================================================================
   8. THROTTLE - Limitar chamadas de função
   ========================================================================= */

// Problema: scroll dispara muito rápido
function throttle(funcao, limite) {
    let emExecucao = false;
    return function(...args) {
        if (!emExecucao) {
            funcao(...args);
            emExecucao = true;
            setTimeout(() => {
                emExecucao = false;
            }, limite);
        }
    };
}

window.addEventListener("scroll", throttle(() => {
    console.log("Scroll:", window.scrollY);
}, 300)); // Máximo a cada 300ms


/* =========================================================================
   9. USAR dataset PARA ARMAZENAR DADOS PEQUENOS
   ========================================================================= */

// HTML: <button data-product-id="123" data-price="99.90">Comprar</button>

const botaoComprar = document.querySelector("button");

botaoComprar.addEventListener("click", () => {
    const produtoId = botaoComprar.dataset.productId; // "123"
    const preco = botaoComprar.dataset.price; // "99.90"
    
    // Enviar para carrinho
    adicionarAoCarrinho(produtoId, preco);
});

// Vantagem: dados ligados ao elemento, fácil de organizar


/* =========================================================================
   10. TEMPLATE LITERALS PARA CONSTRUIR HTML
   ========================================================================= */

const usuarios = [
    { id: 1, nome: "João" },
    { id: 2, nome: "Maria" }
];

// ❌ RUIM - concatenação difícil de ler
let html = "<ul>";
for (let i = 0; i < usuarios.length; i++) {
    html += "<li>" + usuarios[i].nome + "</li>";
}
html += "</ul>";

// ✅ BOM - template literal (mais legível)
const htmlTemplate = `
    <ul>
        ${usuarios.map(user => `<li>${user.nome}</li>`).join("")}
    </ul>
`;

document.querySelector(".container").innerHTML = htmlTemplate;


/* =========================================================================
   11. USAR JSON PARA PASSAR DADOS ENTRE ELEMENTOS
   ========================================================================= */

// Guardar objeto complexo no data attribute
const user = {
    nome: "João",
    email: "joao@email.com",
    role: "admin"
};

const botao = document.querySelector("button");

// Converter para JSON para armazenar
botao.dataset.user = JSON.stringify(user);

// Depois recuperar
const userRecuperado = JSON.parse(botao.dataset.user);
console.log(userRecuperado.nome); // "João"


/* =========================================================================
   12. OUTPUT DE CONSOLE PARA DEBUG
   ========================================================================= */

const objeto = { nome: "João", idade: 30 };

// Mostrar valor
console.log("Valor:", objeto); // Normal

// Mostrar tabela (útil para arrays de objetos)
console.table(objeto);

// Aviso
console.warn("Cuidado, isso é importante");

// Erro
console.error("Algo deu errado!");

// Grupo (organizar logs)
console.group("Informações do usuário");
console.log("Nome: João");
console.log("Email: joao@email.com");
console.groupEnd();


/* =========================================================================
   13. TRY/CATCH PARA TRATAMENTO DE ERROS
   ========================================================================= */

const json = '{"nome": "João"';  // JSON inválido

try {
    const dados = JSON.parse(json);
    console.log(dados);
} catch (erro) {
    console. log("Erro ao fazer parse:", erro.message);
    // Não quebrou a aplicação!
}


/* =========================================================================
   RESUMO - CHECKLIST DE BOAS PRÁTICAS
   ========================================================================= */

// ✅ Use DocumentFragment para adicionar muitos elementos
// ✅ Use event delegation ao invés de listeners em cada elemento
// ✅ Remova event listeners quando não precisar mais
// ✅ Armazene referências ao DOM em variáveis
// ✅ Use classes CSS para alterar estilos (em vez de style direto)
// ✅ Use debounce/throttle para eventos que disparam muito
// ✅ Use dataset para armazenar dados no HTML
// ✅ Use template literals para montar HTML
// ✅ Evite innerHTML com dados dinâmicos (XSS)
// ✅ Use console.log, console.table, etc para debugar
