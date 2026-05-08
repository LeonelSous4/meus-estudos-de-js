console.log('\n--- DESAFIO 4: Validar CPF ---\n');
// console.log('Dificuldade: ⭐⭐⭐ Médio\n');

// console.log(`
//   Enunciado:
//   Crie uma função que valida um CPF brasileiro.
//   CPF válido: 11 dígitos, sem todos iguais.
//   (Simplificado - sem cálculo de dígito verificador)
  
//   Exemplo:
//   validarCPF('12345678901') // true
//   validarCPF('11111111111') // false
//   validarCPF('123') // false
// `);

function validarCPF(cpf) {
    // Verificar se o CPF tem 11 dígitos
    val = cpf.toString()
    if (val.length !== 11) {
        console.log('CPF inválido: deve conter 11 dígitos.');
        return false;
    }
    // Verificar se todos os dígitos são iguais
    if (val === val[1].repeat(11)) {
        console.log('CPF inválido: todos os dígitos são iguais.');
        return false;
    }
    console.log('CPF válido.');
    return true;
}

validarCPF('11111111111')