const ProductName = document.querySelector('#name');
const ProductPrice = document.querySelector('#price');
const form = document.querySelector('#form');

addEventListener('submit', async (e) => {
    e.preventDefault();

    await fetch('http://localhost:5555/Users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // stringfy passa de objeto para texto e cerealizar o parson faz o inverso
        body: JSON.stringify({
            id:  new Date().getTime().toString(),
            name: ProductName.value,
            price: ProductPrice.value

        })

        
    })
     
  
});

async function fetchUsers() {
    const response = await fetch('http://localhost:5555/Users');
    const data = await response.json();
    console.log(data);
}
