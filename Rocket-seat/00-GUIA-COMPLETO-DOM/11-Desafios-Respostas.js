/**
 * ===========================================================================
 * 11-Desafios-Respostas.js - SOLUÇÕES DOS EXERCÍCIOS
 * ===========================================================================
 * 
 * ⚠️ SÓ ABRA SE REALMENTE ESTIVER TRAVADO!
 * Tente fazer primeiro nos exercícios em 11-Desafios-Práticos.js
 */


/* =========================================================================
   NÍVEL FÁCIL - RESPOSTAS (1-5)
   ========================================================================= */

/**
 * EXERCÍCIO 1 - Solução
 */
function exercicio1_resposta() {
    const titulo = document.querySelector("#titulo");
    titulo.textContent = "Novo Título";
}


/**
 * EXERCÍCIO 2 - Solução
 */
function exercicio2_resposta() {
    const botao = document.querySelector(".btn");
    botao.classList.add("ativo");
}


/**
 * EXERCÍCIO 3 - Solução
 */
function exercicio3_resposta() {
    const paragrafo = document.createElement("p");
    paragrafo.textContent = "Parágrafo novo";
    document.body.appendChild(paragrafo);
}


/**
 * EXERCÍCIO 4 - Solução
 */
function exercicio4_resposta() {
    const email = document.querySelector("#email");
    console.log(email.value);
}


/**
 * EXERCÍCIO 5 - Solução
 */
function exercicio5_resposta() {
    const botao = document.createElement("button");
    botao.textContent = "Clique aqui";
    document.body.appendChild(botao);
    
    botao.addEventListener("click", () => {
        console.log("Botão clicado!");
    });
}


/* =========================================================================
   NÍVEL MÉDIO - RESPOSTAS (6-10)
   ========================================================================= */

/**
 * EXERCÍCIO 6 - Solução
 */
function exercicio6_resposta() {
    const emailInput = document.querySelector("#email");
    const feedback = document.querySelector("#feedback");
    
    emailInput.addEventListener("input", () => {
        if (emailInput.value.includes("@")) {
            feedback.textContent = "✅ válido";
            feedback.classList.remove("invalid");
            feedback.classList.add("valid");
        } else {
            feedback.textContent = "❌ inválido";
            feedback.classList.remove("valid");
            feedback.classList.add("invalid");
        }
    });
}


/**
 * EXERCÍCIO 7 - Solução
 */
function exercicio7_resposta() {
    const textarea = document.querySelector("#texto");
    const contador = document.querySelector("#contador");
    
    textarea.addEventListener("input", () => {
        contador.textContent = textarea.value.length;
    });
}


/**
 * EXERCÍCIO 8 - Solução
 */
function exercicio8_resposta() {
    const input = document.querySelector("#nova-tarefa");
    const botao = document.querySelector("#btn-adicionar");
    const lista = document.querySelector("#tarefas");
    
    botao.addEventListener("click", () => {
        if (input.value.trim() === "") return;
        
        const li = document.createElement("li");
        li.textContent = input.value;
        lista.appendChild(li);
        input.value = "";
        input.focus();
    });
}


/**
 * EXERCÍCIO 9 - Solução
 */
function exercicio9_resposta() {
    const botao = document.createElement("button");
    botao.textContent = "☀️ Claro";
    document.body.appendChild(botao);
    
    botao.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        
        if (document.body.classList.contains("dark")) {
            botao.textContent = "🌙 Escuro";
        } else {
            botao.textContent = "☀️ Claro";
        }
    });
}


/**
 * EXERCÍCIO 10 - Solução
 */
