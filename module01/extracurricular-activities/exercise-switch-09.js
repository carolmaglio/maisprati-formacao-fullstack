/*
Exercícios combinados

9 - Verifique a faixa etária de uma pessoa
Escreva um programa que leia a idade de uma pessoa e use uma estrutura if/else para determinar a faixa etária:
            Criança: 0 - 12 anos
            Adolescente: 13 - 17 anos
            Adulto: 18 - 59 anos
            Idoso: 60 anos ou mais

Dica: Utilize uma estrutura switch dentro do bloco if/else para imprimir uma mensagem específica para cada faixa etária.
*/

const prompt = require('prompt-sync')()

console.log('****** FAIXA ETÁRIA ******')
let age = Number(prompt('Digite sua idade para saber a faixa etária: '))
// a variável ageRange é usada para armazenar a faixa etária correspondente à idade inserida pelo usuário
let ageRange 

if (age >= 0 && age <= 12) {
    ageRange = 'crianca'
} else if (age >= 13 && age <=17){
    ageRange = 'adolescente'
} else if (age >= 18 && age <= 59) {
    ageRange = 'adulto'
} else {
    ageRange = 'idoso'
}

switch (ageRange) {
    case 'crianca':
        console.log('Criança: 0 - 12 anos')
        break
    case 'adolescente':
        console.log('Adolescente: 13 - 17 anos')
        break
    case 'adulto':
        console.log('Adulto: 18 - 59 anos') 
        break
    case 'idoso':
        console.log('Idoso: 60 anos ou mais')
    default:
        console.log('ERRO')
        console.log('IDADE INVÁLIDA')
}

