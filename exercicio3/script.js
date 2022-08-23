// # Exercício 3

// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).

// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações

function soma (x,y){
    console.log(`${x} + ${y} = ${x + y}`)
}
function sub (x,y){
    console.log(`${x} - ${y} = ${x - y}`)
}
function mult (x,y){
    console.log(`${x} x ${y} = ${x * y}`)
}
function div (x,y){
    console.log(`${x} / ${y} = ${x / y}`)
}

let x = +prompt("Digite um número")
let y = +prompt("Digite outro número")

console.log(`Os números digitados foram: ${x} e ${y}`)
soma(x,y)
sub(x,y)
mult(x,y)
div(x,y)