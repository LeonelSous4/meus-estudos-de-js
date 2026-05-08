const book = {
    title: 'O Senhor dos Anéis',
    category: 'Fantasia',
    author: {
        name: 'J.R.R. Tolkien',
        birthYear: 1892,
        deathYear: 1973
    }
}

function deepFreeze(object) {

    // obtem um array com as chaves (propriedades) do objeto
    const props = Reflect.ownKeys(object);


    // itera todas as propriedades do objeto
    for(const prop of props) {
        // obtem o valor associado a cada propriedade
        const value = object[prop];


        // verifica se o valor é um objeto ou função, caso seja, chama a função recursivamente para congelar o valor

        if(value && typeof value === 'object' || typeof value === 'function') {
            deepFreeze(value);
        }
    }
       return Object.freeze(object);
}

deepFreeze(book);