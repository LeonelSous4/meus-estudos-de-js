/**
 * ===========================================================================
 * 06 - EVENTOS BÁSICOS E MANIPULAÇÃO
 * ===========================================================================
 * 
 * Como reagir às ações do usuário (cliques, typing, etc).
 */


/* =========================================================================
   1. addEventListener() - ADICIONAR UM OUVINTE DE EVENTO
   ========================================================================= */

const button = document.querySelector("button");

// Quando o botão for clicado, executar a função
button.addEventListener("click", () => {
    console.log("Botão clicado!");
});

// Com função nomeada
function aoClicar() {
    console.log("Clicou novamente");
}

button.addEventListener("click", aoClicar);


/* =========================================================================
   2. EVENTOS COMUNS DO MOUSE
   ========================================================================= */

const elemento = document.querySelector(".box");

// click - um clique (rápido)
elemento.addEventListener("click", () => console.log("Click!"));

// dblclick - duplo clique
elemento.addEventListener("dblclick", () => console.log("Duplo clique!"));

// mouseenter - mouse entra no elemento (sem bolha)
elemento.addEventListener("mouseenter", () => console.log("Mouse inside"));

// mouseleave - mouse sai do elemento (sem bolha)
elemento.addEventListener("mouseleave", () => console.log("Mouse left"));

// mousemove - mouse se move dentro do elemento
elemento.addEventListener("mousemove", (event) => {
    console.log(`X: ${event.clientX}, Y: ${event.clientY}`);
});

// mousedown - botão do mouse pressionado
elemento.addEventListener("mousedown", () => console.log("Pressionado"));

// mouseup - botão do mouse soltado
elemento.addEventListener("mouseup", () => console.log("Soltado"));


/* =========================================================================
   3. EVENTOS DE TECLADO
   ========================================================================= */

const input = document.querySelector("input");

// keydown - qualquer tecla é pressionada
input.addEventListener("keydown", (event) => {
    console.log(`Tecla pressionada: ${event.key}`); // "Enter", "a", "Shift"
});

// keyup - tecla soltada
input.addEventListener("keyup", (event) => {
    console.log(`Tecla soltada: ${event.key}`);
});

// keypress - apenas caracteresimprimíveis (letras, números, símbolos)
input.addEventListener("keypress", (event) => {
    console.log(`Caractere digitado: ${event.key}`);
});

// Validação simples: permitir apenas números
input.addEventListener("keypress", (event) => {
    if (!/[0-9]/.test(event.key)) {
        event.preventDefault(); // Impede a digitação
    }
});


/* =========================================================================
   4. EVENTOS DE INPUT
   ========================================================================= */

const inputTexto = document.querySelector("input");

// input - quando o valor muda (digitação, cola, etc)
inputTexto.addEventListener("input", () => {
    console.log(`Novo valor: ${inputTexto.value}`);
});

// change - quando termina de editar (fica de foco)
inputTexto.addEventListener("change", () => {
    console.log(`Valor final: ${inputTexto.value}`);
});

// focus - quando o elemento recebe foco
inputTexto.addEventListener("focus", () => {
    inputTexto.style.borderColor = "blue";
});

// blur - quando o elemento perde foco
inputTexto.addEventListener("blur", () => {
    inputTexto.style.borderColor = "gray";
});


/* =========================================================================
   5. EVENTOS DE FORMULÁRIO
   ========================================================================= */

const form = document.querySelector("form");

// submit - quando o formulário é enviado
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede recarga da página 
    
    const formData = new FormData(form);
    console.log("Dados do formulário:", formData);
    
    // Processar dados...
});

// reset - quando o formulário é resetado
form.addEventListener("reset", () => {
    console.log("Formulário foi resetado");
});


/* =========================================================================
   6. O OBJETO EVENT - INFORMAÇÕES SOBRE O QUE ACONTECEU
   ========================================================================= */

const botao = document.querySelector("button");

botao.addEventListener("click", (event) => {
    console.log(event); // Objeto Event
    
    // event.target = qual elemento disparou o evento
    console.log(event.target.tagName); // "BUTTON"
    
    // event.type = qual tipo de evento
    console.log(event.type); // "click"
    
    // event.clientX, event.clientY = posição do mouse
    console.log(event.clientX, event.clientY);
    
    // event.preventDefault() = impede comportamento padrão
    // event.stopPropagation() = impede bolha (próxima aula)
    
    // event.key = qual tecla foi pressionada
    if (event.key === "Enter") {
        console.log("Enter pressionado");
    }
    
    // event.shiftKey, event.ctrlKey, event.altKey
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        console.log("Ctrl+S pressionado");
    }
});


/* =========================================================================
   7. removeEventListener() - REMOVER UM OUVINTE
   ========================================================================= */

const botao2 = document.querySelector("#botao-temporario");

function aoClicarUmaVez() {
    console.log("Clicou!");
}

// Adicionar
botao2.addEventListener("click", aoClicarUmaVez);

// Remover depois
botao2.removeEventListener("click", aoClicarUmaVez);


/* =========================================================================
   8. EXEMPLO: VALIDAÇÃO DE EMAIL EM TEMPO REAL
   ========================================================================= */

// HTML: <input type="email" id="email"> <span id="feedback"></span>

const emailInput = document.querySelector("#email");
const feedback = document.querySelector("#feedback");

emailInput.addEventListener("input", (event) => {
    const email = event.target.value;
    
    if (email.includes("@") && email.includes(".")) {
        feedback.textContent = "✅ Email válido";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "❌ Email inválido";
        feedback.style.color = "red";
    }
});

emailInput.addEventListener("blur", () => {
    if (feedback.style.color !== "green") {
        feedback.textContent = "";
    }
});


/* =========================================================================
   9. MÚLTIPLOS OUVINTES NO MESMO ELEMENTO
   ========================================================================= */

const box = document.querySelector(".box");

// Você pode adicionar vários listeners diferentes
box.addEventListener("click", () => console.log("Clicado"));
box.addEventListener("mouseenter", () => console.log("Mouse entrou"));
box.addEventListener("mouseleave", () => console.log("Mouse saiu"));

// Todos executam na ordem que foram adicionados


/* =========================================================================
   10. EVENT LISTENER NO OBJETO window
   ========================================================================= */

// load - página totalmente carregada (HTML, CSS, imagens, scripts)
window.addEventListener("load", () => {
    console.log("Página completamente carregada!");
});

// resize - janela redimensionada
window.addEventListener("resize", () => {
    console.log(`Tamanho: ${window.innerWidth}x${window.innerHeight}`);
});

// scroll - página rolada
window.addEventListener("scroll", () => {
    console.log(`Scroll: ${window.scrollY}px`);
});

// beforeunload - antes de sair da página
window.addEventListener("beforeunload", (event) => {
    console.log("Você tem certeza que quer sair?");
    // event.preventDefault(); // Mostra dialog
});


/* =========================================================================
   COMPARAÇÃO RÁPIDA - EVENTOS MAIS COMUNS
   ========================================================================= */

// MOUSE: click, dblclick, mouseenter, mouseleave, mousemove
// TECLADO: keydown, keyup, keypress
// INPUT: input, change, focus, blur
// FORMA: submit, reset
// PÁGINA: load, resize, scroll
