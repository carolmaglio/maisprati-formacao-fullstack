console.log('Hello World!')
console.log("Hello World!")
console.log("Hello World!")
console.log(`Hello World!`) // template string

// PRIMITIVOS JAVASCRIPT
console.log(1.5) // number float
console.log(10) // number int 
console.log(typeof(10)) // ao invés de mostrar o valor, mostra o tipo (typeof(number))
console.log(typeof('10'), 1000, 'Carol') // (typeof('string'))

// DECLARAÇÃO DE VARIÁVEIS
let name = 'Carol' // declaração padrão de variável (locais) que funcionam dentro de um escopo específico
const city = 'Osasco' // constantes são variáveis que não mudam, deve sempre ser inicializada com um valor

let test
console.log(test) // undefined

let MyNull = null // null
console.log(MyNull) 
// a variável MyNull recebe <=> o valor null

//////

// let myBoolean = true
// console.log(typeof(myBoolean))

// OPERADORES ARITMÉTICOS
let num1 = 10
let num2 = 5

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 / num2)
console.log(num1 * num2)
console.log(num1 ** num2)
console.log(num1 % num2)

// ordem de precedência
// ()
// **
// *, /, %
// +, -
// se tiver duas ordem de precedência ele considera da esquerda para direita


// CONCATENAÇÃO
let numTest = '5'
console.log(numTest + 10)  // concatenando string com number, ou seja, une os valores '5'10 = 510
console.log(parseInt(numTest) + 10)
// console.log(parseInt(numTest) + 10)


// INCREMENTO E DECREMENTO
// let counter = 1
// counter = counter + 1 // vale 2 
// counter = counter - 1 // vale 1
// counter++
// counter--

// console.log(counter) // apresentei
// console.log(counter++) // vale 2
// console.log(counter)
// console.log(++counter) // incrementa primeiro

// let step = 2

// counter = counter + step
// counter += step

// counter = counter - step
// counter -= step

// counter = counter * step
// counter *= step

// counter = counter / step
// counter /= step

// console é um objeto 
// objeto é uma estrutura de dados que contém atributos e métodos
// método log do objeto console que espera algum parâmetro que é algum conteúdo que queremos mostrar no terminal