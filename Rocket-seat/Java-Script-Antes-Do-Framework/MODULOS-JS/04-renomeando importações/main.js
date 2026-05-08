
// renomeando importações, ou seja, importando um módulo com um nome diferente do nome da função ou objeto exportado, para isso basta usar a palavra reservada as, seguida do nome que queremos dar a importação

import {sum as s, multiply as m} from './calc.js';

console.log(' 2 + 3 =' , s(2, 3)); // 5
console.log(' 2 * 3 =' , m(2, 3)); 


console.log('_______________________________________________')




















// exportação padrão, onde o módulo exporta apenas uma função ou objeto, e é importado sem chaves
// exportação nomeada, onde o módulo exporta várias funções ou objetos, e é importado com chaves

// quando quer utilizar um padrao default export, onde o módulo exporta apenas uma função ou objeto, e é importado sem chaves, a importação deve ser feita sem chaves, caso contrário, a importação deve ser feita com chaves.

// usando as duas juntas
// import sum from, {mutiply} './calc.js';

