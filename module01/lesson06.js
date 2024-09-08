// OPERADORES RELACIONAIS
 
// console.log(10 > 5) // true 
// console.log(10 < 5) // false 
// console.log(10 <= 5) // false
// console.log(10 >= 5) // true
// console.log(10 == 5) // false
// console.log(10 == '10') // igual a | true
// console.log(10 === '10') // idêntico a | false
// console.log(10 != '10') // diferente de | false 
// console.log(10 !== '10') // diferente estrito | true 

// OPERADORES LÓGICOS   
// console.log('Operadores Lógicos')
// console.log((10 < 5) && (10 > 2)) // e 
// console.log((10 > 5) || (10 < 2)) // ou
// console.log((10 > 5) || !(10 < 2)) // ou negação
// console.log(!(10 > 5) || (10 < 2))

// EXERCÍCIO
// Criar um user e senha para verificar se estão certos

// let user = 'Carol'
// let password = '123456789'
// console.log((user == 'Carol') && (password == '123456789'))
// let authentication = user === 'Carol' && password === '123456789'
// console.log(authentification)

///////////////////////

// ESTRUTURA CONDICIONAL SIMPLES
//  const grade = 60
// se (grade for maior ou igual a 60) {
//      console.log('Aprovado!')
// }

// if (grade >= 60) {
//     console.log('Aprovado!')
// }

// console.log('Fim do código')

// ESTRUTURA CONDICIONAL COMPOSTA

// if (grade >= 60) {
//     console.log('APROVADO')
// } else {
//     console.log('REPROVADO')
// }

// EXERCÍCIO - estrutura que teste a idade de alguém, se a idade estiver entre 18 e 32, pode realizar o concurso. Senão tiver entre 18 e 32, não está apto para o concurso

// let age = 32

// if ((age >= 18) && (age <= 32)) {
//     console.log('Você está apto para realizar o concurso!')
// } else {
//     console.log('Você não está apto :(')
// }


// EXERCÍCIO 1  - Verificar número Par ou Ímpar
// descrição: escreva um programa que solicite ao user um número e verifique se ele é par ou ímpar
// let number = 2 

// if (number % 2 === 0) {
//     console.log('PAR')
// } else {
//     console.log('ÍMPAR')
// }

// EXERCÍCIO 2  - Comparação de três números
// descrição: escreva um programa que receba três números e determine qual é o maior
// let num1 = 10
// let num2 = 5
// let num3 = 3

// if ((num1 > num2) && (num1 > num3)) {
//     console.log('O primeiro valor é o maior')
// } else if ((num2 > num1) && (num2 > num3)) {
//     console.log('O segundo valor é maior')
// } else if ((num3 > num1) & (num3 > num2)) {
//     console.log('O terceiro valor é maior')
// }

// EXERCÍCIO 3  - Calculadora simples
// descrição: escreva um programa que implemente uma calculadora simples com operações de adição, subtração, multiplicação e divisão

const prompt = require('prompt-sync')()

let num1 = Number(prompt('Insira o primeiro valor: '))
let num2 = Number(prompt('Insira o segundo valor: '))
let operation = prompt('Informe a operação desejada: +, -, /, * :')

if (operation == '+') {
    result = num1 + num2
} else if (operation == '-') {
    console.log(num1 - num2)
} else if (operation == '*') {
    console.log(num1 * num2)
} else if (operation == '/') {
    console.log(num1 / num2)
} 

// let num1 = Number(prompt('Insira o primeiro valor: '))
// let num2 = Number(prompt('Insira o segundo valor: '))
// let operation = prompt('Informe a operação desejada: +, -, /, * :')
// let result = 0

// if (operation === '+') {
//     result = num1 + num2
// } else if (operation === '-') {
//     result = num1 - num2
// } else if (operation === '*') {
//     result = num1 * num2
// } else if (operation === '/') {
//     if (num1 == 0) {
//         result = num1 / num2
//     } else {
//         console.log('Erro divisão por zero!')
//         result = undefined
//     }
// } else {
//     console.log('Operação inválida, tente novamente')
// }

// if (result !== undefined) {
//     console.log('Resultado: ', result)
// }

// OPERADOR TERNÁRIO
// <condicao> ? <verdadeiro> : <false>

let ternaryResult = (10 < 100) ? 'Verdadeira' : 'False'

// SWITCH CASE - ESCOLHA CASO

// let option = 2

// switch (option) {
//     case 1:
//         console.log('Você selecionou a primeira opção')
//         break
//     case 2:
//         console.log('Você selecionou a segunda opção')
//     default:
//         console.log('Você não escolheu nenhuma das opções')
//         break

// }