/*
5 - Inverta os dígitos de um número


Escreva um programa que use um loop while para inverter os dígitos de um número fornecido (por exemplo, 1234 deve ser impresso como 4321).

Dica: Use operações de módulo e divisão para extrair os dígitos.
*/

// variável que vai receber o número que quero converter
let num = 1234
// variável que vai armazenar o número invertido
let numInvertido = 0

// loop while enquanto num for maior que zero:
while (num > 0) {
    let digito = num % 10 // % 10 usamos para extrair o último número de 1234 que no caso é 4
    
    numInvertido = numInvertido * 10 + digito // multiplicamos numInvertido por 10 para deslocar seus digitos para esquerda e adicionamos o digito extraído 

    num = Math.floor(num / 10) // removemos o último digito dividindo ele por 10 com o Math.floor para pegar a parte inteira 
}

// mostramos na tela o número invertido ao user 
console.log(numInvertido) 

