// consumindo api fetch com o .then

const responde = fetch('http://localhost:4444/users')

console.log(responde)
  
fetch('http://localhost:4444/users')
.then((response) => {
    console.log(response)
})

// vai converter a resposta para json
fetch('http://localhost:4444/users')
.then(response => response.json())
.then(data => console.log(data))



//   .then(response => response.json())
//   .then(data => console.log(data))

console.log('depois do fetch')


// usando fetch com Assync awayt

async function getUsers() {
    const response = await fetch('http://localhost:4444/users')
    const data = await response.json()
    console.log(data)
}

getUsers()


// Uttilizando parametro de requisição

async function Products(id) {
    const response = await fetch(`http://localhost:4444/products/${id}`)
    const data = await response.json()
    console.log(data)
    console.log(`Produto ${id} carregado`)
}

// Products("1")
// Products("2")
// Products("3")