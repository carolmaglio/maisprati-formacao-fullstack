/*
3 - Imprima um triângulo de números

Escreva um programa que use um loop for para imprimir um triângulo de números.

Dica: Utilize dois loops for, um dentro do outro.
*/

console.log('----- TRIÂNGULO EM NÚMEROS -----')

// defino quantas linhas o triângulo vai ter
let lines = 5

// loop que vai controlar quantas linhas vão ser impressas
for (let i = 1; i <= lines; i++) {

    let line = '' //  variável line para guardar temporariamente os números que serão impressos em cada linha do triângulo

    // loop que vai controlar quantos números serão impressos em cada linha
    for (let j = 1; j <= i; j++) {
        line += j // aqui line += 1 significa que vou adicionar o valor de j à variável line, sendo uma string de número
    }
    // mostra a linha com os números impressos 
    console.log(line)
}









