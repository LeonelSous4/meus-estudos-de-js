// importanodo o módulo e as funçõwa
import {sum, multiply} from './calc.js';

console.log(' 2 + 3 =' , sum(2, 3)); // 5
console.log(' 2 * 3 =' , multiply(2, 3)); // 6


// importando o módulo inteiro, mas não é recomendado, pois fica mais difícil de ler e entender o código


import * as calc from './calc.js';

console.log(' 2 + 3 =' , calc.sum(2, 3)); // 5
console.log(' 2 * 3 =' , calc.multiply(2, 3)); // 6











// exportação padrão, onde o módulo exporta apenas uma função ou objeto, e é importado sem chaves
// exportação nomeada, onde o módulo exporta várias funções ou objetos, e é importado com chaves

// quando quer utilizar um padrao default export, onde o módulo exporta apenas uma função ou objeto, e é importado sem chaves, a importação deve ser feita sem chaves, caso contrário, a importação deve ser feita com chaves.

// usando as duas juntas
// import sum from, {mutiply} './calc.js';

