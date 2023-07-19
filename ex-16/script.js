/*Crie um programa que classifique o usuário de acordo com a idade passada:
criança: 0 - 12 anos
adolescente: 13 - 17
adulto: 18 - 59
idoso 60 ou mais
*/

let idade = 59;

function classificarIdade(idade) {
  if (idade >= 0 && idade <= 12) {
    return "você é uma criança";
  } else if (idade >= 13 && idade <= 17) {
    return "você é um adoslecente";
  } else if (idade >= 18 && idade <= 59) {
    return "você é um adulto";
  } else {
    return "você é um idoso";
  }
}

console.log(classificarIdade(idade));
