// this em objetos

const pessoa = {
  nome: "Leonel",
  falar() {
    console.log(this.nome);
  }
};

pessoa.falar();
