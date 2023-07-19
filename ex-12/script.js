/* Crie um programa que calcule o IMC
imc = peso / (altura * altura)*/

let peso = 100;
let altura = 1.8;

function calcularImc(peso, altura) {
  return peso / (altura * altura);
}

console.log(calcularImc(peso, altura));
