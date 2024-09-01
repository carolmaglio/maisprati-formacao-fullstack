/*
1 - Imprima a sequência de Fibonacci até o 10º termo

Escreva um programa que use um loop for para imprimir os primeiros 10 termos da sequência de Fibonacci. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)

Dica: A sequência de Fibonacci é calculada somando os dois termos anteriores para obter o próximo termo.
*/

console.log('Sequência de Fibonacci até o 10º termo')

// Inicializa os primeiros dois termos da sequência
let a = 0;
let b = 1;

console.log(a); // Imprime o primeiro termo
console.log(b); // Imprime o segundo termo

// Usa um loop for para calcular e imprimir os próximos 8 termos
for (let i = 2; i < 10; i++) {
    let next = a + b; // Calcula o próximo termo da sequência
    console.log(next); // Imprime o próximo termo
    a = b; // Atualiza o valor de a
    b = next; // Atualiza o valor de b
}
