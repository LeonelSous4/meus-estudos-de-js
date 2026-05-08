/**
 * ===========================================================================
 * 01 - SELEÇÃO DE ELEMENTOS DO DOM
 * ===========================================================================
 * 
 * Existem várias maneiras de pegar elementos do HTML no JavaScript.
 * Cada uma serve para um propósito específico.
 */


/* =========================================================================
   1. querySelector() - O MAIS MODERNO E RECOMENDADO
   ========================================================================= */

// Seleciona POR ID (usando #)
const elemento = document.querySelector("#guest-1");
console.log(elemento);

// Seleciona POR CLASS (usando .)
const primeiraClass = document.querySelector(".guest");
console.log(primeiraClass);

// querySelector só retorna o PRIMEIRO elemento encontrado
// Se quiser TODOS com a mesma classe, use querySelectorAll()


/* =========================================================================
   2. querySelectorAll() - PEGA VÁRIOS ELEMENTOS
   ========================================================================= */

// Retorna NodeList com todos os elementos que correspondem
const todosGuests = document.querySelectorAll(".guest");
console.log(todosGuests); // NodeList(n) {...}

// Percorrer os resultados:
todosGuests.forEach((guest) => {
    console.log(guest.textContent);
});


/* =========================================================================
   3. getElementById() - DIRETO POR ID
   ========================================================================= */

// Mais específico que querySelector, mas querySelector é mais versátil
const elemento2 = document.getElementById("guest-1");
console.log(elemento2); // Mesmo resultado


/* =========================================================================
   4. getElementsByClassName() - PEGA POR CLASS (RETORNA HTMLCollection)
   ========================================================================= */

const guestsByClass = document.getElementsByClassName("guest");
console.log(guestsByClass); // HTMLCollection(n) {...}

// Para acessar um elemento específico:
console.log(guestsByClass[0]); // Primeiro elemento
console.log(guestsByClass.item(0)); // Mesma coisa, forma alternativa


/* =========================================================================
   5. getElementsByTagName() - PEGA POR TAG HTML
   ========================================================================= */

// Pega TODOS os <li> da página
const todasAsListas = document.getElementsByTagName("li");
console.log(todasAsListas);


/* =========================================================================
   COMPARAÇÃO RÁPIDA - QUAL USAR?
   ========================================================================= */

// ✅ USAR querySelector() E querySelectorAll()
// - Mais moderno
// - Funciona com qualquer seletor CSS
// - querySelector = primeiro / querySelectorAll = todos
// - Retorna NodeList (querySelectorAll)

// ❌ EVITAR (métodos antigos):
// - getElementById() - "querySelector('#id')" é melhor
// - getElementsByClassName() - "querySelectorAll('.class')" é melhor
// - getElementsByTagName() - "querySelectorAll('tag')" é melhor


/* =========================================================================
   SELETORES CSS ÚTEIS COM querySelector
   ========================================================================= */

// ID
const porId = document.querySelector("#my-id");

// Class
const porClass = document.querySelector(".my-class");

// Tag
const porTag = document.querySelector("button");

// Atributo
const porAtributo = document.querySelector("input[type='email']");

// Descendente (filho de)
const filhoEspecifico = document.querySelector("#guest-1 span");

// Múltiplas classes
const comDuasClasses = document.querySelector(".active.visible");

// Primeiro filho de uma tag
const primeiroLi = document.querySelector("ul > li:first-child");

// Último filho
const ultimoLi = document.querySelector("ul > li:last-child");

// Todos os parágrafos que têm a classe 'texto'
const paragrafosComTexto = document.querySelectorAll("p.texto");


/* =========================================================================
   DIFERENÇA: NodeList vs HTMLCollection
   ========================================================================= */

// querySelectorAll() retorna NodeList
const nodelist = document.querySelectorAll(".guest");
console.log(nodelist);

// getElementsByClassName() retorna HTMLCollection (viva, atualiza sozinha)
const htmlcollection = document.getElementsByClassName("guest");
console.log(htmlcollection);

// Na prática: Use querySelectorAll(), é mais previsível e fácil


/* =========================================================================
   DICA: Converter para Array (se precisar usar métodos de array)
   ========================================================================= */

const guests = document.querySelectorAll(".guest");

// Forma 1: Spread operator
const guestArray = [...guests];

// Forma 2: Array.from()
const guestArray2 = Array.from(guests);

// Agora pode usar array methods como filter, map, etc
guestArray.filter((guest) => guest.classList.contains("vip"));
