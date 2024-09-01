/*
8 - Calcule a soma dos dígitos de um número
       
Escreva um programa que use um loop do while para calcular a soma dos dígitos de um número fornecido (por exemplo, a soma dos dígitos de 1234 é 10).

Dica: Use operações de módulo para extrair os dígitos e depois some-os.
*/

// número fornecido
let num = 1234
// inicialização do contador
let soma = 0

do {
    // extrair os digitos um por um
    let ultimoDigito = num % 10
    // adiciono o digito extraído a soma
    soma = soma + ultimoDigito
    // remover o digito já somado
    num = Math.floor(num / 10)

} while (num > 0)

console.log(`A soma dos números é ${soma}`)