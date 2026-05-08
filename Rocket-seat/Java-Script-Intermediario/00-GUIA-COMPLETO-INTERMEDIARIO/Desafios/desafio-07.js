// ==========================================
// 🌟 DESAFIO 7: Classe com Privacidade
// ==========================================

// console.log('\n--- DESAFIO 7: Classe Privada ---\n');
// console.log('Dificuldade: ⭐⭐⭐ Médio\n');

// console.log(`
//   Enunciado:
//   Crie uma classe Conta com:
//   - saldo privado (não pode acessar direto)
//   - método depositar()
//   - método sacar() (com validação)
//   - método consultarSaldo()
// `);

// class Conta {
//   // TODO: Sua solução aqui
// }

// Teste aqui:
// const minhaConta = new Conta(1000);
// console.log(minhaConta.depositar(500));
// console.log(minhaConta.sacar(200));


class Conta  {

  #Saldo
  
  constructor(Saldo) {
  this.#Saldo = Saldo    
  
}

consultarSaldo() {
  return this.#Saldo

}

  depositar(valor_Deposito) {
    if (valor_Deposito <= 0) {
      throw new Error('O valor do depósito deve ser positivo.');
    }

    console.log(`Saldo antes do depósito: ${this.#Saldo}`);
    this.#Saldo += valor_Deposito;

    return 'Saldo após depósito de: ' + valor_Deposito + ' → Saldo novo: ' + this.#Saldo;
  }







  sacar(valor_Saque) {
    if (valor_Saque <= 0) {
      throw new Error('O valor do saque deve ser positivo.');
    }
    if (valor_Saque > this.#Saldo) {
      throw new Error(`❌ Saldo insuficiente. Disponível: R$${this.#Saldo.toFixed(2)}`);
    }

    this.#Saldo -= valor_Saque;

    return 'Saldo após saque de: ' + valor_Saque + ' → Saldo novo: ' + this.#Saldo;
  }

}




const contando = new Conta(1000)
console.log(contando.depositar(500));
// console.log(contando.#Saldo);
console.log(contando.consultarSaldo());
console.log(contando.sacar(200))
console.log(contando.depositar(500));
console.log(contando.sacar(200))

console.log(" ")
console.log(" ")
console.log(" ")

console.log(contando.sacar(2))
console.log(contando.depositar(2));
console.log(contando.sacar(99999))


// Tentativa de acesso direto ao campo privado → TypeError em runtime
// try {
//   console.log(contando.#Saldo);
// } catch (e) {
//   console.log('🔒 Acesso negado ao campo privado:', e.message);
// }
