

// ==========================================
// 🌟 DESAFIO 6: Validador de Formulário
// ==========================================

// console.log('\n--- DESAFIO 6: Validador de Form ---\n');
// console.log('Dificuldade: ⭐⭐⭐ Médio-Avançado\n');

// console.log(`
//   Enunciado:
//   Crie um validador de formulário que:
//   - Valida nome (mín 3 caracteres)
//   - Valida email (contém @)
//   - Valida idade (18+)
//   - Retorna objeto com erros
  
//   Exemplo:
//   validar({ nome: 'Jo', email: 'Jo', idade: 15 })
//   // { nome: 'Inválido', email: 'Inválido', idade: 'Inválido' }
// `);







function validar(dados) {
    const erros = {};
    if (!dados.nome || dados.nome.length < 3) {
        erros.nome = 'Inválido';
    }
    else{
        erros.nome = dados.nome;
    }
   
    if (!dados.email || !dados.email.includes('@')) {
        erros.email = 'Inválido';
    }
    else{
        erros.email = dados.email;
    }
    if (!dados.idade || dados.idade < 18) {
        erros.idade = 'Inválido';
    } else{
        erros.idade = dados.idade;
    }
    return erros;
}

// Teste aqui:
//  console.log('Inválido:', validar({ nome: 'Jo', email: 'jo', idade: 15 }));
//  console.log('Válido:', validar({ nome: 'João', email: 'joao@email.com', idade: 25 }));















 function validarProduto(dados) {
    const erros = {}
    if(!dados.nome || dados.nome.length < 5){

        erros.nome = 'invalido'
    }
    else {
        erros.nome = 'valido'
    }

    if(!dados.preco || dados.preco <= 0) {

        erros.preco = 'invalido'
    }
    else {
        erros.preco = 'valido'
    }
    if(!dados.estoque || dados.estoque < 0) {

        erros.estoque = 'invalido'
    }
    else {
        erros.estoque = 'valido'
    }
    if(!dados.categoria || !['eletronico', 'roupa', 'alimento'].includes(dados.categoria)) {
        erros.categoria = 'invalido'
    } 
    else{
        erros.categoria = 'valido'
    }

    return erros
        

  // Valide:
  // - nome (mín 5 caracteres)
  // - preço (maior que 0)
  // - estoque (não pode ser negativo)
  // - categoria (deve ser: 'eletronico', 'roupa' ou 'alimento')
}

// Teste aqui:
console.log(validarProduto({ 
  nome: 'TV', 
  preco: -50, 
  estoque: -1, 
  categoria: 'outro' 
}));
// { nome: 'Inválido', preco: 'Inválido', estoque: 'Inválido', categoria: 'Inválido' }

console.log(validarProduto({ 
  nome: 'Televisão', 
  preco: 1500, 
  estoque: 10, 
  categoria: 'eletronico' 
}));
// { nome: 'Válido', preco: 'Válido', estoque: 'Válido', categoria: 'Válido' }