function exercicio10_resposta() {
    const form = document.querySelector("#form");
    const mensagem = document.querySelector("#mensagem");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const nome = document.querySelector("#nome").value.trim();
        const email = document.querySelector("#email").value.trim();
        
        // Validar nome
        if (nome === "") {
            mensagem.textContent = "❌ Nome é obrigatório";
            mensagem.style.color = "red";
            return;
        }
        
        if (nome.length < 3) {
            mensagem.textContent = "❌ Nome deve ter no mínimo 3 caracteres";
            mensagem.style.color = "red";
            return;
        }
        
        // Validar email
        if (email === "") {
            mensagem.textContent = "❌ Email é obrigatório";
            mensagem.style.color = "red";
            return;
        }
        
        if (!email.includes("@")) {
            mensagem.textContent = "❌ Email inválido";
            mensagem.style.color = "red";
            return;
        }
        
        // Se passou em tudo
        mensagem.textContent = "✅ Enviado com sucesso!";
        mensagem.style.color = "green";
        form.reset();
    });
}


/* =========================================================================
   NÍVEL DIFÍCIL - RESPOSTAS (11-13)
   ========================================================================= */

/**
 * EXERCÍCIO 11 - Solução
 */
function exercicio11_resposta() {
    const container = document.querySelector("#produtos");
    
    container.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-like")) {
            const produto = event.target.closest(".produto");
            const botao = event.target;
            
            produto.classList.toggle("favorited");
            
            if (produto.classList.contains("favorited")) {
                botao.textContent = "♥";
            } else {
                botao.textContent = "♡";
            }
        }
    });
}


/**
 * EXERCÍCIO 12 - Solução
 */
function exercicio12_resposta() {
    const container = document.querySelector("#produtos");
    const badge = document.querySelector("#cart-badge");
    const notificacao = document.querySelector("#notificacao");
    let contador = 0;
    
    container.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-cart")) {
            const produto = event.target.closest(".produto");
            const nomeProduto = produto.dataset.nome;
            
            contador++;
            badge.textContent = contador;
            
            // Mostrar notificação
            notificacao.textContent = `✅ ${nomeProduto} adicionado ao carrinho!`;
            notificacao.classList.add("show");
            
            // Esconder depois de 2 segundos
            setTimeout(() => {
                notificacao.classList.remove("show");
            }, 2000);
        }
    });
}


/**
 * EXERCÍCIO 13 - Solução
 */
function exercicio13_resposta() {
    const input = document.querySelector("#busca");
    const itens = document.querySelectorAll("#lista li");
    const lista = document.querySelector("#lista");
    
    input.addEventListener("input", () => {
        const termoBusca = input.value.toLowerCase();
        let encontrou = false;
        
        itens.forEach((item) => {
            if (item.textContent.toLowerCase().includes(termoBusca)) {
                item.style.display = "block";
                encontrou = true;
            } else {
                item.style.display = "none";
            }
        });
        
        // Se não encontrou nada, mostrar mensagem
        if (!encontrou && termoBusca !== "") {
            if (!document.querySelector(".nenhum-resultado")) {
                const mensagem = document.createElement("p");
                mensagem.textContent = "Nenhum resultado encontrado";
                mensagem.className = "nenhum-resultado";
                lista.appendChild(mensagem);
            }
        } else {
            const mensagem = document.querySelector(".nenhum-resultado");
            if (mensagem) {
                mensagem.remove();
            }
        }
    });
}


/* =========================================================================
   NÍVEL DESAFIO - RESPOSTAS (14-15)
   ========================================================================= */

/**
 * EXERCÍCIO 14 - Solução
 */
