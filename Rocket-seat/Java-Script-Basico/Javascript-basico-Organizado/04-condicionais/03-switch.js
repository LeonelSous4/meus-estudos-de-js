// SWITCH
// Útil quando você compara uma variável com várias opções fixas.

let opcao = 2;

switch (opcao) {
  case 1:
    console.log("Consultar pedido");
    break;
  case 2:
    console.log("Falar com atendente");
    break;
  case 3:
    console.log("Cancelar pedido");
    break;
  default:
    console.log("Opção inválida");
}

// O break é importante para parar no caso correto.
