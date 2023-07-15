/* 2- Escreva uma função que receba como parâmetro e verfique se é par ou ímpar. */
let num = 5;

function parOuImpar(num1){
  if(num % 2 === 0){
    return "O número é par!"
  }else{
    return "O número é ímpar"
  }
}
console.log(parOuImpar())