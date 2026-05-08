# 📑 ÍNDICE RÁPIDO

## Encontre Rápido o Que Precisa

### 🔍 **Por Tarefa**

#### Preciso **selecionar** um elemento:
→ [01-Seleção-de-Elementos.js](01-Seleção-de-Elementos.js#L1)
- `querySelector()` - forma moderna
- `querySelectorAll()` - todos com um seletor

#### Preciso **criar** um elemento novo:
→ [02-Criação-de-Elementos.js](02-Criação-de-Elementos.js#L1)
- `createElement()` - criar tag
- `appendChild()` - adicionar no final
- `prepend()` - adicionar no começo

#### Preciso **mudar texto/HTML**:
→ [03-Manipulação-HTML.js](03-Manipulação-HTML.js#L1)
- `textContent` - seguro para texto puro
- `innerHTML` - para HTML (cuidado!)
- `innerText` - apenas o visível

#### Preciso **alterar cores/estilos**:
→ [04-Manipulação-Estilos.js](04-Manipulação-Estilos.js#L1)
- `classList.add()` - adicionar classe
- `classList.toggle()` - alterna
- `style.propriedade` - estilo direto

#### Preciso **ler/mudar atributos**:
→ [05-Manipulação-Atributos.js](05-Manipulação-Atributos.js#L1)
- `getAttribute()` - ler atributo
- `setAttribute()` - mudar atributo
- `dataset` - para data-* personalizados

#### Preciso **reagir ao clique/teclado**:
→ [06-Eventos-Básico.js](06-Eventos-Básico.js#L1)
- `addEventListener("click", ...)` - clique
- `addEventListener("keydown", ...)` - teclado
- `addEventListener("input", ...)` - digitação

#### Preciso **adicionar listener no elemento pai**:
→ [07-Eventos-Avançado.js](07-Eventos-Avançado.js#L80)
- **Event Delegation** - padrão mais eficiente!
- Funciona mesmo com filhos adicionados depois

#### Preciso **validar/pegar valores de input**:
→ [08-Formulários-e-Inputs.js](08-Formulários-e-Inputs.js#L1)
- `.value` - para text, email, etc
- `.checked` - para checkbox/radio
- `.files` - para upload

#### Preciso **subir/descer na árvore do DOM**:
→ [09-Navegação-DOM.js](09-Navegação-DOM.js#L1)
- `parentElement` - pai
- `children` - filhos
- `closest()` - sobe procurando seletor

#### Preciso **otimizar performance**:
→ [10-Conceitos-Essenciais.js](10-Conceitos-Essenciais.js#L1)
- `DocumentFragment` - adicionar muitos de uma vez
- `classList` em vez de `style`
- `debounce()` para eventos frequentes

---

### 📚 **Por Conceito**

#### DOM (Document Object Model)
- O que é? → Árvore HTML no JavaScript
- Como navegar? → [09-Navegação-DOM.js](09-Navegação-DOM.js)
- Como manipular? → [02-03-04-05.js](02-Criação-de-Elementos.js)

#### Events (Eventos)
- Básicos → [06-Eventos-Básico.js](06-Eventos-Básico.js)
- Avançados → [07-Eventos-Avançado.js](07-Eventos-Avançado.js)
- Delegação (!!!!) → [07-Eventos-Avançado.js#L78](07-Eventos-Avançado.js#L78)

#### Formulários
- Acessar valores → [08-Formulários-e-Inputs.js#L1](08-Formulários-e-Inputs.js#L1)
- Validar → [08-Formulários-e-Inputs.js#L104](08-Formulários-e-Inputs.js#L104)
- Mascaras → [08-Formulários-e-Inputs.js#L169](08-Formulários-e-Inputs.js#L169)

#### Performance
- Fragment → [10-Conceitos-Essenciais.js#L6](10-Conceitos-Essenciais.js#L6)
- Delegação → [10-Conceitos-Essenciais.js#L30](10-Conceitos-Essenciais.js#L30)
- Debounce → [10-Conceitos-Essenciais.js#L89](10-Conceitos-Essenciais.js#L89)

#### Boas Práticas
- Tudo → [10-Conceitos-Essenciais.js](10-Conceitos-Essenciais.js)
- Checklist → [10-Conceitos-Essenciais.js#L265](10-Conceitos-Essenciais.js#L265)

---

### 🎓 **Por Nível de Dificuldade**

#### Iniciante (começa aqui!)
1. [01-Seleção-de-Elementos.js](01-Seleção-de-Elementos.js)
2. [02-Criação-de-Elementos.js](02-Criação-de-Elementos.js)
3. [03-Manipulação-HTML.js](03-Manipulação-HTML.js)
4. [04-Manipulação-Estilos.js](04-Manipulação-Estilos.js)
5. [06-Eventos-Básico.js](06-Eventos-Básico.js)

**Exercícios Iniciais**: [11-Desafios-Práticos.js](11-Desafios-Práticos.js) - Exercícios 1-5

#### Intermediário
6. [05-Manipulação-Atributos.js](05-Manipulação-Atributos.js)
7. [08-Formulários-e-Inputs.js](08-Formulários-e-Inputs.js)
8. [09-Navegação-DOM.js](09-Navegação-DOM.js)

**Exercícios Médios**: [11-Desafios-Práticos.js](11-Desafios-Práticos.js) - Exercícios 6-10

#### Avançado
9. [07-Eventos-Avançado.js](07-Eventos-Avançado.js) ⭐ **Muito importante!**
10. [10-Conceitos-Essenciais.js](10-Conceitos-Essenciais.js) ⭐ **Essencial!**

**Exercícios Avançados**: [11-Desafios-Práticos.js](11-Desafios-Práticos.js) - Exercícios 11-15

---

### 🔎 **Por Palavra-Chave**

| Palavra | Arquivo | Linha |
|---------|---------|-------|
| `querySelector` | [01](01-Seleção-de-Elementos.js) | - |
| `createElement` | [02](02-Criação-de-Elementos.js) | - |
| `appendChild` | [02](02-Criação-de-Elementos.js) | - |
| `textContent` | [03](03-Manipulação-HTML.js) | - |
| `innerHTML` | [03](03-Manipulação-HTML.js) | - |
| `classList` | [04](04-Manipulação-Estilos.js) | - |
| `style` | [04](04-Manipulação-Estilos.js) | - |
| `getAttribute` | [05](05-Manipulação-Atributos.js) | - |
| `dataset` | [05](05-Manipulação-Atributos.js) | - |
| `addEventListener` | [06](06-Eventos-Básico.js) | - |
| `event.target` | [06](06-Eventos-Básico.js) | - |
| `Bubbling` | [07](07-Eventos-Avançado.js) | - |
| `Delegation` | [07](07-Eventos-Avançado.js) | - |
| `closest()` | [07](07-Eventos-Avançado.js) | - |
| `.value` | [08](08-Formulários-e-Inputs.js) | - |
| `FormData` | [08](08-Formulários-e-Inputs.js) | - |
| `parentElement` | [09](09-Navegação-DOM.js) | - |
| `children` | [09](09-Navegação-DOM.js) | - |
| `DocumentFragment` | [10](10-Conceitos-Essenciais.js) | - |
| `debounce` | [10](10-Conceitos-Essenciais.js) | - |

---

### 📖 **Fluxo Recomendado de Aprendizado**

**Dia 1 - Básico**
```
01 (Seleção) 
→ 02 (Criação) 
→ Exercício 1-2
```

**Dia 2 - Conteúdo e Estilos**
```
03 (HTML) 
→ 04 (Estilos) 
→ Exercício 3-4
```

**Dia 3 - Eventos**
```
06 (Básico) 
→ 07 (Avançado) ⭐ 
→ Exercício 5-6
```

**Dia 4 - Formulários**
```
08 (Formulários) 
→ Exercício 7-8
```

**Dia 5 - Navegação e Conceitos**
```
05 (Atributos) 
→ 09 (Navegação) 
→ 10 (Performance) ⭐
→ Exercício 9-10
```

**Dia 6-7 - Praticar**
```
Exercícios 11-15 (Difíceis + Desafios)
```

---

## 🎯 Cheat Sheet Rápido

```javascript
// SELEÇÃO
const el = document.querySelector("#id");
const els = document.querySelectorAll(".class");

// CRIAÇÃO
const novo = document.createElement("div");
el.appendChild(novo);

// CONTEÚDO
el.textContent = "Texto";
el.innerHTML = "<b>HTML</b>";

// ESTILO
el.classList.add("classe");
el.style.color = "red";

// ATRIBUTOS
el.setAttribute("data-id", "123");
el.dataset.id = "123";

// EVENTOS
el.addEventListener("click", () => { });
el.removeEventListener("click", funcao);

// NAVEGAÇÃO
el.parentElement
el.children
el.nextElementSibling
el.closest("seletor")

// DELEGAÇÃO
pai.addEventListener("click", (e) => {
    if (e.target.matches(".filho")) { }
});

// FORMULÁRIOS
const valor = input.value;
const marcado = checkbox.checked;
const form = new FormData(form);
```

---

**Volta para:** [README.md](README.md)
