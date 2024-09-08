
// Objeto 'serie' com propriedades e um método
// let serie = {
//     nome: "The Boys", // nome -> chave   "The Boys" -> valor
//     genero: ["Ação, Paródia, Heróis"],
//     nrTemporadas: 4,
//     status: "Em andamento",
//     classificacao: 18,
//     nrEpsodios: {
//         temp1: 10,
//         temp2: 10,
//         tempo3: 50
//     },

//     mostrarCaracteristicas: function()  {
//         return `O nome da série é: ${this.nome} e sua classificação é +${this.classificacao}`
//     }
// }

// console.log(serie.mostrarCaracteristicas())


// Objeto 'livro' com propriedades e um método
// let livro = {
//     titulo: 'Harry Potter',
//     autor: 'JK Rowling',
//     year: 1997,
//     mostrarCaracteristicas: function() {
//         return `O nome do livro é ${this.titulo} e foi escrito pela ${this.autor}`; 
//     }
// };

// console.log(livro.mostrarCaracteristicas())


// Objeto 'carro' com propriedades e um método
// let carro = {
//     nome: 'Opala',
//     modelo: 'Commodore', 
//     ano: 1966,
//     velocidadeMax: 197,
//     acelerar: function () {
//         return `Acelerando...`;
//     }
// };

// console.log(carro)
// console.log(carro.acelerar())

// Criação de objeto 'moto' usando variáveis existentes
// let motor = '1000'
// let nome = 'bmw s1000rr'
// let tipo = 'esportiva'

// let moto = {
//     nome: nome,
//     tipo: tipo,
//     motor: motor
// }

// console.log(moto)

// Objeto 'atleta' com propriedades, adicionando novas propriedades e métodos
// let atleta = {
//     nome: 'Rayssa Leal',
//     esporte: 'Skate Street',
//     idade: 16
// }

// atleta.nacionalidade = 'Brasil'
// atleta.medalhas = {
//     ouro: 10,
//     prata: 1,
//     bronze: 1
// };

// atleta.celebrarVitoria = () => { return 'GANHEI!' }

// // console.log(atleta)
// // console.log(atleta.celebrarVitoria())

// let obj1 = {
//     nome: 'Bruce',
//     profissao: ' Batman'
// }

// let obj2 = obj1

// obj2.companheiro = 'Robin'

// console.log(obj1)
// console.log(obj2)


// FUNÇÃO CONSTRUTORA - CONSTRUÍMOS UM OBJETO
// function computador(processador, gpu, ram, armazenamento) {
//     this.processador = processador
//     this.gpu = gpu
//     this.ram = ram
//     this.armazenamento = armazenamento

//     this.ligar = function() {
//         console.log(`O ${this.processador} está funcionando`)
//     }

//     this.mostrarEspecificacoes = function() {
//         return `
//                     processador: ${this.processador}
//                     gpu: ${this.gpu}
//                     ram: ${this.ram}
//                     armazenamento: ${this.armazenamento}
//                 `
//     }
// }

// let pc = new computador('i9', 'RTX4090', '16GB', '500gb SSD')
// console.log(pc.mostrarEspecificacoes())


// function factory
function jogos(titulo, genero, anoLancamento, empresa, jogar){
    return {
        titulo,
        genero,
        anoLancamento,
        empresa,
        jogar
    }
}

let jogo1 = jogos ('Final Fantasy', 'RPG', '1997', 'Square Soft', () => console.log('Jogando'))

// console.log(jogo1.jogar())

///////////////////////////////////////////////////////

// for in, for of, forEach

// for in - iterar sobre propriedades enumeráveis de um objeto, percorre todas as chaves e permite que acessamos todos os valores de cada chava
for (let key in jogo1) {
    // console.log(`${key} : ${jogo1[key]}`)
}


// for of - trabalha com qualquer estrutura de dados que precisa iterar como array, string, objeto 
const jogadores =['Pelé', 'CR7', 'Messi'] 

for (let jogador of jogadores) {
    console.log(jogador)
}



