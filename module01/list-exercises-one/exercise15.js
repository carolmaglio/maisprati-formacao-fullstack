/*
Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.
*/

const prompt = require('prompt-sync')()

let a = 0
let b = 1

console.log(a)
console.log(b)

for (let c = 2; c < 10; c++) {
    let next = a + b
    console.log(next)
    a = b
    b = next 
}
