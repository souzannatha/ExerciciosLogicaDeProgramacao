/* Crie um programa que calculaa soma de números de 1 a N */
let numero = 44;
function calcularSoma(numero) {
  let soma = 0;
  for (let i = 1; i <= numero; i++) {
    soma += i;
  }
  console.log(soma);
}

console.log(calcularSoma(numero));
