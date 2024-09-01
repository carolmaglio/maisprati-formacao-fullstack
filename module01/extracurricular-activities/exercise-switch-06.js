/*
6 - Verifique o dia da semana
Escreva um programa que leia um número de 1 a 7 e use uma
estrutura switch para imprimir o dia da semana correspondente. (1 =
Domingo, 2 = Segunda-feira, etc.)
*/

const prompt = require('prompt-sync')()

console.log('----- AGENDA SEMANAL -----')
let dayWeek = Number(prompt('Digite um número de 1 a 7 para saber o dia da semana: '))

switch (dayWeek) {
    case 1:
        console.log(`1 - Domingo`)
        break
    case 2:
        console.log(`2 - Segunda`)
        break
    case 3:
        console.log(`3 - Terça`)
        break
    case 4:
        console.log(`4 - Quarta`)
        break
    case 5:
        console.log(`5 - Quinta`)
        break
    case 6:
        console.log(`6 - Sexta`)
        break
    case 7:
        console.log(`7 - Sábado`)
        break
    default:
        console.log('ERRO')
        console.log(`Digite novamente um número válido`)
        break   
}
