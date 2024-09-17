/*
    6. Filtrando Arrays de Objetos
    ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
    contém informações como nome, cargo, e salario. Use for of para filtrar
    e exibir apenas os funcionários cujo salário seja maior que um valor
    específico.
*/

let funcionarios = [
    {nome: 'Juliana', cargo: 'Enfermeira', salario: 5000},
    {nome: 'Edi', cargo: 'Limpeza', salario: 2500},
    {nome: 'Marcia', cargo: 'Médica', salario: 10000},
]

let salarioValorEspecifico = 2500

for (let funcionario of funcionarios) {
    if (funcionario.salario > salarioValorEspecifico) {
        console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: R$ ${funcionario.salario}`)
    }
}