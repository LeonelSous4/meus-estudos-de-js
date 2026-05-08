/**
 * ===========================================================================
 * 05 - MANIPULAÇÃO DE ATRIBUTOS
 * ===========================================================================
 * 
 * Como ler, adicionar, remover e alterar atributos HTML.
 */


/* =========================================================================
   1. getAttribute() - LER UM ATRIBUTO
   ========================================================================= */

const input = document.querySelector("input");

// Ler o tipo do input
console.log(input.getAttribute("type")); // "text"

// Ler um atributo customizado
console.log(input.getAttribute("data-id")); // Valor do atributo


/* =========================================================================
   2. setAttribute() - ADICIONAR OU MODIFICAR UM ATRIBUTO
   ========================================================================= */

const inputTexto = document.querySelector("input");

// Adicionar o atributo disabled (desabilitar)
inputTexto.setAttribute("disabled", "true");

// Mudar o tipo de text para email
inputTexto.setAttribute("type", "email");

// Adicionar atributo customizado
inputTexto.setAttribute("data-validado", "true");


/* =========================================================================
   3. removeAttribute() - REMOVER UM ATRIBUTO
   ========================================================================= */

const botao = document.querySelector("button");

// Remover o atributo disabled
botao.removeAttribute("disabled");

// Agora o botão fica habilitado novamente


/* =========================================================================
   4. ATRIBUTOS BOOLEANOS (disabled, checked, readonly, etc)
   ========================================================================= */

const inputCheck = document.querySelector("input[type='checkbox']");

// ❌ MELHOR não fazer assim:
// inputCheck.setAttribute("checked", "false"); // NÃO funciona como esperado

// ✅ MELHOR forma - usar propriedade JavaScript diretamente:
inputCheck.checked = true;  // Marca o checkbox
inputCheck.checked = false; // Desmarcar

// Igual para disabled:
const input2 = document.querySelector("input");
input2.disabled = true;  // Desabilita
input2.disabled = false; // Habilita


/* =========================================================================
   5. ATRIBUTOS DATA-* (customizados)
   ========================================================================= */

// HTML: <div data-user-id="123" data-role="admin"></div>

const elemento = document.querySelector("div");

// Ler com getAttribute
console.log(elemento.getAttribute("data-user-id")); // "123"

// ✅ MELHOR - usar dataset (automaticamente converte para camelCase)
console.log(elemento.dataset.userId); // "123"
console.log(elemento.dataset.role); // "admin"

// Adicionar novos data atributos
elemento.dataset.status = "active";
// Agora a div tem: data-status="active"

// Remover
delete elemento.dataset.status;


/* =========================================================================
   6. EXEMPLO PRÁTICO - CARD COM INFORMAÇÕES DINÂMICAS
   ========================================================================= */

// HTML:
// <div class="card" data-user-id="42" data-role="admin">
//   <span>João</span>
// </div>

const card = document.querySelector(".card");

// Ler dados
const userId = card.dataset.userId; // "42"
const role = card.dataset.role; // "admin"

// Mostrar no console
console.log(`User ${userId} é ${role}`);

// Usar os dados para fazer algo
if (role === "admin") {
    card.style.borderColor = "gold";
}


/* =========================================================================
   7. VALIDAÇÃO COM ATRIBUTOS HTML5
   ========================================================================= */

const inputEmail = document.querySelector("input[type='email']");
const inputSenha = document.querySelector("input[type='password']");

// HTML5 valida automaticamente se usar type="email"
// Mas você pode forçar validação via JS:

inputEmail.setAttribute("required", "true");
inputSenha.setAttribute("minlength", "8");
inputSenha.setAttribute("maxlength", "20");

// Ou diretamente:
inputEmail.required = true;
inputSenha.minLength = 8;


/* =========================================================================
   8. ATRIBUTOS ARIA (acessibilidade)
   ========================================================================= */

const botaoFechar = document.querySelector(".btn-close");

// Indicar o propósito do botão para leitores de tela
botaoFechar.setAttribute("aria-label", "Fechar modal");

// Indicar que o elemento está desabilitado
botaoFechar.setAttribute("aria-disabled", "true");


/* =========================================================================
   9. hasAttribute() - VERIFICAR SE TEM UM ATRIBUTO
   ========================================================================= */

const inputOptional = document.querySelector("input");

if (inputOptional.hasAttribute("disabled")) {
    console.log("O input está desabilitado");
} else {
    console.log("O input está habilitado");
}


/* =========================================================================
   10. LISTAR TODOS OS ATRIBUTOS
   ========================================================================= */

const elemento2 = document.querySelector("input");

// obj.attributes retorna NamedNodeMap com todos os atributos
console.log(elemento2.attributes); // NamedNodeMap(5) {...}

// Percorrer todos
for (let i = 0; i < elemento2.attributes.length; i++) {
    const atributo = elemento2.attributes[i];
    console.log(`${atributo.name} = ${atributo.value}`);
}


/* =========================================================================
   COMPARAÇÃO RÁPIDA
   ========================================================================= */

// Forma ANTIGA (não recomendado):
// getTodo Atributo: getAttribute()
// Adicionar: setAttribute()
// Remover: removeAttribute()

// Forma MODERNA (recomendado para properties):
// Ler: elemento.propriedade ou elemento.dataset.nomeAtributo
// Adicionar: elemento.propriedade = valor
// Remover: delete elemento.dataset.nomeAtributo


/* =========================================================================
   11. EXEMPLO: SISTEMA DE FAVORITOS
   ========================================================================= */

// HTML: <button class="btn-favorite" data-item-id="42">♡ Favoritar</button>

const btnFavorite = document.querySelector(".btn-favorite");

btnFavorite.addEventListener("click", function() {
    const itemId = this.dataset.itemId;
    const isFavorite = this.dataset.isFavorite === "true";
    
    // Toggle
    if (isFavorite) {
        this.dataset.isFavorite = "false";
        this.textContent = "♡ Favoritar";
        this.classList.remove("liked");
    } else {
        this.dataset.isFavorite = "true";
        this.textContent = "♥ Desfavoritar";
        this.classList.add("liked");
    }
    
    // Enviar para servidor (depois)
    console.log(`Item ${itemId} favorited: ${!isFavorite}`);
});
