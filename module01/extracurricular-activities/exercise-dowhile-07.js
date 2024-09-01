/* 
7 - Conte o número de dígitos de um número

Escreva um programa que use um loop do while para contar o número de dígitos de um número fornecido (por exemplo, 12345 tem 5 dígitos).

Dica: Use operações de divisão para reduzir o número até que ele seja zero.
*/

const prompt = require('prompt-sync')()

// número fornecido
let num = Number(prompt('Informe alguns números: '))
// inicializar contador
let count = 0

do {
    count++ // incrementa o contador a cada iteração
    num = Math.floor(num / 10) // divide o número por 10 e remove o último digito
} while (num > 0)

console.log(`O número tem ${count} digitos`)
