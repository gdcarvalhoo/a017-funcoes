// # Exercício 2
// Declare e chame as funções abaixo:

// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.
function somaDois (var1, var2) {
        console.log(`Soma de ambos os números = ${var1+var2}`)
}

somaDois(5,2)

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
function somaDois1 (var1, var2) {
        console.log(var1>=var2)
    }
somaDois1(10,5)

// c) Uma função que receba um número e imprima se ele é par ou não
let par = (var1) => {
if (var1%2 === 0){
console.log(`O número ${var1} é par`)
} else {
    console.log(`O número ${var1} NÃO é par`)
}
}

par (3)


// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.

let string = (var1) => {
       console.log(`O tamanho da palavra ${var1} é ${var1.length} letras e a sua versão maúscula é ${var1.toUpperCase()}`)
}
string (`teste`)