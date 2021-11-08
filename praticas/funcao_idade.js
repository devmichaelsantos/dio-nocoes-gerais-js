function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá
     ${this.idade + anos} anos de idade.`

}


const pessoal1 = {
    nome: "Maria",
    idade: 30,
}


const pessoa2 = {
    nome: "Carla",
    idade: 27,
}

const animal = {
    nome: "pretinha",
    idade: 5,
    raca: 'vira-lata',
}

console.log(calculaIdade.call(pessoa2, 35));