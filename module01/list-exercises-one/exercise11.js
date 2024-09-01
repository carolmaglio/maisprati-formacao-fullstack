/*
Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.
*/

const prompt = require('prompt-sync') ()

let sum = 0
let num


for (let count = 0; count < 5; count++) {
    num = Number(prompt('Digite um número: '))
    sum += num
}

console.log(`A soma dos números é ${sum}`)




