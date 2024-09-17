/*
    9. Contabilizando Elementos com uma Condição
    ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
    nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
    de 30 anos.
*/

let clientes = [
    {nome: 'Vitória', idade: 15, cidade: 'São Paulo'},
    {nome: 'Patrícia', idade: 51, cidade: 'São Paulo'},
    {nome: 'Cristhiane', idade: 46, cidade: 'Osasco'},
    {nome: 'Thiago', idade: 30, cidade: 'Rio de Janeiro'},
    {nome: 'William', idade: 25, cidade: 'Porto Alegre'},
]

let count = 0

clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        count++
    }
})

console.log(`O número de clientes com mais de 30 anos: ${count}`)

