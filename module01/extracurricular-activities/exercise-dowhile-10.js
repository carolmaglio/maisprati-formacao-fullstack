/*
10 - Encontre o maior divisor comum (MDC) de dois números
Escreva um programa que use um loop do while para encontrar o maior divisor comum (MDC) de dois números fornecidos (por exemplo, 56 e 98).

Dica: Utilize o algoritmo de Euclides, onde você repete o processo de substituir o maior número pela diferença dos dois números até que ambos sejam iguais.
*/

// número iniciais
let a = 98
let b = 56

do {
    // calcula o resto da divisão de a por b
    let resto = a % b

    // valores de a e b são atualizados 
    a = b
    b = resto

} while (b !== 0) // enquanto b não for zero continua 

// quando B se torna zero, o valor de A será o MDC 
console.log(`O maior divisor comum (MDC) é ${a}`)


