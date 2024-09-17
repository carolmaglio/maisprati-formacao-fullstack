/*
    5. Calculando Valores em Arrays de Objetos
    ○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
    nome, nota1, e nota2. Use for of para calcular a média das notas de cada
    aluno e exibir o nome do aluno junto com sua média.
*/

let alunos = [
    {nome: 'Mayara', nota1: 10, nota2: 6},
    {nome: 'Gabriella', nota1: 5, nota2: 7},
    {nome: 'Isabella', nota1: 8, nota2: 9},
    {nome: 'Vanessa', nota1: 9, nota2: 4}
]

for (let aluno of alunos) {
    let media = (aluno.nota1 + aluno.nota2) / 2
    console.log(`${aluno.nome} tem a média: ${media}`)
}

