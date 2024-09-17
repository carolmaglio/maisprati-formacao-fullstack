/*
    2. Verificando Propriedades
    ○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
    anoPublicacao e genero. 
    Verifique se a propriedade editora existe no objeto usando for in. Se não existir, adicione essa propriedade ao objeto.
*/

let livro = {
    titulo: 'Os Sete Maridos de Evelyn Hugo',
    autor: 'Taylor Jenkins Reid',
    anoPublicacao: '2017',
    genero: 'Ficção'
}

let editoraExiste = false
for (let propriedade in livro) {
    if (propriedade === 'editora') {
        editoraExiste = true
        break
    }
}


if (!editoraExiste) {
    livro.editora = 'Editora adiconada'
    console.log('Propriedade editora adicionada!')
}

console.log(livro)

