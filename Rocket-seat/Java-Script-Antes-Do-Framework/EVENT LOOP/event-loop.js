// prioridade e ordem de execução do código

// o event loop é o mecanismo que permite que o JavaScript execute código assíncrono, mesmo sendo uma linguagem de thread única


// (1) o código síncrono é executado primeiro, ou seja, o código que não depende de operações assíncronas, como chamadas de funções, loops, etc
console.log("primeiro 1")




// (3) Microtasks são executadas antes de temporizadores e promisses, ou seja, o código que depende de operações assíncronas, como chamadas de funções, loops, etc
queueMicrotask(() => {
    console.log("segundo 2")
})


// (5) Macrotasks que aguarda o temporizador ser acionado
setTimeout(() => {
    console.log("terceiro 3")
}, 2000)



// (2) o código síncrono é executado segundo, ou seja, o código que não depende de operações assíncronas, como chamadas de funções, loops, etc
console.log("quarto 4")



// (4) Adiciona uma microtask para a fila de microtasks, ou seja, o código que depende de operações assíncronas, como chamadas de funções, loops, etc
Promise.resolve(true)
.then(() => {
    console.log("quinto 5")
})

// a ordem de execução do código é a seguinte:
// 1. primeiro 1
// 2. quarto 4
// 3. segundo 2
// 4. quinto 5
// 5. terceiro 3 (após 2 segundos)