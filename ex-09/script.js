/*Escreva uma função que receba um número como parâmetro e 
retorne verdadeiro se o número for um múltiplo de 5 e falso caso contrário.*/
let numero = 15;
function multiploCinco(numero) {
  if (numero % 5 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(multiploCinco(numero))