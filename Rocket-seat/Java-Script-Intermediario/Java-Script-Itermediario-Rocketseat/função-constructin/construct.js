/**
 * Função Fábrica (Factory Function)
 * Uma função que retorna um novo objeto cada vez que é chamada.
 */
function CreateProduct(name) {
    // 1. Criamos um objeto literal vazio que servirá de 'molde'
    const product = {};

    // 2. Definimos a propriedade 'name' do objeto.
    // O valor vem do parâmetro que passamos na chamada da função.
    product.name = name;

    // 3. Adicionamos um método (uma função dentro do objeto).
    product.details = function() {
        // 'this' refere-se ao objeto que possui o método no momento da execução.
        // Se chamarmos product1.details(), 'this' será o product1.
        console.log(`O nome do produto é ${this.name}`);
    };

    // 4. IMPORTANTE: Retornamos o objeto preenchido.
    // Sem o return, a função retornaria 'undefined' por padrão.
    return product;
}

// --- CRIANDO INSTÂNCIAS (OBJETOS) ---

/**
 * Nota sobre o 'new':
 * Aqui você usou o operador 'new'. Em funções que já retornam um objeto explicitamente
 * (como esta), o 'new' é tecnicamente opcional, mas funciona. 
 * O JavaScript cria um objeto, mas como você retorna o seu próprio 'product', 
 * ele descarta o que o 'new' criou e usa o seu.
 */

// Instância 1: Criando o objeto para o teclado
const product1 = new CreateProduct("teclado");
console.log(product1.name); // Imprime: teclado
product1.details();         // Imprime: O nome do produto é teclado

// Instância 2: Criando o objeto para o mouse
// Note que este é um objeto totalmente novo na memória, independente do primeiro.
const product2 = new CreateProduct("mouse");
console.log(product2.name); // Imprime: mouse
product2.details();         // Imprime: O nome do produto é mouse
