/*
    8. Criando Novos Arrays a Partir de Objetos
    ○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
    diretor, e anoLancamento. Use forEach para criar um novo array
    contendo apenas os títulos dos filmes.
*/

let filmes = [
    {titulo: 'Star Wars - Uma Nova Esperança', diretor: 'George Lucas', anoLancamento: 1977},
    {titulo: 'Twilight', diretor: 'Catherine Hardwicke', anoLancamento: 2008},
    {titulo: 'Scott Pilgrim Contra o Mundo', diretor: 'Edgar Wright', anoLancamento: 2010}
]

let titulosFilmes = []

filmes.forEach(filme => {
    titulosFilmes.push(filme.titulo)
})

console.log(titulosFilmes)

