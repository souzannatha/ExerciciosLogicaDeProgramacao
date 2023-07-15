/*Escreva uma função que receba dois números como parâmetros e retorne o maior entre eles. */
let a = 20;
let b = 21;
function maiorOuMenor(a, b) {
  if (a > b) {
    return "o número A é maior.";
  } else {
    return "o número B é maior.";
  }
}

console.log(maiorOuMenor(a, b));
