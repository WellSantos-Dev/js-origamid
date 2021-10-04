function CriaPessoa(nomeAtt, idadeAtt, rua, numero) {
  this.nome = nomeAtt;
  this.idade = idadeAtt;
  this.endereco = {
    rua: rua,
    numero: numero
  }
}


const well = new CriaPessoa('Wellington', 19, 'São Lucas', 777);

let {endereco: rua, numero} = well
console.log(rua, numero)