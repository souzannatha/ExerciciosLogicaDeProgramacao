/* Crie um programa que armazena 3 dados: nome,idade e cidade
Crie uma mensagem que combine todos estes dados.*/

let nome = "Nathã";
let idade = 20;
let cidade = "Cornélio Procópio";

function dados(nome, idade, cidade) {
  return nome + " " + idade + " " + cidade;
}
console.log(dados(nome, idade, cidade));
