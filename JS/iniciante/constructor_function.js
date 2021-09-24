function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        falar() {
            return `O ${this.nome} está falando.`
        }
    }
}

const pessoa1 = criaPessoa('Wellington', 'Santos', 19)

console.log(pessoa1.falar())