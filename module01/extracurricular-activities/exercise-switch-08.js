/*
8 - Verifique a estação do ano

Escreva um programa que leia um número de 1 a 4 e use uma
estrutura switch para imprimir a estação do ano correspondente. (1 =
Primavera, 2 = Verão, 3 = Outono, 4 = Inverno)
*/

const prompt = require('prompt-sync')()

console.log('****** ESTAÇÕES DO ANO ******')
let seasonYear = Number(prompt('Digite um número de 1 a 4 para descobrir a estação do ano: '))

switch (seasonYear) {
    case 1:
        console.log(`A estação do ano digitada foi 1 - Primavera`)
    break
    case 2:
        console.log(`A estação do ano digitada foi 2 - Verão`)
    break
    case 3:
        console.log(`A estação do ano digitada foi 3 - Outono`)
    break
    case 4:
        console.log(`A estação do ano digitada foi 4 - Inverno`)
    break
    default:
        console.log('ERRO')
        console.log('OPÇÃO INVÁLIDA')
}

