/*
    10. Criando Relatórios com Objetos e Arrays
    ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
    quantidade e valor. Use forEach para calcular o valor total de vendas de
    todos os produtos.
*/

let vendas = [
    {produto: 'iPad', qt: 10, valor: 2300},
    {produto: 'Monitor', qt: 5, valor: 800},
    {produto: 'Luz de Led', qt: 15, valor: 185},
    {produto: 'Teclado Gamer ', qt: 25, valor: 300}
]

let valorTotal = 0

vendas.forEach(venda => {
    valorTotal += venda.qt * venda.valor 
})

console.log(`O valor total de vendas é: R$${valorTotal}`)

