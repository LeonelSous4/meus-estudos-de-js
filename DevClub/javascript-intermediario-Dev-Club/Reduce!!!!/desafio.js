

const empresas = [
  { name: "Samsung", marketValue:    850, CEO: "Han Jong-hee", foundation: 1938 },
  { name: "Apple", marketValue:      980, CEO: "Tim Cook", foundation: 1976 },
  { name: "Microsoft", marketValue:  950, CEO: "Satya Nadella", foundation: 1975 },
  { name: "Tesla", marketValue:      720, CEO: "Elon Musk", foundation: 2003 },
  { name: "Google", marketValue: 890, CEO: "Sundar Pichai", foundation: 1998 },
  { name: "Nvidia", marketValue: 920, CEO: "Jensen Huang", foundation: 1993 },
  { name: "Amazon", marketValue: 810, CEO: "Andy Jassy", foundation: 1994 },
  { name: "Meta", marketValue: 640, CEO: "Mark Zuckerberg", foundation: 2004 },
  { name: "Sony", marketValue: 120, CEO: "Kenichiro Yoshida", foundation: 1946 },
  { name: "Netflix", marketValue: 250, CEO: "Ted Sarandos", foundation: 1997 }, 
];


// Usamos 'empresas' em vez de 'list'
const sum = empresas.reduce((acc, current) => {
    // acc = o que já somamos (número)
    // current = o objeto da empresa atual { name: "...", marketValue: ... }
    
    return acc + current.marketValue; // Somamos o valor acumulado com o valor da empresa atual
}, 0); // Começamos com 0 para garantir que a conta seja numérica

console.log(`O valor total de mercado é: ${sum}`);






const cart = [
  { name: "The Witcher 3", price: 150, genre: "RPG", sale: true },
  { name: "FIFA 24", price: 350, genre: "Esporte", sale: false },
  { name: "Elden Ring", price: 250, genre: "RPG", sale: false },
  { name: "Minecraft", price: 100, genre: "Sandbox", sale: true },
  { name: "Spider-Man 2", price: 300, genre: "Ação", sale: false },
  { name: "God of War", price: 200, genre: "Ação", sale: true },
  { name: "Stardew Valley", price: 50, genre: "RPG", sale: true },
  { name: "Resident Evil 4", price: 280, genre: "Terror", sale: false },
];


const valTotal = cart.reduce((acc, current) => {
        return acc + current.price
},0)


console.log(`O valor total de todos os jogos é: ${valTotal}`)





const onSale = cart.filter((filtrados) => filtrados.sale === true)

console.table(onSale)



const discountedPrices = cart.map((desconto) => {

    let descontado;

    if(desconto.sale === true) {
        descontado = desconto.price * 0.8
    }else {
        descontado = desconto.price
    }

    return {
        name: desconto.name,
        price: descontado,
        genre: desconto.genre,
        sale: desconto.sale
    }
})

console.table(discountedPrices)