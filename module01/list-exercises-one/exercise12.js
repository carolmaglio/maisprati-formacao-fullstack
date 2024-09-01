/*
12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.
*/

const prompt = require('prompt-sync')()

console.log('----- TABUADA -----')

let num = Number(prompt('Digite um número para realizar a tabuada: '))

for (let c = 1; c <= 10; c++) {
    console.log(`${num} x ${c} = ${num * c}`)
}



