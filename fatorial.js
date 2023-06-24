// Faça um script com NodeJS que calcule o fatorial de um número.

// Fatorial: Um número vezes todos os outros números inteiros antes dele.
// Ex: 4 => 4 * 3 * 2 * 1 = 24
//     7 => 7 * 6 * 5 * 4 * 3 * 2 * 1 = 


// Forma que eu fiz
var readLineSync = require('readline-sync')
var numero = readLineSync.question("Qual é o número?")

var numeroUm = 1;
var listaNumeros = [];

for (var i = numeroUm; i <= numero; i++) {
    listaNumeros.push(i)
}

console.log(listaNumeros);

var resultado = 1;

for(var i = 0; i < listaNumeros.length; i++) {
    resultado *= listaNumeros[i];
}

console.log(resultado)



// Outro exercício
var str = "12345678"

var p = /[5-7]/g;

var res = str.match(p)

console.log(res)





// Forma resolvida em aula (BEM MAIS SIMPLES!)
// A função fatorial() chama ela mesma.

// var readLineSync = require('readline-sync')

// function fatorial (n) {
//     if (n == 1) return 1;
//     return N * fatorial(n - 1);
// }

// var numero = readLineSync.question("Qual é o número?")

// console.log(fatorial(numero));
