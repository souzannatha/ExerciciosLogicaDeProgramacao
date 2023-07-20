/* Crie uma calculadora básica (+,-,/,*), utillize switch case para realizar
as operações */
let numero1 = 20;
let numero2 = 30;
let operador = "+";
function calculadora(numero1, numero2, operador) {
  let resultado;

  switch (operador) {
    case "+":
      resultado = numero1 + numero2;
      break;
    case "-":
      resultado = numero1 - numero2;
      break;
    case "*":
      resultado = numero1 * numero2;
      break;
    case "/":
      resultado = numero1 / numero2;
      break;
    default:
      return "Operador invalido";
  }
  return `O resultado da conta é: ${resultado}`;
}

console.log(calculadora(numero1, numero2, operador));
