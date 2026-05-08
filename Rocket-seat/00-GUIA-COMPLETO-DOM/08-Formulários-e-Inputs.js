/**
 * ===========================================================================
 * 08 - FORMULÁRIOS E INPUTS
 * ===========================================================================
 * 
 * Como trabalhar com formulários, validação e dados.
 */


/* =========================================================================
   1. ACESSAR VALORES DO INPUT
   ========================================================================= */

const inputTexto = document.querySelector("#nome");
const checkbox = document.querySelector("#aceito");
const select = document.querySelector("#tema");
const textarea = document.querySelector("#mensagem");

// INPUT TEXT
console.log(inputTexto.value); // Retorna o valor digitado

// CHECKBOX
console.log(checkbox.checked); // true ou false

// SELECT
console.log(select.value); // Valor da opção selecionada

// TEXTAREA
console.log(textarea.value); // Todo o texto


/* =========================================================================
   2. ATRIBUIR VALORES AO INPUT
   ========================================================================= */

const input = document.querySelector("input");

// Alterar o valor
input.value = "Novo valor";

// Pre-preencher com dados salvos (exemplo)
const usuarioSalvo = {
    nome: "João",
    email: "joao@email.com"
};

document.querySelector("#nome").value = usuarioSalvo.nome;
document.querySelector("#email").value = usuarioSalvo.email;


/* =========================================================================
   3. EVENTO INPUT - MONITOR EM TEMPO REAL
   ========================================================================= */

const inputMonitor = document.querySelector("input");
const contador = document.querySelector("#contador");

// Cada tecla digitada dispara 'input'
inputMonitor.addEventListener("input", (event) => {
    const valor = event.target.value;
    const caracteres = valor.length;
    
    contador.textContent = `${caracteres} caracteres`;
    
    // Exemplo: validação em tempo real
    if (caracteres < 5) {
        inputMonitor.classList.add("input-alerta");
    } else {
        inputMonitor.classList.remove("input-alerta");
    }
});


/* =========================================================================
   4. EVENTO CHANGE - QUANDO TERMINA DE EDITAR
   ========================================================================= */

const seletor = document.querySelector("select");

// Dispara só quando o valor MUDA (não fica disparando enquanto digita)
seletor.addEventListener("change", (event) => {
    const opcaoSelecionada = event.target.value;
    console.log(`Você selecionou: ${opcaoSelecionada}`);
});


/* =========================================================================
   5. FOCUS E BLUR - ENTRAR E SAIR DO CAMPO
   ========================================================================= */

const inputFoco = document.querySelector(".input-valor");

// focus - campo recebeu foco (clicou nele, ou Tab)
inputFoco.addEventListener("focus", () => {
    inputFoco.style.borderColor = "blue";
    inputFoco.style.boxShadow = "0 0 5px blue";
});

// blur - campo perdeu foco (clicou fora)
inputFoco.addEventListener("blur", () => {
    inputFoco.style.borderColor = "gray";
    inputFoco.style.boxShadow = "none";
    
    // Validar quando sai do campo
    if (inputFoco.value.trim() === "") {
        inputFoco.classList.add("input-error");
    }
});


/* =========================================================================
   6. CHECKBOX E RADIO
   ========================================================================= */

// HTML:
// <input type="checkbox" id="aceito" value="sim">
// <input type="radio" name="genero" value="masculino">
// <input type="radio" name="genero" value="feminino">

const checkboxAceito = document.querySelector("#aceito");
const radioMasculino = document.querySelector("input[value='masculino']");

// Verificar se está marcado
if (checkboxAceito.checked) {
    console.log("Aceitou");
}

// Marcar/desmarcar
checkboxAceito.checked = true;
checkboxAceito.checked = false;

// Pegar valor do radio marcado
const generoSelecionado = document.querySelector("input[name='genero']:checked");
console.log(generoSelecionado.value); // "masculino" ou "feminino"


/* =========================================================================
   7. PEGAR TODOS OS VALORES DO FORMULÁRIO
   ========================================================================= */

// HTML:
// <form id="meuForm">
//   <input type="text" name="nome">
//   <input type="email" name="email">
//   <input type="checkbox" name="aceito" value="sim">
//   <button type="submit">Enviar</button>
// </form>

const form = document.querySelector("#meuForm");

// FORMA 1: FormData (moderno e fácil)
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const formData = new FormData(form);
    const dados = Object.fromEntries(formData);
    
    console.log(dados);
    // { nome: "João", email: "joao@email.com", aceito: "sim" }
});

