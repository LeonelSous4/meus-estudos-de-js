# 📚 DOM - GUIA COMPLETO

## Introdução

Bem-vindo ao **Guia Completo de DOM**! Este material foi reorganizado e aprofundado da mesma forma que o curso de JavaScript Intermediário.

Cada módulo contém:
- ✅ **Código prático** com exemplos reais  
- 📝 **Comentários explicativos** em português  
- 🎯 **Casos de uso** comuns que você vai enfrentar  
- ⚠️ **Armadilhas** que todo developer cai  

---

## 📋 Estrutura do Curso

### **Nível 1 - Seleção (01)**
- [01-Seleção-de-Elementos.js](01-Seleção-de-Elementos.js)
  - querySelector, querySelectorAll (os bons)
  - getElementById, getElementsByClassName, getElementsByTagName (os antigos)
  - Seletores CSS práticos

### **Nível 2 - Criação (02)**
- [02-Criação-de-Elementos.js](02-Criação-de-Elementos.js)
  - createElement, appendChild, prepend
  - insertBefore, insertAdjacentHTML
  - Remove e replaceWith

### **Nível 3 - Conteúdo (03)**
- [03-Manipulação-HTML.js](03-Manipulação-HTML.js)
  - textContent (seguro)
  - innerHTML (poderoso, precisa cuidado)
  - innerText (visível na tela)
  - Diferenças práticas

### **Nível 4 - Estilo (04)**
- [04-Manipulação-Estilos.js](04-Manipulação-Estilos.js)
  - classList (add, remove, toggle, contains)
  - style direto
  - getComputedStyle (ler estilos)

### **Nível 5 - Atributos (05)**
- [05-Manipulação-Atributos.js](05-Manipulação-Atributos.js)
  - getAttribute, setAttribute, removeAttribute
  - dataset (para data-* customizados)
  - Atributos booleanos

### **Nível 6 - Eventos Básicos (06)**
- [06-Eventos-Básico.js](06-Eventos-Básico.js)
  - addEventListener, removeEventListener
  - Eventos de mouse, teclado, input
  - O objeto event

### **Nível 7 - Eventos Avançados (07)** ⭐ *Aprofundamento*
- [07-Eventos-Avançado.js](07-Eventos-Avançado.js)
  - **Event Bubbling** e Capturing
  - **Event Delegation** (padrão mais útil!)
  - stopPropagation, preventDefault

### **Nível 8 - Formulários (08)**
- [08-Formulários-e-Inputs.js](08-Formulários-e-Inputs.js)
  - Acessar valores (.value, .checked)
  - Validação em realtime
  - FormData (jeito moderno)
  - Máscaras de input (telefone, CPF, etc)

### **Nível 9 - Navegação no DOM (09)** ⭐ *Aprofundamento*
- [09-Navegação-DOM.js](09-Navegação-DOM.js)
  - parentElement, children
  - nextElementSibling, previousElementSibling
  - closest() (sobe procurando seletor)
  - Padrões práticos

### **Nível 10 - Conceitos (10)** ⭐ *Essencial*
- [10-Conceitos-Essenciais.js](10-Conceitos-Essenciais.js)
  - **Performance** (fragment, delegação)
  - **Debounce e Throttle** (para eventos que disparam muito)
  - Boas práticas industriais
  - Debugging com console

### **Nível 11 - Exercícios**
- [11-Desafios-Práticos.js](11-Desafios-Práticos.js) - **15 Exercícios**
  - 5 Fáceis
  - 5 Médios  
  - 3 Difíceis
  - 2 Desafios

- [11-Desafios-Respostas.js](11-Desafios-Respostas.js) - **Soluções**
  - Abra SÓ quando estiver travado
  - Cada solução tem comentários explicativos
  - Estude o código, não apenas copie

---

## 🎯 Ordem Recomendada

### Se é Iniciante:
```
01 → 02 → 03 → 04 → 05 → 06 → Exercícios (fáceis 1-5)
```

### Se quer estar pronto:
```
01 → 02 → 03 → 04 → 05 → 06 → 07 → 08 → 09 → 10 → Todos os exercícios
```

### Se é Expert e quer aprofundar:
```
07 (Delegação) → 09 (Traversal) → 10 (Performance) → Exercícios avançados
```

---

##️ O que foi Adicionado (Aprofundamento)

Seu projeto original tinha muitos arquivos espalhados. Aqui foi:

✅ **Consolidado** em módulos organizados  
✅ **Aprofundado** com conceitos que faltavam:
- Event Delegation (padrão MUITO importante!)
- Bubbling vs Capturing
- DOM Traversal completo
- Performance e otimização
- Padrões modernos

✅ **Comentado** em português com exemplos práticos  
✅ **Testado** com 15 exercícios para você praticar  

---

##🚀 Quick Start

### Para Testar um Exemplo:
1. Abra um arquivo (ex: `01-Seleção-de-Elementos.js`)
2. Vá até a linha com `querySelector` ou `addEventListener`
3. Abra o DevTools (F12) → Console
4. Cole o código lá e execute

### Para Fazer um Exercício:
1. Abra [11-Desafios-Práticos.js](11-Desafios-Práticos.js)
2. Procure o `// TODO:` do exercício que quer
3. Implemente a solução LÁ MESMO
4. Crie o HTML necessário numa página de teste
5. Execute no navegador
6. SÓ depois vira em [11-Desafios-Respostas.js](11-Desafios-Respostas.js)

---

## 📊 Mapa Conceitual

```
SELEÇÃO (01)
    ↓
CRIAÇÃO (02) ← CONTEÚDO (03) ← ESTILO (04) ← ATRIBUTOS (05)
    ↓
EVENTOS (06)
    ↓
DELEGAÇÃO (07) ← FORMULÁRIOS (08) ← NAVEGAÇÃO (09)
    ↓
PERFORMANCE (10)
    ↓
PRATICAR (11)
```

---

## 💡 Dicas Importantes

### Sempre Lembre de:
- `querySelector` é seu amigo (moderno e simples)
- `classList` para estilos (não `style` direto)
- **Event Delegation** economiza listeners
- `DocumentFragment` para muitos elementos
- `closest()` sobe procurando
- `dataset` para dados pequenos no HTML

### Evite:
- ❌ `innerHTML +=` (recria tudo)
- ❌ `onclick=` no HTML (listener é melhor)
- ❌ Listeners em cada filho (delegação!)
- ❌ Esquecer de `event.preventDefault()`
- ❌ Misturar dados de usuários em `innerHTML`

---

## 🔗 Próximos Passos

Depois que dominar DOM, você está pronto para:
- 🔴 **Avançado** (Async/Await, APIs, JSON)
- 🔴 **Frameworks** (React, Vue, Angular)
- 🔴 **Backend** (Node.js, Databases)

---

## 📞 Dúvidas?

Se tiver dúvida em algum conceito:
1. Releia o código (.js) com os comentários
2. Tente fazer um exercício relacionado
3. Debug com `console.log()` e DevTools
4. Procure por exemplos no MDN Web Docs

---

**Bom aprendizado! 💪**
