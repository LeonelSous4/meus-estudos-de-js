/**
 * ===========================================================================
 * 03 - MANIPULAÇÃO DE CONTEÚDO HTML
 * ===========================================================================
 * 
 * Formas diferentes de adicionar, ler e modificar conteúdo.
 */


/* =========================================================================
   1. textContent - SEGURO PARA TEXTO PURO
   ========================================================================= */

const elemento = document.querySelector("#guest-1 span");

// LER o conteúdo
console.log(elemento.textContent); // "João"

// MODIFICAR o conteúdo
elemento.textContent = "Charmander"; // Substitui por "Charmander"

// ✅ VANTAGEM: Não interpreta HTML, é 100% seguro
elemento.textContent = "<strong>Negrito</strong>"; // Mostra literal, não nega


/* =========================================================================
   2. innerText - APENAS O VISÍVEL NA TELA
   ========================================================================= */

const elemento2 = document.querySelector("p");

// Retorna apenas o texto VISÍVEL (respeita display:none, height:0, etc)
console.log(elemento2.innerText);

// Texto escondido NÃO aparece no innerText
const paragrafoEscondido = document.createElement("p");
paragrafoEscondido.textContent = "Texto escondido";
paragrafoEscondido.style.display = "none";
document.body.appendChild(paragrafoEscondido);

console.log(paragrafoEscondido.textContent); // "Texto escondido" (aparece)
console.log(paragrafoEscondido.innerText); // "" (vazio, pois está escondido)


/* =========================================================================
   3. innerHTML - INTERPRETA HTML (CUIDADO!)
   ========================================================================= */

const container = document.querySelector("#container");

// LER o HTML interno
console.log(container.innerHTML); // Retorna como string

// MODIFICAR com HTML
container.innerHTML = "<h1>Novo título</h1><p>Novo parágrafo</p>";

// ⚠️ PERIGO: Se você misturar com dados de usuários, pode ter XSS
const nomeUsuario = "<img src=x onerror='alert(\"hackeado\")'>";
// container.innerHTML = nomeUsuario; // ❌ NÃO FAÇA ISSO!

// ✅ SEGURO: Usar textContent para dados dinâmicos
container.textContent = nomeUsuario; // Mostra o HTML como texto, safe


/* =========================================================================
   4. insertAdjacentHTML() - MAIS SEGURO QUE += innerHTML
   ========================================================================= */

const lista = document.querySelector("ul");

// ⚠️ EVITE:
lista.innerHTML += "<li>Novo item</li>"; // Recria tudo, ineficiente

// ✅ USE:
lista.insertAdjacentHTML("beforeend", "<li>Novo item</li>");

// Posições:
// "beforebegin"  → Antes do elemento (fora)
// "afterbegin"   → Dentro, no começo
// "beforeend"    → Dentro, no final
// "afterend"     → Depois do elemento (fora)


/* =========================================================================
   5. COMPARAÇÃO RÁPIDA - QUANDO USAR CADA UM
   ========================================================================= */

// ✅ textContent
// Quando: Adicionar texto puro, fazer a página segura
// Exemplo: form.textContent = "Dados salvos!";

// ✅ innerHTML
// Quando: Precisa adicionar HTML, mas TEM CUIDADO com dados dinâmicos
// Exemplo: elemento.innerHTML = "<strong>Importante</strong>";

// ✅ innerText
// Quando: Precisa do texto VISÍVEL (respeitando CSS)
// Exemplo: console.log(elemento.innerText);

// ✅ insertAdjacentHTML()
// Quando: Adicionar HTML sem perder ou sobrescrever o existente
// Exemplo: lista.insertAdjacentHTML("beforeend", "<li>Item</li>");


/* =========================================================================
   6. EXEMPLO PRÁTICO - VALIDAÇÃO E MENSAGEM DE ERRO
   ========================================================================= */

// HTML: <input type="email" id="email"> <div id="mensagem"></div>

const inputEmail = document.querySelector("#email");
const divMensagem = document.querySelector("#mensagem");

inputEmail.addEventListener("blur", () => {
    if (inputEmail.value.includes("@")) {
        divMensagem.textContent = "✅ Email válido!";
        divMensagem.style.color = "green";
    } else {
        divMensagem.textContent = "❌ Email inválido";
        divMensagem.style.color = "red";
    }
});


/* =========================================================================
   7. LIMPANDO ELEMENTOS (remover todo conteúdo)
   ========================================================================= */

const container2 = document.querySelector("#container");

// Forma 1: innerHTML vazio
container2.innerHTML = "";

// Forma 2: textContent vazio
container2.textContent = "";

// Forma 3: Remover todos os filhos (mais explícito)
while (container2.firstChild) {
    container2.removeChild(container2.firstChild);
}

// Forma 4: Modern - replaceChildren()
container2.replaceChildren(); // Remove tudo


/* =========================================================================
   8. TROCAR/SUBSTITUIR UM ELEMENTO
   ========================================================================= */

const novo = document.createElement("h1");
novo.textContent = "Novo título";

const antigo = document.querySelector("h1");
antigo.replaceWith(novo); // Substitui antigo por novo
