/*
2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.
*/

const prompt = require('prompt-sync')()

console.log('------ CLASSIFICAÇÃO DE IDADE ------')
let age = Number(prompt('Digite sua idade: '))

if (age > 0 && age <= 12) {
    console.log(`Você tem ${age} anos!`)
    console.log(`Criança: 0 - 12 anos`)
} else if (age >= 13 && age <= 17) {
    console.log(`Você temm ${age} anos!`)
    console.log(`Adolescente: 13 - 17 anos`)
} else if (age >= 18 && age <= 59) {
    console.log(`Você tem ${age} anos!`)
    console.log(`Adulto: 18 - 59 anos`)
} else {
    console.log(`Você tem ${age} anos!`)
    console.log(`Idoso: 60 anos ou mais`)
}

