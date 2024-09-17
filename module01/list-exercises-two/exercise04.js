/*
    4. Iterando Sobre Arrays de Objetos
    ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
    uma pessoa com nome, idade, e cidade. Use for of para exibir as
    informações de cada pessoa no console.
*/

let pessoas = [
    {nome: 'Caroline', idade: 24, cidade: 'Osasco'},
    {nome: 'Nina Kiara', idade: 7, cidade: 'São Paulo'},
    {nome: 'Jake', idade: 8, cidade: 'Rio de Janeiro'},
    {nome: 'Melissa', idade: 17, cidade: 'Osasco'}
]

for (let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`)
}

