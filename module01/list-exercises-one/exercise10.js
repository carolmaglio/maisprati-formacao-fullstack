/*
10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/

const prompt = require('prompt-sync')()

let num = parseInt(prompt('Digite um número: '))

for (c = 0; c <= 10; c++) {
    console.log(num)
}
