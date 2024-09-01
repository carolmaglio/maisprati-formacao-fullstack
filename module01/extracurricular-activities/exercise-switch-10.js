/*
Escreva um programa que leia o peso (kg) e a altura (m) de uma
pessoa, calcule o Índice de Massa Corporal (IMC) e use uma estrutura
if/else para determinar a categoria:
            Abaixo do peso: IMC < 18.5
            Peso normal: IMC 18.5 - 24.9
            Sobrepeso: IMC 25 - 29.9
            Obesidade grau I: IMC 30 - 34.9
            Obesidade grau II: IMC 35 - 39.9
            Obesidade grau III: IMC >= 40
Dica: O IMC é calculado como peso dividido pela altura ao quadrado (IMC = peso / altura²).
*/

const prompt = require('prompt-sync')()

console.log('---------- CÁLCULO DE ÍNDICE DE MASSA CORPORAL (IMC) ----------')
let peso = parseFloat(prompt('Digite o seu peso (kg): '))
let altura = parseFloat(prompt('Digite sua altura (m): '))

let imc = peso / (altura ** 2)
let category

if (imc >= 18.5 && imc <= 24.9) {
    category = 'normal'
} else if (imc >= 25 && imc <= 29.9) {
    category = 'sobrepeso'
} else if (imc >= 30 && imc <= 34.9) {
    category = 'grau1'
} else if (imc >= 35 && imc <= 39.9) {
    category = 'grau2'
} else if (imc >= 40) {
    category = 'grau3'
} else {
    category = 'abaixo'
}

switch (category) {
    case 'normal':
        console.log(`Seu IMC é ${imc.toFixed(2)}`)
        console.log('Peso normal: IMC 18.5 - 24.9')
        break
    case 'sobrepeso':
        console.log(`Seu IMC é ${imc.toFixed(2)}`)
        console.log('Sobrepeso: IMC 25 - 29.9')
        break
    case 'grau1':
        console.log(`Seu IMC é ${imc.toFixed(2)}`)
        console.log('Obesidade grau I: IMC 30 - 34.9')
        break
    case 'grau2':
        console.log(`Seu IMC é ${imc.toFixed(2)}`)
        console.log('Obesidade grau II: IMC 35 - 39.9')
        break
    case 'grau3':
        console.log(`Seu IMC é ${imc.toFixed(2)}`)
        console.log('Obesidade grau III: IMC >= 40')
        break
    case 'abaixo':
        console.log(`Seu IMC é ${imc.toFixed(2)}`)
        console.log('Abaixo do peso: IMC < 18.5')
        break
    default:
        console.log('ERRO')
}

