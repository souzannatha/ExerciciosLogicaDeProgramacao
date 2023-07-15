/*Escreva uma função que receba a idade de uma pessoa como parâmetro e 
retorne uma mensagem informando se ela é maior de idade ou menor de idade*/
let idade = 20;

function maiorDeIdade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}
console.log(maiorDeIdade(idade));
