/* Crie um programa que compare 2 números, informe se o primeiro número
é maior, menor, ou igual ao segundo número. */
let numero1 = 40;
let numero2 = 40;
function comparacao(numero1, numero2) {
  if (numero1 > numero2) {
    return numero1 + " é maior que " + numero2;
  } else if (numero2 > numero1) {
    return numero2 + " é maior que " + numero1;
  } else {
    return "os números são iguais";
  }
}

console.log(comparacao(numero1, numero2));
