// Seleciona pelo ID
const animais = document.getElementById('animais');
console.log(animais);

let pessoa = {
  estaComendo: false,
  nome: "Wellington",
  falar() {
    if (this.estaComendo === true) {
      console.log(`O ${this.nome} não pode falar pois está comendo.`);
    } else if (this.estaComendo === false) {
      console.log(`O ${this.nome} está falando`);
    }
  }
}

pessoa.falar()