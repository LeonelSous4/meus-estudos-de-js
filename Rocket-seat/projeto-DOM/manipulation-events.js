
/* ==========================================================================
   1. EVENTO DE CICLO DE VIDA (WINDOW)
   ========================================================================== */

/**
 * O objeto 'window' representa a janela do navegador.
 * O evento "load" espera TUDO carregar: HTML, CSS, Imagens e Scripts.
 */
window.addEventListener("load", () => {
    console.log("✅ A página e todos os seus recursos foram carregados!");
    // alert("Bem-vindo! A página está pronta.");
});


/* ==========================================================================
   2. EVENTO GLOBAL DE CLIQUE
   ========================================================================== */

/**
 * Quando você não coloca nada antes do addEventListener, ele assume o 'window'.
 * Isso significa que QUALQUER clique na página será capturado aqui.
 */
addEventListener("click", (event) => {
    
    // 1. preventDefault(): Evita o comportamento padrão do navegador.
    // Exemplo: impede que um link mude de página ou que um formulário recarregue.
    event.preventDefault();

    // 2. event.target: É a "estrela" do evento. Ele mostra EXATAMENTE
    // qual elemento recebeu o clique do seu mouse.
    const elementoClicado = event.target;

    // 3. Verificando o conteúdo:
    console.log("Você clicou em: " + elementoClicado.tagName); // Mostra se foi um SPAN, LI, H1...
    console.log("Texto do elemento: " + elementoClicado.textContent);

    // DICA DIDÁTICA: 
    // Se você clicar em um dos seus convidados (ex: Leonel), o target será o <span>.
    // Se clicar no botão, o target será o <button>.
});