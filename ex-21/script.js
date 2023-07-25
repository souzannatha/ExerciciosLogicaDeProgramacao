/*Crie um programa que exibe a tabuada de um número */
let numero = 5;
function tabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(numero, "x", i, "=", numero * i);
  }
}
console.log(tabuada(numero));