// FORMA 2: Manualmente
form.addEventListener("submit", () => {
    const dados = {
        nome: document.querySelector("[name='nome']").value,
        email: document.querySelector("[name='email']").value,
        aceito: document.querySelector("[name='aceito']").checked
    };
    
    console.log(dados);
});


/* =========================================================================
   8. VALIDAÇÃO SIMPLES DO LADO DO CLIENTE
   ========================================================================= */

const formValidacao = document.querySelector("#formValidacao");

formValidacao.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const nome = document.querySelector("[name='nome']").value.trim();
    const email = document.querySelector("[name='email']").value.trim();
    const erro = document.querySelector("#erro");
    
    // Limpar mensagem anterior
    erro.textContent = "";
    
    // Validar nome
    if (nome === "") {
        erro.textContent = "Nome é obrigatório";
        return;
    }
    
    if (nome.length < 3) {
        erro.textContent = "Nome deve ter no mínimo 3 caracteres";
        return;
    }
    
    // Validar email
    if (email === "") {
        erro.textContent = "Email é obrigatório";
        return;
    }
    
    if (!email.includes("@")) {
        erro.textContent = "Email inválido";
        return;
    }
    
    // Se passou em tudo
    console.log("Formulário válido! Enviando...");
    // Enviar dados via API...
});


/* =========================================================================
   9. REGEX PARA VALIDAÇÃO
   ========================================================================= */

// Email
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(regexEmail.test("user@email.com")); // true

// Apenas números
const regexNumeros = /^\d+$/;
console.log(regexNumeros.test("12345")); // true
console.log(regexNumeros.test("123a5")); // false

// Apenas letras
const regexLetras = /^[a-zA-Z]+$/;
console.log(regexLetras.test("João")); // false (tem tílde)
console.log(regexLetras.test("Joao")); // true

// Senha forte (pelo menos 1 maiúscula, 1 número, 8 caracteres)
const regexSenha = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
console.log(regexSenha.test("Senha123")); // true


/* =========================================================================
   10. MÁSCARA DE INPUT (exemplo: telefone)
   ========================================================================= */

// HTML: <input type="text" id="telefone" placeholder="(00) 00000-0000">

const inputTelefone = document.querySelector("#telefone");

inputTelefone.addEventListener("input", (event) => {
    let valor = event.target.value.replace(/\D/g, ""); // Remove não-dígitos
    
    // Limitar a 11 dígitos
    if (valor.length > 11) {
        valor = valor.slice(0, 11);
    }
    
    // Formatar: (XX) XXXXX-XXXX
    if (valor.length <= 2) {
        valor = valor;
    } else if (valor.length <= 7) {
        valor = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
    } else {
        valor = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7)}`;
    }
    
    event.target.value = valor;
});


/* =========================================================================
   11. DESABILITAR/HABILITAR CAMPO
   ========================================================================= */

const btnDesabilitar = document.querySelector("#btn-desabilitar");
const inputDesabilitar = document.querySelector("input");

btnDesabilitar.addEventListener("click", () => {
    inputDesabilitar.disabled = true;
    inputDesabilitar.style.opacity = "0.5";
    inputDesabilitar.style.cursor = "not-allowed";
});

const btnHabilitar = document.querySelector("#btn-habilitar");

btnHabilitar.addEventListener("click", () => {
    inputDesabilitar.disabled = false;
    inputDesabilitar.style.opacity = "1";
    inputDesabilitar.style.cursor = "text";
});


/* =========================================================================
   12. LIMPAR FORMULÁRIO
   ========================================================================= */

const formLimpar = document.querySelector("form");
const btnLimpar = document.querySelector("#btn-limpar");

btnLimpar.addEventListener("click", () => {
    // Forma 1: resetar pelo formulário
    formLimpar.reset();
    
    // Forma 2: manualmente
    // document.querySelector("[name='nome']").value = "";
    // document.querySelector("[name='email' ").value = "";
});


/* =========================================================================
   RESUMO - CAMPOS COMUNS
   ========================================================================= */

// TEXT:       .value (string)
// EMAIL:      .value (string)
// CHECKBOX:   .checked (boolean)
// RADIO:      .value (string) + :checked selector
// SELECT:     .value (string)
// TEXTAREA:   .value (string)
// PASSWORD:   .value (string)
// NUMBER:     .value (string, mas é número)
// FILE:       .files (FileList)
