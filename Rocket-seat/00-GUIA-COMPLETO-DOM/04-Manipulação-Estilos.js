/**
 * ===========================================================================
 * 04 - MANIPULAÇÃO DE ESTILOS E CLASSES CSS
 * ===========================================================================
 * 
 * Formas de alterar a aparência dos elementos via JavaScript.
 */


/* =========================================================================
   1. classList - A FORMA RECOMENDADA (adicionar/remover classes CSS)
   ========================================================================= */

const input = document.querySelector("#name");

// Adicionar uma classe
input.classList.add("input-error");
// Agora o CSS .input-error será aplicado

// Remover uma classe
input.classList.remove("input-error");

// Toggle (alterna): se tem, remove; se não tem, adiciona
input.classList.toggle("input-error");

// Verificar se tem uma classe
const temErro = input.classList.contains("input-error");
console.log(temErro); // true ou false


/* =========================================================================
   2. EXEMPLO: Validação com classList
   ========================================================================= */

// HTML: <input id="email"> <div id="mensagem"></div>
// CSS:
// .input-error { border: 2px solid red; }
// .input-success { border: 2px solid green; }

const emailInput = document.querySelector("#email");

emailInput.addEventListener("blur", () => {
    const email = emailInput.value;
    
    if (email.includes("@")) {
        emailInput.classList.remove("input-error");
        emailInput.classList.add("input-success");
    } else {
        emailInput.classList.add("input-error");
        emailInput.classList.remove("input-success");
    }
});


/* =========================================================================
   3. style - ADICIONAR ESTILOS INLINE DIRETOS
   ========================================================================= */

const button = document.querySelector("button");

// Alterar uma cor (note: backgroundColor, não background-color)
button.style.backgroundColor = "red";

// Alterar múltiplas propriedades
button.style.color = "white";
button.style.padding = "10px 20px";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";

// ⚠️ CSS com hífen vira camelCase
// CSS: background-color → JavaScript: backgroundColor
// CSS: border-radius → JavaScript: borderRadius
// CSS: z-index → JavaScript: zIndex


/* =========================================================================
   4. classList COM MÚLTIPLAS CLASSES
   ========================================================================= */

const card = document.querySelector(".card");

// Adicionar várias de uma vez (espaço separado)
card.className = "card active visible";

// Ou usar classList:
card.classList.add("active", "visible", "highlight");

// Remover múltiplas
card.classList.remove("active", "visible");


/* =========================================================================
   5. VERIFICAÇÃO E LOOPS COM classList
   ========================================================================= */

const elemento = document.querySelector(".box");

// Ver todas as classes
console.log(elemento.classList); // DOMTokenList(3) ['box', 'active', 'visible']

// Acessar uma classe específica
console.log(elemento.classList[0]); // "box"

// Percorrer todas
elemento.classList.forEach((classe) => {
    console.log(classe); // box, active, visible
});


/* =========================================================================
   6. getComputedStyle() - PEGAR ESTILOS CALCULADOS
   ========================================================================= */

const elemento2 = document.querySelector("h1");

// Pega o estilo FINAL (CSS + inline)
const estilosComputados = getComputedStyle(elemento2);
console.log(estilosComputados.color); // "rgb(0, 0, 0)"
console.log(estilosComputados.fontSize); // "32px"
console.log(estilosComputados.display); // "block"

// ⚠️ Todas as propriedades vêm em pixels/valores computados
// Mesmo que você tenha escrito "1rem", ele retorna em pixels


/* =========================================================================
   7. EXEMPLO PRÁTICO - TOOLTIP AO PASSAR O MOUSE
   ========================================================================= */

// HTML: <button id="btn">Hover para ajuda</button>

const botao = document.querySelector("#btn");

botao.addEventListener("mouseenter", () => {
    botao.style.backgroundColor = "yellow";
    botao.style.cursor = "help";
});

botao.addEventListener("mouseleave", () => {
    botao.style.backgroundColor = "";
    botao.style.cursor = "pointer";
});

// OBS: Resetar style.propriedade = "" volta ao CSS normal


/* =========================================================================
   8. CLASSES VS STYLE - QUANDO USAR CADA UM
   ========================================================================- */

// ✅ USE classList (ADICIONAR/REMOVER CLASSES)
// Quando: Já tem estilos definidos no CSS
// Exemplo: botao.classList.add("ativo");

// ✅ USE style (ESTILOS DIRETOS)
// Quando: Mudar dinamicamente algo que não está em CSS
// Exemplo: elemento.style.transform = "rotate(45deg)";

// ✅ USE getComputedStyle (LER ESTILOS)
// Quando: Precisa saber qual é o estilo que está sendo aplicado
// Exemplo: const altura = getComputedStyle(elemento).height;


/* =========================================================================
   9. ANIMAÇÕES DE CLASSE COM TRANSIÇÃO CSS
   ========================================================================= */

// CSS:
// .fade-in { opacity: 1; transition: opacity 0.3s; }
// .fade-out { opacity: 0; }

const elemento3 = document.querySelector(".box");

function sumir() {
    elemento3.classList.add("fade-out");
    elemento3.classList.remove("fade-in");
}

function aparecer() {
    elemento3.classList.add("fade-in");
    elemento3.classList.remove("fade-out");
}

// Usar:
// sumir();
// setTimeout(() => aparecer(), 500);


/* =========================================================================
   10. EXEMPLO: TEMA CLARO/ESCURO
   ========================================================================- */

const toggleTema = document.querySelector("#toggle-tema");
const body = document.body;

toggleTema.addEventListener("click", () => {
    body.classList.toggle("tema-escuro");
    
    // Guardar preferência
    if (body.classList.contains("tema-escuro")) {
        localStorage.setItem("tema", "escuro");
    } else {
        localStorage.setItem("tema", "claro");
    }
});

// Ao carregar a página, restaurar:
window.addEventListener("load", () => {
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "escuro") {
        body.classList.add("tema-escuro");
    }
});
