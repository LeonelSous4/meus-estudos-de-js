/**
 * ===========================================================================
 * 11 - EXERCÍCIOS PRÁTICOS (15 exercícios do fácil ao desafio)
 * ===========================================================================
 * 
 * Respostas estão em 11-Desafios-Respostas.js (abra só quando tentar!)
 */



/* =========================================================================
   NÍVEL FÁCIL (1-5)
   ========================================================================= */

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


/**
 * EXERCÍCIO 2 - Adicionar classe
 * 
 * Objetivo: Pegar um botão com classe "btn" e adicionar a classe "ativo"
 * Dica: Use classList.add()
 */

function exercicio2() {
    // TODO: Implementar
    
}

// exercicio2();


/**
 * EXERCÍCIO 3 - Criar elemento
 * 
 * Objetivo: Criar um <p> com texto "Parágrafo novo" e adicionar no body
 * Dica: Use createElement() e appendChild()
 */

function exercicio3() {
    // TODO: Implementar
    
}

// exercicio3();


/**
 * EXERCÍCIO 4 - Pegar valor de input
 * 
 * Objetivo: Selecionar um <input> com ID "email" e mostra seu valor no console
 * Dica: Use querySelector() e .value
 * 
 * HTML esperado:
 * <input type="email" id="email" value="user@email.com">
 */

function exercicio4() {
    // TODO: Implementar
    
}

// exercicio4();


/**
 * EXERCÍCIO 5 - Evento de clique
 * 
 * Objetivo: Criar um botão e quando clicado, mostrar "Botão clicado!" no console
 * Dica: Use addEventListener() e console.log()
 */

function exercicio5() {
    // TODO: Implementar
    
}

// exercicio5();



/* =========================================================================
   NÍVEL MÉDIO (6-10)
   ========================================================================= */

/**
 * EXERCÍCIO 6 - Validação de email em tempo real
 * 
 * Objetivo: Validar email enquanto o usuário digita
 *          Se tiver @, mostrar "✅ válido" em verde
 *          Se não tiver, mostrar "❌ inválido" em vermelho
 * 
 * Dica: Use addEventListener("input"), includes(), classList
 * 
 * HTML esperado:
 * <input type="email" id="email">
 * <span id="feedback"></span>
 * 
 * CSS esperado:
 * .valid { color: green; }
 * .invalid { color: red; }
 */

function exercicio6() {
    // TODO: Implementar
    
}

// exercicio6();


/**
 * EXERCÍCIO 7 - Contador de caracteres
 * 
 * Objetivo: Mostrar quantos caracteres foram digitados em um textarea
 * Atualizar em tempo real enquanto digita
 * 
 * Dica: addEventListener("input"), .value.length, textContent
 * 
 * HTML esperado:
 * <textarea id="texto"></textarea>
 * <p>Caracteres: <span id="contador">0</span></p>
 */

function exercicio7() {
    // TODO: Implementar
    
}

// exercicio7();


/**
 * EXERCÍCIO 8 - Lista de tarefas (adicionar)
 * 
 * Objetivo: Ter um input e botão "Adicionar"
 *          Quando clica, adicionar a tarefa como <li> na lista
 *          Limpar o input  
 * 
 * Dica: appendChild(), createElement(), addEventListener()
 * 
 * HTML esperado:
 * <input id="nova-tarefa" placeholder="Nova tarefa">
 * <button id="btn-adicionar">Adicionar</button>
 * <ul id="tarefas"></ul>
 */

function exercicio8() {
    // TODO: Implementar
    
}

// exercicio8();


/**
 * EXERCÍCIO 9 - Dark mode toggle
 * 
 * Objetivo: Criar um botão que alterna entre tema claro e escuro
 *          Adicionar/remover classe "dark" no <body>
 *          Mudar texto do botão ("☀️ Claro" <-> "🌙 Escuro")
 * 
 * Dica: classList.toggle(), button.textContent
 * 
 * CSS esperado:
 * body.dark { background-color: #333; color: #fff; }
 */

function exercicio9() {
    // TODO: Implementar
    
}

// exercicio9();


/**
 * EXERCÍCIO 10 - Formulário com validação
 * 
 * Objetivo: Validar um formulário antes de enviar
 *          Nome obrigatório (mínimo 3 caracteres)
 *          Email obrigatório (deve ter @)
 *          Se inválido, mostrar erro e return
 *          Se válido, mostrar "Enviado com sucesso!"
 * 
 * Dica: addEventListener("submit"), event.preventDefault(), includes()
 * 
 * HTML esperado:
 * <form id="form">
 *   <input type="text" id="nome" placeholder="Nome">
 *   <input type="email" id="email" placeholder="Email">
 *   <button type="submit">Enviar</button>
 *   <p id="mensagem"></p>
 * </form>
 */

function exercicio10() {
    // TODO: Implementar
    
}

// exercicio10();



/* =========================================================================
   NÍVEL DIFÍCIL (11-13)
   ========================================================================= */

