/*
2 - Verifique se um número é primo
Escreva um programa que use um loop for para verificar se um número fornecido pelo usuário é primo. Imprima "É primo" ou "Não é primo".
  
Dica: Um número primo só é divisível por 1 e por ele mesmo.
*/

const prompt = require('prompt-sync')()

console.log('----- VERIFICADOR DE NÚMEROS PRIMOS -----')

// solicitar ao user que digite um número
let numUser = Number(prompt("Digite um número para verificar se é primo: "));

// criei uma variável supondo que ela seja um número primo
let ehPrimo = true

// verifico se o numUser é menor ou igual a 1 (esses números não são primos)
if (numUser <= 1) {
  ehPrimo = false // se for menor ou igual a 1, não é um número primo
} else {
  // faço um loop for para testar se o número é divisível por outros números
  for (let i = 2; i < numUser; i++) { 
    // faço um if para ver se o numUser é divisível por algum número entre 2 e ele mesmo
    if (numUser % i === 0) {
      ehPrimo = false // Se for divisível por algum outro número, ele não é primo
      break; // se já descobri que ele não é primo, paro de testar
    }
  }
}

// mostrar resultado ao user 
if (ehPrimo) {
  console.log(numUser + " é primo");
} else {
  console.log(numUser + " não é primo");
}







