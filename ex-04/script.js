/*Escreva uma função que receba três números como parâmetros e retorne o maior entre eles.*/
let num1 = 10;
let num2 = 50;
let num3 = 12;

function retornaMaior(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return "O número maior é: " + num1;
  } else if (num2 > num1 && num2 > num3) {
    return "O número maior é: " + num2;
  } else {
    return "o número maior é: " + num3;
  }
}
console.log(retornaMaior(num1,num2,num3))