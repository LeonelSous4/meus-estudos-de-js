
// const produtos = [
//     { nome: "Teclado", preco: 150, estoque: 5 },
//     { nome: "Mouse", preco: 80, estoque: 10 },
//     { nome: "Monitor", preco: 900, estoque: 3 },
//     { nome: "Fone de Ouvido", preco: 200, estoque: 0 }
// ];


// const  finalizarCompra = (carrinho) => {

//     try {

//         let precoTotal = 0
        
//         for (const property in produtos) {

//             let valor = (produtos[property].preco)
            
//             precoTotal = precoTotal + valor
//         }

//          console.log(`antes do deconto ${precoTotal}`)

//         if(precoTotal > 500) {
//             precoTotal = precoTotal * 0.9

//             console.log(`descontado ${precoTotal}`)
//         }

       

//         for (const property in produtos) {

//             let estoque = (produtos[property].estoque)

//             if(estoque === 0) {

//                 throw new Error(`o produto está esgotado.`);
                
//             }
            
            
//         }




//     } catch (error) {


                
//         console.error("Capturado no catch:", error.message);




        
//     } finally {
//         console.log("Processamento de compra finalizado")
//     }

    
// }

// finalizarCompra()








const produtos = [
    { nome: "Teclado", preco: 150, estoque: 5 },
    { nome: "Mouse", preco: 150, estoque: 10 },
    { nome: "Monitor", preco: 1000, estoque: 3 },
    { nome: "Fone de Ouvido", preco: 200, estoque: 10 }
];

const finalizarCompra = (carrinho) => {
    try {
        let precoTotal = 0;

        // Fazemos tudo em um único loop para ser mais eficiente
        for (const i in carrinho) {
            const item = carrinho[i];

            // 1. Verificamos o estoque primeiro
            if (item.estoque === 0) {
                throw new Error(`O produto "${item.nome}" está esgotado.`);
            }

            // 2. Se tiver estoque, somamos ao total
            precoTotal += item.preco;
        }

        console.log(`Valor bruto: R$ ${precoTotal.toFixed(2)}`);

        // 3. Aplicamos o desconto de 10%
        if (precoTotal > 500) {
            precoTotal *= 0.9;
            console.log(`Valor com desconto (10%): R$ ${precoTotal.toFixed(2)}`);
        } else {
            console.log(`Total final: R$ ${precoTotal.toFixed(2)}`);
        }

    } catch (error) {
        // O erro do estoque zerado "cai" aqui
        console.error("ERRO NO CARRINHO: " + error.message);
    } finally {
        // Sempre executa, independente de erro ou sucesso
        console.log("Processamento de compra finalizado.");
    }
}

// Testando a função
finalizarCompra(produtos);