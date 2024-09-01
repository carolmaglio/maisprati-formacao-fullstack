/*
Escreva um programa que leia a idade de um nadador e use uma estrutura
if/else para determinar a categoria do nadador de acordo com a idade:
            Infantil A: 5 - 7 anos
            Infantil B: 8 - 10 anos
            Juvenil A: 11 - 13 anos
            Juvenil B: 14 - 17 anos
            Adulto: 18 anos ou mais
*/

const prompt = require('prompt-sync')()

console.log('------- CATEGORIA DE NADADORES -------')
let age = Number(prompt('Digite sua idade: '))

if (age >= 5 && age <= 7) {
    console.log(`Você tem ${age} anos, sua categoria é INFANTIL A: 5 - 7 anos`)
} else if (age >= 8 && age <= 10) {
    console.log(`Você tem ${age} anos, sua categoria é INFANTIL B: 8 - 10 anos`)
} else if (age >= 11 && age <= 13) {
    console.log(`Você tem ${age} anos, sua categoria é JUVENIL A: 11 - 13 anos`)
} else if (age >= 14 && age <= 17) {
    console.log(`Você tem ${age} anos, sua categoria é JUVENIL B: 14 - 17 anos`)
} else if (age != 5) {
    console.log('Você não se enquadra em nenhuma categoria')
} 
else {
    console.log(`Você tem ${age} anos, sua categoria é ADULTO: 18 anos ou mais`)
}

