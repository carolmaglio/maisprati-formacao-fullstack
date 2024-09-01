/*
// Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
// Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
*/

// const prompt = require('prompt-sync')()

// let count = 0
// let num = 100

// do {
//     let primo = 0
//     // percorre todos os números
//     for (let i = 1; i <= num; i++) {
//         if (num % i == 0) { 
//             primo++
//         }
//     }

//     if (primo == 2) { 
//         console.log(num)
//         count++ // final do loop
//     }

//     num++ 

// } while (count < 50)


// Array ou Vetores | aula - 30/07
// array é um objeto e possui métodos
// Começa sempre na posição 0 


let carros = Array()
// carros na posição 0 e adiciono o valor em string Civic 
carros[0] = 'Civic'
carros [1] = 10
carros [2] = true
carros['Hyago'] = '10'

// console.log(carros)

// outra forma de criar array
// let motos = Array('CBR', 'Ninka', 10)

// outra forma
let livros = ['Senhor dos Anéis', 'O Hobbit', 'Harry Potter', 'Sherlock Holmes']

// array é um objeto e possui funções

// .push - adiciona um elemento no final do array
// livros.push('Sherlock Holmes') 

// .unshift - adiciona um elemento no início do array
// livros.unshift('1984') 

// apaga um elemento do final do array, neste caso, foi Sherlock Holmes
// livros.pop() 

// apaga um elemento do início do array
// livros.shift()

// O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos. 
// Se a gente usar o 2 e o array fosse maior, ele deletava os elementos a partir de 2 em diante 
livros.splice(2, 0, 'Animais Fantásticos') // estou dizendo que no lugar de Harry Potter eu quero Animais Fantásticos, ou seja, a partir do indice 2 vamos adicionar Animais Fantásticos na frente

console.log(livros)



