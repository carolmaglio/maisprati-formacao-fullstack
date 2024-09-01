/*
1 - Verifique se um número é positivo, negativo ou zero

Escreva um programa que leia um número e use uma estrutura if
para verificar se o número é positivo, negativo ou zero. Imprima uma
mensagem apropriada para cada caso.
*/

const prompt = require('prompt-sync')()

console.log('----- VERIFICADOR DE NÚMEROS -----')
let num = Number(prompt('Digite um número: '))

if (num > 0) {
    console.log(`O número ${num} é POSITIVO`)
}

if (num < 0) {
    console.log(`O número ${num} é NEGATIVO`)
}

if (num == 0) {
    console.log(`O número ${num} é igual a ZERO`)
}

