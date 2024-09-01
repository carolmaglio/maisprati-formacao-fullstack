/*
3 - Calcule a média de três números e determine o conceito
Escreva um programa que leia três notas de um aluno, calcule a
média e use uma estrutura if/else para determinar o conceito (A, B, C,
D, F) baseado na média. Imprima o conceito.

Dica: A média é a soma das notas dividida por três. Defina os intervalos para cada conceito.
*/

const prompt = require('prompt-sync')()

console.log('---------- BOLETIM BIMESTRAL ----------')
console.log('Conceito A - Excelente')
console.log('Conceito B - Muito bom')
console.log('Conceito C - Satisfatório')
console.log('Conceito D - Atingiu parte dos objetivos essenciais')
console.log('Conceito F - Reprovado')
console.log('---------------------------------------')

let num1 = Number.parseFloat(prompt('Digite a primeira nota: '))
let num2 = Number.parseFloat(prompt('Digite a segunda nota: '))
let num3 = Number.parseFloat(prompt('Digite a terceira nota: '))

let result = (num1 + num2 + num3) / 3

if (result == 10) {
    console.log(`A sua nota foi ${result.toFixed(2)}, conceito A!`)
} else if (result >= 8 || result >= 9) {
    console.log(`A sua nota foi ${result.toFixed(2)}, conceito B!`)
} else if(result >= 7 || result >= 6) {
    console.log(`A sua nota foi ${result.toFixed(2)}, conceito C!`)
} else if (result >= 1 || result >= 5) {
    console.log(`A sua nota foi ${result.toFixed(2)}, conceito D!`)
} else {
    console.log(`A sua nota foi ${result.toFixed(2)}, conceito F e está reprovado)`)
}

