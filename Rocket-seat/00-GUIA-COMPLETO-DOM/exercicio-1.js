/**
 * EXERCÍCIO 1 - Seletor e manipulação de texto
 * 
 * Objetivo: Selecionar um elemento com ID "titulo" e mudar seu texto para "Novo Título"
 * Dica: Use querySelector() e .textContent
 * 
 * HTML esperado:
 * <h1 id="titulo">Antigo Título</h1>
 */

function exercicio1() {
    const titulo = document.querySelector('#titulo');  
    titulo.textContent = "Titulo atualizado";

}

exercicio1();