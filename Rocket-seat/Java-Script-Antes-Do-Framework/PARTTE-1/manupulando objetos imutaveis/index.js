const book = {
    title: 'O Senhor dos Anéis',
    category: 'Fantasia',
    author: {
        name: 'J.R.R. Tolkien',
        birthYear: 1892,
        deathYear: 1973
    },
}

const updateBook = {
    ...book,
    title: 'O Hobbit',
    category: 'Dark Fantasia',
    type: 'Ebook',
}
console.log(book);
console.log(updateBook);


// como remover propriedades de um objeto imutável
// removi a propriedade category do objeto book e criei um novo objeto bookWithoutCategory com as demais propriedades de book
const {category, ...bookWithoutCategory} = book;
console.log(bookWithoutCategory);