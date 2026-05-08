// setTimeout é uma função nativa do JavaScript que permite executar um código ou função após um determinado período de tempo. Ela recebe dois argumentos: a função ou código a ser executado e o tempo em milissegundos que deve esperar antes

setTimeout(() => {
    // console.log('Executando o código após 2 segundos apenas 1 vez');
}, 2000); // 2000 milissegundos = 2 segundos




// setInterval é uma função nativa do JavaScript que permite executar um código ou função repetidamente em um intervalo de tempo especificado. Ela recebe dois argumentos: a função ou código a ser executado e o tempo em milissegundos que deve esperar antes de executar novamente

setInterval(() => {
    // console.log('Executando o código a cada 5 segundos infinitamente');
}, 5000); // 5000 milissegundos = 5 segundos



let value = 10

const Interalo = setInterval(() => {
    value --
     console.log('Contagem regressiva a cada 2 segundos:', value);

     if(value === 0) {
        console.log("#%#%#%#%%#%#%#%#%#%#%#%%#%#%#% -----------FELIZ ANO NOVO---------- #%#%#%#%%#%#%#%#%#%#%#%%#%#%#%")

        // esse para a execução
        clearInterval(Interalo)
     }
}, 2000); // 2000 milissegundos = 2 segundos