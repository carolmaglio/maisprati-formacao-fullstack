/*
9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
utilizando um loop for.
*/

const prompt = require('prompt-sync')()

console.log('----- CONTAGEM REGRESSIVA -----')
console.log('Vai começar...')

for (count = 10; count >= 1; count--) {
    console.log(count)
}
