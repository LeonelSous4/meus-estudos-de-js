

// exportação default, onde o módulo exporta apenas uma função ou objeto, e é importado sem chaves

// fazendo das dua formas, defalt e nomeada, onde o módulo exporta várias funções ou objetos, e é importado com chaves
import sum, {multiply} from './calc.js';

console.log(' 2 + 3 =' , sum(2, 3)); // 5
console.log(' 2 * 3 =' , multiply(2, 3)); 

// em importações dafault o nome pouco importa, na nomeada o nome tem que ser o mesmo da exportação, caso contrário, a importação não funciona

console.log('_______________________________________________')




















// exportação padrão, onde o módulo exporta apenas uma função ou objeto, e é importado sem chaves
// exportação nomeada, onde o módulo exporta várias funções ou objetos, e é importado com chaves

// quando quer utilizar um padrao default export, onde o módulo exporta apenas uma função ou objeto, e é importado sem chaves, a importação deve ser feita sem chaves, caso contrário, a importação deve ser feita com chaves.

// usando as duas juntas
// import sum from, {mutiply} './calc.js';

