/*
13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/

const prompt = require('prompt-sync')()

let num 
let count = 0
let sum = 0

while (num !== 0) {
    num = parseFloat(prompt('Digite um número: '))
    sum += num
    count++
}

let media = sum / count

console.log(`A média dos números é ${media.toFixed(2)}`)