/**
 * EXERCÍCIO 11 - Sistema de favoritos
 * 
 * Objetivo: Ter uma lista de produtos, cada um com botão ♡
 *          Quando clica, mudar para ♥ (liked) e adicionar classe "favorited"
 *          Clicar novamente, volta a ♡
 * 
 * Vantagem: Use event delegation no container da lista
 * Dica: classList.toggle(), event.target.closest(), dataset
 * 
 * HTML esperado:
 * <div id="produtos">
 *   <div class="produto" data-id="1">
 *     Produto 1 <button class="btn-like">♡</button>
 *   </div>
 *   <div class="produto" data-id="2">
 *     Produto 2 <button class="btn-like">♡</button>
 *   </div>
 * </div>
 * 
 * CSS esperado:
 * .produto.favorited { border: 2px solid red; }
 */

function exercicio11() {
    // TODO: Implementar
    
}

// exercicio11();


/**
 * EXERCÍCIO 12 - Carrinho de compras
 * 
 * Objetivo: Ter uma lista de produtos com botão "Adicionar ao carrinho"
 *          Mostrar quantos itens tem no carrinho (badge)
 *          Quando clica "Adicionar", incrementar o contador
 *          Mostrar notificação "Produto adicionado!"
 * 
 * Dica: dataset para armazenar produto-id, event delegation
 * closest() para encontrar o elemento pai, classList para notificação
 * 
 * HTML esperado:
 * <div id="produtos">
 *   <div class="produto" data-id="1" data-nome="Produto 1">
 *     Produto 1 - R$99.90
 *     <button class="btn-cart">Adicionar</button>
 *   </div>
 * </div>
 * <span id="cart-badge">0</span>
 * <div id="notificacao"></div>
 */

function exercicio12() {
    // TODO: Implementar
    
}

// exercicio12();


/**
 * EXERCÍCIO 13 - Filtro de lista
 * 
 * Objetivo: Ter um input de busca e uma lista
 *          Enquanto digita, filtrar a lista mostrando apenas itens que contêm o texto
 *          Se não encontrar, mostrar "Nenhum resultado"
 * 
 * Dica: addEventListener("input"), querySelectorAll(), includes(), display: none
 * 
 * HTML esperado:
 * <input id="busca" placeholder="Buscar...">
 * <ul id="lista">
 *   <li>Maçã</li>
 *   <li>Banana</li>
 *   <li>Laranja</li>
 * </ul>
 */

function exercicio13() {
    // TODO: Implementar
    
}

// exercicio13();



/* =========================================================================
   NÍVEL DESAFIO (14-15)
   ========================================================================= */

/**
 * EXERCÍCIO 14 - Mini aplicativo de notas
 * 
 * Objetivo: Criar um app de notas com:
 *          - Input para escrever nota
 *          - Botão "Adicionar nota"
 *          - Cada nota tem texto + botão "Deletar"
 *          - Clickar na nota para editar texto (contenteditable)
 *          - Mostrar número total de notas
 * 
 * Avançado: Guardar notas no localStorage
 * 
 * Dica: appendChild(), addEventListener(), contenteditable, event delegation
 * localStorage.setItem(), localStorage.getItem(), JSON.stringify()
 * 
 * HTML esperado:
 * <input id="nova-nota" placeholder="Escrever nota...">
 * <button id="btn-nota">Adicionar</button>
 * <div id="notas"></div>
 * <p>Total: <span id="total">0</span></p>
 */

function exercicio14() {
    // TODO: Implementar
    
}

// exercicio14();


/**
 * EXERCÍCIO 15 - Galeria com filtros e lightbox
 * 
 * Objetivo: Criar uma galeria de imagens com:
 *          - Filtros (todas, natureza, cidade, pessoa)
 *          - Ao clicar em imagem, abrir "lightbox" (modal grande)
 *          - Setas para próxima/anterior  imagem
 *          - Botão X para fechar
 *          - Esc também fecha
 * 
 * Dica: classList para filtros, event.key para ESC, closest(), dataset
 * parentElement para navegar
 * 
 * HTML esperado:
 * <div id="filtros">
 *   <button class="filtro-btn" data-filtro="todas">Todas</button>
 *   <button class="filtro-btn" data-filtro="natureza">Natureza</button>
 *   <button class="filtro-btn" data-filtro="cidade">Cidade</button>
 *   <button class="filtro-btn" data-filtro="pessoa">Pessoa</button>
 * </div>
 * <div id="galeria">
 *   <img src="img1.jpg" alt="Imagem 1" data-categoria="natureza">
 *   <img src="img2.jpg" alt="Imagem 2" data-categoria="cidade">
 *   <!-- mais imagens -->
 * </div>
 * 
 * <div id="lightbox" class="lightbox hidden">
 *   <img id="lightbox-img" src="" alt="">
 *   <button id="lightbox-close">×</button>
 *   <button id="lightbox-prev">←</button>
 *   <button id="lightbox-next">→</button>
 * </div>
 * 
 * CSS esperado:
 * .lightbox.hidden { display: none; }
 * .filtro-btn.ativo { background-color: blue; color: white; }
 */

function exercicio15() {
    // TODO: Implementar
    
}

// exercicio15();


/**
 * INSTRUÇÕES:
 * 
 * 1. Cada exercício tem um TODO - implemente lá
 * 2. Crie o HTML necessário na página ou em um arquivo HTML separado
 * 3. Comente a linha "// exercicioX();" para executar o exercício
 * 4. Teste no navegador (F12 para console)
 * 5. Quando terminar, descomente apenas para ver o resultado
 * 6. Só olhe em 11-Desafios-Respostas.js se REALMENTE estiver travado
 * 
 * DICA: Comece pelos exercícios fáceis e suba de dificuldade
 */
