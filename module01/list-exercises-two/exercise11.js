/*
    11. Agrupando Elementos com forEach
    ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
    cliente, produto, e quantidade. Use forEach para criar um objeto que
    agrupa a quantidade total de produtos por cliente.
*/

let pedidos = [
    {cliente: 'Ana', produto: 'Tablet', quantidade: 2},
    {cliente: 'Felipe', produto: 'Celular', quantidade: 1},
    {cliente: 'Susana', produto: 'Computador', quantidade: 5},
    {cliente: 'Francine', produto: 'Protetor Labial', quantidade: 3}
]

let totalPorCliente = {}

pedidos.forEach(pedido => {
    if (totalPorCliente[pedido.cliente]) {
        totalPorCliente[pedido.cliente] += pedido.cliente 
    } else {
        totalPorCliente[pedido.cleinte] = pedido.cliente
    }
})

console.log(totalPorCliente)



