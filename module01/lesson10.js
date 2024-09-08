// array bidimensional com string
// let thingsList = Array()

// thingsList['hardware'] = Array()
// thingsList['fruits'] = Array()
// thingsList['people'] = Array('Aristoteles', 'Tolkien')

// thingsList['hardware'][0] = 'Notebook'
// thingsList['hardware'][1] = 'Mouse'
// thingsList['hardware'][2] = 'Teclado'
// thingsList['fruits'][0] = 'Laranja'
// thingsList['fruits'][1] = 'Maça'

// console.table(thingsList)

// let fruitsList = []

// fruitsList[0] = 'maça'
// fruitsList[1] = 'banana'
// fruitsList[2] = 'melância'
// fruitsList[3] = 'uva'
// fruitsList[4] = 'morango'

// let index = fruitsList.indexOf('morango')

// if (index === -1) {
//     console.log('Elemento não existe')
// } else {
//     console.log(`O elemento existe e está na posição ${index}`)
// }
// console.log(fruitsList.sort()) // colocar o array em ordem alfabética


// let numberList = []

// numberList [0] = 10
// numberList [1] = 12
// numberList [2] = 0
// numberList [3] = 16
// numberList [4] = 7
// numberList [5] = 9

// console.log(numberList.sort((a, b) => a - b)) // function 
 
// Function é um bloco de código que só é executado quando é chamado
// Pequenos blocos que executam tarefas repetitivas e vamos usar várias vezes dentro do código
// O JS possui três escopos: 
// variável global (chamar ela em qualquer lugar do meu script), função (só existe dentro da função), bloco (dentro de estruturas condicionais (switch, if))
// passagem de parâmetro: valor ou referência (endereço da memória que a variável está alocada)

function calculateLandArea(num1, num2) {
    let area = num1 * num2 
    return area
}

let width = 50
let height = 100

let area = calculateLandArea(width, height)
console.log(`A área possui ${area} metros quadrados`)









