# 📚 GUIA COMPLETO - JAVASCRIPT INTERMEDIÁRIO

## 🎯 Bem-vindo!
Este guia foi organizado para você **revisar, aprofundar e dominar** todos os conceitos de JavaScript Intermediário de forma estruturada e prática.

---

## 📖 ÍNDICE DE CONTEÚDOS

### 1️⃣ **[01-Arrays-Avancado.js](01-Arrays-Avancado.js)**
- Criação e acesso a arrays
- Métodos de mutação: `push()`, `unshift()`, `pop()`, `shift()`, `splice()`
- Métodos de leitura: `slice()`, `indexOf()`, `includes()`
- Ordenação: `sort()`
- **Fundamentais**: `map()`, `filter()`, `reduce()`
- Casos de uso prático: Filtrar, transformar, agregar dados
- ⭐ **Extra**: Comparação entre métodos (performance, quando usar cada um)

### 2️⃣ **[02-Strings-Completo.js](02-Strings-Completo.js)**
- Criação de strings
- Case: `toUpperCase()`, `toLowerCase()`
- Extração: `slice()`, `substring()`, `substr()`
- Busca: `indexOf()`, `includes()`, `startsWith()`, `endsWith()`
- Transformação: `replace()`, `replaceAll()`, `trim()`, `split()`, `join()`
- Template Literals (`,  `${}`, interpolação)
- Manipulação avançada: `padStart()`, `padEnd()`, `repeat()`
- ⭐ **Extra**: Regex básico com strings

### 3️⃣ **[03-Objetos-Deep.js](03-Objetos-Deep.js)**
- Sintaxe literal `{}`
- Propriedades e métodos
- Acesso: notação de ponto vs colchetes
- Modificação dinâmica de propriedades
- `delete` operator
- Métodos do objeto: `Object.keys()`, `Object.values()`, `Object.entries()`
- Optional chaining: `?.`
- Nullish coalescing: `??`
- ⭐ **Extra**: `Object.freeze()`, `Object.seal()`, `Object.assign()`

### 4️⃣ **[04-Classes-e-Heranca.js](04-Classes-e-Heranca.js)**
- Sintaxe de classes ES6
- `constructor` e `this`
- Propriedades de instância
- Métodos de instância
- Métodos estáticos: `static`
- Getters e Setters
- Herança: `extends`
- `super()` – acessar a classe pai
- Sobrescrita (override) de métodos
- ⭐ **Extra**: Encapsulamento (# privadas)

### 5️⃣ **[05-Datas-e-Horas.js](05-Datas-e-Horas.js)**
- Criação: `new Date()`, timestamp
- Leitura: `getDate()`, `getMonth()`, `getFullYear()`, `getHours()`, `getDay()`
- Escritiva: `setDate()`, `setMonth()`, etc
- Formatação: `toDateString()`, `toLocaleString()`
- Localização: `Intl.DateTimeFormat()`
- Fuso horário: `getTimezoneOffset()`
- ⭐ **Extra**: Calcular diferença entre datas, datas futuras/passadas

### 6️⃣ **[06-Loops-Avancado.js](06-Loops-Avancado.js)**
- `for` tradicional com índice
- `while` e `do...while`
- `for...of` (valores)
- `for...in` (chaves)
- `break` e `continue`
- Array methods: `forEach()`, `map()`, `filter()`, `find()`, `findIndex()`, `some()`, `every()`
- ⭐ **Extra**: Performance – qual escolher em cada situação

### 7️⃣ **[07-Closures-e-Escopo.js](07-Closures-e-Escopo.js)**
- Escopo global, local, lexical
- Cadeia de escopo (scope chain)
- Closures – capturar variáveis
- Factory functions
- Data privacy (variáveis privadas)
- Callbacks com closures
- ⭐ **Extra**: Memory leaks com closures, IIFE (Immediately Invoked Function Expression)

### 8️⃣ **[08-This-Contexto.js](08-This-Contexto.js)**
- `this` em métodos de objeto
- `this` em funções normais
- `this` em arrow functions
- `this` em classes
- `call()`, `apply()`, `bind()`
- Método `bind()` para preservar contexto
- ⭐ **Extra**: Quando `this` é undefined, 'use strict'

### 9️⃣ **[09-Desestruturacao.js](09-Desestruturacao.js)**
- Desestruturação de arrays
- Rest operator: `...`
- Desestruturação de objetos
- Renomeação com `as`
- Valores padrão em desestruturação
- Spread operator: `...`
- Desestruturação em parâmetros de função
- ⭐ **Extra**: Desestruturação aninhada, aplicações práticas

### 🔟 **[10-Tratamento-Erros.js](10-Tratamento-Erros.js)**
- Tipos de erro: `Error`, `TypeError`, `ReferenceError`, `SyntaxError`
- `try...catch...finally`
- `throw` para lançar erros
- Erros customizados (classes de erro)
- `instanceof` para verificar tipo de erro
- Boas práticas em tratamento
- ⭐ **Extra**: Stack trace, debugging

### 1️⃣1️⃣ **[11-Conceitos-Essenciais.js](11-Conceitos-Essenciais.js)**
- **Imutabilidade** vs Mutabilidade
- **Tipos primitivos** vs **Referência** (objetos, arrays)
- **Shallow copy** vs **Deep copy**
- **Hoisting** (var, let, const)
- **Temporal Dead Zone**
- **Event loop** (conceptual)
- ⭐ **Extra**: Garbage collection, performance

### 1️⃣2️⃣ **[12-Desafios-Praticos.js](12-Desafios-Praticos.js)**
- 15 desafios práticos
- Do fácil ao avançado
- Com soluções comentadas
- Testa todos os conceitos aprendidos

---

## 🎓 COMO USAR ESTE GUIA

### Passo 1: Leitura Sequencial
Comece pelo arquivo **01** e avance até o **12**. Cada arquivo se baseia no anterior.

### Passo 2: Execute os Exemplos
Abra cada arquivo no VS Code e execute (`F5` ou `node arquivo.js`). Veja o console.

### Passo 3: Modifique e Experimente
- Altere valores nos exemplos
- Quebre o código propositalmente
- Teste edge cases (valores vazios, null, undefined)

### Passo 4: Resolva os Desafios
Após revisar todos os conceitos, resolva os 15 desafios no arquivo 12.

### Passo 5: Revise com Frequência
Volte sempre que tiver dúvida. Use como referência.

---

## 📊 NÍVEL DE DIFICULDADE

```
01. Arrays           ████░░░░░░ Intermediário Básico
02. Strings          ████░░░░░░ Intermediário Básico
03. Objetos          █████░░░░░ Intermediário
04. Classes          ██████░░░░ Intermediário
05. Datas            ████░░░░░░ Intermediário Básico
06. Loops            █████░░░░░ Intermediário
07. Closures         ████████░░ Intermediário Avançado ⭐
08. This             ███████░░░ Intermediário Avançado
09. Desestruturação  ██████░░░░ Intermediário
10. Tratamento Erro  █████░░░░░ Intermediário
11. Conceitos        ██████████ Intermediário Avançado ⭐⭐
12. Desafios         ████████░░ Intermediário Avançado
```

---

## ✨ CONCEITOS-CHAVE REVISADOS

✅ Arrays (métodos fundamentais + map/filter/reduce)
✅ Strings (manipulação completa)
✅ Objetos (estrutura, propriedades, métodos)
✅ Classes (construtor, herança, sobrescrita)
✅ Datas (criação, formatação, cálculos)
✅ Loops (todos os tipos + métodos de iteração)
✅ Closures (escopo, captura de variáveis)
✅ This (contexto, bind, call, apply)
✅ Desestruturação (arrays, objetos, rest/spread)
✅ Tratamento de Erros (try/catch, erros customizados)
✅ Conceitos Fundamentais (mutabilidade, tipos, hoisting)
✅ Desafios Práticos (aplicar tudo junto)

---

## 🚀 PRÓXIMOS PASSOS (Após Intermediário)

Quando terminar este guia, você estará pronto para:
- ⏳ **Async/Await** (Promises, requisições)
- 🎛️ **DOM Manipulation** (Interagir com HTML)
- 🔗 **Módulos** (import/export)
- 📦 **Package Managers** (npm)
- ⚛️ **Frameworks** (React, Vue, Angular)

---

## 💡 DICAS IMPORTANTES

1. **Não decore** – entenda os conceitos
2. **Pratique muito** – escreva código todos os dias
3. **Experimente** – teste diferentes formas de resolver o mesmo problema
4. **Leia o console** – logs são seus melhores amigos
5. **Googlar é normal** – todo desenvolvedor faz isso
6. **Debugging** – use `console.log()`, debugger do navegador, VS Code

---

## 📝 Notas de Estudo

Use este espaço para suas anotações pessoais enquanto avança pelo guia:

```
[ ] Revisei Arrays
[ ] Revisei Strings
[ ] Revisei Objetos
[ ] Revisei Classes
[ ] Revisei Datas
[ ] Revisei Loops
[ ] Revisei Closures
[ ] Revisei This
[ ] Revisei Desestruturação
[ ] Revisei Tratamento de Erros
[ ] Revisei Conceitos Essenciais
[ ] Completei Desafios Práticos
[ ] Estou pronto para Async/Await!
```

---

## 🎯 Última Observação

Este guia é **profundo**, **prático** e **completo**. Se tiver dúvidas em algum conceito, releia a seção várias vezes. JavaScript pode parecer fácil no início, mas os conceitos intermediários exigem prática.

**Você consegue! 🚀**

---

Gerado com ❤️ para seu desenvolvimento como programador(a).
