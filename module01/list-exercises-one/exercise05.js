/*
5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.
*/

const prompt = require('prompt-sync')()

console.log('****** CÁLCULO DE ÍNDICE DE MASSA CORPORAL (IMC) ******')
let peso = parseFloat(prompt('Digite o seu peso: '))
let altura = parseFloat(prompt('Digite sua altura: '))

let imc = peso / (altura ** 2)

if (imc > 18.50 && imc <= 24.99) {
    console.log(`Seu IMC é ${imc.toFixed(2)}`)
    console.log('Peso normal: 18.5 - 24.99')
} else if (imc < 18.50) {
    console.log(`Seu IMC é ${imc.toFixed(2)}`)
    console.log('Baixo peso: menor que 18.50')
} else if (imc >= 25 && imc <= 29.99) {
    console.log(`Seu IMC é ${imc.toFixed(2)}`)
    console.log('Sobrepeso: 25 - 29.99')
} else {
    console.log(`Seu peso é ${imc.toFixed(2)}`)
    console.log('Obesidade: maior que 30')
}

