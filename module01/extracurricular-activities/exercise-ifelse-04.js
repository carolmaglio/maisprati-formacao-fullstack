/*
4 - Verifique se um número é par ou ímpar
Escreva um programa que leia um número e use uma estrutura
if/else para verificar se o número é par ou ímpar. Imprima uma mensagem
apropriada.
*/

const prompt = require('prompt-sync')()

console.log('----- PAR OU ÍMPAR -----')
let num = Number(prompt('Digite um número para descobrir se ele é par ou ímpar: '))

if (num % 2 == 0) {
    console.log(`O número ${num} é PAR!`)
} else {
    console.log(`O número ${num} é ÍMPAR!`)
}


