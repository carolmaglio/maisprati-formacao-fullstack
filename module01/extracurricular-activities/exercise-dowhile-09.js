/*
9 - Imprima um padrão de estrela decrescente

Escreva um programa que use um loop do while para imprimir um padrão de estrelas decrescente.

Dica: Utilize dois loops, um dentro do outro.
*/

// linhas que a estrela vai ter
let lines = 5

do {
    let stars = ''
        for (let i = 0; i < lines; i++) {
            stars += '*'
        }

    console.log(stars)

    lines--
} while (lines > 0)
