/*
3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
*/

const prompt = require ('prompt-sync')()

console.log('------- CLASSIFICAÇÃO DE NOTAS -------')
let nota = Number(prompt('Digite sua nota de 0 a 10: '))

if (nota >= 6 && nota <= 10) {
   console.log(`Sua nota é ${nota}`) 
   console.log('Aprovado(a)!')
} else if (nota == 5) {
    console.log(`Sua nota é ${nota}`)
    console.log('Recuperação')
} else if (nota < 5) {
    console.log(`Sua nota é ${nota}`)
    console.log('Reprovado(a)')
} else {
    console.log('Nota inválida, tente novamente')
}