function exercicio14_resposta() {
    const input = document.querySelector("#nova-nota");
    const botao = document.querySelector("#btn-nota");
    const containerNotas = document.querySelector("#notas");
    const total = document.querySelector("#total");
    let numeroNotas = 0;
    
    botao.addEventListener("click", () => {
        if (input.value.trim() === "") return;
        
        const nota = document.createElement("div");
        nota.className = "nota";
        nota.contentEditable = true;
        nota.textContent = input.value;
        
        // Botão deletar
        const btnDeletar = document.createElement("button");
        btnDeletar.textContent = "Deletar";
        btnDeletar.addEventListener("click", () => {
            nota.remove();
            numeroNotas--;
            total.textContent = numeroNotas;
            salvarNotas();
        });
        
        nota.appendChild(btnDeletar);
        containerNotas.appendChild(nota);
        
        numeroNotas++;
        total.textContent = numeroNotas;
        input.value = "";
        
        // Salvar quando edita
        nota.addEventListener("blur", salvarNotas);
        
        salvarNotas();
    });
    
    function salvarNotas() {
        const notas = Array.from(document.querySelectorAll(".nota"));
        const dados = notas.map(n => n.textContent);
        localStorage.setItem("minhasNotas", JSON.stringify(dados));
    }
    
    // Carregar notas ao iniciar
    const notasSalvas = localStorage.getItem("minhasNotas");
    if (notasSalvas) {
        const notas = JSON.parse(notasSalvas);
        notas.forEach((texto) => {
            input.value = texto;
            botao.click();
        });
    }
}


/**
 * EXERCÍCIO 15 - Solução
 */
function exercicio15_resposta() {
    const filtros = document.querySelectorAll(".filtro-btn");
    const imagens = document.querySelectorAll("#galeria img");
    const lightbox = document.querySelector("#lightbox");
    const lightboxImg = document.querySelector("#lightbox-img");
    const btnClose = document.querySelector("#lightbox-close");
    const btnPrev = document.querySelector("#lightbox-prev");
    const btnNext = document.querySelector("#lightbox-next");
    
    let imagensVisíveis = Array.from(imagens);
    let indiceAtual = 0;
    
    // Filtros
    filtros.forEach((filtro) => {
        filtro.addEventListener("click", () => {
            // Remove classe ativa de todos
            filtros.forEach((f) => f.classList.remove("ativo"));
            // Adiciona na clicado
            filtro.classList.add("ativo");
            
            const categoriaFiltro = filtro.dataset.filtro;
            
            // Mostrar/ocultar imagens
            imagens.forEach((img) => {
                if (categoriaFiltro === "todas" || img.dataset.categoria === categoriaFiltro) {
                    img.style.display = "block";
                } else {
                    img.style.display = "none";
                }
            });
            
            imagensVisíveis = Array.from(imagens).filter((img) => img.style.display !== "none");
        });
    });
    
    // Abrir lightbox
    imagens.forEach((img) => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            lightbox.classList.remove("hidden");
            indiceAtual = imagensVisíveis.indexOf(img);
        });
    });
    
    // Fechar lightbox
    btnClose.addEventListener("click", () => {
        lightbox.classList.add("hidden");
    });
    
    // ESC para fechar
    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            lightbox.classList.add("hidden");
        }
    });
    
    // Próxima imagem
    btnNext.addEventListener("click", () => {
        indiceAtual = (indiceAtual + 1) % imagensVisíveis.length;
        lightboxImg.src = imagensVisíveis[indiceAtual].src;
    });
    
    // Imagem anterior
    btnPrev.addEventListener("click", () => {
        indiceAtual = (indiceAtual - 1 + imagensVisíveis.length) % imagensVisíveis.length;
        lightboxImg.src = imagensVisíveis[indiceAtual].src;
    });
    
    // Setas do teclado também funcionam
    window.addEventListener("keydown", (event) => {
        if (!lightbox.classList.contains("hidden")) {
            if (event.key === "ArrowRight") btnNext.click();
            if (event.key === "ArrowLeft") btnPrev.click();
        }
    });
}


/* =========================================================================
   COMO USAR ESSAS RESPOSTAS
   ========================================================================= */

// Se quiser testar uma resposta específica:
// 1. Copie a função (por ex: exercicio6_resposta)
// 2. Cole no console do navegador (F12) e pressione Enter
// 3. Ou chame a função: exercicio6_resposta()

// Se precisa entender o que cada linha faz, leia os comentários
// E compare com seu código para ver o que faltou
