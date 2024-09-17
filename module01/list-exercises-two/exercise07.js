/*
    7. Modificando Objetos em um Array
    ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
    preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
    os produtos e exibir o novo preço.
*/

let produtos = [
    {nome: 'Celular', preco: 5000, desconto: 0},
    {nome: 'Notebook', preco: 6000, desconto: 0},
    {nome: 'TV', preco: 1800, desconto: 0}
]

produtos.forEach(produto => {
    produto.desconto = produto.preco * 0.10
    let novoPreco = produto.preco - produto.desconto
    console.log(`Produto: ${produto.nome}, Preço original: R$${produto.preco}, Preço com desconto: R$${novoPreco}`)
})

