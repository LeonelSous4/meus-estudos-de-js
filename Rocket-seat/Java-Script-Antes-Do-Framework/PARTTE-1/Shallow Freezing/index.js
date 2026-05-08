// como congelar um objeto, ou seja, impedir que ele seja modificado

const book = {
    title: 'Clean Code',
    category: 'Programming',
    author: {
        name: 'Robert C. Martin',
        age: 67,
        email: 'robert.martin@example.com',
    },

    pages: 464
}
console.log(book);

//  o java script em si não inpoe restrições a modificação de objetos, mas podemos usar o método Object.freeze() para congelar um objeto e impedir que ele seja modificado.
book.category = 'Software Development';

console.log(book);

console.log('------------- Congelado -----------------');
// como congelar um objeto, ou seja, impedir que ele seja modificado, mas permitir que as propriedades do objeto sejam modificadas
// ele congela na ultima alteração ou seja ele congelou no software development, mas as propriedades do objeto ainda podem ser modificadas, ou seja, o nome do autor ainda pode ser modificado, mas a categoria do livro não pode ser modificada.
Object.freeze(book);

book.category = 'Software Development';

// ele não impede modificação profunda em objwtos aninhados
book.author.name = 'Robert C. Martin';

console.log(book);

// o método Object.freeze() congela o objeto, mas não congela as propriedades do objeto, ou seja, as propriedades do objeto ainda podem ser modificadas, mas o objeto em si não pode ser modificado. pois essa e uma modificação profunda, e ele modifica apenas rasamente
