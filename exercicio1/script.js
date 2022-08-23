// # Exercício 1

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// b) Declare uma função que imprima a tabuada do 6. Chame esta função.

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
/* function imprimirNome (nome) {

    console.log(`Ola,${nome}`)
}

imprimirNome('Guilherme') */

// b) Declare uma função que imprima a tabuada do 6. Chame esta função.
/* function tabuadaseis (){
let array = [1,2,3,4,5,6,7,8,9,10]
for (i of array){
console.log(`tabuada do 6 = 6 x ${i} = ${6*i}`)
}
}

tabuadaseis() */

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

let imprimirNome = (nome) => {
    console.log(`Ola,${nome}`)
}

imprimirNome('Guilherme')

let tabuadaseis = () =>{
    let array = [1,2,3,4,5,6,7,8,9,10]
    for (i of array){
    console.log(`tabuada do 6 = 6 x ${i} = ${6*i}`)
    }
    }
    
    tabuadaseis()