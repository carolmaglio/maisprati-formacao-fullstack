/*
4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.
*/

const prompt = require('prompt-sync')()

console.log('----- CALCULADORA SIMPLES -----')
console.log('Escolha uma operação digitando o número: ')
let operacao = prompt(('1 - adição, 2 - Subtração, 3 - Multiplicação, 4 - Divisão' ))

let num1 = parseFloat(prompt('Digite o primeiro número: '))
let num2 = parseFloat(prompt('Digite o segundo número: '))

switch (operacao) {
    case '1':
        resultado = num1 + num2
        console.log(`A soma entre ${num1} + ${num2} é ${resultado}`)
        break
    case '2':
        resultado = num1 - num2
        console.log(`A subtração entre ${num1} - ${num2} é ${resultado}`)
        break
    case '3':
        resultado = num1 * num2
        console.log(`A multiplicação entre ${num1} x ${num2} é ${resultado}`)
        break
    case '4':
        resultado = num1 / num2
        console.log(`A divisão entre ${num1} / ${num2} é ${resultado}`)
        break
    default:
        console.log('OPÇÃO INVÁLIDA!')
        break
}
