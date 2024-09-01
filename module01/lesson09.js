// 1. Soma dos elementos de um Array
// let sum = 0 
// let arr = [10, 20, 30, 40]

// // console.log(`O tamanho do array é ${arr.length}`)

// // for (let i = 0; i < arr.length; i++){
// //     // console.log(arr[i])
// //     sum += arr[i] // acumula a soma dos elementos de um array
// // }

// // console.log(`A soma dos elementos é ${sum}`)

// // 2. Encontre o maior número de um array
// let max = arr[0] // assume que o primeiro elemento é o maior

// for (let j = 0; j < arr.length; j++) {
//     if (arr[j] > max) { // array na posição j é maior que max
//         max += arr[j]
//     }
// }

// console.log(max)

// // 3. Reverter um Array 
// let reversed = []

// // o -1 recupera ou atualiza o valor de um comprimento de um array
// for (let k = arr.length - 1; k >= 0; k--) {
//     reversed.push(arr[k]) // adiciona os elementos na ordem inversa
// }

// console.log(reversed)

// // 4. Criem um novo array contendo apenas os números pares
// let pares = []

// for (let m = 0; m < arr.length; m++) {
//     if (arr[m] % 2 === 0) {
//         pares.push(arr[m])
//     }
// }

// console.log(pares)

// // 5. Contar ocorrências de um valor
// const prompt = require('prompt-sync')()

// let vet = [10, 10, 7, 5, 10]
// let valor = 10
// // let valor = Number(prompt('Insira o valor a ser pesquisado: '))
// let contador = 0

// for (let l = 0; l < vet.length; l++) {
//     if (vet[l] === valor) {
//         contador++ // incrementa o contador se o valor for encontrado
//     } 
// }

// console.log(`O valor ${valor} ocorre ${contador} vezes no vetor`)



// arrays/vetores multidimensionais
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
 
// console.table(matriz) // .table mostra uma tabela com linhas e colunas
// console.log(matriz[1][1]) // para mostrar um elemento específico

// for conta linha 
for (let i = 0; i < matriz.length; i++) {
    // for conta coluna
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(`Elemento na posição [${i}][${j}]: ${matriz[i][j]}`)
    }
}

// Soma de Arrays Multidimensionais