/*
4 - Calcule o fatorial de um número

Escreva um programa que use um loop while para calcular o fatorial de um número fornecido (por exemplo, 5). O fatorial de 5 (5!) é 120.

Dica: O fatorial de n (n!) é o produto de todos os números de 1 a n.
*/

// número fornecido pelo user 
let numUser = 5
// criei a variável fatorial começando por 1
let fatorial = 1

// loop while vai testar numUser enquanto ele for menor que 1
while (numUser > 1) {
    fatorial *= numUser // fatorial * numUser
    numUser--
}

console.log(fatorial)




