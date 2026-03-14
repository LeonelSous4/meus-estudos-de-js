
const numerosAleatorios = Array.from({ length: 20 }, () => Math.floor(Math.random() * 1001));

// console.log(numerosAleatorios);

const list = [906, 368, 521, 757,  28, 577,
              708, 360, 869, 123, 275, 265,
              607,  74, 592, 105,  58, 160,
              314, 521,5,6,1,10,20,3,0,30,60,90]

// apenas pares e divisiveis por 5

const Filtro = list.filter((filtrados) => filtrados % 2 === 0  &&  filtrados % 5 === 0);

    

    


// console.log(Filtro)

// DEsafio 2 


const empresas = [
  { name: "Samsung", marketValue: 850, CEO: "Han Jong-hee", foundation: 1938 },
  { name: "Apple", marketValue: 980, CEO: "Tim Cook", foundation: 1976 },
  { name: "Microsoft", marketValue: 950, CEO: "Satya Nadella", foundation: 1975 },
  { name: "Tesla", marketValue: 720, CEO: "Elon Musk", foundation: 2003 },
  { name: "Google", marketValue: 890, CEO: "Sundar Pichai", foundation: 1998 },
  { name: "Nvidia", marketValue: 920, CEO: "Jensen Huang", foundation: 1993 },
  { name: "Amazon", marketValue: 810, CEO: "Andy Jassy", foundation: 1994 },
  { name: "Meta", marketValue: 640, CEO: "Mark Zuckerberg", foundation: 2004 },
  { name: "Sony", marketValue: 120, CEO: "Kenichiro Yoshida", foundation: 1946 },
  { name: "Netflix", marketValue: 250, CEO: "Ted Sarandos", foundation: 1997 },
  { name: "Intel", marketValue: 150, CEO: "Pat Gelsinger", foundation: 1968 },
  { name: "IBM", marketValue: 130, CEO: "Arvind Krishna", foundation: 1911 },
  { name: "Adobe", marketValue: 220, CEO: "Shantanu Narayen", foundation: 1982 },
  { name: "Disney", marketValue: 180, CEO: "Bob Iger", foundation: 1923 },
  { name: "Uber", marketValue: 115, CEO: "Dara Khosrowshahi", foundation: 2009 },
  { name: "Airbnb", marketValue: 95, CEO: "Brian Chesky", foundation: 2008 },
  { name: "Spotify", marketValue: 60, CEO: "Daniel Ek", foundation: 2006 },
  { name: "Nintendo", marketValue: 55, CEO: "Shuntaro Furukawa", foundation: 1889 },
  { name: "Oracle", marketValue: 310, CEO: "Safra Catz", foundation: 1977 },
  { name: "Toyota", marketValue: 280, CEO: "Koji Sato", foundation: 1937 }
];



const hight = empresas.filter((infos) => infos.marketValue > 200 && infos.foundation > 1975 )

const low = empresas.filter((infos) => infos.marketValue < 200 && infos.foundation <= 1975 )

console.log("🚀 ACIMA DE 200 MILHÕES E MODERNAS:");
console.table(hight);

console.log("🐢 ABAIXO DE 200 MILHÕES E CLÁSSICAS:");
console.table(low);