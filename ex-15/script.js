/* Crie um programa que verifica se um número é divisil por outro. */
let numero = 10;

function verificaDivisao(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaDivisao(numero));
