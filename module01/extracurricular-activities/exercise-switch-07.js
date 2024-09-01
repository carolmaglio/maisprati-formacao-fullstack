/*
7 - Calcule o valor de uma expressão matemática simples

Escreva um programa que leia dois números e um operador (+, -, *,
/) e use uma estrutura switch para calcular o resultado da operação.
Imprima o resultado.

Dica: Utilize os operadores aritméticos em cada caso do switch.
*/

const prompt = require('prompt-sync')()

console.log('----- CALCULADORA -----')
let num1 = Number(prompt('Digite o primeiro número: '))
let num2 = Number(prompt('Digite o segundo número: '))
let operator = prompt('Escolha um dos operadores (+, -, *, /, %): ')

switch (operator) {
    case '+':
        resul = num1 + num2 
        console.log(`O resultado entre ${num1} + ${num2} = ${resul} `)
        break 
    case '-':
        resul = num1 - num2 
        console.log(`O resultado entre ${num1} - ${num2} = ${resul} `)
        break
    case '*':
        resul = num1 * num2 
        console.log(`O resultado entre ${num1} x ${num2} = ${resul} `)
        break
    case '/':
        resul = num1 / num2 
        console.log(`O resultado entre ${num1} / ${num2} = ${resul} `)
        break
    case '%':
        resul = num1 % num2 
        console.log(`O resultado entre ${num1} % ${num2} = ${resul} `)
        break
    default:
        console.log('ERRO')
        console.log('OPERADOR INCORRETO, TENTE NOVAMENTE')
}
