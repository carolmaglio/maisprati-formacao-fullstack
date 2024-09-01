/*
6 - Verifique se um número é palíndromo

Escreva um programa que use um loop while para verificar se um número fornecido (por exemplo, 121) é um palíndromo. Um número é palíndromo se ele é igual ao seu reverso.
*/

// variável que verifica um número fornecido
let num = 123

// variável que reverte o número
let numOriginal = num
let reverso = 0

while (num > 0) {
    let ultimoDigito = num % 10 // extrai o último número

    reverso = reverso * 10 + ultimoDigito

    num = Math.floor(num / 10)
}

if (numOriginal === reverso) {
    console.log(`O número ${numOriginal} é palíndromo!`)
} else {
    console.log(`O número ${numOriginal} não é palíndromo`)
}