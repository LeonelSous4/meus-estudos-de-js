
// aplicando o conceito de imutabilidade


const adress = {
    city: 'São Paulo',
    state: 'SP',
    country: 'Brasil',
    Number: 123
}


// isso e uma referencia na memoria ao objeto adress 1, não uum novo objeto

const adress2 = adress

// se mudar no adress2, o adress tambem muda, pois ambos apontam para o mesmo local na memoria
adress2.Number = 456

console.log(adress)
console.log(adress2)

console.log("################### Resolvendo #######################")
console.log("################### Resolvendo #######################")
console.log("################### Resolvendo #######################")
console.log("################### Resolvendo #######################")

// Opção 1
const endereco = {
    city: 'São Paulo',
    state: 'SP',
    country: 'Brasil',
    Number: 123
}


// criando um novo objeto a partir do endereco, usando o operador spread, que copia as propriedades do endereco para o novo objeto, sem referencia a ele
const endereco2 = {...endereco}

// agora apenas o endereco2 é modificado, pois ele é um novo objeto na memoria, criado a partir do endereco, mas sem referencia a ele

endereco2.Number = 777

console.log(endereco)
console.log(endereco2)


console.log("################### Resolvendo #######################")
console.log("################### Resolvendo #######################")
console.log("################### Resolvendo #######################")
console.log("################### Resolvendo 2  #######################")

// opção 2


const endereco3 = {...endereco, number: 444}



console.log(endereco)
console.log(endereco3)





console.log("################### Resolvendo #######################")
console.log("################### Resolvendo #######################")
console.log("################### Resolvendo #######################")
console.log("################### Com array  #######################")


// Exemplo de Array 


// list2 é uma referencia na memoria ao list1, não um novo array
const list1 = ['apple', 'banana', 'orange']


const list2 = list1

console.log(list1, list2)

// se mudar no list2, o list1 tambem muda, pois ambos apontam para o mesmo local na memoria
list2.push('grape')

console.log(list1, list2)

console.log("################### Resolvendo #######################")
console.log("################### Resolvendo #######################")
console.log("################### Resolvendo #######################")
console.log("################### Com array 2  #######################")

// list3 é um novo array criado a partir do list1, usando o operador spread, que copia os elementos do list1 para o novo array, sem referencia a ele
const list3 = [...list1]
// agora apenas o list3 é modificado, pois ele é um novo array na memoria, criado a partir do list1, mas sem referencia a ele
list3.push('Uva')
console.log(list1, list3)